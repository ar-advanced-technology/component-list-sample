const mix = require('laravel-mix');

mix
  .setPublicPath('docs/')
  .js('src/app/js/app.js', 'docs/js')
  .sass('src/app/sass/app.scss', 'docs/css')
  .js('src/docs/js/app.js', 'docs/docs.js')
  .sass('src/docs/sass/app.scss', 'docs/docs.css')
  .sass('src/docs/sass/extra.scss', 'docs/extra.css')
;
