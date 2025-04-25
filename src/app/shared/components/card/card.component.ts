import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, RouterModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() content: string = '';
  @Input() imageUrl: string = '';
  @Input() showFooter: boolean = true;
  @Input() showButton: boolean = false;
  @Input() buttonLabel: string = 'Clique aqui';
  @Input() buttonVariant: 'outlined' | 'text' | undefined = 'outlined';
  @Input() buttonSeverity: 'secondary' | 'success' | 'info' | 'warn' | 'help' | 'danger' | 'contrast' | undefined = 'info';
  @Input() buttonStyleClass: string = 'w-full sm:w-auto';
  @Input() buttonLink: string = ''; // opcional, para navegação
}