import { Injectable } from '@angular/core';
import { GetLastStudentCourseResponse, GetStudentByIdResponse, GetStudentCourseProgressResponse, Presentation } 
  from '../../../client/src';
import { TokenService } from '../../../client/token.service';
import { AuthService } from '../../auth/services/auth.service'; 

@Injectable({
  providedIn: 'root',
})
export class HomePageService {
  private studentId: string | null = null; 
  private presentationClient: Presentation | null = null;

  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ) {
    this.studentId = this.tokenService.getStudentId();
    if (!this.studentId) {
      throw new Error('StudentId is required');
    }
    this.initializePresentationClient();
  }

  private async initializePresentationClient(): Promise<void> {
    const presentation = await this.authService.getPresentation();
    if (!presentation) {
      throw new Error('Presentation client not available');
    }
    this.presentationClient = presentation;
  }

  private async ensurePresentationClientInitialized(): Promise<void> {
    if (!this.presentationClient) {
      await this.initializePresentationClient();
    }
  }

  async getCourse(): Promise<GetLastStudentCourseResponse> {
    if (!this.studentId) {
      throw new Error('StudentId is required');
    }

    await this.ensurePresentationClientInitialized();
    const options = { studentId: this.studentId };
    return this.presentationClient!.getLastStudentCourse(options);
  }
  
  async getProgress(courseId: string, studentId: string): Promise<GetStudentCourseProgressResponse> {
    if (!studentId || !courseId) {
      throw new Error('StudentId or CourseId is required');
    }

    await this.ensurePresentationClientInitialized();
    const options = { studentId, courseId };
    return this.presentationClient!.getStudentCourseProgress(options);
  }

  async GetPictureStudent(studentId: string): Promise<GetStudentByIdResponse> {
    if (!studentId) {
      throw new Error('StudentId is required');
    }

    await this.ensurePresentationClientInitialized();
    return this.presentationClient!.getStudentById(studentId);
  }
}