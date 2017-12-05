import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  cadastrarUsuario() {
  this.usuarioService.cadastrarUsuario(this.usuario);
  this.usuario = new Usuario();
  }

}
