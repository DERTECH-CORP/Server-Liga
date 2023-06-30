
 class Sockets {

    constructor(io){
        this.io = io;

        this.socketsEvents()
    }

    socketsEvents(){

        this.io.on( "connection", (sockets)=>{

            console.log("connection");

            sockets.on("disconnect", console.log("disconnect") );

        });


    }

 }

 module.exports = Sockets ;