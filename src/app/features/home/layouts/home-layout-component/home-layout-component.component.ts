import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// PrimeNG imports
import { AvatarModule } from 'primeng/avatar';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';

// Componentes da aplicação
import { LogoComponent } from '../../../../shared/components/logo/logo.component';
import { FooterComponent } from '../../../../shared/components/footer/footer/footer.component';
import { ThemeToggleComponent } from '../../../../shared/components/theme-toggle/theme-toggle.component';
import { BaseComponent } from '../../../../shared/base/base.component';

@Component({
  selector: 'app-home-layout-component',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AvatarModule,
    ToggleButtonModule,
    MenubarModule,
    InputTextModule,
    LogoComponent,
    FooterComponent,
    ThemeToggleComponent
  ] as const,
  templateUrl: './home-layout-component.component.html',
  styleUrl: './home-layout-component.component.css'
})
export class HomeLayoutComponent extends BaseComponent {
  constructor() {
    super();
  }

  value1: string = "";
  items: MenuItem[] = [
    {
      label: 'Início',
      icon: 'pi pi-home',
      routerLink: '/'
    },
    {
      label: 'Cursos',
      icon: 'pi pi-book',
      items: [
        {
          label: 'Todos os Cursos',
          icon: 'pi pi-list',
          routerLink: '/pages/home/main/courses'
        },
        {
          label: 'Machine-Learning',
          icon: 'pi pi-database',
          routerLink: '/pages/home/main/courses?categoryname=machine-learning'
        },
        {
          label: 'Programação',
          icon: 'pi pi-code',
          routerLink: '/pages/home/main/courses?categoryname=programacao'
        },
        {
          label: 'Automação',
          icon: 'pi pi-microchip',
          routerLink: '/pages/home/main/courses?categoryname=automacao'
        },
      ]
    },
    {
      label: 'Certificados',
      icon: 'pi pi-trophy',
      routerLink: '/pages/home/main/certificados'
    },
    {
      label: 'IAs',
      icon: 'pi pi-microchip-ai',
      routerLink: '/pages/home/main/ias'
    },
    {
      label: 'Conta',
      icon: 'pi pi-user',
      items: [
        {
          label: 'Logout',
          icon: 'pi pi-sign-out',
          routerLink: '/logout'
        },
        {
          label: 'Gerenciamento de Conta',
          icon: 'pi pi-user-edit',
          routerLink: '/pages/home/main/edit-account'
        },
        {
          label: 'Assinaturas',
          icon: 'pi pi-credit-card',
          routerLink: '/pages/home/main/assinaturas'
        },        
      ]
    },
  ];

  onAvatarClick() {
    throw new Error('Method not implemented.');
  }
}
