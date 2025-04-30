const http = require('http');
const url = require('url');
const browseUrl = 'http://it.maranatha.edu/main?userId=256&lang=en';

let server = http.createServer((req, res) => {
    let browseDetail = url.parse(browseUrl);
    console.log(browseDetail);
    console.log(browseDetail.host);
    console.log(browseDetail.pathname);
    console.log(browseDetail.search);
    res.end();
});
server.listen(8000);