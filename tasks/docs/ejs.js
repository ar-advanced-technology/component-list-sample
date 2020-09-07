import path from 'path';
import ejs from 'ejs';
import through from 'through2';

export default function(layoutPath, config) {
  const fullPath = path.join(__dirname, layoutPath);

  const transform = function(file, encoding, callback) {
    const content = file.contents.toString();
    const data = { ...config, content };

    ejs.renderFile(fullPath, data, null, (err, html) => {
      if (err) {
        console.error(err);
      }
      file.contents = new Buffer(html);
      callback(err, file);
    });
  };

  return through.obj(transform);
}
