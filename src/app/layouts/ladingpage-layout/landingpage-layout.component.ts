import { Component } from '@angular/core';
import { BaseComponent } from '../../shared/base/base.component';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { LogoComponent } from "../../components/logo/logo.component";

@Component({
  selector: 'app-landingpage-layout',
  imports: [
    RouterModule,
    MatIcon,
    LogoComponent
],
  templateUrl: './landingpage-layout.component.html',
  styleUrl: './landingpage-layout.component.css'
})
export class LandingpageLayoutComponent extends BaseComponent{

}
