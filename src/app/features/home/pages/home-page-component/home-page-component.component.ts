import { Component, OnInit, Inject } from '@angular/core';
import { CourseProgressCardComponent } from '../../../../shared/components/course-progress/course-progress-card.component';
import { HomePageService } from '../../services/home-page.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home-page-component',
  standalone: true,
  imports: [CommonModule,CourseProgressCardComponent],
  templateUrl: './home-page-component.component.html',
  styleUrls: ['./home-page-component.component.css']
})
export class HomePageComponent implements OnInit {
  course: any = null;
  progress: number = 0;

  constructor(
    private homepageService: HomePageService,
  ) {}

  ngOnInit(): void {
     this.loadCourseData();
  }

  private async loadCourseData(): Promise<void> {
    try {
      const courseData = await this.homepageService.getCourse();
      this.course = courseData.response ? courseData.response : null;

      if (this.course && this.course.courseId) {
        const progressData = await this.homepageService.getProgress(this.course.courseId,
           this.course.studentId);
        this.progress = progressData.response?.progressPercentage || 0;
      }
    } catch (error) {
      throw new Error('Error loading course data: ' + error);
    }
  }
}