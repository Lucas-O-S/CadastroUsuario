
import UsuarioService from "../Service/UsuarioService.js";

export default class IniciarDb{
    static async InicializarDB(){
        await UsuarioService.CreateTable();
    }
}