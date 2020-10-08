import express from 'express';
import { SERVER_PORT } from '../global/environment';
import socketIO from 'socket.io';

import http from 'http';

import * as socket from '../sockets/socket';
//import { configurarUsuario } from '../sockets/socket';

export default class Server {

    private static _intance: Server;
    public app: express.Application;
    public port: number;  

    public io: socketIO.Server;
    private hhtpServer: http.Server;
    private constructor(){

        this.app= express();
        this.port = SERVER_PORT;
        this.hhtpServer= new http.Server(this.app);
        this.io = socketIO(this.hhtpServer);
        this.escucharSockets();

    }
    public static get instance(){
        return this._intance || (this._intance=new this());
    }
    private escucharSockets(){
        console.log('Escuchando conexiones - sockets');
        this.io.on('connection', cliente =>{
             // Conectar cliente
             socket.conectarCliente( cliente );

             // Configurar usuario
             socket.configurarUsuario( cliente, this.io );
 
             // Mensajes
             socket.mensaje( cliente, this.io );
 
             // Desconectar
             socket.desconectar( cliente );    
            

            
        });
    }
    start( callback: any ) {

        this.hhtpServer.listen( this.port, callback );

    }


}