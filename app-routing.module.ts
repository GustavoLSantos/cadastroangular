import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {CadastroUsuarioComponent} from './usuario/usuario-cadastro/cadastro-usuario.component';
import {UsuarioListagemComponent} from './usuario/usuario-listagem/usuario-listagem.component';
const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'usuario/cadastro',
        component: CadastroUsuarioComponent
      },
      {
        path: 'usuario/listagem',
        component: UsuarioListagemComponent
      },
    ],
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModuleModule {
}
