const fs =  require('fs'); // declaring the module variables
const http = require('http');
const hostname ='localhost'; // creating the port and host location
const port = 3000;


   const main = fs.readFileSync('index.html'); //reading the html files for routing
   const abot = fs.readFileSync('about.html');
   const men = fs.readFileSync('menu.html');
   const cont = fs.readFileSync('contact.html');
    console.log('read files')

const server = http.createServer((req,res)=>{ // creating the server
   if( req.url === "/"){ //routing the server to the pages upon user request
    res.statusCode = 200;
    res.setHeader('Context-Type', 'text/html')
    res.write(main)
   }
   else if(req.url ==='/about.html'){
    res.statusCode = 200;
    res.setHeader('Context-Type', 'text/html')
    res.write(abot)
   }
   else if (req.url === '/menu.html'){
    res.statusCode = 200;
    res.setHeader('Context-Type', 'text/html')
    res.write(men)
   }
   else if( req.url === '/contact.html'){
    res.statusCode = 200;
    res.setHeader('Context-Type', 'text/html')
    res.write(cont)
   }
   else if (req.url.match("\.jpg$")) {
    try { // loading the images for the webpages
    res.statusCode = 200;
    res.setHeader("Content-Type", "image/jpg");
    imgLoc = req.url.replace("/", "./");
    console.log(imgLoc);

    image = fs.readFileSync(imgLoc);
    res.end(image);
    } 
    catch {
    res.statusCode = 404;
    res.write("404");
    console.log(req.url);
    }

    } else {
    res.statusCode = 404;
    res.write("404");
    console.log(req.url);
    }

    res.end(); // the response from the server ends
    });

   server.listen(port, hostname,()=>{
    console.log('server is up') //begins running the server and watching the port
});


