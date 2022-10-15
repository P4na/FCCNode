const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/'){
    res.write('<h1>Welcome to our home page</h1>')
    res.end()}
    else{
        res.write('What are you looking for?')
        res.end("sooca")
    }
})

server.listen(5000)