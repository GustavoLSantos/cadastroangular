import {DataSource} from '@angular/cdk/collections';
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Usuario} from '../../shared/model/usuario';
import {UsuarioService} from '../../shared/service/usuario.service';

@Component({
  selector: 'app-usuario-listagem',
  templateUrl: './usuario-listagem.component.html',
  styleUrls: ['./usuario-listagem.component.css']
})
export class UsuarioListagemComponent implements OnInit {

  dataSource = new UsuarioDataSource(this.usuarioService);
  displayedColumns = ['login', 'nome', 'email', 'idade', 'data'];

  constructor(private usuarioService: UsuarioService) {
  }

  ngOnInit() {
  }

}

export class UsuarioDataSource extends DataSource<any> {
  constructor(private usuarioService: UsuarioService) {
    super();
  }
  connect(): Observable<Usuario[]> {
    return this.usuarioService.getUsuarios();
  }
  disconnect() {}
}
