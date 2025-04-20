import { Component } from '@angular/core';
import { CourseProgressCardComponent } from "../../../../../components/course-progress/course-progress-card.component";

@Component({
  selector: 'app-home-page-component',
  imports: [CourseProgressCardComponent],
  templateUrl: './home-page-component.component.html',
  styleUrl: './home-page-component.component.css'
})
export class HomePageComponentComponent {

}
