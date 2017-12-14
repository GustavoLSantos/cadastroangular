import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Usuario} from '../model/usuario';

@Injectable()
export class UsuarioService {

  usuarios: Array<Usuario> = [];

  constructor() {
  }

  cadastrarUsuario(usuario: Usuario) {
    console.log(usuario.nome + ' Foi cadastrado');
    this.usuarios.push(usuario);
  }

  getUsuarios(): Observable<Usuario[]> {
    return Observable.of(this.usuarios);
  }


}
