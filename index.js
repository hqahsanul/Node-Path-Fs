const path = require('path');

console.log(path.parse('h:/root/a/b/c/d/e/f.g'));

let pathObj = path.parse('h:/root/a/b/c/d/e/f.g');

console.log(path.isAbsolute(path.format(pathObj)));

let pathToDir = path.join('/home', 'js', 'dist', 'app.js');
console.log(pathToDir);

console.log(__dirname, __filename);

const testFolder = __dirname;
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
        if (file === 'index.txt') {
            console.log(file);
            let _path = path.join(__dirname, file);
            console.log(_path);
            var data = fs.readFileSync(_path);
            console.log(data)
            const actual = data.toString('utf8');
            console.log(actual);
            fs.writeFileSync('app.txt', actual, 'utf8');

        }
    });
});