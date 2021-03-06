// npm init on terminal after navigating through folder
const http=require('http');
const port=8000;//Whenever your system sends a request to a port (80)
const fs=require('fs');// load fs module

function requestHandler(req,res){
    console.log(req.url);
    res.writeHead(200,{'content-type':'text/html'});
    //res.end("<h1>Gotcha!</h1>");
    let filePath;

    switch(req.url){
        case '/':
           filePath='./index.html'
           break;
        case '/profile':
           filePath='./profile.html'
           break;
        
        default:
            filePath='./404.html'

    }

    fs.readFile(filePath,function(err,data){
        if(err){
            console.log('error',err);
            return res.end('<h1>Error! User go Back</h1>');
        }
        return res.end(data);
    })
}
const server=http.createServer(requestHandler);

server.listen(port,function(error){
    if(error){
        console.log(error);
        return;
    }
    console.log("Server is up and running on port ",port);
});