import UsuarioModel from "../Models/UsuarioModel";
import UsuarioService from '../Service/UsuarioService';


export default class UsuarioController{
   static async Create(nome, email, senha, repetirSenha) {
        try {
            
            let usuarioModel = new UsuarioModel("",nome, email, senha);
            
            

            if (senha !== repetirSenha) {
                throw new Error("Dados estão errados");
            }

            if (usuarioModel.VerificarCadastro()) {


                await UsuarioService.AdicionarUsuario(usuarioModel);
                alert("Usuário cadastrado com sucesso!");

                
            } 
            else throw new Error("Dados estão errados");
            
        } catch (error) {
            alert(`Erro ao cadastrar usuário: ${error.message}`);
        }
    }   

    static async List() {
        try{
            const values = await UsuarioService.ObterTodosUsuarios();
            if (values != null) {
                return values;
            } else   throw new Error("Lista de usuario não encontrada");
            
        } catch (error) {
            alert(`Erro ao buscar usuário: ${error.message}`);
        }

    }

    static async Buscar(id){
        try{
            const value = await UsuarioService.ObterUsuarioPorId(id);
            if (value != null) {
                return value;
            } else throw new Error("Usuário não encontrado");
        } catch (error) {
            alert(`Erro ao buscar usuário: ${error.message}`);
        }

    }


    static async Editar(id, usuarioModelNew, repetirSenha){
        try{

            let usuarioModel =  UsuarioService.ObterUsuarioPorId(id);
            console.log(usuarioModel);

            if (usuarioModel) {
                if (usuarioModelNew.senha !== repetirSenha) {
                    throw new Error("Dados estão errados");
                }
                
                const novoUsuarioModel = new UsuarioModel(id, usuarioModelNew.nome, usuarioModelNew.email, usuarioModelNew.senha);
                console.log(novoUsuarioModel);
                await UsuarioService.AlterarUsuario(novoUsuarioModel);
                alert("Usuário alterado com sucesso!");
                return usuarioModel;



            } 
            else throw new Error("Usuario não encontrado");

        } catch (error) {
            alert(`Erro ao salvar usuário: ${error.message}`);
        }    
    }

    static async Excluir(id){
        try {
            const value = UsuarioService.ObterUsuarioPorId(id);
            if (value) {
                await UsuarioService.ExcluirUsuario(id);
                alert("Usuário excluído com sucesso!");
            }
            else throw new Error("Lista de usuario não encontrada");
        } catch (error) {
            alert(`Erro ao excluir usuário: ${error.message}`);
        }
    }

}
