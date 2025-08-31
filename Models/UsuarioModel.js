import ContadorIds from "../utils/ContadorIds";

export default class UsuarioModel {

    #id;
    #nome;
    #email;
    #senha;

    constructor(nome = "", email = "", senha = "") {
        ContadorIds.InicializarContador();
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }


    get id() {
        return this.#id;
    }

    get nome() {
        return this.#nome;
    }

    get email() {
        return this.#email;
    }

    get senha() {
        return this.#senha;
    }

    set id(id){
        this.#id = id
    }

    set nome(nome) {
        if(!nome){
          throw new Error("Nome é obrigatório");
        }
        this.#nome = nome;
    }

    set email(email) {
        if(!email){
          throw new Error("Email é obrigatório");
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error("Email inválido");
        }
        this.#email = email;
    }

    set senha(senha) {
        const senhaRegex = /^(?=.*[A-Z])(?=.*\d).{5,}$/;
        if(!senhaRegex.test(senha)){
            throw new Error("Senha deve ter no mínimo 5 caracteres, uma letra maiúscula e um número");
        }
        this.#senha = senha;
    }

    VerificarCadastro() {
        if (!this.#nome || !this.#email || !this.#senha) {
            return false;
        }
        this.#id = ContadorIds.contador++;
        ContadorIds.SalvarContador();
        return true;
    }

}