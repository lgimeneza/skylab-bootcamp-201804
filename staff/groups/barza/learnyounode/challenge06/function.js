const fs = require('fs');
const path = require('path');

module.exports = function filterFiles(directory, extension, callback) {
    fs.readdir(directory, (err, files) => {
        if (err) return callback(err);

        callback(null  files);
    });
};
