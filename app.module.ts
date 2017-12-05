import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CadastroUsuarioComponent } from './usuario/cadastro-usuario/cadastro-usuario.component';
import {AppRoutingModule} from './app-routing.module';
import { UsuarioModule } from './usuario/usuario.module';


@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuarioComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
