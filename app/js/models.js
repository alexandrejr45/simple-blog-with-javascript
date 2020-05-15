export class Usuario {
  constructor(nome, email, cpf, telefone) {
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.telefone = telefone;
    this.status = status;
  }
}

export class ListaUsuarios {
  constructor() {
    this.lista_usuarios = [];
  }

  adicionar(usuario) {
    this.lista_usuarios.push(usuario);
  }

  excluir(usuario) {
    const index_usuario = this.lista_usuarios.findIndex((user) => user == usuario);
    this.lista_usuarios.splice(1, index_usuario);
  }

  validar_usuario() {}

  validar_cpf() {}
}

export class FirebaseRecord {
    constructor () {
        this.firebase = firebase.firestore;
    }

    save (object) {
        return this.firebase.collection('usuarios').add({
            nome: object.nome,
            email: object.email,
            cpf: object.cpf,
            telefone: object.telefone,
            status: object.status,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).catch(error => {
            console.error('Erro ao escrever a nova mensagem' + error.message)
        })
    }
}
