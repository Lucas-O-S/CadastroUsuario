
import * as SQLite from 'expo-sqlite/next'; // npx expo install expo-sqlite
import UsuarioModel from '../Models/UsuarioModel';

export default class UsuarioService(){
    
    export async function GetDbConnection() {
    
        const connection = SqLite.openDatabaseAsync("dbUsuarios");
        return connection;

    }



    export async function CreateTable() {
    
        const querry = `Create Table if not exists tbUsuarios
        (
            id integer primary key
            nome text not null,
            email text not null,
            telefone text not null

        )`;

        var connection = GetDbConnection();
        
        await connection.execAsync(querry);
        
        await connection.closeAsync();

    }

    export async function  ObterTodosUsuarios(){
        
        var resultado = [];

        var connection = await GetDbConnection();

        const registros = await connection.getAllAsync("Select * from tbUsuarios")
        await connection.closeAsync();

        for(const registro of registros){
            let obj = new UsuarioModel(registro.id, registro.nome, registro.email, registro.telefone);
            resultado.push(obj);
        }

        return resultado;

    }

    export async function AdicionarUsuario() {
        
        var connection = await GetDbConnection();

        let querry =  "insert into tbUsuarios";

    }

}



