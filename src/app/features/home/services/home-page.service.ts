import { Injectable } from '@angular/core';
import { GetLastStudentCourseResponse, GetStudentCourseProgressResponse, Presentation } 
  from '../../../client/src';
import { TokenService } from '../../../client/token.service';

@Injectable({
  providedIn: 'root',
})
export class HomePageService {
  constructor(
    private presentationClient: Presentation,
    private tokenService: TokenService
  ) {}

  getCourse(): Promise<GetLastStudentCourseResponse> {
    const studentId = this.tokenService.getStudentId();
    if (!studentId) {
      throw new Error('StudentId is required');
    }
    const options = {
      studentId: studentId,
    };
    return this.presentationClient.getLastStudentCourse(options);
  }

  getProgress(courseId: string, studentId: string ):
   Promise<GetStudentCourseProgressResponse> {
    if (!studentId || !courseId) {
      throw new Error('StudentId or CourseId is required');
    }
    const options = {
      studentId: studentId,
      courseId: courseId,
    };
    return this.presentationClient.getStudentCourseProgress(options);
  }
}