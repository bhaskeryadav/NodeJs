import * as http from 'http';

export class Server{

    server:any;

    constructor(){
        this.server=http.createServer((req,res)=>{
            res.end('hello world');
        }).listen(4500,()=>{
            console.log('listening on 4500 ........');
        });
    }

}

var s=new Server();