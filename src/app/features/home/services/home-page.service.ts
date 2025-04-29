import { Injectable } from '@angular/core';
import { GetLastStudentCourseResponse, GetStudentCourseProgressResponse } 
  from '../../../client/src';
import { TokenService } from '../../../client/token.service';
import { AuthService } from '../../auth/services/auth.service'; 

@Injectable({
  providedIn: 'root',
})
export class HomePageService {
  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ) {}

  async getCourse(): Promise<GetLastStudentCourseResponse> {
    const studentId = this.tokenService.getStudentId();
    if (!studentId) {
      throw new Error('StudentId is required');
    }
    const options = { studentId };
    const presentationClient = await this.authService.getPresentation();
    if (!presentationClient) {
      throw new Error('Presentation client not available');
    }
    return presentationClient.getLastStudentCourse(options);
  }
  
  async getProgress(courseId: string, studentId: string): Promise<GetStudentCourseProgressResponse> {
    if (!studentId || !courseId) {
      throw new Error('StudentId or CourseId is required');
    }
    const options = { studentId, courseId };
    const presentationClient = await this.authService.getPresentation();
    if (!presentationClient) {
      throw new Error('Presentation client not available');
    }
    return presentationClient.getStudentCourseProgress(options);
  }
}