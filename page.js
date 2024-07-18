const http = require('http');

const server= http.createServer((req, res)=>{
if(req.url === "/"){
    res.write("welcome to our home page");
    res.end()
}
if(req.url ==='/about'){
    res.write("welcome to our about page");
    res.end()
}
res.write(`
<h1>Ooops!!</h1>
<p>404 not found</p>
<a href='/'>Back home</a>`
)
res.end()
})

server.listen(3000)