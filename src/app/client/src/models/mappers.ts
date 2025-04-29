import * as coreClient from "@azure/core-client";

export const BaseResponseListUseCasesCategoryGetAllResponse: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "BaseResponseListUseCasesCategoryGetAllResponse",
      modelProperties: {
        statusCode: {
          serializedName: "statusCode",
          type: {
            name: "Number",
          },
        },
        message: {
          serializedName: "message",
          nullable: true,
          type: {
            name: "String",
          },
        },
        notifications: {
          serializedName: "notifications",
          nullable: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "FluntNotificationsNotification",
              },
            },
          },
        },
        response: {
          serializedName: "response",
          nullable: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "UseCasesCategoryGetAllResponse",
              },
            },
          },
        },
      },
    },
  };

export const FluntNotificationsNotification: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FluntNotificationsNotification",
    modelProperties: {
      key: {
        serializedName: "key",
        nullable: true,
        type: {
          name: "String",
        },
      },
      message: {
        serializedName: "message",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const UseCasesCategoryGetAllResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UseCasesCategoryGetAllResponse",
    modelProperties: {
      categoryId: {
        serializedName: "categoryId",
        nullable: true,
        type: {
          name: "Uuid",
        },
      },
      name: {
        serializedName: "name",
        nullable: true,
        type: {
          name: "String",
        },
      },
      description: {
        serializedName: "description",
        nullable: true,
        type: {
          name: "String",
        },
      },
      imageUrl: {
        serializedName: "imageUrl",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const BaseResponseSystemObject: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BaseResponseSystemObject",
    modelProperties: {
      statusCode: {
        serializedName: "statusCode",
        type: {
          name: "Number",
        },
      },
      message: {
        serializedName: "message",
        nullable: true,
        type: {
          name: "String",
        },
      },
      notifications: {
        serializedName: "notifications",
        nullable: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FluntNotificationsNotification",
            },
          },
        },
      },
      response: {
        serializedName: "response",
        nullable: true,
        type: {
          name: "any",
        },
      },
    },
  },
};

export const BaseResponseUseCasesCategoryGetByIdResponse: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "BaseResponseUseCasesCategoryGetByIdResponse",
      modelProperties: {
        statusCode: {
          serializedName: "statusCode",
          type: {
            name: "Number",
          },
        },
        message: {
          serializedName: "message",
          nullable: true,
          type: {
            name: "String",
          },
        },
        notifications: {
          serializedName: "notifications",
          nullable: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "FluntNotificationsNotification",
              },
            },
          },
        },
        response: {
          serializedName: "response",
          type: {
            name: "Composite",
            className: "UseCasesCategoryGetByIdResponse",
          },
        },
      },
    },
  };

export const UseCasesCategoryGetByIdResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UseCasesCategoryGetByIdResponse",
    modelProperties: {
      categoryId: {
        serializedName: "categoryId",
        nullable: true,
        type: {
          name: "Uuid",
        },
      },
      name: {
        serializedName: "name",
        nullable: true,
        type: {
          name: "String",
        },
      },
      description: {
        serializedName: "description",
        nullable: true,
        type: {
          name: "String",
        },
      },
      imageUrl: {
        serializedName: "imageUrl",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const BaseResponseListUseCasesCourseGetAllResponse: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "BaseResponseListUseCasesCourseGetAllResponse",
      modelProperties: {
        statusCode: {
          serializedName: "statusCode",
          type: {
            name: "Number",
          },
        },
        message: {
          serializedName: "message",
          nullable: true,
          type: {
            name: "String",
          },
        },
        notifications: {
          serializedName: "notifications",
          nullable: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "FluntNotificationsNotification",
              },
            },
          },
        },
        response: {
          serializedName: "response",
          nullable: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "UseCasesCourseGetAllResponse",
              },
            },
          },
        },
      },
    },
  };

export const UseCasesCourseGetAllResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UseCasesCourseGetAllResponse",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid",
        },
      },
      name: {
        serializedName: "name",
        nullable: true,
        type: {
          name: "String",
        },
      },
      subscribes: {
        serializedName: "subscribes",
        type: {
          name: "Number",
        },
      },
      description: {
        serializedName: "description",
        nullable: true,
        type: {
          name: "String",
        },
      },
      aboutDescription: {
        serializedName: "aboutDescription",
        nullable: true,
        type: {
          name: "String",
        },
      },
      imageUrl: {
        serializedName: "imageUrl",
        nullable: true,
        type: {
          name: "String",
        },
      },
      trailerUrl: {
        serializedName: "trailerUrl",
        nullable: true,
        type: {
          name: "String",
        },
      },
      teacherName: {
        serializedName: "teacherName",
        nullable: true,
        type: {
          name: "String",
        },
      },
      teacherPictureUrl: {
        serializedName: "teacherPictureUrl",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const BaseResponseListUseCasesCourseGetByCategoryResponse: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "BaseResponseListUseCasesCourseGetByCategoryResponse",
      modelProperties: {
        statusCode: {
          serializedName: "statusCode",
          type: {
            name: "Number",
          },
        },
        message: {
          serializedName: "message",
          nullable: true,
          type: {
            name: "String",
          },
        },
        notifications: {
          serializedName: "notifications",
          nullable: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "FluntNotificationsNotification",
              },
            },
          },
        },
        response: {
          serializedName: "response",
          nullable: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "UseCasesCourseGetByCategoryResponse",
              },
            },
          },
        },
      },
    },
  };

export const UseCasesCourseGetByCategoryResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UseCasesCourseGetByCategoryResponse",
    modelProperties: {
      id: {
        serializedName: "id",
        nullable: true,
        type: {
          name: "Uuid",
        },
      },
      name: {
        serializedName: "name",
        nullable: true,
        type: {
          name: "String",
        },
      },
      subscribes: {
        serializedName: "subscribes",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      description: {
        serializedName: "description",
        nullable: true,
        type: {
          name: "String",
        },
      },
      aboutDescription: {
        serializedName: "aboutDescription",
        nullable: true,
        type: {
          name: "String",
        },
      },
      imageUrl: {
        serializedName: "imageUrl",
        nullable: true,
        type: {
          name: "String",
        },
      },
      trailerUrl: {
        serializedName: "trailerUrl",
        nullable: true,
        type: {
          name: "String",
        },
      },
      teacherName: {
        serializedName: "teacherName",
        nullable: true,
        type: {
          name: "String",
        },
      },
      teacherPictureUrl: {
        serializedName: "teacherPictureUrl",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const BaseResponseUseCasesCourseGetByIdResponse: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "BaseResponseUseCasesCourseGetByIdResponse",
      modelProperties: {
        statusCode: {
          serializedName: "statusCode",
          type: {
            name: "Number",
          },
        },
        message: {
          serializedName: "message",
          nullable: true,
          type: {
            name: "String",
          },
        },
        notifications: {
          serializedName: "notifications",
          nullable: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "FluntNotificationsNotification",
              },
            },
          },
        },
        response: {
          serializedName: "response",
          type: {
            name: "Composite",
            className: "UseCasesCourseGetByIdResponse",
          },
        },
      },
    },
  };

export const UseCasesCourseGetByIdResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UseCasesCourseGetByIdResponse",
    modelProperties: {
      id: {
        serializedName: "id",
        nullable: true,
        type: {
          name: "Uuid",
        },
      },
      name: {
        serializedName: "name",
        nullable: true,
        type: {
          name: "String",
        },
      },
      subscribes: {
        serializedName: "subscribes",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      description: {
        serializedName: "description",
        nullable: true,
        type: {
          name: "String",
        },
      },
      aboutDescription: {
        serializedName: "aboutDescription",
        nullable: true,
        type: {
          name: "String",
        },
      },
      imageUrl: {
        serializedName: "imageUrl",
        nullable: true,
        type: {
          name: "String",
        },
      },
      trailerUrl: {
        serializedName: "trailerUrl",
        nullable: true,
        type: {
          name: "String",
        },
      },
      teacherName: {
        serializedName: "teacherName",
        nullable: true,
        type: {
          name: "String",
        },
      },
      teacherPictureUrl: {
        serializedName: "teacherPictureUrl",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const BaseResponseListUseCasesCourseGetByIAResponse: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "BaseResponseListUseCasesCourseGetByIAResponse",
      modelProperties: {
        statusCode: {
          serializedName: "statusCode",
          type: {
            name: "Number",
          },
        },
        message: {
          serializedName: "message",
          nullable: true,
          type: {
            name: "String",
          },
        },
        notifications: {
          serializedName: "notifications",
          nullable: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "FluntNotificationsNotification",
              },
            },
          },
        },
        response: {
          serializedName: "response",
          nullable: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "UseCasesCourseGetByIAResponse",
              },
            },
          },
        },
      },
    },
  };

export const UseCasesCourseGetByIAResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UseCasesCourseGetByIAResponse",
    modelProperties: {
      id: {
        serializedName: "id",
        nullable: true,
        type: {
          name: "Uuid",
        },
      },
      name: {
        serializedName: "name",
        nullable: true,
        type: {
          name: "String",
        },
      },
      subscribes: {
        serializedName: "subscribes",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      description: {
        serializedName: "description",
        nullable: true,
        type: {
          name: "String",
        },
      },
      aboutDescription: {
        serializedName: "aboutDescription",
        nullable: true,
        type: {
          name: "String",
        },
      },
      imageUrl: {
        serializedName: "imageUrl",
        nullable: true,
        type: {
          name: "String",
        },
      },
      trailerUrl: {
        serializedName: "trailerUrl",
        nullable: true,
        type: {
          name: "String",
        },
      },
      teacherName: {
        serializedName: "teacherName",
        nullable: true,
        type: {
          name: "String",
        },
      },
      teacherPictureUrl: {
        serializedName: "teacherPictureUrl",
        nullable: true,
        type: {
          name: "String",
        },
      },
      iaName: {
        serializedName: "iaName",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const BaseResponseListUseCasesCourseGetMostPopularResponse: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "BaseResponseListUseCasesCourseGetMostPopularResponse",
      modelProperties: {
        statusCode: {
          serializedName: "statusCode",
          type: {
            name: "Number",
          },
        },
        message: {
          serializedName: "message",
          nullable: true,
          type: {
            name: "String",
          },
        },
        notifications: {
          serializedName: "notifications",
          nullable: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "FluntNotificationsNotification",
              },
            },
          },
        },
        response: {
          serializedName: "response",
          nullable: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "UseCasesCourseGetMostPopularResponse",
              },
            },
          },
        },
      },
    },
  };

export const UseCasesCourseGetMostPopularResponse: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "UseCasesCourseGetMostPopularResponse",
      modelProperties: {
        id: {
          serializedName: "id",
          nullable: true,
          type: {
            name: "Uuid",
          },
        },
        name: {
          serializedName: "name",
          nullable: true,
          type: {
            name: "String",
          },
        },
        subscribes: {
          serializedName: "subscribes",
          nullable: true,
          type: {
            name: "Number",
          },
        },
        description: {
          serializedName: "description",
          nullable: true,
          type: {
            name: "String",
          },
        },
        aboutDescription: {
          serializedName: "aboutDescription",
          nullable: true,
          type: {
            name: "String",
          },
        },
        imageUrl: {
          serializedName: "imageUrl",
          nullable: true,
          type: {
            name: "String",
          },
        },
        trailerUrl: {
          serializedName: "trailerUrl",
          nullable: true,
          type: {
            name: "String",
          },
        },
        teacherName: {
          serializedName: "teacherName",
          nullable: true,
          type: {
            name: "String",
          },
        },
        teacherPictureUrl: {
          serializedName: "teacherPictureUrl",
          nullable: true,
          type: {
            name: "String",
          },
        },
      },
    },
  };

export const BaseResponseListUseCasesIAGetAllResponse: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "BaseResponseListUseCasesIAGetAllResponse",
      modelProperties: {
        statusCode: {
          serializedName: "statusCode",
          type: {
            name: "Number",
          },
        },
        message: {
          serializedName: "message",
          nullable: true,
          type: {
            name: "String",
          },
        },
        notifications: {
          serializedName: "notifications",
          nullable: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "FluntNotificationsNotification",
              },
            },
          },
        },
        response: {
          serializedName: "response",
          nullable: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "UseCasesIAGetAllResponse",
              },
            },
          },
        },
      },
    },
  };

export const UseCasesIAGetAllResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UseCasesIAGetAllResponse",
    modelProperties: {
      id: {
        serializedName: "id",
        nullable: true,
        type: {
          name: "Uuid",
        },
      },
      name: {
        serializedName: "name",
        nullable: true,
        type: {
          name: "String",
        },
      },
      pictureUrl: {
        serializedName: "pictureUrl",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const BaseResponseListUseCasesLectureGetAllCourseCompletedResponse: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "BaseResponseListUseCasesLectureGetAllCourseCompletedResponse",
      modelProperties: {
        statusCode: {
          serializedName: "statusCode",
          type: {
            name: "Number",
          },
        },
        message: {
          serializedName: "message",
          nullable: true,
          type: {
            name: "String",
          },
        },
        notifications: {
          serializedName: "notifications",
          nullable: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "FluntNotificationsNotification",
              },
            },
          },
        },
        response: {
          serializedName: "response",
          nullable: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "UseCasesLectureGetAllCourseCompletedResponse",
              },
            },
          },
        },
      },
    },
  };

export const UseCasesLectureGetAllCourseCompletedResponse: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "UseCasesLectureGetAllCourseCompletedResponse",
      modelProperties: {
        id: {
          serializedName: "id",
          nullable: true,
          type: {
            name: "Uuid",
          },
        },
        title: {
          serializedName: "title",
          nullable: true,
          type: {
            name: "String",
          },
        },
        description: {
          serializedName: "description",
          nullable: true,
          type: {
            name: "String",
          },
        },
        videoUrl: {
          serializedName: "videoUrl",
          nullable: true,
          type: {
            name: "String",
          },
        },
        completionDate: {
          serializedName: "completionDate",
          nullable: true,
          type: {
            name: "DateTime",
          },
        },
      },
    },
  };

export const BaseResponseUseCasesLectureGetIsLectureCompletedResponse: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "BaseResponseUseCasesLectureGetIsLectureCompletedResponse",
      modelProperties: {
        statusCode: {
          serializedName: "statusCode",
          type: {
            name: "Number",
          },
        },
        message: {
          serializedName: "message",
          nullable: true,
          type: {
            name: "String",
          },
        },
        notifications: {
          serializedName: "notifications",
          nullable: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "FluntNotificationsNotification",
              },
            },
          },
        },
        response: {
          serializedName: "response",
          type: {
            name: "Composite",
            className: "UseCasesLectureGetIsLectureCompletedResponse",
          },
        },
      },
    },
  };

export const UseCasesLectureGetIsLectureCompletedResponse: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "UseCasesLectureGetIsLectureCompletedResponse",
      modelProperties: {
        isCompleted: {
          serializedName: "isCompleted",
          type: {
            name: "Boolean",
          },
        },
      },
    },
  };

export const BaseResponseUseCasesModuleGetByIdResponse: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "BaseResponseUseCasesModuleGetByIdResponse",
      modelProperties: {
        statusCode: {
          serializedName: "statusCode",
          type: {
            name: "Number",
          },
        },
        message: {
          serializedName: "message",
          nullable: true,
          type: {
            name: "String",
          },
        },
        notifications: {
          serializedName: "notifications",
          nullable: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "FluntNotificationsNotification",
              },
            },
          },
        },
        response: {
          serializedName: "response",
          type: {
            name: "Composite",
            className: "UseCasesModuleGetByIdResponse",
          },
        },
      },
    },
  };

export const UseCasesModuleGetByIdResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UseCasesModuleGetByIdResponse",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid",
        },
      },
      name: {
        serializedName: "name",
        nullable: true,
        type: {
          name: "String",
        },
      },
      description: {
        serializedName: "description",
        nullable: true,
        type: {
          name: "String",
        },
      },
      courseName: {
        serializedName: "courseName",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const BaseResponseListUseCasesModuleGetAllResponse: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "BaseResponseListUseCasesModuleGetAllResponse",
      modelProperties: {
        statusCode: {
          serializedName: "statusCode",
          type: {
            name: "Number",
          },
        },
        message: {
          serializedName: "message",
          nullable: true,
          type: {
            name: "String",
          },
        },
        notifications: {
          serializedName: "notifications",
          nullable: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "FluntNotificationsNotification",
              },
            },
          },
        },
        response: {
          serializedName: "response",
          nullable: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "UseCasesModuleGetAllResponse",
              },
            },
          },
        },
      },
    },
  };

export const UseCasesModuleGetAllResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UseCasesModuleGetAllResponse",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid",
        },
      },
      name: {
        serializedName: "name",
        nullable: true,
        type: {
          name: "String",
        },
      },
      description: {
        serializedName: "description",
        nullable: true,
        type: {
          name: "String",
        },
      },
      courseName: {
        serializedName: "courseName",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const UseCasesModuleCreateRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UseCasesModuleCreateRequest",
    modelProperties: {
      name: {
        serializedName: "name",
        nullable: true,
        type: {
          name: "String",
        },
      },
      description: {
        serializedName: "description",
        nullable: true,
        type: {
          name: "String",
        },
      },
      courseId: {
        serializedName: "courseId",
        type: {
          name: "Uuid",
        },
      },
    },
  },
};

export const BaseResponseUseCasesSearchResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BaseResponseUseCasesSearchResponse",
    modelProperties: {
      statusCode: {
        serializedName: "statusCode",
        type: {
          name: "Number",
        },
      },
      message: {
        serializedName: "message",
        nullable: true,
        type: {
          name: "String",
        },
      },
      notifications: {
        serializedName: "notifications",
        nullable: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FluntNotificationsNotification",
            },
          },
        },
      },
      response: {
        serializedName: "response",
        type: {
          name: "Composite",
          className: "UseCasesSearchResponse",
        },
      },
    },
  },
};

export const UseCasesSearchResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UseCasesSearchResponse",
    modelProperties: {
      type: {
        serializedName: "type",
        nullable: true,
        type: {
          name: "String",
        },
      },
      id: {
        serializedName: "id",
        type: {
          name: "Uuid",
        },
      },
      name: {
        serializedName: "name",
        nullable: true,
        type: {
          name: "String",
        },
      },
      description: {
        serializedName: "description",
        nullable: true,
        type: {
          name: "String",
        },
      },
      imageUrl: {
        serializedName: "imageUrl",
        nullable: true,
        type: {
          name: "String",
        },
      },
      price: {
        serializedName: "price",
        nullable: true,
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const BaseResponseUseCasesStudentGetByIdResponse: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "BaseResponseUseCasesStudentGetByIdResponse",
      modelProperties: {
        statusCode: {
          serializedName: "statusCode",
          type: {
            name: "Number",
          },
        },
        message: {
          serializedName: "message",
          nullable: true,
          type: {
            name: "String",
          },
        },
        notifications: {
          serializedName: "notifications",
          nullable: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "FluntNotificationsNotification",
              },
            },
          },
        },
        response: {
          serializedName: "response",
          type: {
            name: "Composite",
            className: "UseCasesStudentGetByIdResponse",
          },
        },
      },
    },
  };

export const UseCasesStudentGetByIdResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UseCasesStudentGetByIdResponse",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid",
        },
      },
      name: {
        serializedName: "name",
        nullable: true,
        type: {
          name: "String",
        },
      },
      pictureUrl: {
        serializedName: "pictureUrl",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const BaseResponseListUseCasesStudentGetAllResponse: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "BaseResponseListUseCasesStudentGetAllResponse",
      modelProperties: {
        statusCode: {
          serializedName: "statusCode",
          type: {
            name: "Number",
          },
        },
        message: {
          serializedName: "message",
          nullable: true,
          type: {
            name: "String",
          },
        },
        notifications: {
          serializedName: "notifications",
          nullable: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "FluntNotificationsNotification",
              },
            },
          },
        },
        response: {
          serializedName: "response",
          nullable: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "UseCasesStudentGetAllResponse",
              },
            },
          },
        },
      },
    },
  };

export const UseCasesStudentGetAllResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UseCasesStudentGetAllResponse",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid",
        },
      },
      name: {
        serializedName: "name",
        nullable: true,
        type: {
          name: "String",
        },
      },
      pictureUrl: {
        serializedName: "pictureUrl",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const BaseResponseUseCasesStudentGetStudentCourseProgressResponse: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "BaseResponseUseCasesStudentGetStudentCourseProgressResponse",
      modelProperties: {
        statusCode: {
          serializedName: "statusCode",
          type: {
            name: "Number",
          },
        },
        message: {
          serializedName: "message",
          nullable: true,
          type: {
            name: "String",
          },
        },
        notifications: {
          serializedName: "notifications",
          nullable: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "FluntNotificationsNotification",
              },
            },
          },
        },
        response: {
          serializedName: "response",
          type: {
            name: "Composite",
            className: "UseCasesStudentGetStudentCourseProgressResponse",
          },
        },
      },
    },
  };

export const UseCasesStudentGetStudentCourseProgressResponse: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "UseCasesStudentGetStudentCourseProgressResponse",
      modelProperties: {
        progressPercentage: {
          serializedName: "progressPercentage",
          type: {
            name: "Number",
          },
        },
      },
    },
  };

export const BaseResponseUseCasesStudentGetLastStudentCourseResponse: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "BaseResponseUseCasesStudentGetLastStudentCourseResponse",
      modelProperties: {
        statusCode: {
          serializedName: "statusCode",
          type: {
            name: "Number",
          },
        },
        message: {
          serializedName: "message",
          nullable: true,
          type: {
            name: "String",
          },
        },
        notifications: {
          serializedName: "notifications",
          nullable: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "FluntNotificationsNotification",
              },
            },
          },
        },
        response: {
          serializedName: "response",
          type: {
            name: "Composite",
            className: "UseCasesStudentGetLastStudentCourseResponse",
          },
        },
      },
    },
  };

export const UseCasesStudentGetLastStudentCourseResponse: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "UseCasesStudentGetLastStudentCourseResponse",
      modelProperties: {
        courseId: {
          serializedName: "courseId",
          nullable: true,
          type: {
            name: "Uuid",
          },
        },
        courseName: {
          serializedName: "courseName",
          nullable: true,
          type: {
            name: "String",
          },
        },
        description: {
          serializedName: "description",
          nullable: true,
          type: {
            name: "String",
          },
        },
        imageUrl: {
          serializedName: "imageUrl",
          nullable: true,
          type: {
            name: "String",
          },
        },
        studentId: {
          serializedName: "studentId",
          nullable: true,
          type: {
            name: "Uuid",
          },
        },
      },
    },
  };

export const BaseResponseUseCasesStudentGetStudentModuleProgressResponse: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "BaseResponseUseCasesStudentGetStudentModuleProgressResponse",
      modelProperties: {
        statusCode: {
          serializedName: "statusCode",
          type: {
            name: "Number",
          },
        },
        message: {
          serializedName: "message",
          nullable: true,
          type: {
            name: "String",
          },
        },
        notifications: {
          serializedName: "notifications",
          nullable: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "FluntNotificationsNotification",
              },
            },
          },
        },
        response: {
          serializedName: "response",
          type: {
            name: "Composite",
            className: "UseCasesStudentGetStudentModuleProgressResponse",
          },
        },
      },
    },
  };

export const UseCasesStudentGetStudentModuleProgressResponse: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "UseCasesStudentGetStudentModuleProgressResponse",
      modelProperties: {
        progressPercentage: {
          serializedName: "progressPercentage",
          type: {
            name: "Number",
          },
        },
      },
    },
  };

export const BaseResponseUseCasesStudentSubscribeCourseResponse: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "BaseResponseUseCasesStudentSubscribeCourseResponse",
      modelProperties: {
        statusCode: {
          serializedName: "statusCode",
          type: {
            name: "Number",
          },
        },
        message: {
          serializedName: "message",
          nullable: true,
          type: {
            name: "String",
          },
        },
        notifications: {
          serializedName: "notifications",
          nullable: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "FluntNotificationsNotification",
              },
            },
          },
        },
        response: {
          serializedName: "response",
          type: {
            name: "Composite",
            className: "UseCasesStudentSubscribeCourseResponse",
          },
        },
      },
    },
  };

export const UseCasesStudentSubscribeCourseResponse: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "UseCasesStudentSubscribeCourseResponse",
      modelProperties: {
        studentId: {
          serializedName: "studentId",
          type: {
            name: "Uuid",
          },
        },
        courseId: {
          serializedName: "courseId",
          type: {
            name: "Uuid",
          },
        },
        studentName: {
          serializedName: "studentName",
          nullable: true,
          type: {
            name: "String",
          },
        },
        courseName: {
          serializedName: "courseName",
          nullable: true,
          type: {
            name: "String",
          },
        },
        enrollmentDate: {
          serializedName: "enrollmentDate",
          type: {
            name: "DateTime",
          },
        },
      },
    },
  };

export const BaseResponseUseCasesTeacherGetByIdResponse: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "BaseResponseUseCasesTeacherGetByIdResponse",
      modelProperties: {
        statusCode: {
          serializedName: "statusCode",
          type: {
            name: "Number",
          },
        },
        message: {
          serializedName: "message",
          nullable: true,
          type: {
            name: "String",
          },
        },
        notifications: {
          serializedName: "notifications",
          nullable: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "FluntNotificationsNotification",
              },
            },
          },
        },
        response: {
          serializedName: "response",
          type: {
            name: "Composite",
            className: "UseCasesTeacherGetByIdResponse",
          },
        },
      },
    },
  };

export const UseCasesTeacherGetByIdResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UseCasesTeacherGetByIdResponse",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid",
        },
      },
      name: {
        serializedName: "name",
        nullable: true,
        type: {
          name: "String",
        },
      },
      tiktok: {
        serializedName: "tiktok",
        nullable: true,
        type: {
          name: "String",
        },
      },
      instagram: {
        serializedName: "instagram",
        nullable: true,
        type: {
          name: "String",
        },
      },
      gitHub: {
        serializedName: "gitHub",
        nullable: true,
        type: {
          name: "String",
        },
      },
      description: {
        serializedName: "description",
        nullable: true,
        type: {
          name: "String",
        },
      },
      pictureUrl: {
        serializedName: "pictureUrl",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const BaseResponseListUseCasesTeacherGetAllResponse: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "BaseResponseListUseCasesTeacherGetAllResponse",
      modelProperties: {
        statusCode: {
          serializedName: "statusCode",
          type: {
            name: "Number",
          },
        },
        message: {
          serializedName: "message",
          nullable: true,
          type: {
            name: "String",
          },
        },
        notifications: {
          serializedName: "notifications",
          nullable: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "FluntNotificationsNotification",
              },
            },
          },
        },
        response: {
          serializedName: "response",
          nullable: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "UseCasesTeacherGetAllResponse",
              },
            },
          },
        },
      },
    },
  };

export const UseCasesTeacherGetAllResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UseCasesTeacherGetAllResponse",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid",
        },
      },
      name: {
        serializedName: "name",
        nullable: true,
        type: {
          name: "String",
        },
      },
      tiktok: {
        serializedName: "tiktok",
        nullable: true,
        type: {
          name: "String",
        },
      },
      instagram: {
        serializedName: "instagram",
        nullable: true,
        type: {
          name: "String",
        },
      },
      gitHub: {
        serializedName: "gitHub",
        nullable: true,
        type: {
          name: "String",
        },
      },
      description: {
        serializedName: "description",
        nullable: true,
        type: {
          name: "String",
        },
      },
      pictureUrl: {
        serializedName: "pictureUrl",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const UseCasesUserLoginRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UseCasesUserLoginRequest",
    modelProperties: {
      email: {
        serializedName: "email",
        nullable: true,
        type: {
          name: "String",
        },
      },
      password: {
        serializedName: "password",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const BaseResponseUseCasesUserLoginResponse: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "BaseResponseUseCasesUserLoginResponse",
      modelProperties: {
        statusCode: {
          serializedName: "statusCode",
          type: {
            name: "Number",
          },
        },
        message: {
          serializedName: "message",
          nullable: true,
          type: {
            name: "String",
          },
        },
        notifications: {
          serializedName: "notifications",
          nullable: true,
          type: {
            name: "Sequence",
            element: {
              type: {
                name: "Composite",
                className: "FluntNotificationsNotification",
              },
            },
          },
        },
        response: {
          serializedName: "response",
          type: {
            name: "Composite",
            className: "UseCasesUserLoginResponse",
          },
        },
      },
    },
  };

export const UseCasesUserLoginResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UseCasesUserLoginResponse",
    modelProperties: {
      statusCode: {
        serializedName: "statusCode",
        type: {
          name: "Number",
        },
      },
      message: {
        serializedName: "message",
        nullable: true,
        type: {
          name: "String",
        },
      },
      notifications: {
        serializedName: "notifications",
        nullable: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "FluntNotificationsNotification",
            },
          },
        },
      },
      response: {
        serializedName: "response",
        nullable: true,
        type: {
          name: "String",
        },
      },
      token: {
        serializedName: "token",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const UseCasesUserRegisterRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UseCasesUserRegisterRequest",
    modelProperties: {
      email: {
        serializedName: "email",
        nullable: true,
        type: {
          name: "String",
        },
      },
      firstName: {
        serializedName: "firstName",
        nullable: true,
        type: {
          name: "String",
        },
      },
      lastName: {
        serializedName: "lastName",
        nullable: true,
        type: {
          name: "String",
        },
      },
      phoneNumber: {
        serializedName: "phoneNumber",
        nullable: true,
        type: {
          name: "String",
        },
      },
      number: {
        serializedName: "number",
        nullable: true,
        type: {
          name: "Number",
        },
      },
      neighBordHood: {
        serializedName: "neighBordHood",
        nullable: true,
        type: {
          name: "String",
        },
      },
      road: {
        serializedName: "road",
        nullable: true,
        type: {
          name: "String",
        },
      },
      complement: {
        serializedName: "complement",
        nullable: true,
        type: {
          name: "String",
        },
      },
      password: {
        serializedName: "password",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const UseCasesUserForgotPasswordRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UseCasesUserForgotPasswordRequest",
    modelProperties: {
      email: {
        serializedName: "email",
        nullable: true,
        type: {
          name: "String",
        },
      },
    },
  },
};

export const UseCasesUserResendCodeRequest: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UseCasesUserResendCodeRequest",
    modelProperties: {
      email: {
        serializedName: "email",
        nullable: true,
        type: {
          name: "String",
        },
      },
      token: {
        serializedName: "token",
        type: {
          name: "Number",
        },
      },
    },
  },
};

export const UseCasesUserForgotPasswordActivateRequest: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className: "UseCasesUserForgotPasswordActivateRequest",
      modelProperties: {
        email: {
          serializedName: "email",
          nullable: true,
          type: {
            name: "String",
          },
        },
        token: {
          serializedName: "token",
          type: {
            name: "Number",
          },
        },
        newPassword: {
          serializedName: "newPassword",
          nullable: true,
          type: {
            name: "String",
          },
        },
      },
    },
  };

export const Paths4Wblc7CategoryCreatePostRequestbodyContentMultipartFormDataSchema: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "Paths4Wblc7CategoryCreatePostRequestbodyContentMultipartFormDataSchema",
      modelProperties: {
        name: {
          serializedName: "Name",
          type: {
            name: "String",
          },
        },
        description: {
          serializedName: "Description",
          type: {
            name: "String",
          },
        },
        imagem: {
          serializedName: "Imagem",
          type: {
            name: "Stream",
          },
        },
      },
    },
  };

export const PathsT9Fid1CourseCreatePostRequestbodyContentMultipartFormDataSchema: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "PathsT9Fid1CourseCreatePostRequestbodyContentMultipartFormDataSchema",
      modelProperties: {
        name: {
          serializedName: "Name",
          type: {
            name: "String",
          },
        },
        description: {
          serializedName: "Description",
          type: {
            name: "String",
          },
        },
        aboutDescription: {
          serializedName: "AboutDescription",
          type: {
            name: "String",
          },
        },
        picture: {
          serializedName: "Picture",
          type: {
            name: "Stream",
          },
        },
        gitHubUrl: {
          serializedName: "GitHubUrl",
          type: {
            name: "String",
          },
        },
        notionUrl: {
          serializedName: "NotionUrl",
          type: {
            name: "String",
          },
        },
        iAId: {
          serializedName: "IAId",
          type: {
            name: "Uuid",
          },
        },
        categoryId: {
          serializedName: "CategoryId",
          type: {
            name: "Uuid",
          },
        },
        trailer: {
          serializedName: "Trailer",
          type: {
            name: "Stream",
          },
        },
        parametersId: {
          serializedName: "ParametersId",
          type: {
            name: "Uuid",
          },
        },
        teacherId: {
          serializedName: "TeacherId",
          type: {
            name: "Uuid",
          },
        },
        price: {
          serializedName: "Price",
          type: {
            name: "Number",
          },
        },
        totalHours: {
          serializedName: "TotalHours",
          type: {
            name: "Number",
          },
        },
      },
    },
  };

export const Paths1Psaa4HIaCreatePostRequestbodyContentMultipartFormDataSchema: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "Paths1Psaa4HIaCreatePostRequestbodyContentMultipartFormDataSchema",
      modelProperties: {
        name: {
          serializedName: "Name",
          type: {
            name: "String",
          },
        },
        picture: {
          serializedName: "Picture",
          type: {
            name: "Stream",
          },
        },
      },
    },
  };

export const PathsCh3KyvLectureCreatePostRequestbodyContentMultipartFormDataSchema: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "PathsCh3KyvLectureCreatePostRequestbodyContentMultipartFormDataSchema",
      modelProperties: {
        moduleid: {
          serializedName: "Moduleid",
          type: {
            name: "Uuid",
          },
        },
        name: {
          serializedName: "Name",
          type: {
            name: "String",
          },
        },
        tempo: {
          serializedName: "Tempo",
          type: {
            name: "String",
          },
        },
        notionUrl: {
          serializedName: "NotionUrl",
          type: {
            name: "String",
          },
        },
        file: {
          serializedName: "File",
          type: {
            name: "Stream",
          },
        },
      },
    },
  };

export const Paths1Yh9MaoStudentCreatePostRequestbodyContentMultipartFormDataSchema: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "Paths1Yh9MaoStudentCreatePostRequestbodyContentMultipartFormDataSchema",
      modelProperties: {
        name: {
          serializedName: "Name",
          type: {
            name: "String",
          },
        },
        userId: {
          serializedName: "UserId",
          type: {
            name: "Uuid",
          },
        },
        isFreeStudent: {
          serializedName: "IsFreeStudent",
          type: {
            name: "Boolean",
          },
        },
        picture: {
          serializedName: "Picture",
          type: {
            name: "Stream",
          },
        },
      },
    },
  };

export const Paths16NvxszTeacherCreatePostRequestbodyContentMultipartFormDataSchema: coreClient.CompositeMapper =
  {
    type: {
      name: "Composite",
      className:
        "Paths16NvxszTeacherCreatePostRequestbodyContentMultipartFormDataSchema",
      modelProperties: {
        name: {
          serializedName: "Name",
          type: {
            name: "String",
          },
        },
        email: {
          serializedName: "Email",
          type: {
            name: "String",
          },
        },
        cpf: {
          serializedName: "Cpf",
          type: {
            name: "String",
          },
        },
        phone: {
          serializedName: "Phone",
          type: {
            name: "String",
          },
        },
        endereco: {
          serializedName: "Endereco",
          type: {
            name: "String",
          },
        },
        cep: {
          serializedName: "Cep",
          type: {
            name: "String",
          },
        },
        tiktok: {
          serializedName: "Tiktok",
          type: {
            name: "String",
          },
        },
        instagram: {
          serializedName: "Instagram",
          type: {
            name: "String",
          },
        },
        gitHub: {
          serializedName: "GitHub",
          type: {
            name: "String",
          },
        },
        description: {
          serializedName: "Description",
          type: {
            name: "String",
          },
        },
        picture: {
          serializedName: "Picture",
          type: {
            name: "Stream",
          },
        },
      },
    },
  };
