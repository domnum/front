import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import * as Parameters from "./models/parameters.js";
import * as Mappers from "./models/mappers.js";
import {
  PresentationOptionalParams,
  GetAllCategoriesOptionalParams,
  GetAllCategoriesResponse,
  GetCategoryByIdOptionalParams,
  GetCategoryByIdResponse,
  CreateCategoryOptionalParams,
  CreateCategoryResponse,
  DeleteCategoryOptionalParams,
  DeleteCategoryResponse,
  CreateCourseOptionalParams,
  CreateCourseResponse,
  GetAllCoursesOptionalParams,
  GetAllCoursesResponse,
  GetCoursesByCategoryOptionalParams,
  GetCoursesByCategoryResponse,
  GetCourseByIdOptionalParams,
  GetCourseByIdResponse,
  GetCoursesByIAOptionalParams,
  GetCoursesByIAResponse,
  GetMostPopularCoursesOptionalParams,
  GetMostPopularCoursesResponse,
  DeleteCourseOptionalParams,
  DeleteCourseResponse,
  CreateIAOptionalParams,
  CreateIAResponse,
  GetAllIAsOptionalParams,
  GetAllIAsResponse,
  DeleteIAOptionalParams,
  DeleteIAResponse,
  CreateLectureOptionalParams,
  CreateLectureResponse,
  DeleteLectureOptionalParams,
  DeleteLectureResponse,
  GetAllLecturesOptionalParams,
  GetAllLecturesResponse,
  IsLectureCompletedOptionalParams,
  IsLectureCompletedResponse,
  CompleteLectureOptionalParams,
  CompleteLectureResponse,
  GetModuleByIdOptionalParams,
  GetModuleByIdResponse,
  GetAllModulesOptionalParams,
  GetAllModulesResponse,
  CreateModuleOptionalParams,
  CreateModuleResponse,
  DeleteModuleOptionalParams,
  DeleteModuleResponse,
  SearchItemsOptionalParams,
  SearchItemsResponse,
  GetStudentByIdOptionalParams,
  GetStudentByIdResponse,
  GetAllStudentsOptionalParams,
  GetAllStudentsResponse,
  GetStudentCourseProgressOptionalParams,
  GetStudentCourseProgressResponse,
  GetLastStudentCourseOptionalParams,
  GetLastStudentCourseResponse,
  GetStudentModuleProgressOptionalParams,
  GetStudentModuleProgressResponse,
  CreateStudentOptionalParams,
  CreateStudentResponse,
  SubscribeStudentToCourseOptionalParams,
  SubscribeStudentToCourseResponse,
  DeleteStudentOptionalParams,
  DeleteStudentResponse,
  GetTeacherByIdOptionalParams,
  GetTeacherByIdResponse,
  GetAllTeachersOptionalParams,
  GetAllTeachersResponse,
  CreateTeacherOptionalParams,
  CreateTeacherResponse,
  DeleteTeacherOptionalParams,
  DeleteTeacherResponse,
  UserLoginOptionalParams,
  UserLoginResponse,
  UserRegisterOptionalParams,
  UserRegisterResponse,
  UserActivateOptionalParams,
  UserActivateResponse,
  UserForgotPasswordOptionalParams,
  UserForgotPasswordResponse,
  UserResendCodeOptionalParams,
  UserResendCodeResponse,
  UserForgotPasswordActivateOptionalParams,
  UserForgotPasswordActivateResponse,
} from "./models/index.js";

export class Presentation extends coreClient.ServiceClient {
  $host: string;

  /**
   * Initializes a new instance of the Presentation class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param $host server parameter
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    $host: string,
    options?: PresentationOptionalParams,
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if ($host === undefined) {
      throw new Error("'$host' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: PresentationOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials,
    };

    const packageDetails = `azsdk-js-presentation/1.0.0-beta.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    if (!options.credentialScopes) {
      options.credentialScopes = ["https://management.azure.com/.default"];
    }
    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix,
      },
      endpoint: options.endpoint ?? options.baseUri ?? "{$host}",
    };
    super(optionsWithDefaults);

    let bearerTokenAuthenticationPolicyFound: boolean = false;
    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] =
        options.pipeline.getOrderedPolicies();
      bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName,
      );
    }
    if (
      !options ||
      !options.pipeline ||
      options.pipeline.getOrderedPolicies().length == 0 ||
      !bearerTokenAuthenticationPolicyFound
    ) {
      this.pipeline.removePolicy({
        name: coreRestPipeline.bearerTokenAuthenticationPolicyName,
      });
      this.pipeline.addPolicy(
        coreRestPipeline.bearerTokenAuthenticationPolicy({
          credential: credentials,
          scopes:
            optionsWithDefaults.credentialScopes ??
            `${optionsWithDefaults.endpoint}/.default`,
          challengeCallbacks: {
            authorizeRequestOnChallenge:
              coreClient.authorizeRequestOnClaimChallenge,
          },
        }),
      );
    }
    // Parameter assignments
    this.$host = $host;
  }

  /** @param options The options parameters. */
  getAllCategories(
    options?: GetAllCategoriesOptionalParams,
  ): Promise<GetAllCategoriesResponse> {
    return this.sendOperationRequest(
      { options },
      getAllCategoriesOperationSpec,
    );
  }

  /** @param options The options parameters. */
  getCategoryById(
    options?: GetCategoryByIdOptionalParams,
  ): Promise<GetCategoryByIdResponse> {
    return this.sendOperationRequest({ options }, getCategoryByIdOperationSpec);
  }

  /** @param options The options parameters. */
  createCategory(
    options?: CreateCategoryOptionalParams,
  ): Promise<CreateCategoryResponse> {
    return this.sendOperationRequest({ options }, createCategoryOperationSpec);
  }

  /** @param options The options parameters. */
  deleteCategory(
    options?: DeleteCategoryOptionalParams,
  ): Promise<DeleteCategoryResponse> {
    return this.sendOperationRequest({ options }, deleteCategoryOperationSpec);
  }

  /** @param options The options parameters. */
  createCourse(
    options?: CreateCourseOptionalParams,
  ): Promise<CreateCourseResponse> {
    return this.sendOperationRequest({ options }, createCourseOperationSpec);
  }

  /** @param options The options parameters. */
  getAllCourses(
    options?: GetAllCoursesOptionalParams,
  ): Promise<GetAllCoursesResponse> {
    return this.sendOperationRequest({ options }, getAllCoursesOperationSpec);
  }

  /** @param options The options parameters. */
  getCoursesByCategory(
    options?: GetCoursesByCategoryOptionalParams,
  ): Promise<GetCoursesByCategoryResponse> {
    return this.sendOperationRequest(
      { options },
      getCoursesByCategoryOperationSpec,
    );
  }

  /**
   * @param id
   * @param options The options parameters.
   */
  getCourseById(
    id: string,
    options?: GetCourseByIdOptionalParams,
  ): Promise<GetCourseByIdResponse> {
    return this.sendOperationRequest(
      { id, options },
      getCourseByIdOperationSpec,
    );
  }

  /** @param options The options parameters. */
  getCoursesByIA(
    options?: GetCoursesByIAOptionalParams,
  ): Promise<GetCoursesByIAResponse> {
    return this.sendOperationRequest({ options }, getCoursesByIAOperationSpec);
  }

  /** @param options The options parameters. */
  getMostPopularCourses(
    options?: GetMostPopularCoursesOptionalParams,
  ): Promise<GetMostPopularCoursesResponse> {
    return this.sendOperationRequest(
      { options },
      getMostPopularCoursesOperationSpec,
    );
  }

  /** @param options The options parameters. */
  deleteCourse(
    options?: DeleteCourseOptionalParams,
  ): Promise<DeleteCourseResponse> {
    return this.sendOperationRequest({ options }, deleteCourseOperationSpec);
  }

  /** @param options The options parameters. */
  createIA(options?: CreateIAOptionalParams): Promise<CreateIAResponse> {
    return this.sendOperationRequest({ options }, createIAOperationSpec);
  }

  /** @param options The options parameters. */
  getAllIAs(options?: GetAllIAsOptionalParams): Promise<GetAllIAsResponse> {
    return this.sendOperationRequest({ options }, getAllIAsOperationSpec);
  }

  /** @param options The options parameters. */
  deleteIA(options?: DeleteIAOptionalParams): Promise<DeleteIAResponse> {
    return this.sendOperationRequest({ options }, deleteIAOperationSpec);
  }

  /** @param options The options parameters. */
  createLecture(
    options?: CreateLectureOptionalParams,
  ): Promise<CreateLectureResponse> {
    return this.sendOperationRequest({ options }, createLectureOperationSpec);
  }

  /**
   * @param id
   * @param options The options parameters.
   */
  deleteLecture(
    id: string,
    options?: DeleteLectureOptionalParams,
  ): Promise<DeleteLectureResponse> {
    return this.sendOperationRequest(
      { id, options },
      deleteLectureOperationSpec,
    );
  }

  /**
   * @param courseId
   * @param studentId
   * @param page
   * @param pageSize
   * @param options The options parameters.
   */
  getAllLectures(
    courseId: string,
    studentId: string,
    page: number,
    pageSize: number,
    options?: GetAllLecturesOptionalParams,
  ): Promise<GetAllLecturesResponse> {
    return this.sendOperationRequest(
      { courseId, studentId, page, pageSize, options },
      getAllLecturesOperationSpec,
    );
  }

  /**
   * @param studentId
   * @param lectureId
   * @param options The options parameters.
   */
  isLectureCompleted(
    studentId: string,
    lectureId: string,
    options?: IsLectureCompletedOptionalParams,
  ): Promise<IsLectureCompletedResponse> {
    return this.sendOperationRequest(
      { studentId, lectureId, options },
      isLectureCompletedOperationSpec,
    );
  }

  /** @param options The options parameters. */
  completeLecture(
    options?: CompleteLectureOptionalParams,
  ): Promise<CompleteLectureResponse> {
    return this.sendOperationRequest({ options }, completeLectureOperationSpec);
  }

  /**
   * @param id
   * @param options The options parameters.
   */
  getModuleById(
    id: string,
    options?: GetModuleByIdOptionalParams,
  ): Promise<GetModuleByIdResponse> {
    return this.sendOperationRequest(
      { id, options },
      getModuleByIdOperationSpec,
    );
  }

  /** @param options The options parameters. */
  getAllModules(
    options?: GetAllModulesOptionalParams,
  ): Promise<GetAllModulesResponse> {
    return this.sendOperationRequest({ options }, getAllModulesOperationSpec);
  }

  /** @param options The options parameters. */
  createModule(
    options?: CreateModuleOptionalParams,
  ): Promise<CreateModuleResponse> {
    return this.sendOperationRequest({ options }, createModuleOperationSpec);
  }

  /** @param options The options parameters. */
  deleteModule(
    options?: DeleteModuleOptionalParams,
  ): Promise<DeleteModuleResponse> {
    return this.sendOperationRequest({ options }, deleteModuleOperationSpec);
  }

  /** @param options The options parameters. */
  searchItems(
    options?: SearchItemsOptionalParams,
  ): Promise<SearchItemsResponse> {
    return this.sendOperationRequest({ options }, searchItemsOperationSpec);
  }

  /**
   * @param id
   * @param options The options parameters.
   */
  getStudentById(
    id: string,
    options?: GetStudentByIdOptionalParams,
  ): Promise<GetStudentByIdResponse> {
    return this.sendOperationRequest(
      { id, options },
      getStudentByIdOperationSpec,
    );
  }

  /** @param options The options parameters. */
  getAllStudents(
    options?: GetAllStudentsOptionalParams,
  ): Promise<GetAllStudentsResponse> {
    return this.sendOperationRequest({ options }, getAllStudentsOperationSpec);
  }

  /** @param options The options parameters. */
  getStudentCourseProgress(
    options?: GetStudentCourseProgressOptionalParams,
  ): Promise<GetStudentCourseProgressResponse> {
    return this.sendOperationRequest(
      { options },
      getStudentCourseProgressOperationSpec,
    );
  }

  /** @param options The options parameters. */
  getLastStudentCourse(
    options?: GetLastStudentCourseOptionalParams,
  ): Promise<GetLastStudentCourseResponse> {
    return this.sendOperationRequest(
      { options },
      getLastStudentCourseOperationSpec,
    );
  }

  /**
   * @param moduleId
   * @param studentId
   * @param options The options parameters.
   */
  getStudentModuleProgress(
    moduleId: string,
    studentId: string,
    options?: GetStudentModuleProgressOptionalParams,
  ): Promise<GetStudentModuleProgressResponse> {
    return this.sendOperationRequest(
      { moduleId, studentId, options },
      getStudentModuleProgressOperationSpec,
    );
  }

  /** @param options The options parameters. */
  createStudent(
    options?: CreateStudentOptionalParams,
  ): Promise<CreateStudentResponse> {
    return this.sendOperationRequest({ options }, createStudentOperationSpec);
  }

  /** @param options The options parameters. */
  subscribeStudentToCourse(
    options?: SubscribeStudentToCourseOptionalParams,
  ): Promise<SubscribeStudentToCourseResponse> {
    return this.sendOperationRequest(
      { options },
      subscribeStudentToCourseOperationSpec,
    );
  }

  /** @param options The options parameters. */
  deleteStudent(
    options?: DeleteStudentOptionalParams,
  ): Promise<DeleteStudentResponse> {
    return this.sendOperationRequest({ options }, deleteStudentOperationSpec);
  }

  /**
   * @param id
   * @param options The options parameters.
   */
  getTeacherById(
    id: string,
    options?: GetTeacherByIdOptionalParams,
  ): Promise<GetTeacherByIdResponse> {
    return this.sendOperationRequest(
      { id, options },
      getTeacherByIdOperationSpec,
    );
  }

  /** @param options The options parameters. */
  getAllTeachers(
    options?: GetAllTeachersOptionalParams,
  ): Promise<GetAllTeachersResponse> {
    return this.sendOperationRequest({ options }, getAllTeachersOperationSpec);
  }

  /** @param options The options parameters. */
  createTeacher(
    options?: CreateTeacherOptionalParams,
  ): Promise<CreateTeacherResponse> {
    return this.sendOperationRequest({ options }, createTeacherOperationSpec);
  }

  /** @param options The options parameters. */
  deleteTeacher(
    options?: DeleteTeacherOptionalParams,
  ): Promise<DeleteTeacherResponse> {
    return this.sendOperationRequest({ options }, deleteTeacherOperationSpec);
  }

  /** @param options The options parameters. */
  userLogin(options?: UserLoginOptionalParams): Promise<UserLoginResponse> {
    return this.sendOperationRequest({ options }, userLoginOperationSpec);
  }

  /** @param options The options parameters. */
  userRegister(
    options?: UserRegisterOptionalParams,
  ): Promise<UserRegisterResponse> {
    return this.sendOperationRequest({ options }, userRegisterOperationSpec);
  }

  /** @param options The options parameters. */
  userActivate(
    options?: UserActivateOptionalParams,
  ): Promise<UserActivateResponse> {
    return this.sendOperationRequest({ options }, userActivateOperationSpec);
  }

  /** @param options The options parameters. */
  userForgotPassword(
    options?: UserForgotPasswordOptionalParams,
  ): Promise<UserForgotPasswordResponse> {
    return this.sendOperationRequest(
      { options },
      userForgotPasswordOperationSpec,
    );
  }

  /** @param options The options parameters. */
  userResendCode(
    options?: UserResendCodeOptionalParams,
  ): Promise<UserResendCodeResponse> {
    return this.sendOperationRequest({ options }, userResendCodeOperationSpec);
  }

  /** @param options The options parameters. */
  userForgotPasswordActivate(
    options?: UserForgotPasswordActivateOptionalParams,
  ): Promise<UserForgotPasswordActivateResponse> {
    return this.sendOperationRequest(
      { options },
      userForgotPasswordActivateOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getAllCategoriesOperationSpec: coreClient.OperationSpec = {
  path: "/Category/Get/All",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponseListUseCasesCategoryGetAllResponse,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    404: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    409: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  queryParameters: [Parameters.skip, Parameters.take],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const getCategoryByIdOperationSpec: coreClient.OperationSpec = {
  path: "/Category/Get/ById",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponseUseCasesCategoryGetByIdResponse,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    404: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    409: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  queryParameters: [Parameters.id],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const createCategoryOperationSpec: coreClient.OperationSpec = {
  path: "/Category/Create",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.BaseResponseUseCasesCategoryGetByIdResponse,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    404: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    409: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  formDataParameters: [
    Parameters.name,
    Parameters.description,
    Parameters.imagem,
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  serializer,
};
const deleteCategoryOperationSpec: coreClient.OperationSpec = {
  path: "/Category/Delete",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    404: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    409: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  queryParameters: [Parameters.id],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const createCourseOperationSpec: coreClient.OperationSpec = {
  path: "/Course/Create",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    404: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    409: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  formDataParameters: [
    Parameters.name,
    Parameters.description,
    Parameters.aboutDescription,
    Parameters.picture,
    Parameters.gitHubUrl,
    Parameters.notionUrl,
    Parameters.iAId,
    Parameters.categoryId,
    Parameters.trailer,
    Parameters.parametersId,
    Parameters.teacherId,
    Parameters.price,
    Parameters.totalHours,
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  serializer,
};
const getAllCoursesOperationSpec: coreClient.OperationSpec = {
  path: "/Course/Get/All",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponseListUseCasesCourseGetAllResponse,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    404: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    409: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  queryParameters: [Parameters.skip, Parameters.take],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const getCoursesByCategoryOperationSpec: coreClient.OperationSpec = {
  path: "/Course/Get/ByCategory",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponseListUseCasesCourseGetByCategoryResponse,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    404: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    409: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  queryParameters: [Parameters.skip, Parameters.take, Parameters.categoryId1],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const getCourseByIdOperationSpec: coreClient.OperationSpec = {
  path: "/Course/Get/ById/{id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponseUseCasesCourseGetByIdResponse,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    404: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    409: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  urlParameters: [Parameters.$host, Parameters.id1],
  headerParameters: [Parameters.accept],
  serializer,
};
const getCoursesByIAOperationSpec: coreClient.OperationSpec = {
  path: "/Course/Get/ByIA",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponseListUseCasesCourseGetByIAResponse,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    404: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    409: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  queryParameters: [Parameters.skip, Parameters.take, Parameters.iAId1],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const getMostPopularCoursesOperationSpec: coreClient.OperationSpec = {
  path: "/Course/Get/MostPopular",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponseListUseCasesCourseGetMostPopularResponse,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    404: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    409: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const deleteCourseOperationSpec: coreClient.OperationSpec = {
  path: "/Course/Delete",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    404: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    409: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  queryParameters: [Parameters.id2],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const createIAOperationSpec: coreClient.OperationSpec = {
  path: "/IA/Create",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    404: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    409: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  formDataParameters: [Parameters.name, Parameters.picture],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  serializer,
};
const getAllIAsOperationSpec: coreClient.OperationSpec = {
  path: "/IA/Get/All",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponseListUseCasesIAGetAllResponse,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    404: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    409: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  queryParameters: [Parameters.skip, Parameters.take],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const deleteIAOperationSpec: coreClient.OperationSpec = {
  path: "/IA/Delete",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    404: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    409: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  queryParameters: [Parameters.id],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const createLectureOperationSpec: coreClient.OperationSpec = {
  path: "/Lecture/Create",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    404: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    409: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  formDataParameters: [
    Parameters.name,
    Parameters.notionUrl,
    Parameters.moduleid,
    Parameters.tempo,
    Parameters.file,
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  serializer,
};
const deleteLectureOperationSpec: coreClient.OperationSpec = {
  path: "/Lecture/Delete/{id}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    404: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    409: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  urlParameters: [Parameters.$host, Parameters.id1],
  headerParameters: [Parameters.accept],
  serializer,
};
const getAllLecturesOperationSpec: coreClient.OperationSpec = {
  path: "/Lecture/Get/All/{courseId}/{studentId}/Page/{page}/PageSize/{pageSize}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.BaseResponseListUseCasesLectureGetAllCourseCompletedResponse,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    404: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    409: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.courseId,
    Parameters.studentId,
    Parameters.page,
    Parameters.pageSize,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const isLectureCompletedOperationSpec: coreClient.OperationSpec = {
  path: "/Lecture/Get/IsLectureCompleted/{studentId}/{lectureId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.BaseResponseUseCasesLectureGetIsLectureCompletedResponse,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    404: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    409: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  urlParameters: [Parameters.$host, Parameters.studentId, Parameters.lectureId],
  headerParameters: [Parameters.accept],
  serializer,
};
const completeLectureOperationSpec: coreClient.OperationSpec = {
  path: "/Lecture/CompleteLecture",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    404: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    409: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  queryParameters: [
    Parameters.courseId1,
    Parameters.studentId1,
    Parameters.lectureId1,
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const getModuleByIdOperationSpec: coreClient.OperationSpec = {
  path: "/Module/Get/{id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponseUseCasesModuleGetByIdResponse,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    404: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    409: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  urlParameters: [Parameters.$host, Parameters.id1],
  headerParameters: [Parameters.accept],
  serializer,
};
const getAllModulesOperationSpec: coreClient.OperationSpec = {
  path: "/Module/Get/All",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponseListUseCasesModuleGetAllResponse,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    404: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    409: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const createModuleOperationSpec: coreClient.OperationSpec = {
  path: "/Module/Create",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    404: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    409: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  requestBody: Parameters.body,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer,
};
const deleteModuleOperationSpec: coreClient.OperationSpec = {
  path: "/Module/Delete",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    404: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    409: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  queryParameters: [Parameters.id2],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const searchItemsOperationSpec: coreClient.OperationSpec = {
  path: "/Search",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponseUseCasesSearchResponse,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    404: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    409: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  queryParameters: [Parameters.query, Parameters.page1, Parameters.pageSize1],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const getStudentByIdOperationSpec: coreClient.OperationSpec = {
  path: "/Student/Get/{id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponseUseCasesStudentGetByIdResponse,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    404: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    409: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  urlParameters: [Parameters.$host, Parameters.id1],
  headerParameters: [Parameters.accept],
  serializer,
};
const getAllStudentsOperationSpec: coreClient.OperationSpec = {
  path: "/Student/Get/All",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponseListUseCasesStudentGetAllResponse,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    404: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    409: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  queryParameters: [Parameters.skip, Parameters.take],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const getStudentCourseProgressOperationSpec: coreClient.OperationSpec = {
  path: "/Student/CourseProgress",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.BaseResponseUseCasesStudentGetStudentCourseProgressResponse,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    404: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    409: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  queryParameters: [Parameters.courseId1, Parameters.studentId1],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const getLastStudentCourseOperationSpec: coreClient.OperationSpec = {
  path: "/Student/GetLastStudentCourse",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.BaseResponseUseCasesStudentGetLastStudentCourseResponse,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    404: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    409: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  queryParameters: [Parameters.studentId1],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const getStudentModuleProgressOperationSpec: coreClient.OperationSpec = {
  path: "/Student/ModuleProgress/Student/{studentId}/Module/{moduleId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.BaseResponseUseCasesStudentGetStudentModuleProgressResponse,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    404: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    409: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  urlParameters: [Parameters.$host, Parameters.studentId, Parameters.moduleId],
  headerParameters: [Parameters.accept],
  serializer,
};
const createStudentOperationSpec: coreClient.OperationSpec = {
  path: "/Student/Create",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    404: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    409: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  formDataParameters: [
    Parameters.name,
    Parameters.picture,
    Parameters.userId,
    Parameters.isFreeStudent,
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  serializer,
};
const subscribeStudentToCourseOperationSpec: coreClient.OperationSpec = {
  path: "/Student/SubscribeCourse",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponseUseCasesStudentSubscribeCourseResponse,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    404: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    409: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  queryParameters: [Parameters.studentId2, Parameters.courseId2],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const deleteStudentOperationSpec: coreClient.OperationSpec = {
  path: "/Student/Delete",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    404: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    409: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  queryParameters: [Parameters.id2],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const getTeacherByIdOperationSpec: coreClient.OperationSpec = {
  path: "/Teacher/Get/{Id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponseUseCasesTeacherGetByIdResponse,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    404: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    409: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  urlParameters: [Parameters.$host, Parameters.id3],
  headerParameters: [Parameters.accept],
  serializer,
};
const getAllTeachersOperationSpec: coreClient.OperationSpec = {
  path: "/Teacher/Get/All",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponseListUseCasesTeacherGetAllResponse,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    404: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    409: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const createTeacherOperationSpec: coreClient.OperationSpec = {
  path: "/Teacher/Create",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    404: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    409: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  formDataParameters: [
    Parameters.name,
    Parameters.description,
    Parameters.picture,
    Parameters.email,
    Parameters.cpf,
    Parameters.phone,
    Parameters.endereco,
    Parameters.cep,
    Parameters.tiktok,
    Parameters.instagram,
    Parameters.gitHub,
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  serializer,
};
const deleteTeacherOperationSpec: coreClient.OperationSpec = {
  path: "/Teacher/Delete",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    404: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    409: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  queryParameters: [Parameters.id],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const userLoginOperationSpec: coreClient.OperationSpec = {
  path: "/User/Login",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponseUseCasesUserLoginResponse,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    403: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  requestBody: Parameters.body1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer,
};
const userRegisterOperationSpec: coreClient.OperationSpec = {
  path: "/User/Register",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  requestBody: Parameters.body2,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer,
};
const userActivateOperationSpec: coreClient.OperationSpec = {
  path: "/User/Activate",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  queryParameters: [Parameters.code, Parameters.email1],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const userForgotPasswordOperationSpec: coreClient.OperationSpec = {
  path: "/User/Forgot-Password",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  requestBody: Parameters.body3,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer,
};
const userResendCodeOperationSpec: coreClient.OperationSpec = {
  path: "/User/Resend-Code",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  requestBody: Parameters.body4,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer,
};
const userForgotPasswordActivateOperationSpec: coreClient.OperationSpec = {
  path: "/User/Forgot-Password/Activate",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    400: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
    500: {
      bodyMapper: Mappers.BaseResponseSystemObject,
    },
  },
  requestBody: Parameters.body5,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer,
};
