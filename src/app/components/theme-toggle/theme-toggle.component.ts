import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BaseComponent } from '../../shared/base/base.component';
import { NgClass } from '@angular/common'; // ⬅️ Importa aqui

@Component({
  selector: 'app-theme-toggle',
   imports: [NgClass],
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.css'],
  standalone: true
})
export class ThemeToggleComponent extends BaseComponent {
  @Input() value: boolean = false;
  @Output() valueChange = new EventEmitter<boolean>();

  onToggleClick() {
    this.toggleTheme(); 
    this.value = !this.value;
    this.valueChange.emit(this.value);
  }
}
