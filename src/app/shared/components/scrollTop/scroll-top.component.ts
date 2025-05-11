import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollTopModule  } from 'primeng/scrolltop';

@Component({
  selector: 'scroll-top',
  standalone: true,
  imports: [CommonModule, ScrollTopModule ],
  template: `
    
    <div class="card flex flex-col items-center">
        <p>Scroll down the page to display the ScrollTo component.</p>
        <i class="pi pi-angle-down animate-fadeout animate-duration-1000 animate-infinite" style="fontsize: 2rem"></i>
        <p-scrolltop />
    </div>

  `,
  styles: []
})
export class ScrollTopBasicDemo {}