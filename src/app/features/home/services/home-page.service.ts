import { Injectable } from '@angular/core';
import { GetLastStudentCourseResponse, GetMostPopularCoursesResponse, GetStudentByIdResponse, GetStudentCourseProgressResponse, Presentation, UseCasesCourseGetMostPopularResponse } 
  from '../../../client/src';
import { TokenService } from '../../../client/token.service';
import { AuthService } from '../../auth/services/auth.service'; 

@Injectable({
  providedIn: 'root',
})
export class HomePageService {
  private studentId: string | null = null; 
  private presentationClient: Presentation | null = null;
  public studentName: string | null = null;
  disableProgressBar = false; 

  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ) {
    this.studentId = this.tokenService.getStudentId();
    this.studentName = this.tokenService.getStudentName();
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

  async GetStudentDetails()
  : Promise<GetStudentByIdResponse> {
    if (!this.studentId) {
      throw new Error('StudentId is required');
    }
    await this.ensurePresentationClientInitialized();
    return this.presentationClient!.getStudentById(this.studentId);
  }
  
  async GetFiveCoursesMostPopular(): Promise<UseCasesCourseGetMostPopularResponse[]> {
    await this.ensurePresentationClientInitialized();
    const result = await this.presentationClient!.getMostPopularCourses();
    return result.response ?? [];
  }
}