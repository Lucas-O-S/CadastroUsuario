
import * as SqLite from 'expo-sqlite';
import UsuarioModel from '../Models/UsuarioModel';

export default class UsuarioService{
    
    static async GetDbConnection() {
    
        const connection = await SqLite.openDatabaseAsync("dbUsuarios");
        return connection;

    }



    static async CreateTable() {
    
        const querry = `Create Table if not exists tbUsuarios
        (
            id integer primary key,
            nome text not null,
            email text not null,
            senha text not null

        )`;

        var connection = await this.GetDbConnection();
        
        await connection.execAsync(querry);
        
        await connection.closeAsync();

    }

    static async ObterTodosUsuarios(){
        
        var resultado = [];

        var connection = await this.GetDbConnection();

        const registros = await connection.getAllAsync("Select * from tbUsuarios")
        await connection.closeAsync();

        for(const registro of registros){
            console.log(registro.id);
            let obj = new UsuarioModel(registro.id, registro.nome, registro.email, registro.senha);
            console.log(obj.id);
            
            resultado.push(obj);
        }

        return resultado;

    }

    static async ObterUsuarioPorId(Id){

        var connection = await this.GetDbConnection();

        const registro = await connection.getAsync("Select * from tbUsuarios where id = ?", [Id]);
        console.log(registro);
        await connection.closeAsync();

        if (registro) {
            return new UsuarioModel(registro.id, registro.nome, registro.email, registro.senha);
        }
        return null;

    }

    static async AdicionarUsuario(usuarioModel) {
        
        var connection = await this.GetDbConnection();

        let querry =  "insert into tbUsuarios(nome, email, senha) values (?,?,?)";
        
        console.log("Chegou")

        const resultado = await connection.runAsync(querry, [usuarioModel.nome,usuarioModel.email,usuarioModel.senha]);

        await connection.closeAsync();

        return resultado == 1; 

    }

    static async AlterarUsuario(usuarioModel) {
        console.log(usuarioModel);
        var connection = await this.GetDbConnection();

        let querry =  "update tbUsuarios set nome = ?, email = ?, senha = ? where id = ?";
        
        const resultado = await connection.runAsync(querry, [usuarioModel.nome,usuarioModel.email,usuarioModel.senha, usuarioModel.id]);

        await connection.closeAsync();

        return resultado.changes == 1;

    }

    static async ExcluirUsuario(Id){
        var connection = await this.GetDbConnection();

        let querry =  "delete from tbUsuarios where id = ?";
        
        const resultado = await connection.runAsync(querry, [Id]);

        await connection.closeAsync();

        return resultado.changes == 1;
    }

}



