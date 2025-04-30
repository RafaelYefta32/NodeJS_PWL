var http = require('http');
var fileSys = require('fs');
var url = require('url');

var server = http.createServer((req, res) => {
    let q = url.parse(req.url, true);
    let path  = q.query;
    let fileLocation;
    switch(path.menu){
        case '/':
            fileLocation = 'pages/login.html';
            break;
        case 'login':
            fileLocation = 'pages/login.html';
            break;
        case 'mahasiswa':
            fileLocation = 'pages/mahasiswa/home.html';
            break;
        case 'dosen':
            fileLocation = 'pages/dosen/home.html';
            break;
        case 'admin':
            fileLocation = 'pages/admin/home.html';
            break;
        case 'mhs':
            fileLocation = 'pages/admin/mhsTabel.html';
            break;
        case 'mhsCreate':
            fileLocation = 'pages/admin/mhsCreate.html';
            break;
        case 'mhsEdit':
            fileLocation = 'pages/admin/mhsEdit.html';
            break;
        case 'dosenTabel':
            fileLocation = 'pages/admin/dosenTabel.html';
            break;
        case 'dosenCreate':
            fileLocation = 'pages/admin/dosenCreate.html';
            break;
        case 'dosenEdit':
            fileLocation = 'pages/admin/dosenEdit.html';
            break;
        default:
            fileLocation = 'pages/login.html';
    }
    fileSys.readFile(fileLocation, (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not found');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
});
server.listen(8000);