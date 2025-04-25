import { Component } from '@angular/core';
import { LogoSimplesComponent } from "../../logo-simples/logo-simples/logo-simples.component";
import { LogoComponent } from "../../logo/logo.component";

@Component({
  selector: 'app-footer',
  imports: [LogoSimplesComponent, LogoComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
