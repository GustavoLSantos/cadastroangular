import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Usuario} from '../../shared/model/usuario';
import {UsuarioService} from '../../shared/service/usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario;

  constructor(private usuarioService: UsuarioService, private roteador: Router) {
  }

  ngOnInit() {
  }

  cadastrarUsuario() {
    this.usuarioService.cadastrarUsuario(this.usuario);
    this.usuario = new Usuario();

    // Navega para a listagem de usuários
    this.roteador.navigate(['/usuario/listagem']);
  }

}
