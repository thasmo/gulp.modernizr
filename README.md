# Gulp Modernizr
> [Gulp][gulp] plugin to generate a custom [Modernizr][modernizr] build.

## Usage
```js
var gulp = require('gulp');
var modernizr = require('@thasmo/gulp-modernizr');
var options = {
  'classPrefix': 'has-',
  'options': [
    'setClasses'
  ],
  'feature-detects': []
};

gulp.task('scripts', function() {
  return gulp.src('*.js')
    .pipe(modernizr(options))
    .pipe(gulp.dest('.'))
});
```

### Options
See [Modernizr][modernizr]'s build [options][options].

## License
[MIT License][license]

[gulp]: http://gulpjs.com/
[modernizr]: https://modernizr.com/
[options]: https://github.com/Modernizr/Modernizr/blob/master/lib/config-all.json
[license]: http://thasmo.mit-license.org/
