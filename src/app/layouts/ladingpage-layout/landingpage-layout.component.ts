import { Component } from '@angular/core';
import { BaseComponent } from '../../shared/base/base.component';
import { RouterModule } from '@angular/router';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { LogoComponent } from "../../components/logo/logo.component";
import { FormsModule } from '@angular/forms'; // 👈 Import necessário para ngModel
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-landingpage-layout',
  standalone: true,
  imports: [
    RouterModule,
    ToggleSwitch,
    LogoComponent,
    FormsModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    AnimateOnScrollModule
  ],
  templateUrl: './landingpage-layout.component.html',
  styleUrl: './landingpage-layout.component.css'
})
export class LandingpageLayoutComponent extends BaseComponent {}