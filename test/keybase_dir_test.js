"use strict";

var grunt = require("grunt"),
    KeybaseDir = require("../tasks/keybase_dir"),
    keybase_dir = new KeybaseDir(grunt);

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

var grunt_util_spawn = grunt.util.spawn;

exports.findKeybaseInstall = {
    setUp: function(done) {
        done();
    },

    tearDown: function(done) {
        grunt.util.spawn = grunt_util_spawn;
        done();
    },

    commandError: function(test) {
        grunt.util.spawn = function(command, callback) {
            return callback(new Error("Command Error"));
        };

        keybase_dir.findKeybaseInstall(function(error, output) {
            var err = new Error("Unable to retrieve keybase install details from npm");
                err.severity = "warn";

            test.equal(error.message, err.message, "should provide command error");
            test.equal(error.severity, err.severity, "should have error severity of warning");
            test.equal(output, undefined, "should have undefined output");
            test.done();
        });
    },

    jsonParseError: function(test) {
        grunt.util.spawn = function(command, callback) {
            return callback(null, "foo");
        };

        keybase_dir.findKeybaseInstall(function(error, output) {
            var err = new Error("Unable to read keybase install details from npm");
                err.severity = "warn";

            test.equal(error.message, err.message, "should provide error");
            test.equal(error.severity, err.severity, "should have error severity of warning");
            test.equal(output, undefined, "should have undefined output");
            test.done();
        });
    },

    dataStructureError: function(test) {
        grunt.util.spawn = function(command, callback) {
            return callback(null, "[ \"hello\", \"world\" ]");
        };

        keybase_dir.findKeybaseInstall(function(error, output) {
            var err = new Error("Details from npm in unknown format");
                err.severity = "warn";

            test.equal(error.message, err.message, "should provide error");
            test.equal(error.severity, err.severity, "should have error severity of warning");
            test.equal(output, undefined, "should have undefined output");
            test.done();
        });
    },

    notInstalled: function(test) {
        grunt.util.spawn = function(command, callback) {
            return callback(null, "{}");
        };

        keybase_dir.findKeybaseInstall(function(error, output) {
            var err = new Error("Keybase is not installed");
                err.severity = "warn";

            test.equal(error.message, err.message, "should provide error");
            test.equal(error.severity, err.severity, "should have error severity of warning");
            test.equal(output, undefined, "should have undefined output");
            test.done();
        });
    },

    oldVersion: function(test) {
        grunt.util.spawn = function(command, callback) {
            var output = grunt.file.read("test/fixtures/npm-ls-keybase-old-version.json");
            return callback(null, output);
        };

        keybase_dir.findKeybaseInstall(function(error, output) {
            var err = new Error("The version of keybase installed (0.3.2) is before " +
                                "0.4.0 and does not have code signing functionality");
            // Don't set severity, it's assumed error unless set

            test.equal(error.message, err.message, "should provide error");
            test.equal(error.severity, err.severity, "should have error severity of error");
            test.equal(output, undefined, "should have undefined output");
            test.done();
        });
    },

    success: function(test) {
        grunt.util.spawn = function(command, callback) {
            var output = grunt.file.read("test/fixtures/npm-ls-keybase.json");
            return callback(null, output);
        };

        keybase_dir.findKeybaseInstall(function(error, output) {
            test.equal(error, null, "should not provide a null error object");
            test.equal(output, "0.4.9", "should provide the installed keybase version");
            test.done();
        });
    },
};

exports.runKeybaseDirSign = {
    setUp: function(done) {
        done();
    },

    tearDown: function(done) {
        grunt.util.spawn = grunt_util_spawn;
        done();
    },

    commandError: function(test) {
        var command_error = new Error("Command Error");

        grunt.util.spawn = function(command, callback) {
            return callback(command_error);
        };

        keybase_dir.runKeybaseDirSign(function(error, output) {
            test.equal(error, command_error, "should provide command error");
            test.equal(output, undefined, "should have undefined output");
            test.done();
        });
    },

    success: function(test) {
        grunt.util.spawn = function(command, callback) {
            var output = grunt.file.readJSON("test/fixtures/keybase-dir-sign.json");
            output.toString = function() { return this._toString; };
            return callback(null, output);
        };

        keybase_dir.runKeybaseDirSign(function(error, output) {
            test.equal(error, null, "should not provide a null error object");
            test.equal(output, "foobarbaz", "should provide combined result data");
            test.done();
        });
    },
};

exports.runKeybaseDirVerify = {
    setUp: function(done) {
        done();
    },

    tearDown: function(done) {
        grunt.util.spawn = grunt_util_spawn;
        done();
    },

    commandError: function(test) {
        var command_error = new Error("Command Error");

        grunt.util.spawn = function(command, callback) {
            return callback(command_error);
        };

        keybase_dir.runKeybaseDirVerify(function(error, output) {
            test.equal(error, command_error, "should provide command error");
            test.equal(output, undefined, "should have undefined output");
            test.done();
        });
    },

    success: function(test) {
        grunt.util.spawn = function(command, callback) {
            var output = grunt.file.readJSON("test/fixtures/keybase-dir-verify.json");
            output.toString = function() { return this._toString; };
            return callback(null, output);
        };

        keybase_dir.runKeybaseDirVerify(function(error, output) {
            test.equal(error, null, "should not provide a null error object");
            test.equal(output, "foobarbaz", "should provide combined result data");
            test.done();
        });
    },
};

exports.runTask = {
    setUp: function(done) {
        grunt.util.spawn = function(command, callback) {
            var output;

            if (command.cmd === "npm") {
                output = grunt.file.read("test/fixtures/npm-ls-keybase.json");
                return callback(null, output);
            }

            if (command.cmd === "keybase" && command.args[1] === "sign") {
                output = grunt.file.readJSON("test/fixtures/keybase-dir-sign.json");
                output.toString = function() { return this._toString; };
                return callback(null, output);
            }

            if (command.cmd === "keybase" && command.args[1] === "verify") {
                output = grunt.file.readJSON("test/fixtures/keybase-dir-verify.json");
                output.toString = function() { return this._toString; };
                return callback(null, output);
            }
        };

        done();
    },

    tearDown: function(done) {
        grunt.util.spawn = grunt_util_spawn;
        done();
    },

    keybase_dir_sign: function(test) {
        keybase_dir.runTask("sign", function(error, output) {
            test.equal(error, null, "should not provide a null error object");
            test.equal(output, "foobarbaz", "should provide combined result data");
            test.done();
        });
    },

    keybase_dir_verify: function(test) {
        keybase_dir.runTask("verify", function(error, output) {
            test.equal(error, null, "should not provide a null error object");
            test.equal(output, "foobarbaz", "should provide combined result data");
            test.done();
        });
    },
};