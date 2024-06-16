export enum ERRORS_TYPES {
  NOT_FOUND = 'NOT_FOUND',
  NOT_PERMISSION = 'NOT_PERMISSION',
  NOT_AUTHORIZE = 'NOT_AUTHORIZE',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  TOO_MANY_ATTEMPTS = 'TOO_MANY_ATTEMPTS',
  SERVER_ERROR = 'SERVER_ERROR',
  CONFLICT_ERROR = 'CONFLICT_ERROR'
}

export const ERRORS : any = {
  404: ERRORS_TYPES.NOT_FOUND,
  403: ERRORS_TYPES.NOT_PERMISSION,
  401: ERRORS_TYPES.NOT_AUTHORIZE,
  422: ERRORS_TYPES.VALIDATION_ERROR,
  400: ERRORS_TYPES.VALIDATION_ERROR,
  409: ERRORS_TYPES.CONFLICT_ERROR,
  429: ERRORS_TYPES.TOO_MANY_ATTEMPTS,
  500: ERRORS_TYPES.SERVER_ERROR,
  501: ERRORS_TYPES.SERVER_ERROR,
  502: ERRORS_TYPES.SERVER_ERROR,
  503: ERRORS_TYPES.SERVER_ERROR,
};