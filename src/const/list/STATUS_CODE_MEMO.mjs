/**
 * @description Status code text
 * @readonly
 * @type {{REQUEST_TIMEOUT: string, INSUFFICIENT_SPACE_ON_RESOURCE: string, USE_PROXY: string, UNPROCESSABLE_ENTITY: string, PROCESSING: string, TEMPORARY_REDIRECT: string, NOT_EXTENDED: string, MOVED_TEMPORARILY: string, PAYLOAD_TOO_LARGE: string, VARIANT_ALSO_NEGOTIATES: string, FAILED_DEPENDENCY: string, ACCEPTED: string, BAD_GATEWAY: string, IM_USED: string, NOT_ACCEPTABLE: string, RESET_CONTENT: string, PARTIAL_CONTENT: string, GATEWAY_TIMEOUT: string, WOULD_BLOCK: string, METHOD_NOT_ALLOWED: string, EXPECTATION_FAILED: string, LOCKED: string, UNUSED: string, NOT_FOUND: string, PERMANENT_REDIRECT: string, IM_A_TEAPOT: string, LENGTH_REQUIRED: string, BANDWIDTH_LIMIT_EXCEEDED: string, MULTIPLE_CHOICES: string, NETWORK_AUTHENTICATION_REQUIRED: string, SWITCHING_PROTOCOLS: string, GONE: string, UPGRADE_REQUIRED: string, UNAVAILABLE_FOR_LEGAL_REASONS: string, TOO_MANY_REQUESTS: string, INTERNAL_SERVER_ERROR: string, CONFLICT: string, INSUFFICIENT_STORAGE: string, HTTP_VERSION_NOT_SUPPORTED: string, UNSUPPORTED_MEDIA_TYPE: string, NO_CONTENT: string, PROXY_AUTHENTICATION_REQUIRED: string, REQUEST_HEADER_FIELDS_TOO_LARGE: string, PAYMENT_REQUIRED: string, CREATED: string, MOVED_PERMANENTLY: string, UNAUTHORIZED: string, REQUEST_URI_TOO_LONG: string, OK: string, REQUESTED_RANGE_NOT_SATISFIABLE: string, BAD_REQUEST: string, ENHANCE_YOUR_CALM: string, MISDIRECTED_REQUEST: string, SEE_OTHER: string, FORBIDDEN: string, CONTINUE: string, PRECONDITION_REQUIRED: string, NOT_MODIFIED: string, NOT_IMPLEMENTED: string, ALREADY_REPORTED: string, NON_AUTHORITATIVE_INFORMATION: string, PRECONDITION_FAILED: string, LOOP_DETECTED: string, SERVICE_UNAVAILABLE: string, TOO_EARLY: string, EARLY_HINTS: string, MULTI_STATUS: string}}
 */
const STATUS_CODE_MEMO = {
  //#region 1XX
  CONTINUE: "Continue",
  SWITCHING_PROTOCOLS: "Switching Protocols",
  PROCESSING: "Processing",
  EARLY_HINTS: "Early Hints",
  //#endregion
  //#region 2XX
  OK: "OK",
  CREATED: "Created",
  ACCEPTED: "Accepted",
  NON_AUTHORITATIVE_INFORMATION: "Non-Authoritative Information",
  NO_CONTENT: "No Content",
  RESET_CONTENT: "Reset Content",
  PARTIAL_CONTENT: "Partial Content",
  MULTI_STATUS: "Multi-Status",
  ALREADY_REPORTED: "Already Reported",
  IM_USED: "IM Used",
  //#endregion
  //#region 3XX
  MULTIPLE_CHOICES: "Multiple Choices",
  MOVED_PERMANENTLY: "Moved Permanently",
  MOVED_TEMPORARILY: "Found",
  SEE_OTHER: "See Other",
  NOT_MODIFIED: "Not Modified",
  USE_PROXY: "Use Proxy",
  UNUSED: "Unused",
  TEMPORARY_REDIRECT: "Temporary Redirect",
  PERMANENT_REDIRECT: "Permanent Redirect",
  //#endregion
  //#region 4XX
  BAD_REQUEST: "Bad Request",
  UNAUTHORIZED: "Unauthorized",
  PAYMENT_REQUIRED: "Payment Required",
  FORBIDDEN: "Forbidden",
  NOT_FOUND: "Not Found",
  METHOD_NOT_ALLOWED: "Method Not Allowed",
  NOT_ACCEPTABLE: "Not Acceptable",
  PROXY_AUTHENTICATION_REQUIRED: "Proxy Authentication Required",
  REQUEST_TIMEOUT: "Request Timeout",
  CONFLICT: "Conflict",
  GONE: "Gone",
  LENGTH_REQUIRED: "Length Required",
  PRECONDITION_FAILED: "Precondition Failed",
  PAYLOAD_TOO_LARGE: "Payload Too Large",
  REQUEST_URI_TOO_LONG: "URI Too Long",
  UNSUPPORTED_MEDIA_TYPE: "Unsupported Media Type",
  REQUESTED_RANGE_NOT_SATISFIABLE: "Range Not Satisfiable",
  EXPECTATION_FAILED: "Expectation Failed",
  IM_A_TEAPOT: "I'm a Teapot",
  INSUFFICIENT_SPACE_ON_RESOURCE: "Insufficient space on resource",
  ENHANCE_YOUR_CALM: "Enhance your calm",
  MISDIRECTED_REQUEST: "Misdirected Request",
  UNPROCESSABLE_ENTITY: "Unprocessable Entity",
  LOCKED: "Locked",
  FAILED_DEPENDENCY: "Failed Dependency",
  TOO_EARLY: "Too Early",
  UPGRADE_REQUIRED: "Upgrade Required",
  PRECONDITION_REQUIRED: "Precondition Required",
  TOO_MANY_REQUESTS: "Too Many Requests",
  WOULD_BLOCK: "Would Block",
  REQUEST_HEADER_FIELDS_TOO_LARGE: "Request Header Fields Too Large",
  UNAVAILABLE_FOR_LEGAL_REASONS: "Unavailable For Legal Reasons",
  //#endregion
  //#region 5XX
  INTERNAL_SERVER_ERROR: "Internal Server Error",
  NOT_IMPLEMENTED: "Not Implemented",
  BAD_GATEWAY: "Bad Gateway",
  SERVICE_UNAVAILABLE: "Service Unavailable",
  GATEWAY_TIMEOUT: "Gateway Timeout",
  HTTP_VERSION_NOT_SUPPORTED: "HTTP Version Not Supported",
  VARIANT_ALSO_NEGOTIATES: "Variant Also Negotiates",
  INSUFFICIENT_STORAGE: "Insufficient Storage",
  LOOP_DETECTED: "Loop Detected",
  BANDWIDTH_LIMIT_EXCEEDED: "Bandwidth Limit Exceeded",
  NOT_EXTENDED: "Not Extended",
  NETWORK_AUTHENTICATION_REQUIRED: "Network Authentication Required",
  //#endregion
};
Object.freeze(STATUS_CODE_MEMO);
Object.seal(STATUS_CODE_MEMO);
export { STATUS_CODE_MEMO };
