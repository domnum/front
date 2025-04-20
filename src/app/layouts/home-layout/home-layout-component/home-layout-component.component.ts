import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { FormsModule } from '@angular/forms';
import { BaseComponent } from '../../../shared/base/base.component';
import { LogoComponent } from "../../../components/logo/logo.component";
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-layout-component',
  imports: [AvatarModule, ToggleButtonModule,
     FormsModule, 
     LogoComponent,
     MenubarModule,
     RouterModule],
  templateUrl: './home-layout-component.component.html',
  styleUrl: './home-layout-component.component.css'
})
export class HomeLayoutComponentComponent extends BaseComponent {
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
          routerLink: '/cursos'
        },
        {
          label: 'Meus Cursos',
          icon: 'pi pi-user',
          routerLink: '/meus-cursos'
        }
      ]
    },
    {
      label: 'Sobre',
      icon: 'pi pi-info-circle',
      routerLink: '/sobre'
    },
    {
      label: 'Contato',
      icon: 'pi pi-envelope',
      routerLink: '/contato'
    }
  ];
}
