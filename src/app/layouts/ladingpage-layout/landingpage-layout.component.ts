import { Component } from '@angular/core';
import { BaseComponent } from '../../shared/base/base.component';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { LogoComponent } from "../../components/logo/logo.component";
import { FormsModule } from '@angular/forms'; // 👈 Import necessário para ngModel
import { ButtonModule } from 'primeng/button';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-landingpage-layout',
  standalone: true,
  imports: [
    RouterModule,
    MatIcon,
    ToggleSwitch,
    LogoComponent,
    FormsModule,
    ButtonModule,
    CardComponent 
  ],
  templateUrl: './landingpage-layout.component.html',
  styleUrl: './landingpage-layout.component.css'
})
export class LandingpageLayoutComponent extends BaseComponent {}