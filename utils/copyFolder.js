const fs = require("fs");
module.exports = function (src, dest) {
  fs.readdir(src, (err, files) => {
    if (err) {
      throw err;
    }

    files.forEach((file) => {
      fs.stat(`${src}/${file}`, (err, stats) => {
        if (err) {
          throw err;
        }

        if (stats.isDirectory()) {
          fs.mkdir(`${dest}/${file}`, { recursive: true }, (err) => {
            if (err) {
              throw err;
            }
            copyFolder(`${src}/${file}`, `${dest}/${file}`);
          });
        } else {
          fs.copyFile(`${src}/${file}`, `${dest}/${file}`, (err) => {
            if (err) {
              throw err;
            }
          });
        }
      });
    });
  });
};
