import { Socket } from 'socket.io';
import socketIO from 'socket.io';

export const deconectar = (cliente: Socket) => {


    cliente.on( 'disconect', ()=> {
        console.log('Cliente desconectado')
    });
}

export const mensaje = (cliente : Socket, io : socketIO.Server )=>{

    cliente.on('mensaje',(payload:{de:string, cuerpo: string})=>{
        console.log('Mensaje recibido1', payload);
        io.emit('mensaje-nuevo', payload);
        
    });
}