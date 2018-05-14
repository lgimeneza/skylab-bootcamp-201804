const fs = require('fs');
const path = require('path');

const pathDir = process.argv[2];
const filterBy = process.argv[3];

fs.readdir(pathDir, (err, files) => {
    // console.log(files);

    files.forEach(file => {
        // const ext = file.split('.').pop();
        const ext = path.extname(file); //extname te proporciona la extensión con el punto '.txt'

        if (ext === '.' + filterBy) {
            console.log(file);
        }
    });
});
