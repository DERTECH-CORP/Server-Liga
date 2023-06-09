
const express = require("express");
const  path  = require("path");
const cors = require('cors')
const http = require('http');
const  socketio  = require("socket.io");


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT

        //http server
        this.server = http.createServer(this.app)

        //config sockets
        this.io = socketio( this.server, {/* configuraciones */ })

    }

    middelwares(){

        //directorio publico
        this.app(express.static(path.resolve(__dirname,'../public')))

        //init cors
        this.app.use(cors())

        //parseo del body
        this.app.use( express.json() );

    }

    goServer(){

        //deploy server
        this.server.listen( this.port, ()=>{
            console.log(`El server esta corriendo en el port: ${this.port}`)
        })
    }

}

module.exports = Server;