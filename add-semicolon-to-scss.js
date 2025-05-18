const fs = require('fs');
const path = require('path');

// Đệ quy tìm tất cả file .scss trong thư mục src
function getAllScssFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            getAllScssFiles(filePath, fileList);
        } else if (file.endsWith('.scss')) {
            fileList.push(filePath);
        }
    });
    return fileList;
}

// Thêm ; vào cuối dòng khai báo thuộc tính nếu chưa có
function addSemicolonToFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split(/\r?\n/);
    const newLines = lines.map(line => {
        // Bỏ qua dòng rỗng, dòng comment, dòng chứa {, }, @, hoặc đã có ;
        if (
            line.trim() === '' ||
            line.trim().startsWith('//') ||
            line.trim().startsWith('/*') ||
            line.trim().startsWith('*') ||
            line.includes('{') ||
            line.includes('}') ||
            line.trim().startsWith('@') ||
            line.trim().endsWith(';')
        ) {
            return line;
        }
        // Nếu là dòng khai báo thuộc tính (có :) thì thêm ;
        if (line.includes(':')) {
            return line.replace(/\s*$/, '') + ';';
        }
        return line;
    });
    fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
    console.log('Đã xử lý:', filePath);
}

const scssFiles = getAllScssFiles(path.join(__dirname, 'src'));
scssFiles.forEach(addSemicolonToFile);

console.log('Đã thêm ; vào tất cả file .scss trong thư mục src/!'); 