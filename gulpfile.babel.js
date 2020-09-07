import { parallel, series } from 'gulp';
import { serve } from './tasks/server';
import { bundle } from './tasks/bundle';
import { stylelint } from './tasks/styles';
import { clear } from './tasks/clear';
import { watchFiles } from './tasks/watch';
import docs, { watchDocs } from './tasks/docs';

export const dev = series(
  clear,
  parallel(stylelint, bundle),
  docs,
  serve,
  watchFiles,
  watchDocs
);

export const build = series(
  clear,
  parallel(stylelint, bundle),
  docs
);
