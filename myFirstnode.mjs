import { createServer } from 'http'; 
import { readFile } from 'fs';
import { parse } from 'url';

const adr='http://localhost:8080/default.htm?year=2017&month=february';

createServer(function (req, res){
    let q= parse(req.url, true);
    let file= "."+q.pathname;
    readFile(file, function(data){
        res.writeHead(200, {'content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);