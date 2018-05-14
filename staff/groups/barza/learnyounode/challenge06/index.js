const filterFiles = require('./function');

const pathDir = process.argv[2];
const filterBy = process.argv[3];

filterFiles(pathDir, filterBy, (err, files) => {
    if (err) throw Error('hay errrrorrrrrrrr!');

    files.forEach(file => console.log(file));
});
