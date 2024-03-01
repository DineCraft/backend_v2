import { Server } from "socket.io";

class SocketService {
    private _io: Server;

    constructor(){
        console.log("init socket server")
        this._io = new Server({
            cors:{
                allowedHeaders: ["*"],
                origin: "*",
            }
        });
    }

    public initListeners(){
        const io = this.io;
        io.on('connect', (socket)=>{
            console.log('new socket connected ', socket.id);
            socket.on("event:message", async({message} : {message:string} )=>{
                console.log(`new message recieved ${message}`)
            })
        })
    }

    get io(){
        return this._io;
    }


}

export default SocketService;