
import * as SQLite from 'expo-sqlite'; // npx expo install expo-sqlite
import UsuarioModel from '../Models/UsuarioModel';

export default class UsuarioService{
    
    static async GetDbConnection() {
    
        const connection = SqLite.openDatabaseAsync("dbUsuarios");
        return connection;

    }



    static async CreateTable() {
    
        const querry = `Create Table if not exists tbUsuarios
        (
            id integer primary key
            nome text not null,
            email text not null,
            senha text not null

        )`;

        var connection = GetDbConnection();
        
        await connection.execAsync(querry);
        
        await connection.closeAsync();

    }

    static async ObterTodosUsuarios(){
        
        var resultado = [];

        var connection = await GetDbConnection();

        const registros = await connection.getAllAsync("Select * from tbUsuarios")
        await connection.closeAsync();

        for(const registro of registros){
            let obj = new UsuarioModel(registro.id, registro.nome, registro.email, registro.senha);
            resultado.push(obj);
        }

        return resultado;

    }

    static async ObterUsuarioPorId(Id){

        var connection = await GetDbConnection();

        const registro = await connection.getAsync("Select * from tbUsuarios where id = ?", [Id]);
        await connection.closeAsync();

        if (registro) {
            return new UsuarioModel(registro.id, registro.nome, registro.email, registro.senha);
        }

    }

    static async AdicionarUsuario(usuarioModel) {
        
        var connection = await GetDbConnection();

        let querry =  "insert into tbUsuarios(nome, email, senha) values (?,?,?)";
        
        const resultado = await connection.runAsync(querry, [usuarioModel.nome,usuarioModel.email,usuarioModel.senha]);

        await connection.closeAsync();

        return resultado == 1;

    }

    static async AlterarUsuario(usuarioModel) {
        
        var connection = await GetDbConnection();

        let querry =  "update tbUsuarios set nome = ?, email = ? senha = ? where id = ?";
        
        const resultado = await connection.runAsync(querry, [usuarioModel.nome,usuarioModel.email,usuarioModel.senha, usuarioModel.id]);

        await connection.closeAsync();

        return resultado == 1;

    }

    static async ExcluirUsuario(Id){
                var connection = await GetDbConnection();

        let querry =  "delete from tbUsuarios where id = ?";
        
        const resultado = await connection.runAsync(querry, [Id]);

        await connection.closeAsync();

        return resultado == 1;
    }

}



