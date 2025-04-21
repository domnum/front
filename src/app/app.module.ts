import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';  // Ajuste conforme a estrutura do seu projeto
import { CommonModule } from '@angular/common'; // Importação do CommonModule

@NgModule({
  declarations: [
    AppComponent, // Declare seus componentes aqui
  ],
  imports: [
    BrowserModule,  // Importa o módulo que permite executar em um navegador
    CommonModule,   // Importa o CommonModule para usar estruturas como *ngIf, *ngFor
  ],
  providers: [],
  bootstrap: [AppComponent],  // Define o componente principal para inicializar a aplicação
})
export class AppModule { }
