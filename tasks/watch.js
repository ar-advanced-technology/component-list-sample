import { watch, series } from 'gulp';
import { reload } from './server';
import { bundle } from './bundle';
import { stylelint } from './styles';

/**
 * ファイルの変更を監視
 */
export function watchFiles(cb) {
  watch(['src/app/sass/**/**.scss'], series(stylelint, bundle, reload));
  watch(['src/app/js/**/**.js'], series(bundle, reload));

  cb();
}
