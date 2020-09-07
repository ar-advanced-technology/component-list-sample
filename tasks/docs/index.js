import fs from 'fs';
import gulp, { watch, series } from 'gulp';
import gulpCached from 'gulp-cached';
import gulpIf from 'gulp-if';
import gulpRename from 'gulp-rename';
import gulpTap from 'gulp-tap';
import ejsPlugin from './ejs';
import md from './md';
import { reload } from '../server';
import { bundle } from '../bundle';

const src = 'src/docs/content/*.md';
const layoutPath = '../../src/docs/template/layout.ejs';

function renderMarkdown(file) {
  const content = file.contents.toString();
  const html = md.render(content);
  file.contents = new Buffer(html);
}

function readConfig() {
  if (!fs.existsSync('src/docs/config.json')) {
    return {};
  }

  const jsonStr = fs.readFileSync('src/docs/config.json');

  return JSON.parse(jsonStr);
}

function docs({ useCache }) {
  return function() {
    const config = readConfig();

    return gulp
      .src([src])
      .pipe(gulpIf(useCache, gulpCached('docs')))
      .pipe(gulpTap(renderMarkdown))
      .pipe(ejsPlugin(layoutPath, config))
      .pipe(gulpRename({ extname: '.html' }))
      .pipe(gulp.dest('./docs'));
  }
}

function copySandboxHTML() {
  return gulp
    .src(['src/docs/sandbox.html'])
    .pipe(gulp.dest('./docs'));
}

export default series(
  copySandboxHTML,
  docs({ useCache: false })
);

export function watchDocs() {
  watch(
    ['src/docs/template/**/*.ejs', 'src/docs/config.json'],
    series(docs({ useCache: false }), reload)
  );
  watch(src, series(docs({ useCache: true }), reload));
  watch(['src/docs/js/**/*.*', 'src/docs/sass/**/*.scss'], series(bundle, reload));
}
