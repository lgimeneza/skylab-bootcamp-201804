const filterFiles = require('./module-excercise6')

const [_node, _path, _dir, _ext] = process.argv

filterFiles(_dir, _ext, (err, data) => {

    if (err) throw err

    data.forEach(file => {
        console.log(file)
    });

})