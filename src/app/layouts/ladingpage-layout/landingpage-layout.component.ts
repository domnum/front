import { Component } from '@angular/core';
import { BaseComponent } from '../../shared/base/base.component';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { LogoComponent } from "../../components/logo/logo.component";
import { FormsModule } from '@angular/forms'; // 👈 Import necessário para ngModel

@Component({
  selector: 'app-landingpage-layout',
  standalone: true,
  imports: [
    RouterModule,
    MatIcon,
    ToggleSwitch,
    LogoComponent,
    FormsModule 
  ],
  templateUrl: './landingpage-layout.component.html',
  styleUrl: './landingpage-layout.component.css'
})
export class LandingpageLayoutComponent extends BaseComponent {}