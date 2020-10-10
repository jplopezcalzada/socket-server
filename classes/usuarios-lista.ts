import { Usuario } from './usuario';



export class UsuarioLista {

    private lista:Usuario[]=[];

    constructor() {
        
    }
    //Agregar Usuario
    public agregar (usuario:Usuario){

        this.lista.push(usuario);
        console.log(this.lista);
        return usuario;
    }

    public actualizarNombre (id: string, nombre: string){
        for( let usuario of this.lista){

            if (usuario.id === id){
                usuario.nombre=nombre;
                break;
            }
        }
        console.log('====Actualizando nombre====');
        console.log(this.lista);
        
    }
    //Obtener lista de uuarios
    public getLista(){
        return this.lista.filter(usuario => usuario.nombre !== 'sin-nombre');
    }

    public getUsuario(id:string){
        return this.lista.find(usuario => usuario.id===id);
    }

    //Obtener usuario de una sala en particular

    public getUsuariosEnSala( sala: string){
        return this.lista.filter(usuario => usuario.sala===sala);

    }

    //Borra usuario
    public borrarUsuario (id:string){
        const tempUsuario = this.getUsuario(id);
        //console.log(tempUsuario);
        this.lista = this.lista.filter(suario => suario.id != id);
        //console.log(this.lista);
        return tempUsuario;

    }
}