import gulp from 'gulp';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';

const config = require('../node_modules/laravel-mix/setup/webpack.config.js');

export function bundle() {
  return gulp
    .src(['src/app/sass/*.scss', 'src/app/js/**/*.js'])
    .pipe(gulpWebpack(config), webpack)
    .pipe(gulp.dest('./docs'));
}
