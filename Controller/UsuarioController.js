import AsyncStorage from '@react-native-async-storage/async-storage';
import UsuarioModel from "../Models/UsuarioModel";
export default class UsuarioController{
   static async Create(nome, email, senha, repetirSenha) {
        try {
            let usuariosList = [];
            let usuarioModel = new UsuarioModel(nome, email, senha);

            if (senha !== repetirSenha) {
                throw new Error("Dados estão errados");
            }

            if (usuarioModel.VerificarCadastro()) {
                const usuarioParaSalvar = {
                    id: usuarioModel.id,
                    nome: nome,
                    email: email,
                    senha: senha
                };

                const jsonValue = await AsyncStorage.getItem("UsuarioList");
                if(jsonValue){
                    usuariosList = JSON.parse(jsonValue);
                    usuariosList.push(usuarioParaSalvar);
                    
                    usuariosList.forEach(element => {
                        console.log(element);
                    });

                }
                else usuariosList.push(usuarioParaSalvar);
                
                await AsyncStorage.setItem("UsuarioList", JSON.stringify(usuariosList));
                alert("Usuário cadastrado com sucesso!");

                
            } 
            else throw new Error("Dados estão errados");
            
        } catch (error) {
            alert(`Erro ao cadastrar usuário: ${error.message}`);
        }
    }   

    static async List() {
        try{
            const jsonValue = await AsyncStorage.getItem("UsuarioList");
            if (jsonValue != null) {
                const usuarioModel = JSON.parse(jsonValue);
                return usuarioModel;
            } else throw new Error("Lista de usuario não encontrada");
            
        } catch (error) {
            alert(`Erro ao buscar usuário: ${error.message}`);
        }

    }

    static async Buscar(id){
        try{
            const jsonValue = await AsyncStorage.getItem("UsuarioList");
            if (jsonValue != null) {
                const usuarioList = JSON.parse(jsonValue);
                const usuario = usuarioList.find(user => user.id === id);
            
                if (usuario) {
                    return usuario;
                }
                
                else throw new Error("Usuário não encontrado");
            
            }
            
            else throw new Error("Lista de usuario não encontrada");

        } catch (error) {
            alert(`Erro ao buscar usuário: ${error.message}`);
        }    
    }

    static async Editar(usuarioModel, repetirSenha){
        try{
            if (usuarioModel.senha !== repetirSenha) {
                throw new Error("Dados estão errados");
            }
            console.log(usuarioModel);
            const jsonValue = await AsyncStorage.getItem("UsuarioList");
            if (jsonValue) {
                
                const usuarioList = JSON.parse(jsonValue);
                const index = usuarioList.findIndex(user => user.id === usuarioModel.id);
                
                if (index !== -1) {
                    usuarioList[index] = usuarioModel;
                    console.log(usuarioList[index]);

                    await AsyncStorage.setItem("UsuarioList", JSON.stringify(usuarioList));
                    alert("Usuário editado com sucesso!");
                } 
                else throw new Error("Usuário não encontrado");
            } 
            else throw new Error("Lista de usuario não encontrada");
        } catch (error) {
            alert(`Erro ao salvar usuário: ${error.message}`);
        }    
    }

    static async Excluir(id){
        try {
            const jsonValue = await AsyncStorage.getItem("UsuarioList");
            if (jsonValue) {
                let usuarioList = JSON.parse(jsonValue);
                usuarioList = usuarioList.filter(user => user.id !== id);
                await AsyncStorage.setItem("UsuarioList", JSON.stringify(usuarioList));
                alert("Usuário excluído com sucesso!");
                return usuarioList;
            }
            else throw new Error("Lista de usuario não encontrada");
        } catch (error) {
            alert(`Erro ao excluir usuário: ${error.message}`);
        }
    }

}
