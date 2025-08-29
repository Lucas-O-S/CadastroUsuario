export class Usuario {

    static contador = -1;

    #id;
    #nome;
    #email;
    #senha;

  constructor( nome = "", email = "", senha = "") {
    this.#id = ++Usuario.contador;
    this.#nome = nome;
    this.#email = email;
    this.#senha = senha;
    
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

  set nome(nome) {
    this.#nome = nome;
  }

  set email(email) {
    this.#email = email;
  }

  set senha(senha) {
    this.#senha = senha;
  }

}