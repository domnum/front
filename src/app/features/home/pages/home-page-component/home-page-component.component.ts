import { Component, OnInit} from '@angular/core';
import { CourseProgressCardComponent } from '../../../../shared/components/course-progress/course-progress-card.component';
import { HomePageService } from '../../services/home-page.service';
import { CommonModule } from '@angular/common';

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
  mensagemBoasVindas = '';
  mensagemBoasVindas2 = '';
  disableProgressBar: boolean = false;

  constructor(
    private homepageService: HomePageService,
  ) {}

  ngOnInit(): void {
    this.loadCourseData();
  }

  private async loadCourseData(): Promise<void> {
    const courseData = await this.homepageService.getCourse();
    this.course = courseData.response ? courseData.response : null;

    if (this.course && this.course.courseId) {
      this.mensagemBoasVindas = `Olá, ${this.homepageService.studentName}.`;
      this.mensagemBoasVindas2 = `Continue Assitindo !`;
      const progressData = await this.homepageService.getProgress(this.course.courseId,
          this.course.studentId);
      this.progress = progressData.response?.progressPercentage || 0;
    }
    this.disableProgressBar = true;
    this.mensagemBoasVindas = `Seja bem-vindo, ${this.homepageService.studentName}.`;
    this.mensagemBoasVindas2 = `Confira o mais popular !`;
    
    const courses = await this.homepageService.GetFiveCoursesMostPopular();
    this.course = courses.length > 0 ? courses[0] : null;
  }
}