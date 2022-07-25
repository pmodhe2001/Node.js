// npm init on terminal after navigating through folder
// Node js has different modules for different functionalities
// first we 'll use http module

const http=require('http'); // to call functionalities of http module  

// 127.0.0/ is equals to local host
const port=8000;//Whenever your system sends a request to a port (80 is default)
// address of our server is localhost:800 or 127.0.0/8000

// fs module is used to read/write in files
const fs=require('fs');// load fs module


//Request handler function by default takes 2 arguments request and response
function requestHandler(req,res){
    console.log(req.url);
    res.writeHead(200,{'content-type':'text/html'});
    //res.end("<h1>Gotcha!</h1>");
    fs.readFile('./index.html',function(err,data){
        if(err){
            console.log('error',err);
            return res.end('<h1>Error</h1>');
        }
        return res.end(data);
        
    });
}

//request handler is called here
const server=http.createServer(requestHandler);
              
server.listen(port,function(error){ // first argument corresponds to error
    if(error){
        console.log(error);
        return;
    }
    console.log("Server is up and running on port ",port);
});