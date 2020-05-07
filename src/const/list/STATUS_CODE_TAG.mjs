/**
 * @description Status code tags
 * @readonly
 * @type {{REQUEST_TIMEOUT: number, INSUFFICIENT_SPACE_ON_RESOURCE: number, USE_PROXY: number, UNPROCESSABLE_ENTITY: number, PROCESSING: number, TEMPORARY_REDIRECT: number, NOT_EXTENDED: number, MOVED_TEMPORARILY: number, PAYLOAD_TOO_LARGE: number, VARIANT_ALSO_NEGOTIATES: number, FAILED_DEPENDENCY: number, ACCEPTED: number, BAD_GATEWAY: number, IM_USED: number, NOT_ACCEPTABLE: number, RESET_CONTENT: number, PARTIAL_CONTENT: number, GATEWAY_TIMEOUT: number, WOULD_BLOCK: number, METHOD_NOT_ALLOWED: number, EXPECTATION_FAILED: number, LOCKED: number, UNUSED: number, NOT_FOUND: number, PERMANENT_REDIRECT: number, IM_A_TEAPOT: number, LENGTH_REQUIRED: number, BANDWIDTH_LIMIT_EXCEEDED: number, MULTIPLE_CHOICES: number, NETWORK_AUTHENTICATION_REQUIRED: number, SWITCHING_PROTOCOLS: number, GONE: number, UPGRADE_REQUIRED: number, UNAVAILABLE_FOR_LEGAL_REASONS: number, TOO_MANY_REQUESTS: number, INTERNAL_SERVER_ERROR: number, CONFLICT: number, INSUFFICIENT_STORAGE: number, HTTP_VERSION_NOT_SUPPORTED: number, UNSUPPORTED_MEDIA_TYPE: number, NO_CONTENT: number, PROXY_AUTHENTICATION_REQUIRED: number, REQUEST_HEADER_FIELDS_TOO_LARGE: number, PAYMENT_REQUIRED: number, CREATED: number, MOVED_PERMANENTLY: number, UNAUTHORIZED: number, REQUEST_URI_TOO_LONG: number, OK: number, REQUESTED_RANGE_NOT_SATISFIABLE: number, BAD_REQUEST: number, ENHANCE_YOUR_CALM: number, MISDIRECTED_REQUEST: number, SEE_OTHER: number, FORBIDDEN: number, CONTINUE: number, PRECONDITION_REQUIRED: number, NOT_MODIFIED: number, NOT_IMPLEMENTED: number, ALREADY_REPORTED: number, NON_AUTHORITATIVE_INFORMATION: number, PRECONDITION_FAILED: number, LOOP_DETECTED: number, SERVICE_UNAVAILABLE: number, TOO_EARLY: number, EARLY_HINTS: number, MULTI_STATUS: number}}
 */
const STATUS_CODE_TAG = {
  //#region 1XX
  CONTINUE: 100,
  SWITCHING_PROTOCOLS: 101,
  PROCESSING: 102,
  EARLY_HINTS: 103,
  //#endregion
  //#region 2XX
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NON_AUTHORITATIVE_INFORMATION: 203,
  NO_CONTENT: 204,
  RESET_CONTENT: 205,
  PARTIAL_CONTENT: 206,
  MULTI_STATUS: 207,
  ALREADY_REPORTED: 208,
  IM_USED: 226,
  //#endregion
  //#region 3XX
  MULTIPLE_CHOICES: 300,
  MOVED_PERMANENTLY: 301,
  MOVED_TEMPORARILY: 302,
  SEE_OTHER: 303,
  NOT_MODIFIED: 304,
  USE_PROXY: 305,
  UNUSED: 306,
  TEMPORARY_REDIRECT: 307,
  PERMANENT_REDIRECT: 308,
  //#endregion
  //#region 4XX
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  REQUEST_URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  REQUESTED_RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  IM_A_TEAPOT: 418,
  INSUFFICIENT_SPACE_ON_RESOURCE: 419,
  ENHANCE_YOUR_CALM: 420,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_ENTITY: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  WOULD_BLOCK: 430,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  //#endregion
  //#region 5XX
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  BANDWIDTH_LIMIT_EXCEEDED: 509,
  NOT_EXTENDED: 510,
  NETWORK_AUTHENTICATION_REQUIRED: 511,
  //#endregion
};
Object.freeze(STATUS_CODE_TAG);
Object.seal(STATUS_CODE_TAG);
export { STATUS_CODE_TAG };
