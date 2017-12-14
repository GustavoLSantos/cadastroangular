import {Injectable} from '@angular/core';
import {Usuario} from '../model/usuario';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class UsuarioService {

  apiUsuarios = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {
  }

  public cadastrarUsuario(usuario: Usuario) {
    this.http.post(this.apiUsuarios, usuario)
      .subscribe();
  }

  public listarUsuarios(): Usuario[] {
    let usuarios: Array<Usuario> = [];
    this.http.get(this.apiUsuarios).map(
      (data) => {
        usuarios = data['results'];
      },
      (error) => {
        console.log('Erro tentando listar usuários: ' + error);
      });
    return usuarios;
  }

}

