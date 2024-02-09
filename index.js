// require = import other files inside our repositories
//declare var named http
// http = variable  contains all the http module buil-it from nodejs

const http = require("http");
const { json } = require("stream/consumers");

const PORT  = 4000;


//callback function 
const server = http.createServer(
    (request, response) => {
        response.end("Hello World");
    }
)


server.listen(PORT, () => {
    console.info(`
    Port: ${PORT}
    Environment: 
    Server is running on : http://localhost:${PORT}
    `)
});


//es6

// const createUser = () => {

// }
