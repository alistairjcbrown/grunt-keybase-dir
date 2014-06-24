# grunt-keybase-dir


[![Build Status](https://travis-ci.org/alistairjcbrown/grunt-keybase-dir.svg?branch=master)](https://travis-ci.org/alistairjcbrown/grunt-keybase-dir)
[![Dependency Status](https://david-dm.org/alistairjcbrown/grunt-keybase-dir/status.svg?theme=shields.io)](https://david-dm.org/alistairjcbrown/grunt-keybase-dir#info=dependencies)
[![devDependency Status](https://david-dm.org/alistairjcbrown/grunt-keybase-dir/dev-status.svg?theme=shields.io)](https://david-dm.org/alistairjcbrown/grunt-keybase-dir#info=devDependencies)


> Grunt task for running keybase code signing

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-keybase-dir --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-keybase-dir');
```

## The `keybase_dir` task

This plugin will allow you to specify to run the verification and signing of code using keybase.

 - The task can be used to sign code by providing the target `sign`, ie: `keybase_dir:sign`
 - The task can be used to verify a signature by providing the target `verify`, ie: `keybase_dir:verify`

 An example of this in use is the [base-js-app repository](https://github.com/alistairjcbrown/base-js-app/blob/master/Gruntfile.js#L136) which
 uses:

  - `keybase_dir:verify` as part of the testing process via `grunt test`
  - `keybase_dir:sign` as part of the build process via `grunt build`

### Overview

In your project's Gruntfile, add a section named `keybase_dir` to the data object passed into `grunt.initConfig()`.

This object should contain properties `verify` and `sign`, which will allow you to use them as targets when using the task.

```js
grunt.initConfig({
  keybase_dir: {
    verify: {},
    sign: {}
  },
});
```

### Options

Currently neither the `verify` nor `sign` targets take any options.

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).


## Release History

v0.1.0 - Initial release, released 2014-06-24


## Contact

Twitter @alistairjcbrown

Code signed using keybase as alistairjcbrown. Verify with `keybase dir verify` or `grunt verify`