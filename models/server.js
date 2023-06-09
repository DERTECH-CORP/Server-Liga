
const express = require("express");
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

    goServer(){

        this.server.listen( this.port, ()=>{
            console.log(`El server esta corriendo en el port: ${this.port}`)
        })
    }

}