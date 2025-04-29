import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";

export interface UseCasesCategoryGetAllResponse {
  categoryId?: string;
  name?: string;
  description?: string;
  imageUrl?: string;
}

export interface BaseResponseSystemObject {
  statusCode?: number;
  message?: string;
  notifications?: FluntNotificationsNotification[];
  /** Anything */
  response?: any;
}

export interface FluntNotificationsNotification {
  key?: string;
  message?: string;
}

export interface UseCasesCategoryGetByIdResponse {
  categoryId?: string;
  name?: string;
  description?: string;
  imageUrl?: string;
}

export interface UseCasesCourseGetAllResponse {
  id?: string;
  name?: string;
  subscribes?: number;
  description?: string;
  aboutDescription?: string;
  imageUrl?: string;
  trailerUrl?: string;
  teacherName?: string;
  teacherPictureUrl?: string;
}

export interface UseCasesCourseGetByCategoryResponse {
  id?: string;
  name?: string;
  subscribes?: number;
  description?: string;
  aboutDescription?: string;
  imageUrl?: string;
  trailerUrl?: string;
  teacherName?: string;
  teacherPictureUrl?: string;
}

export interface BaseResponseUseCasesCourseGetByIdResponse {
  statusCode?: number;
  message?: string;
  notifications?: FluntNotificationsNotification[];
  response?: UseCasesCourseGetByIdResponse;
}

export interface UseCasesCourseGetByIdResponse {
  id?: string;
  name?: string;
  subscribes?: number;
  description?: string;
  aboutDescription?: string;
  imageUrl?: string;
  trailerUrl?: string;
  teacherName?: string;
  teacherPictureUrl?: string;
}

export interface UseCasesCourseGetByIAResponse {
  id?: string;
  name?: string;
  subscribes?: number;
  description?: string;
  aboutDescription?: string;
  imageUrl?: string;
  trailerUrl?: string;
  teacherName?: string;
  teacherPictureUrl?: string;
  iaName?: string;
}

export interface BaseResponseListUseCasesCourseGetMostPopularResponse {
  statusCode?: number;
  message?: string;
  notifications?: FluntNotificationsNotification[];
  response?: UseCasesCourseGetMostPopularResponse[];
}

export interface UseCasesCourseGetMostPopularResponse {
  id?: string;
  name?: string;
  subscribes?: number;
  description?: string;
  aboutDescription?: string;
  imageUrl?: string;
  trailerUrl?: string;
  teacherName?: string;
  teacherPictureUrl?: string;
}

export interface UseCasesIAGetAllResponse {
  id?: string;
  name?: string;
  pictureUrl?: string;
}

export interface UseCasesLectureGetAllCourseCompletedResponse {
  id?: string;
  title?: string;
  description?: string;
  videoUrl?: string;
  completionDate?: Date;
}

export interface UseCasesLectureGetIsLectureCompletedResponse {
  isCompleted?: boolean;
}

export interface UseCasesModuleGetByIdResponse {
  id?: string;
  name?: string;
  description?: string;
  courseName?: string;
}

export interface UseCasesModuleGetAllResponse {
  id?: string;
  name?: string;
  description?: string;
  courseName?: string;
}

export interface UseCasesModuleCreateRequest {
  name?: string;
  description?: string;
  courseId?: string;
}

export interface UseCasesSearchResponse {
  type?: string;
  id?: string;
  name?: string;
  description?: string;
  imageUrl?: string;
  price?: number;
}

export interface UseCasesStudentGetByIdResponse {
  id?: string;
  name?: string;
  pictureUrl?: string;
}

export interface UseCasesStudentGetAllResponse {
  id?: string;
  name?: string;
  pictureUrl?: string;
}

export interface UseCasesStudentGetStudentCourseProgressResponse {
  progressPercentage?: number;
}

export interface BaseResponseUseCasesStudentGetLastStudentCourseResponse {
  statusCode?: number;
  message?: string;
  notifications?: FluntNotificationsNotification[];
  response?: UseCasesStudentGetLastStudentCourseResponse;
}

export interface UseCasesStudentGetLastStudentCourseResponse {
  courseId?: string;
  courseName?: string;
  description?: string;
  imageUrl?: string;
  studentId?: string;
}

export interface UseCasesStudentGetStudentModuleProgressResponse {
  progressPercentage?: number;
}

export interface UseCasesStudentSubscribeCourseResponse {
  studentId?: string;
  courseId?: string;
  studentName?: string;
  courseName?: string;
  enrollmentDate?: Date;
}

export interface UseCasesTeacherGetByIdResponse {
  id?: string;
  name?: string;
  tiktok?: string;
  instagram?: string;
  gitHub?: string;
  description?: string;
  pictureUrl?: string;
}

export interface UseCasesTeacherGetAllResponse {
  id?: string;
  name?: string;
  tiktok?: string;
  instagram?: string;
  gitHub?: string;
  description?: string;
  pictureUrl?: string;
}

export interface UseCasesUserLoginRequest {
  email?: string;
  password?: string;
}

export interface UseCasesUserLoginResponse {
  statusCode?: number;
  message?: string;
  notifications?: FluntNotificationsNotification[];
  response?: string;
  token?: string;
}

export interface UseCasesUserRegisterRequest {
  email?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  number?: number;
  neighBordHood?: string;
  road?: string;
  complement?: string;
  password?: string;
}

export interface UseCasesUserForgotPasswordRequest {
  email?: string;
}

export interface UseCasesUserResendCodeRequest {
  email?: string;
  token?: number;
}

export interface UseCasesUserForgotPasswordActivateRequest {
  email?: string;
  token?: number;
  newPassword?: string;
}

export interface Paths4Wblc7CategoryCreatePostRequestbodyContentMultipartFormDataSchema {
  name?: string;
  description?: string;
  imagem?: coreRestPipeline.RequestBodyType;
}

export interface PathsT9Fid1CourseCreatePostRequestbodyContentMultipartFormDataSchema {
  name?: string;
  description?: string;
  aboutDescription?: string;
  picture?: coreRestPipeline.RequestBodyType;
  gitHubUrl?: string;
  notionUrl?: string;
  iAId?: string;
  categoryId?: string;
  trailer?: coreRestPipeline.RequestBodyType;
  parametersId?: string;
  teacherId?: string;
  price?: number;
  totalHours?: number;
}

export interface Paths1Psaa4HIaCreatePostRequestbodyContentMultipartFormDataSchema {
  name?: string;
  picture?: coreRestPipeline.RequestBodyType;
}

export interface PathsCh3KyvLectureCreatePostRequestbodyContentMultipartFormDataSchema {
  moduleid?: string;
  name?: string;
  tempo?: string;
  notionUrl?: string;
  file?: coreRestPipeline.RequestBodyType;
}

export interface Paths1Yh9MaoStudentCreatePostRequestbodyContentMultipartFormDataSchema {
  name?: string;
  userId?: string;
  isFreeStudent?: boolean;
  picture?: coreRestPipeline.RequestBodyType;
}

export interface Paths16NvxszTeacherCreatePostRequestbodyContentMultipartFormDataSchema {
  name?: string;
  email?: string;
  cpf?: string;
  phone?: string;
  endereco?: string;
  cep?: string;
  tiktok?: string;
  instagram?: string;
  gitHub?: string;
  description?: string;
  picture?: coreRestPipeline.RequestBodyType;
}

/** Optional parameters. */
export interface GetAllCategoriesOptionalParams
  extends coreClient.OperationOptions {
  skip?: number;
  take?: number;
}

/** Contains response data for the getAllCategories operation. */
export type GetAllCategoriesResponse = UseCasesCategoryGetAllResponse[];

/** Optional parameters. */
export interface GetCategoryByIdOptionalParams
  extends coreClient.OperationOptions {
  id?: string;
}

/** Contains response data for the getCategoryById operation. */
export type GetCategoryByIdResponse = UseCasesCategoryGetByIdResponse;

/** Optional parameters. */
export interface CreateCategoryOptionalParams
  extends coreClient.OperationOptions {
  name?: string;
  description?: string;
  imagem?: coreRestPipeline.RequestBodyType;
}

/** Contains response data for the createCategory operation. */
export type CreateCategoryResponse = UseCasesCategoryGetByIdResponse;

/** Optional parameters. */
export interface DeleteCategoryOptionalParams
  extends coreClient.OperationOptions {
  id?: string;
}

/** Contains response data for the deleteCategory operation. */
export type DeleteCategoryResponse = BaseResponseSystemObject;

/** Optional parameters. */
export interface CreateCourseOptionalParams
  extends coreClient.OperationOptions {
  name?: string;
  description?: string;
  aboutDescription?: string;
  picture?: coreRestPipeline.RequestBodyType;
  gitHubUrl?: string;
  notionUrl?: string;
  iAId?: string;
  categoryId?: string;
  trailer?: coreRestPipeline.RequestBodyType;
  parametersId?: string;
  teacherId?: string;
  price?: number;
  totalHours?: number;
}

/** Contains response data for the createCourse operation. */
export type CreateCourseResponse = BaseResponseSystemObject;

/** Optional parameters. */
export interface GetAllCoursesOptionalParams
  extends coreClient.OperationOptions {
  skip?: number;
  take?: number;
}

/** Contains response data for the getAllCourses operation. */
export type GetAllCoursesResponse = UseCasesCourseGetAllResponse[];

/** Optional parameters. */
export interface GetCoursesByCategoryOptionalParams
  extends coreClient.OperationOptions {
  skip?: number;
  take?: number;
  categoryId?: string;
}

/** Contains response data for the getCoursesByCategory operation. */
export type GetCoursesByCategoryResponse =
  UseCasesCourseGetByCategoryResponse[];

/** Optional parameters. */
export interface GetCourseByIdOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getCourseById operation. */
export type GetCourseByIdResponse = BaseResponseUseCasesCourseGetByIdResponse;

/** Optional parameters. */
export interface GetCoursesByIAOptionalParams
  extends coreClient.OperationOptions {
  skip?: number;
  take?: number;
  iAId?: string;
}

/** Contains response data for the getCoursesByIA operation. */
export type GetCoursesByIAResponse = UseCasesCourseGetByIAResponse[];

/** Optional parameters. */
export interface GetMostPopularCoursesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getMostPopularCourses operation. */
export type GetMostPopularCoursesResponse =
  BaseResponseListUseCasesCourseGetMostPopularResponse;

/** Optional parameters. */
export interface DeleteCourseOptionalParams
  extends coreClient.OperationOptions {
  id?: string;
}

/** Contains response data for the deleteCourse operation. */
export type DeleteCourseResponse = BaseResponseSystemObject;

/** Optional parameters. */
export interface CreateIAOptionalParams extends coreClient.OperationOptions {
  name?: string;
  picture?: coreRestPipeline.RequestBodyType;
}

/** Contains response data for the createIA operation. */
export type CreateIAResponse = BaseResponseSystemObject;

/** Optional parameters. */
export interface GetAllIAsOptionalParams extends coreClient.OperationOptions {
  skip?: number;
  take?: number;
}

/** Contains response data for the getAllIAs operation. */
export type GetAllIAsResponse = UseCasesIAGetAllResponse[];

/** Optional parameters. */
export interface DeleteIAOptionalParams extends coreClient.OperationOptions {
  id?: string;
}

/** Contains response data for the deleteIA operation. */
export type DeleteIAResponse = BaseResponseSystemObject;

/** Optional parameters. */
export interface CreateLectureOptionalParams
  extends coreClient.OperationOptions {
  name?: string;
  notionUrl?: string;
  moduleid?: string;
  tempo?: string;
  file?: coreRestPipeline.RequestBodyType;
}

/** Contains response data for the createLecture operation. */
export type CreateLectureResponse = BaseResponseSystemObject;

/** Optional parameters. */
export interface DeleteLectureOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the deleteLecture operation. */
export type DeleteLectureResponse = BaseResponseSystemObject;

/** Optional parameters. */
export interface GetAllLecturesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAllLectures operation. */
export type GetAllLecturesResponse =
  UseCasesLectureGetAllCourseCompletedResponse[];

/** Optional parameters. */
export interface IsLectureCompletedOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the isLectureCompleted operation. */
export type IsLectureCompletedResponse =
  UseCasesLectureGetIsLectureCompletedResponse;

/** Optional parameters. */
export interface CompleteLectureOptionalParams
  extends coreClient.OperationOptions {
  courseId?: string;
  studentId?: string;
  lectureId?: string;
}

/** Contains response data for the completeLecture operation. */
export type CompleteLectureResponse = BaseResponseSystemObject;

/** Optional parameters. */
export interface GetModuleByIdOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getModuleById operation. */
export type GetModuleByIdResponse = UseCasesModuleGetByIdResponse;

/** Optional parameters. */
export interface GetAllModulesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAllModules operation. */
export type GetAllModulesResponse = UseCasesModuleGetAllResponse[];

/** Optional parameters. */
export interface CreateModuleOptionalParams
  extends coreClient.OperationOptions {
  body?: UseCasesModuleCreateRequest;
}

/** Contains response data for the createModule operation. */
export type CreateModuleResponse = BaseResponseSystemObject;

/** Optional parameters. */
export interface DeleteModuleOptionalParams
  extends coreClient.OperationOptions {
  id?: string;
}

/** Contains response data for the deleteModule operation. */
export type DeleteModuleResponse = BaseResponseSystemObject;

/** Optional parameters. */
export interface SearchItemsOptionalParams extends coreClient.OperationOptions {
  query?: string;
  page?: number;
  pageSize?: number;
}

/** Contains response data for the searchItems operation. */
export type SearchItemsResponse = UseCasesSearchResponse;

/** Optional parameters. */
export interface GetStudentByIdOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getStudentById operation. */
export type GetStudentByIdResponse = UseCasesStudentGetByIdResponse;

/** Optional parameters. */
export interface GetAllStudentsOptionalParams
  extends coreClient.OperationOptions {
  skip?: number;
  take?: number;
}

/** Contains response data for the getAllStudents operation. */
export type GetAllStudentsResponse = UseCasesStudentGetAllResponse[];

/** Optional parameters. */
export interface GetStudentCourseProgressOptionalParams
  extends coreClient.OperationOptions {
  courseId?: string;
  studentId?: string;
}

/** Contains response data for the getStudentCourseProgress operation. */
export type GetStudentCourseProgressResponse =
  UseCasesStudentGetStudentCourseProgressResponse;

/** Optional parameters. */
export interface GetLastStudentCourseOptionalParams
  extends coreClient.OperationOptions {
  studentId?: string;
}

/** Contains response data for the getLastStudentCourse operation. */
export type GetLastStudentCourseResponse =
  BaseResponseUseCasesStudentGetLastStudentCourseResponse;

/** Optional parameters. */
export interface GetStudentModuleProgressOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getStudentModuleProgress operation. */
export type GetStudentModuleProgressResponse =
  UseCasesStudentGetStudentModuleProgressResponse;

/** Optional parameters. */
export interface CreateStudentOptionalParams
  extends coreClient.OperationOptions {
  name?: string;
  picture?: coreRestPipeline.RequestBodyType;
  userId?: string;
  isFreeStudent?: boolean;
}

/** Contains response data for the createStudent operation. */
export type CreateStudentResponse = BaseResponseSystemObject;

/** Optional parameters. */
export interface SubscribeStudentToCourseOptionalParams
  extends coreClient.OperationOptions {
  studentId?: string;
  courseId?: string;
}

/** Contains response data for the subscribeStudentToCourse operation. */
export type SubscribeStudentToCourseResponse =
  UseCasesStudentSubscribeCourseResponse;

/** Optional parameters. */
export interface DeleteStudentOptionalParams
  extends coreClient.OperationOptions {
  id?: string;
}

/** Contains response data for the deleteStudent operation. */
export type DeleteStudentResponse = BaseResponseSystemObject;

/** Optional parameters. */
export interface GetTeacherByIdOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getTeacherById operation. */
export type GetTeacherByIdResponse = UseCasesTeacherGetByIdResponse;

/** Optional parameters. */
export interface GetAllTeachersOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getAllTeachers operation. */
export type GetAllTeachersResponse = UseCasesTeacherGetAllResponse[];

/** Optional parameters. */
export interface CreateTeacherOptionalParams
  extends coreClient.OperationOptions {
  name?: string;
  description?: string;
  picture?: coreRestPipeline.RequestBodyType;
  email?: string;
  cpf?: string;
  phone?: string;
  endereco?: string;
  cep?: string;
  tiktok?: string;
  instagram?: string;
  gitHub?: string;
}

/** Contains response data for the createTeacher operation. */
export type CreateTeacherResponse = BaseResponseSystemObject;

/** Optional parameters. */
export interface DeleteTeacherOptionalParams
  extends coreClient.OperationOptions {
  id?: string;
}

/** Contains response data for the deleteTeacher operation. */
export type DeleteTeacherResponse = BaseResponseSystemObject;

/** Optional parameters. */
export interface UserLoginOptionalParams extends coreClient.OperationOptions {
  body?: UseCasesUserLoginRequest;
}

/** Contains response data for the userLogin operation. */
export type UserLoginResponse = UseCasesUserLoginResponse;

/** Optional parameters. */
export interface UserRegisterOptionalParams
  extends coreClient.OperationOptions {
  body?: UseCasesUserRegisterRequest;
}

/** Contains response data for the userRegister operation. */
export type UserRegisterResponse = BaseResponseSystemObject;

/** Optional parameters. */
export interface UserActivateOptionalParams
  extends coreClient.OperationOptions {
  code?: string;
  email?: string;
}

/** Contains response data for the userActivate operation. */
export type UserActivateResponse = BaseResponseSystemObject;

/** Optional parameters. */
export interface UserForgotPasswordOptionalParams
  extends coreClient.OperationOptions {
  body?: UseCasesUserForgotPasswordRequest;
}

/** Contains response data for the userForgotPassword operation. */
export type UserForgotPasswordResponse = BaseResponseSystemObject;

/** Optional parameters. */
export interface UserResendCodeOptionalParams
  extends coreClient.OperationOptions {
  body?: UseCasesUserResendCodeRequest;
}

/** Contains response data for the userResendCode operation. */
export type UserResendCodeResponse = BaseResponseSystemObject;

/** Optional parameters. */
export interface UserForgotPasswordActivateOptionalParams
  extends coreClient.OperationOptions {
  body?: UseCasesUserForgotPasswordActivateRequest;
}

/** Contains response data for the userForgotPasswordActivate operation. */
export type UserForgotPasswordActivateResponse = BaseResponseSystemObject;

/** Optional parameters. */
export interface PresentationOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Overrides client endpoint. */
  endpoint?: string;
}
