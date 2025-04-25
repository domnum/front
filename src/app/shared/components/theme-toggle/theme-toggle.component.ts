import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common'; 
import { BaseComponent } from '../../base/base.component';

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
