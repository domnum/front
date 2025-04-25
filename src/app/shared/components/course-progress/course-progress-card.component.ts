import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-course-progress-card',
  standalone: true,
  imports: [CommonModule, CardModule, ProgressBarModule],
  template: `
    <p-card class="w-80 bg-surface-800 text-white rounded-xl overflow-hidden shadow-lg">
      <ng-template pTemplate="header">
        <img [src]="image" alt="Course Image" class="w-full h-40 object-cover" />
      </ng-template>

      <div class="p-4">
        <h3 class="text-lg font-semibold truncate">{{ title }}</h3>

        <div class="mt-4">
          <p-progressBar [value]="progress" class="h-3 rounded-full"></p-progressBar>
        </div>
      </div>
    </p-card>
  `,
  styles: []
})
export class CourseProgressCardComponent {
  @Input() image: string = '';
  @Input() title: string = 'Curso sem nome';
  @Input() progress: number = 0;
}
