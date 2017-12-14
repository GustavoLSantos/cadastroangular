import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsuarioService} from '../shared/service/usuario.service';
import {CadastroUsuarioComponent} from './usuario-cadastro/cadastro-usuario.component';
import {AppSocialBaseMaterialModule} from '../shared/app-social-base-material/app-social-base-material.module';
import {UsuarioListagemComponent} from './usuario-listagem/usuario-listagem.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    AppSocialBaseMaterialModule,
    RouterModule
  ],
  declarations: [CadastroUsuarioComponent, UsuarioListagemComponent],
  providers: [UsuarioService]
})
export class UsuarioModule {
}
