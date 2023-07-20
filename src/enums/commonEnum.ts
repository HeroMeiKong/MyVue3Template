export enum ContentTypeEnum {
  // form-data qs
  FORM_URLENCODED = 'application/x-www-form-urlencoded;charset=UTF-8',
  // form-data  upload
  FORM_DATA = 'multipart/form-data;charset=UTF-8',
  // json
  JSON = 'application/json;charset=UTF-8',
}

export enum LangsEnum {
  'en' = 'en',
  'zh-CN' = 'zh-CN'
}

export enum PageEnum {
  // basic home path
  BASE_HOME = '/dashboard',
  // error log page path
  ERROR_LOG_PAGE = '/error-log/list',
  // basic login path
  BASE_LOGIN = '/login',
  // error page path
  ERROR_PAGE = '/exception',
  // basic signup path
  BASE_SIGNUP = '/signup'
}

export enum RequestEnum {
  DELETE = 'DELETE',
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
}

export enum RequestMessageModeEnum {
  MESSAGE = 'message',
  MODAL = 'modal',
  NONE = 'none'
}

export enum ResultEnum {
  ERROR = -1,
  SUCCESS = 0,
  TIMEOUT = 401,
  TYPE = 'success',
}
