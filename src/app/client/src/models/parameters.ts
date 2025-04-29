import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter,
} from "@azure/core-client";
import {
  UseCasesModuleCreateRequest as UseCasesModuleCreateRequestMapper,
  UseCasesUserLoginRequest as UseCasesUserLoginRequestMapper,
  UseCasesUserRegisterRequest as UseCasesUserRegisterRequestMapper,
  UseCasesUserForgotPasswordRequest as UseCasesUserForgotPasswordRequestMapper,
  UseCasesUserResendCodeRequest as UseCasesUserResendCodeRequestMapper,
  UseCasesUserForgotPasswordActivateRequest as UseCasesUserForgotPasswordActivateRequestMapper,
} from "../models/mappers.js";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String",
    },
  },
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const skip: OperationQueryParameter = {
  parameterPath: ["options", "skip"],
  mapper: {
    serializedName: "skip",
    type: {
      name: "Number",
    },
  },
};

export const take: OperationQueryParameter = {
  parameterPath: ["options", "take"],
  mapper: {
    serializedName: "take",
    type: {
      name: "Number",
    },
  },
};

export const id: OperationQueryParameter = {
  parameterPath: ["options", "id"],
  mapper: {
    serializedName: "Id",
    type: {
      name: "Uuid",
    },
  },
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "multipart/form-data",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String",
    },
  },
};

export const name: OperationParameter = {
  parameterPath: ["options", "name"],
  mapper: {
    serializedName: "Name",
    type: {
      name: "String",
    },
  },
};

export const description: OperationParameter = {
  parameterPath: ["options", "description"],
  mapper: {
    serializedName: "Description",
    type: {
      name: "String",
    },
  },
};

export const imagem: OperationParameter = {
  parameterPath: ["options", "imagem"],
  mapper: {
    serializedName: "Imagem",
    type: {
      name: "Stream",
    },
  },
};

export const accept1: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String",
    },
  },
};

export const aboutDescription: OperationParameter = {
  parameterPath: ["options", "aboutDescription"],
  mapper: {
    serializedName: "AboutDescription",
    type: {
      name: "String",
    },
  },
};

export const picture: OperationParameter = {
  parameterPath: ["options", "picture"],
  mapper: {
    serializedName: "Picture",
    type: {
      name: "Stream",
    },
  },
};

export const gitHubUrl: OperationParameter = {
  parameterPath: ["options", "gitHubUrl"],
  mapper: {
    serializedName: "GitHubUrl",
    type: {
      name: "String",
    },
  },
};

export const notionUrl: OperationParameter = {
  parameterPath: ["options", "notionUrl"],
  mapper: {
    serializedName: "NotionUrl",
    type: {
      name: "String",
    },
  },
};

export const iAId: OperationParameter = {
  parameterPath: ["options", "iAId"],
  mapper: {
    serializedName: "IAId",
    type: {
      name: "Uuid",
    },
  },
};

export const categoryId: OperationParameter = {
  parameterPath: ["options", "categoryId"],
  mapper: {
    serializedName: "CategoryId",
    type: {
      name: "Uuid",
    },
  },
};

export const trailer: OperationParameter = {
  parameterPath: ["options", "trailer"],
  mapper: {
    serializedName: "Trailer",
    type: {
      name: "Stream",
    },
  },
};

export const parametersId: OperationParameter = {
  parameterPath: ["options", "parametersId"],
  mapper: {
    serializedName: "ParametersId",
    type: {
      name: "Uuid",
    },
  },
};

export const teacherId: OperationParameter = {
  parameterPath: ["options", "teacherId"],
  mapper: {
    serializedName: "TeacherId",
    type: {
      name: "Uuid",
    },
  },
};

export const price: OperationParameter = {
  parameterPath: ["options", "price"],
  mapper: {
    serializedName: "Price",
    type: {
      name: "Number",
    },
  },
};

export const totalHours: OperationParameter = {
  parameterPath: ["options", "totalHours"],
  mapper: {
    serializedName: "TotalHours",
    type: {
      name: "Number",
    },
  },
};

export const categoryId1: OperationQueryParameter = {
  parameterPath: ["options", "categoryId"],
  mapper: {
    serializedName: "categoryId",
    type: {
      name: "Uuid",
    },
  },
};

export const id1: OperationURLParameter = {
  parameterPath: "id",
  mapper: {
    serializedName: "id",
    required: true,
    type: {
      name: "Uuid",
    },
  },
};

export const iAId1: OperationQueryParameter = {
  parameterPath: ["options", "iAId"],
  mapper: {
    serializedName: "IAId",
    type: {
      name: "Uuid",
    },
  },
};

export const id2: OperationQueryParameter = {
  parameterPath: ["options", "id"],
  mapper: {
    serializedName: "id",
    type: {
      name: "Uuid",
    },
  },
};

export const moduleid: OperationParameter = {
  parameterPath: ["options", "moduleid"],
  mapper: {
    serializedName: "Moduleid",
    type: {
      name: "Uuid",
    },
  },
};

export const tempo: OperationParameter = {
  parameterPath: ["options", "tempo"],
  mapper: {
    serializedName: "Tempo",
    type: {
      name: "String",
    },
  },
};

export const file: OperationParameter = {
  parameterPath: ["options", "file"],
  mapper: {
    serializedName: "File",
    type: {
      name: "Stream",
    },
  },
};

export const courseId: OperationURLParameter = {
  parameterPath: "courseId",
  mapper: {
    serializedName: "courseId",
    required: true,
    type: {
      name: "Uuid",
    },
  },
};

export const studentId: OperationURLParameter = {
  parameterPath: "studentId",
  mapper: {
    serializedName: "studentId",
    required: true,
    type: {
      name: "Uuid",
    },
  },
};

export const page: OperationURLParameter = {
  parameterPath: "page",
  mapper: {
    serializedName: "page",
    required: true,
    type: {
      name: "Number",
    },
  },
};

export const pageSize: OperationURLParameter = {
  parameterPath: "pageSize",
  mapper: {
    serializedName: "pageSize",
    required: true,
    type: {
      name: "Number",
    },
  },
};

export const lectureId: OperationURLParameter = {
  parameterPath: "lectureId",
  mapper: {
    serializedName: "lectureId",
    required: true,
    type: {
      name: "Uuid",
    },
  },
};

export const courseId1: OperationQueryParameter = {
  parameterPath: ["options", "courseId"],
  mapper: {
    serializedName: "courseId",
    type: {
      name: "Uuid",
    },
  },
};

export const studentId1: OperationQueryParameter = {
  parameterPath: ["options", "studentId"],
  mapper: {
    serializedName: "studentId",
    type: {
      name: "Uuid",
    },
  },
};

export const lectureId1: OperationQueryParameter = {
  parameterPath: ["options", "lectureId"],
  mapper: {
    serializedName: "lectureId",
    type: {
      name: "Uuid",
    },
  },
};

export const contentType1: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json-patch+json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String",
    },
  },
};

export const body: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: UseCasesModuleCreateRequestMapper,
};

export const query: OperationQueryParameter = {
  parameterPath: ["options", "query"],
  mapper: {
    serializedName: "query",
    type: {
      name: "String",
    },
  },
};

export const page1: OperationQueryParameter = {
  parameterPath: ["options", "page"],
  mapper: {
    defaultValue: 0,
    serializedName: "page",
    type: {
      name: "Number",
    },
  },
};

export const pageSize1: OperationQueryParameter = {
  parameterPath: ["options", "pageSize"],
  mapper: {
    defaultValue: 10,
    serializedName: "pageSize",
    type: {
      name: "Number",
    },
  },
};

export const moduleId: OperationURLParameter = {
  parameterPath: "moduleId",
  mapper: {
    serializedName: "moduleId",
    required: true,
    type: {
      name: "Uuid",
    },
  },
};

export const userId: OperationParameter = {
  parameterPath: ["options", "userId"],
  mapper: {
    serializedName: "UserId",
    type: {
      name: "Uuid",
    },
  },
};

export const isFreeStudent: OperationParameter = {
  parameterPath: ["options", "isFreeStudent"],
  mapper: {
    serializedName: "IsFreeStudent",
    type: {
      name: "Boolean",
    },
  },
};

export const studentId2: OperationQueryParameter = {
  parameterPath: ["options", "studentId"],
  mapper: {
    serializedName: "StudentId",
    type: {
      name: "Uuid",
    },
  },
};

export const courseId2: OperationQueryParameter = {
  parameterPath: ["options", "courseId"],
  mapper: {
    serializedName: "CourseId",
    type: {
      name: "Uuid",
    },
  },
};

export const id3: OperationURLParameter = {
  parameterPath: "id",
  mapper: {
    serializedName: "Id",
    required: true,
    type: {
      name: "Uuid",
    },
  },
};

export const email: OperationParameter = {
  parameterPath: ["options", "email"],
  mapper: {
    serializedName: "Email",
    type: {
      name: "String",
    },
  },
};

export const cpf: OperationParameter = {
  parameterPath: ["options", "cpf"],
  mapper: {
    serializedName: "Cpf",
    type: {
      name: "String",
    },
  },
};

export const phone: OperationParameter = {
  parameterPath: ["options", "phone"],
  mapper: {
    serializedName: "Phone",
    type: {
      name: "String",
    },
  },
};

export const endereco: OperationParameter = {
  parameterPath: ["options", "endereco"],
  mapper: {
    serializedName: "Endereco",
    type: {
      name: "String",
    },
  },
};

export const cep: OperationParameter = {
  parameterPath: ["options", "cep"],
  mapper: {
    serializedName: "Cep",
    type: {
      name: "String",
    },
  },
};

export const tiktok: OperationParameter = {
  parameterPath: ["options", "tiktok"],
  mapper: {
    serializedName: "Tiktok",
    type: {
      name: "String",
    },
  },
};

export const instagram: OperationParameter = {
  parameterPath: ["options", "instagram"],
  mapper: {
    serializedName: "Instagram",
    type: {
      name: "String",
    },
  },
};

export const gitHub: OperationParameter = {
  parameterPath: ["options", "gitHub"],
  mapper: {
    serializedName: "GitHub",
    type: {
      name: "String",
    },
  },
};

export const body1: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: UseCasesUserLoginRequestMapper,
};

export const body2: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: UseCasesUserRegisterRequestMapper,
};

export const code: OperationQueryParameter = {
  parameterPath: ["options", "code"],
  mapper: {
    serializedName: "code",
    type: {
      name: "String",
    },
  },
};

export const email1: OperationQueryParameter = {
  parameterPath: ["options", "email"],
  mapper: {
    serializedName: "email",
    type: {
      name: "String",
    },
  },
};

export const body3: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: UseCasesUserForgotPasswordRequestMapper,
};

export const body4: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: UseCasesUserResendCodeRequestMapper,
};

export const body5: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: UseCasesUserForgotPasswordActivateRequestMapper,
};
