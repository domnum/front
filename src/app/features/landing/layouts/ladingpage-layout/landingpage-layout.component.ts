import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { LogoComponent } from '../../../../shared/components/logo/logo.component';
import { FooterComponent } from '../../../../shared/components/footer/footer/footer.component';
import { BaseComponent } from '../../../../shared/base/base.component';

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
    AnimateOnScrollModule,
    FooterComponent
],
  templateUrl: './landingpage-layout.component.html',
  styleUrl: './landingpage-layout.component.css'
})
export class LandingpageLayoutComponent extends BaseComponent {
  constructor() {
    super();
  }
}