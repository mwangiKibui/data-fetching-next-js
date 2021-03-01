const express = require("express");
const next  = require("next");
const path = require("path");
const dev = process.env.NODE_ENV !== "production";

const app = next({ dir:'.', dev});
const handle = app.getRequestHandler();

app.prepare().then( () => {

    const server = express();

    //serving static files.
    server.use('/images', express.static(path.join(
        __dirname,'src','images'
    ),
    {
        maxAge: dev ? '0' : '365d'
    }
    ));

    server.get('*', (req,res) => {
        return handle(req,res);
    });

    const PORT = process.env.PORT || 3000;

    server.listen(PORT, err => {

        if(err) throw err;

        console.log(`ready on port: ${PORT}`);

    });

});