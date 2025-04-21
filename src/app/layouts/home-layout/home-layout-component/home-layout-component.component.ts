import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FormsModule } from '@angular/forms';
import { BaseComponent } from '../../../shared/base/base.component';
import { LogoComponent } from "../../../components/logo/logo.component";
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../../../components/footer/footer/footer.component";
import { ToggleSwitch } from 'primeng/toggleswitch';
import { InputTextModule } from 'primeng/inputtext';
import { ThemeToggleComponent } from "../../../components/theme-toggle/theme-toggle.component";            


@Component({
  selector: 'app-home-layout-component',
  imports: [AvatarModule, ToggleButtonModule,
    FormsModule,
    LogoComponent,
    MenubarModule,
    RouterModule, FooterComponent, ToggleSwitch,
    InputTextModule, ThemeToggleComponent],
  templateUrl: './home-layout-component.component.html',
  styleUrl: './home-layout-component.component.css'
})
export class HomeLayoutComponentComponent extends BaseComponent {
onAvatarClick() {
throw new Error('Method not implemented.');
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
}
