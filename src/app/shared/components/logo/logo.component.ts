import { Component } from '@angular/core';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'app-logo',
  imports: [],
  standalone: true, 
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css'
})
export class LogoComponent extends BaseComponent {
  constructor() {
    super();
  }
}
