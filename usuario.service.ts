import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService{

  constructor() { }

  cadastrarUsuario(usuario) {
    console.log(usuario.nome + 'Cadastrado ');
  }

}
