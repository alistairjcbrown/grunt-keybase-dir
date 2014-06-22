/*
 * grunt-keybase-dir
 * https://github.com/alistairjcbrown/grunt-keybase-dir
 *
 * Copyright (c) 2014 Alistair Brown
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Pull in type  and structure checking lib
    var check = require("check-type").init();
    check.init({
        "isNonEmptyString": function(value) {
            return check(value).is("string") && value.length > 0;
        }
    });

    grunt.registerMultiTask('keybase_dir', 'Grunt task for running keybase code signing', function() {

        var done = this.async(),
            npm_command = {
                cmd: "npm",
                args: [ "-g", "ls", "keybase", "--json" ]
            };

        // Run npm to check for global keybase install
        grunt.util.spawn(npm_command, function(error, result, code) {
            var keybase_details, keybase_version, keybase_command;

            if (error) {
                grunt.log.error("Unable to retrieve keybase install details from npm", error);
                return;
            }

            try {
                keybase_details = JSON.parse(result);
            } catch(e) {
                grunt.log.warn("Unable to read keybase install details from npm", e);
                return;
            }

            if ( ! check(keybase_details).is("object") ||
                 ! check(keybase_details).has("dependencies.keybase.version") ) {
                grunt.log.warn("Details from npm in unknown format", e);
                return;
            }

            keybase_version = keybase_details.dependencies.keybase.version.split(".");

            if (parseInt(keybase_version[0], 10) == 0 &&
                parseInt(keybase_version[1], 10) < 4) {
                    grunt.log.error("The version of keybase installed (" +
                                    keybase_details.dependencies.keybase.version +
                                    ") is before 0.4.0 and does not have code signing functionality");
            }

            keybase_command = {
                cmd: "keybase",
                args: [ "dir", "sign" ]
            };

            // Run keybase to sign code
            grunt.util.spawn(keybase_command, function(error, result, code) {
                var output = "";

                if (error) {
                    grunt.log.error("Unable to sign code using keybase", error);
                    return;
                }

                if (check(result.toString()).is("nonEmptyString")) {
                    output += result.toString();
                }

                if (check(result.stdout).is("nonEmptyString")) {
                    output += result.stdout;
                }

                if (check(result.stderr).is("nonEmptyString")) {
                    output += result.stderr;
                }

                grunt.log.writeln(output);

                done();
            });
        });
    });

};
