/*
 * grunt-keybase-dir
 * https://github.com/alistairjcbrown/grunt-keybase-dir
 *
 * Copyright (c) 2014 Alistair Brown
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    var keybase_dir = this,
        check;


    // Pull in type  and structure checking lib
    check = require("check-type").init();
    check.init({
        "isNonEmptyString": function(value) {
            return check(value).is("string") && value.length > 0;
        },
        "isObjectLiteral": function(value) {
            return check(value).is("object") &&
                 ! check(value).is("function") &&
                 ! check(value).is("array");
        }
    });


    /*
     * runTask
     *
     * The main function which checks for keybase intall and then calls the
     * corresponding function based on the provided target.
     *
     * @param target {string} - Grunt target provied, eg. `grunt keybase_dir:sign`
     * @param callback {function}
     * @param callback_context {this}
     */
    this.runTask = function(target, callback, callback_context) {
        // Have callback be function or boolean false
        callback = check(callback).is("function") ? callback : false;

        // Check for global keybase install
        keybase_dir.findKeybaseInstall(function(error, version) {
            var keybase_command;

            // Bail if we can't use keybase
            if (error) {
                return callback && callback.call(callback_context, error);
            }

            // Default to code verification unless target `sign`
            keybase_command = keybase_dir.runKeybaseDirVerify;
            if (target === "sign") {
                keybase_command = keybase_dir.runKeybaseDirSign;
            }

            keybase_command(function(error, output) {

                // Bail if we can't use keybase
                if (error) {
                    return callback && callback.call(callback_context, error);
                }

                return callback && callback.call(callback_context, null, output);

            }, this);
        }, this);
    };


    /*
     * findKeybaseInstall
     *
     * Uses npm to check for globally installed keybase
     *  - https://www.npmjs.org/package/keybase
     *
     * @param callback {function}
     * @param callback_context {this}
     */
    this.findKeybaseInstall = function(callback, callback_context) {
        var npm_command = {
            cmd: "npm",
            args: [ "-g", "ls", "keybase", "--json" ]
        };

        // Have callback be function or boolean false
        callback = check(callback).is("function") ? callback : false;

        // Run npm to check for global keybase install
        grunt.util.spawn(npm_command, function(error, result, code) {
            var keybase_details, keybase_version, keybase_version_pieces, err;

            // Bail if there was an error
            if (error) {
                err = new Error("Unable to retrieve keybase install details from npm");
                return callback && callback.call(callback_context, err);
            }

            // Try to parse the JSON response, bail if it's invald
            try {
                keybase_details = JSON.parse(result);
            } catch(e) {
                err = new Error("Unable to read keybase install details from npm");
                return callback && callback.call(callback_context, err);
            }

            // Check the JSON data is in an expected format
            if ( ! check(keybase_details).is("objectLiteral")) {
                err = new Error("Details from npm in unknown format");
                return callback && callback.call(callback_context, err);
            }

            // Check the JSON data contains keybase info
            if ( ! check(keybase_details).has("dependencies.keybase.version")) {
                err = new Error("Keybase is not installed");
                return callback && callback.call(callback_context, err);
            }

            // Pull out the keybase version
            keybase_version = keybase_details.dependencies.keybase.version;
            keybase_version_pieces = keybase_details.dependencies.keybase.version.split(".");

            // Check the keybase install is greater then 0.4.0
            //  - https://github.com/keybase/node-client/blob/master/CHANGELOG.md#040-2014-05-21
            if (parseInt(keybase_version_pieces[0], 10) === 0 &&
                parseInt(keybase_version_pieces[1], 10) < 4) {
                err = new Error("The version of keybase installed (" + keybase_version +
                                ") is before 0.4.0 and does not have code signing functionality");
                return callback && callback.call(callback_context, err);
            }

            return callback && callback.call(callback_context, null, keybase_version);
        });
    };


    /*
     * runKeybaseDirSign
     *
     * Uses keybase command to call code signing using `keybase dir sign`
     *
     * @param callback {function}
     * @param callback_context {this}
     */
    this.runKeybaseDirSign = function(callback, callback_context) {
        var keybase_command = {
            cmd: "keybase",
            args: [ "dir", "sign" ]
        };

        // Have callback be function or boolean false
        callback = check(callback).is("function") ? callback : false;

        // Run keybase to sign code
        grunt.util.spawn(keybase_command, function(error, result, code) {
            var output = "", err;

            // Bail if there was an error
            if (error) {
                return callback && callback.call(callback_context, error);
            }

            // Otherwise create output
            if (check(result.toString()).is("nonEmptyString")) {
                output += result.toString();
            }
            if (check(result.stdout).is("nonEmptyString")) {
                output += result.stdout;
            }
            if (check(result.stderr).is("nonEmptyString")) {
                output += result.stderr;
            }

            return callback && callback.call(callback_context, null, output);
        });
    };


    /*
     * runKeybaseDirVerify
     *
     * Uses keybase command to call code verification using `keybase dir verify`
     *
     * @param callback {function}
     * @param callback_context {this}
     */
    this.runKeybaseDirVerify = function(callback, callback_context) {
        var keybase_command = {
            cmd: "keybase",
            args: [ "dir", "verify" ]
        };

        // Have callback be function or boolean false
        callback = check(callback).is("function") ? callback : false;

        // Run keybase to sign code
        grunt.util.spawn(keybase_command, function(error, result, code) {
            var output = "", err;

            // Bail if there was an error
            if (error) {
                return callback && callback.call(callback_context, error);
            }

            // Otherwise create output
            if (check(result.toString()).is("nonEmptyString")) {
                output += result.toString();
            }
            if (check(result.stdout).is("nonEmptyString")) {
                output += result.stdout;
            }
            if (check(result.stderr).is("nonEmptyString")) {
                output += result.stderr;
            }

            return callback && callback.call(callback_context, null, output);
        });
    };


    // ----

    /*
     * Task declaration for keybase_dir
     *
     * Use:
     *   keybase_dir:verify  -- Code verifiation
     *   keybase_dir:sign    -- Code signing
     */
    grunt.registerMultiTask('keybase_dir', 'Grunt task for running keybase code signing', function() {
        // Async task
        var done = this.async();

        // Run the task
        keybase_dir.runTask(this.target, function(error, output) {

            // Bail if we can't use keybase
            if (error) {
                grunt.log.error(error.message);
                done();
                return false;
            }

            grunt.log.writeln(output);

            done();
            return true;

        }, this);


    });

};
