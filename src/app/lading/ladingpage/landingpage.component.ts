import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms'; // 👈 Import necessário para ngModel
import { RouterModule } from '@angular/router';
import { BaseComponent } from '../../shared/base/base.component';
import { CardComponent } from '../../components/card/card.component';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
@Component({
  selector: 'app-landingpage',
  imports: [ButtonModule, FormsModule, RouterModule, CardComponent, IconFieldModule, InputIconModule, InputTextModule, AnimateOnScrollModule],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingPageComponent extends BaseComponent{
}
