import {Component} from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Livros';

  livros = ['O universo numa...', '2001 uma odisséia', 'Guia do mochileiro'];

  novoLivro = 'Digite aqui...';

  inserirLivro() {
    this.livros.push(this.novoLivro);
    this.novoLivro = 'Digite aqui...';
  }
}
