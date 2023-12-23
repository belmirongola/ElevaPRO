const express = require('express')
    , fs = require('fs')
    , path = require('path')
    , __dist = path.resolve(__dirname, '../dist')
    , EJSfile = path.join(__dist, 'app.html')

let routes = (io, compiler) => {
    const router = express.Router();

    router.get('*', (req, res, next) => {
        compiler.outputFileSystem.readFile(
            EJSfile,
            (err, result) => {
               if (err) next(err);

               res.set('content-type', 'text/html');
               res.header('Access-Control-Allow-Origin', '*');
               res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
               res.send(result);
               res.end();
            }
        ) 
    });

    return router;
}

module.exports = routes;