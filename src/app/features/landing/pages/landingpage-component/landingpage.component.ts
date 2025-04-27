import { Component, Inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { BaseComponent } from '../../../../shared/base/base.component';
import { CommonModule } from '@angular/common';
import { ThemeToggleComponent } from '../../../../shared/components/theme-toggle/theme-toggle.component';
import { LogoComponent } from '../../../../shared/components/logo/logo.component';
import { ThemeService } from '../../../../core/services/theme.service';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule, 
    FormsModule, 
    RouterModule, 
    CardComponent, 
    IconFieldModule, 
    InputIconModule, 
    InputTextModule,
    AnimateOnScrollModule,
    ThemeToggleComponent,
    LogoComponent
  ],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingPageComponent extends BaseComponent {
  constructor(
    @Inject(ThemeService) protected override themeService: ThemeService
  ) {
    super();
  }
}
