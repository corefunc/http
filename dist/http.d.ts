/**
 * @description Common HTTP headers
 * @readonly
 * @type {{CONTENT_LANGUAGE: string, HOST: string, IF_MODIFIED_SINCE: string, DNT: string, FROM: string, CACHE_CONTROL: string, CONTENT_RANGE: string, SERVICE_WORKER: string, IF_RANGE: string, X_FRAME_OPTIONS: string, PING_FROM: string, CONTENT_TYPE: string, X_POWERED_BY: string, PING_TO: string, PRAGMA: string, VARY: string, ALLOW: string, IF_MATCH: string, ACCEPT_ENCODING: string, CONTENT_LOCATION: string, TRANSFER_ENCODING: string, USER_AGENT: string, FORWARDED: string, X_USER_IP: string, ACCEPT_RANGES: string, ACCESS_CONTROL_ALLOW_HEADERS: string, ACCESS_CONTROL_ALLOW_ORIGIN: string, CONTENT_MD5: string, WARNING: string, IF_NONE_MATCH: string, X_FORWARDED_FOR: string, DATE: string, STRICT_TRANSPORT_SECURITY: string, ACCEPT: string, CONTENT_LENGTH: string, ETAG: string, COOKIE: string, X_CONTENT_SECURITY_POLICY: string, X_REQUESTED_WITH: string, RETRY_AFTER: string, X_XSS_PROTECTION: string, TRAILER: string, X_CONTENT_SECURITY_POLICY_REPORT_ONLY: string, X_FORWARDED_PORT: string, RANGE: string, LOCATION: string, PUBLIC_KEY_PINS: string, CONTENT_DISPOSITION: string, REFRESH: string, IF_UNMODIFIED_SINCE: string, PUBLIC_KEY_PINS_REPORT_ONLY: string, LAST_MODIFIED: string, WWW_AUTHENTICATE: string, ACCESS_CONTROL_ALLOW_CREDENTIALS: string, P3P: string, X_WEBKIT_CSP_REPORT_ONLY: string, ORIGIN: string, SET_COOKIE2: string, X_FORWARDED_HOST: string, ACCESS_CONTROL_MAX_AGE: string, TIMING_ALLOW_ORIGIN: string, EXPIRES: string, LAST_EVENT_ID: string, SERVER: string, X_DO_NOT_TRACK: string, X_CONTENT_TYPE_OPTIONS: string, LINK: string, SERVICE_WORKER_ALLOWED: string, FOLLOW_ONLY_WHEN_PRERENDER_SHOWN: string, CONTENT_ENCODING: string, AGE: string, X_WEBKIT_CSP: string, EXPECT: string, ACCESS_CONTROL_REQUEST_METHOD: string, SET_COOKIE: string, CONTENT_SECURITY_POLICY: string, PROXY_AUTHORIZATION: string, VIA: string, ACCESS_CONTROL_REQUEST_HEADERS: string, CONNECTION: string, MAX_FORWARDS: string, TE: string, ACCEPT_LANGUAGE: string, X_FORWARDED_PROTO: string, REFERER: string, ACCEPT_CHARSET: string, ACCESS_CONTROL_ALLOW_METHODS: string, CONTENT_SECURITY_POLICY_REPORT_ONLY: string, UPGRADE: string, PROXY_AUTHENTICATE: string, ACCESS_CONTROL_EXPOSE_HEADERS: string, AUTHORIZATION: string}}
 */
export declare const HTTP_HEADER: {
  ACCEPT: string;
  ACCEPT_CHARSET: string;
  ACCEPT_ENCODING: string;
  ACCEPT_LANGUAGE: string;
  ACCEPT_RANGES: string;
  ACCESS_CONTROL_ALLOW_CREDENTIALS: string;
  ACCESS_CONTROL_ALLOW_HEADERS: string;
  ACCESS_CONTROL_ALLOW_METHODS: string;
  ACCESS_CONTROL_ALLOW_ORIGIN: string;
  ACCESS_CONTROL_EXPOSE_HEADERS: string;
  ACCESS_CONTROL_MAX_AGE: string;
  ACCESS_CONTROL_REQUEST_HEADERS: string;
  ACCESS_CONTROL_REQUEST_METHOD: string;
  AGE: string;
  ALLOW: string;
  AUTHORIZATION: string;
  CACHE_CONTROL: string;
  CONNECTION: string;
  CONTENT_DISPOSITION: string;
  CONTENT_ENCODING: string;
  CONTENT_LANGUAGE: string;
  CONTENT_LENGTH: string;
  CONTENT_LOCATION: string;
  CONTENT_MD5: string;
  CONTENT_RANGE: string;
  CONTENT_SECURITY_POLICY: string;
  CONTENT_SECURITY_POLICY_REPORT_ONLY: string;
  CONTENT_TYPE: string;
  COOKIE: string;
  DATE: string;
  DNT: string;
  ETAG: string;
  EXPECT: string;
  EXPIRES: string;
  FOLLOW_ONLY_WHEN_PRERENDER_SHOWN: string;
  FORWARDED: string;
  FROM: string;
  HOST: string;
  IF_MATCH: string;
  IF_MODIFIED_SINCE: string;
  IF_NONE_MATCH: string;
  IF_RANGE: string;
  IF_UNMODIFIED_SINCE: string;
  LAST_EVENT_ID: string;
  LAST_MODIFIED: string;
  LINK: string;
  LOCATION: string;
  MAX_FORWARDS: string;
  ORIGIN: string;
  P3P: string;
  PING_FROM: string;
  PING_TO: string;
  PRAGMA: string;
  PROXY_AUTHENTICATE: string;
  PROXY_AUTHORIZATION: string;
  PUBLIC_KEY_PINS: string;
  PUBLIC_KEY_PINS_REPORT_ONLY: string;
  RANGE: string;
  REFERER: string;
  REFRESH: string;
  RETRY_AFTER: string;
  SERVER: string;
  SERVICE_WORKER: string;
  SERVICE_WORKER_ALLOWED: string;
  SET_COOKIE2: string;
  SET_COOKIE: string;
  STRICT_TRANSPORT_SECURITY: string;
  TE: string;
  TIMING_ALLOW_ORIGIN: string;
  TRAILER: string;
  TRANSFER_ENCODING: string;
  UPGRADE: string;
  USER_AGENT: string;
  VARY: string;
  VIA: string;
  WARNING: string;
  WWW_AUTHENTICATE: string;
  X_CONTENT_SECURITY_POLICY: string;
  X_CONTENT_SECURITY_POLICY_REPORT_ONLY: string;
  X_CONTENT_TYPE_OPTIONS: string;
  X_DO_NOT_TRACK: string;
  X_FORWARDED_FOR: string;
  X_FORWARDED_HOST: string;
  X_FORWARDED_PORT: string;
  X_FORWARDED_PROTO: string;
  X_FRAME_OPTIONS: string;
  X_POWERED_BY: string;
  X_REQUESTED_WITH: string;
  X_USER_IP: string;
  X_WEBKIT_CSP: string;
  X_WEBKIT_CSP_REPORT_ONLY: string;
  X_XSS_PROTECTION: string;
};
/**
 * @description Common HTTP Media Types
 * @readonly
 * @type {{APP_DART: string, TEXT_HTML: string, APP: string, AUDIO_VORBIS: string, APP_XHTML: string, TEXT_XML: string, AUDIO_BASIC: string, AUDIO_OGG: string, AUDIO_WEBM: string, VIDEO: string, APP_MICROSOFT_EXCEL: string, APP_RDF_XML: string, IMAGE_APNG: string, APP_RTF: string, TEXT: string, APP_EPUB: string, AUDIO_MP4: string, AUDIO: string, VIDEO_THREE_GPP2: string, IMAGE_WEBP: string, APP_WOFF: string, TEXT_CALENDAR: string, VIDEO_QUICKTIME: string, APP_PROTOBUF: string, IMAGE: string, VIDEO_MP4: string, IMAGE_SVG: string, VIDEO_OGG: string, TEXT_CACHE_MANIFEST: string, IMAGE_CRW: string, APP_PDF: string, APP_SKETCHUP: string, TEXT_JAVASCRIPT: string, APP_EOT: string, APP_MICROSOFT_WORD: string, TEXT_VCARD: string, IMAGE_ICO: string, TEXT_VTT: string, APP_GZIP: string, APP_LD_JSON: string, AUDIO_WAX: string, VIDEO_AV1: string, AUDIO_VND_REAL: string, IMAGE_BMP: string, APP_ATOM: string, IMAGE_AVIF: string, TEXT_CSV: string, APP_FORM_DATA: string, APP_XML: string, TEXT_CSS: string, APP_JAVASCRIPT: string, APP_SOAP_XML: string, APP_MICROSOFT_POWERPOINT: string, APP_MBOX: string, APP_MOBILE_CONFIG: string, APP_OGG: string, TEXT_PLAIN: string, APP_MANIFEST_JSON: string, APP_XRD: string, AUDIO_WMA: string, TEXT_TSV: string, VIDEO_WEBM: string, VIDEO_WMV: string, TEXT_WML: string, IMAGE_JPEG: string, IMAGE_PSD: string, AUDIO_VND_WAVE: string, APP_TAR: string, ANY: string, APP_BZIP2: string, APP_ZIP: string, IMAGE_PNG: string, APP_POSTSCRIPT: string, VIDEO_MPEG: string, APP_SFNT: string, IMAGE_TIFF: string, VIDEO_THREE_GPP: string, APP_KEY_ARCHIVE: string, APP_NACL: string, APP_BINARY: string, APP_KML: string, APP_NACL_PORTABLE: string, APP_WOFF2: string, APP_JSON: string, AUDIO_L24: string, APP_PASSBOOK: string, APP_SHOCKWAVE_FLASH: string, IMAGE_AVIF_SEQ: string, AUDIO_MPEG: string, VIDEO_FLV: string, IMAGE_GIF: string, IMAGE_HEIC: string, APP_OCTET_STREAM: string, APP_KMZ: string, IMAGE_HEIF: string, AUDIO_AAC: string}}
 */
export declare const HTTP_MEDIA_TYPE: {
  ANY: string;
  APP: string;
  APP_ATOM: string;
  APP_BINARY: string;
  APP_BZIP2: string;
  APP_DART: string;
  APP_EOT: string;
  APP_EPUB: string;
  APP_FORM_DATA: string;
  APP_GZIP: string;
  APP_JAVASCRIPT: string;
  APP_JSON: string;
  APP_KEY_ARCHIVE: string;
  APP_KML: string;
  APP_KMZ: string;
  APP_LD_JSON: string;
  APP_MANIFEST_JSON: string;
  APP_MBOX: string;
  APP_MICROSOFT_EXCEL: string;
  APP_MICROSOFT_POWERPOINT: string;
  APP_MICROSOFT_WORD: string;
  APP_MOBILE_CONFIG: string;
  APP_NACL: string;
  APP_NACL_PORTABLE: string;
  APP_OCTET_STREAM: string;
  APP_OGG: string;
  APP_PASSBOOK: string;
  APP_PDF: string;
  APP_POSTSCRIPT: string;
  APP_PROTOBUF: string;
  APP_RDF_XML: string;
  APP_RTF: string;
  APP_SFNT: string;
  APP_SHOCKWAVE_FLASH: string;
  APP_SKETCHUP: string;
  APP_SOAP_XML: string;
  APP_TAR: string;
  APP_WOFF2: string;
  APP_WOFF: string;
  APP_XHTML: string;
  APP_XML: string;
  APP_XRD: string;
  APP_ZIP: string;
  AUDIO: string;
  AUDIO_AAC: string;
  AUDIO_BASIC: string;
  AUDIO_L24: string;
  AUDIO_MP4: string;
  AUDIO_MPEG: string;
  AUDIO_OGG: string;
  AUDIO_VND_REAL: string;
  AUDIO_VND_WAVE: string;
  AUDIO_VORBIS: string;
  AUDIO_WAX: string;
  AUDIO_WEBM: string;
  AUDIO_WMA: string;
  IMAGE: string;
  IMAGE_APNG: string;
  IMAGE_AVIF: string;
  IMAGE_AVIF_SEQ: string;
  IMAGE_BMP: string;
  IMAGE_CRW: string;
  IMAGE_GIF: string;
  IMAGE_HEIC: string;
  IMAGE_HEIF: string;
  IMAGE_ICO: string;
  IMAGE_JPEG: string;
  IMAGE_PNG: string;
  IMAGE_PSD: string;
  IMAGE_SVG: string;
  IMAGE_TIFF: string;
  IMAGE_WEBP: string;
  TEXT: string;
  TEXT_CACHE_MANIFEST: string;
  TEXT_CALENDAR: string;
  TEXT_CSS: string;
  TEXT_CSV: string;
  TEXT_HTML: string;
  TEXT_JAVASCRIPT: string;
  TEXT_PLAIN: string;
  TEXT_TSV: string;
  TEXT_VCARD: string;
  TEXT_VTT: string;
  TEXT_WML: string;
  TEXT_XML: string;
  VIDEO: string;
  VIDEO_AV1: string;
  VIDEO_FLV: string;
  VIDEO_MP4: string;
  VIDEO_MPEG: string;
  VIDEO_OGG: string;
  VIDEO_QUICKTIME: string;
  VIDEO_THREE_GPP2: string;
  VIDEO_THREE_GPP: string;
  VIDEO_WEBM: string;
  VIDEO_WMV: string;
};
/**
 * @description Common HTTP Media Types
 * @readonly
 * @type {{APP_DART: string, TEXT_HTML: string, APP: string, AUDIO_VORBIS: string, APP_XHTML: string, TEXT_XML: string, AUDIO_BASIC: string, AUDIO_OGG: string, AUDIO_WEBM: string, VIDEO: string, APP_MICROSOFT_EXCEL: string, APP_RDF_XML: string, IMAGE_APNG: string, APP_RTF: string, TEXT: string, APP_EPUB: string, AUDIO_MP4: string, AUDIO: string, VIDEO_THREE_GPP2: string, IMAGE_WEBP: string, APP_WOFF: string, TEXT_CALENDAR: string, VIDEO_QUICKTIME: string, APP_PROTOBUF: string, IMAGE: string, VIDEO_MP4: string, IMAGE_SVG: string, VIDEO_OGG: string, TEXT_CACHE_MANIFEST: string, IMAGE_CRW: string, APP_PDF: string, APP_SKETCHUP: string, TEXT_JAVASCRIPT: string, APP_EOT: string, APP_MICROSOFT_WORD: string, TEXT_VCARD: string, IMAGE_ICO: string, TEXT_VTT: string, APP_GZIP: string, APP_LD_JSON: string, AUDIO_WAX: string, VIDEO_AV1: string, AUDIO_VND_REAL: string, IMAGE_BMP: string, APP_ATOM: string, IMAGE_AVIF: string, TEXT_CSV: string, APP_FORM_DATA: string, APP_XML: string, TEXT_CSS: string, APP_JAVASCRIPT: string, APP_SOAP_XML: string, APP_MICROSOFT_POWERPOINT: string, APP_MBOX: string, APP_MOBILE_CONFIG: string, APP_OGG: string, TEXT_PLAIN: string, APP_MANIFEST_JSON: string, APP_XRD: string, AUDIO_WMA: string, TEXT_TSV: string, VIDEO_WEBM: string, VIDEO_WMV: string, TEXT_WML: string, IMAGE_JPEG: string, IMAGE_PSD: string, AUDIO_VND_WAVE: string, APP_TAR: string, ANY: string, APP_BZIP2: string, APP_ZIP: string, IMAGE_PNG: string, APP_POSTSCRIPT: string, VIDEO_MPEG: string, APP_SFNT: string, IMAGE_TIFF: string, VIDEO_THREE_GPP: string, APP_KEY_ARCHIVE: string, APP_NACL: string, APP_BINARY: string, APP_KML: string, APP_NACL_PORTABLE: string, APP_WOFF2: string, APP_JSON: string, AUDIO_L24: string, APP_PASSBOOK: string, APP_SHOCKWAVE_FLASH: string, IMAGE_AVIF_SEQ: string, AUDIO_MPEG: string, VIDEO_FLV: string, IMAGE_GIF: string, IMAGE_HEIC: string, APP_OCTET_STREAM: string, APP_KMZ: string, IMAGE_HEIF: string, AUDIO_AAC: string}}
 */
export declare const HTTP_METHOD: {
  CONNECT: string;
  DELETE: string;
  GET: string;
  HEAD: string;
  OPTIONS: string;
  PATCH: string;
  POST: string;
  PUT: string;
  TRACE: string;
};
/**
 * @description Status codes for empty bodies
 * @readonly
 * @type {number[]}
 */
export declare const STATUS_CODE_EMPTY: number[];
/**
 * @description Status codes for redirects
 * @readonly
 * @type {number[]}
 */
export declare const STATUS_CODE_REDIRECT: number[];
/**
 * @description Status codes for when you should retry the request
 * @readonly
 * @type {number[]}
 */
export declare const STATUS_CODE_RETRY: number[];
/**
 * @description Status code tags
 * @readonly
 * @type {{REQUEST_TIMEOUT: number, INSUFFICIENT_SPACE_ON_RESOURCE: number, USE_PROXY: number, UNPROCESSABLE_ENTITY: number, PROCESSING: number, TEMPORARY_REDIRECT: number, NOT_EXTENDED: number, MOVED_TEMPORARILY: number, PAYLOAD_TOO_LARGE: number, VARIANT_ALSO_NEGOTIATES: number, FAILED_DEPENDENCY: number, ACCEPTED: number, BAD_GATEWAY: number, IM_USED: number, NOT_ACCEPTABLE: number, RESET_CONTENT: number, PARTIAL_CONTENT: number, GATEWAY_TIMEOUT: number, WOULD_BLOCK: number, METHOD_NOT_ALLOWED: number, EXPECTATION_FAILED: number, LOCKED: number, UNUSED: number, NOT_FOUND: number, PERMANENT_REDIRECT: number, IM_A_TEAPOT: number, LENGTH_REQUIRED: number, BANDWIDTH_LIMIT_EXCEEDED: number, MULTIPLE_CHOICES: number, NETWORK_AUTHENTICATION_REQUIRED: number, SWITCHING_PROTOCOLS: number, GONE: number, UPGRADE_REQUIRED: number, UNAVAILABLE_FOR_LEGAL_REASONS: number, TOO_MANY_REQUESTS: number, INTERNAL_SERVER_ERROR: number, CONFLICT: number, INSUFFICIENT_STORAGE: number, HTTP_VERSION_NOT_SUPPORTED: number, UNSUPPORTED_MEDIA_TYPE: number, NO_CONTENT: number, PROXY_AUTHENTICATION_REQUIRED: number, REQUEST_HEADER_FIELDS_TOO_LARGE: number, PAYMENT_REQUIRED: number, CREATED: number, MOVED_PERMANENTLY: number, UNAUTHORIZED: number, REQUEST_URI_TOO_LONG: number, OK: number, REQUESTED_RANGE_NOT_SATISFIABLE: number, BAD_REQUEST: number, ENHANCE_YOUR_CALM: number, MISDIRECTED_REQUEST: number, SEE_OTHER: number, FORBIDDEN: number, CONTINUE: number, PRECONDITION_REQUIRED: number, NOT_MODIFIED: number, NOT_IMPLEMENTED: number, ALREADY_REPORTED: number, NON_AUTHORITATIVE_INFORMATION: number, PRECONDITION_FAILED: number, LOOP_DETECTED: number, SERVICE_UNAVAILABLE: number, TOO_EARLY: number, EARLY_HINTS: number, MULTI_STATUS: number}}
 */
export declare const STATUS_CODE_TAG: {
  CONTINUE: number;
  SWITCHING_PROTOCOLS: number;
  PROCESSING: number;
  EARLY_HINTS: number;
  OK: number;
  CREATED: number;
  ACCEPTED: number;
  NON_AUTHORITATIVE_INFORMATION: number;
  NO_CONTENT: number;
  RESET_CONTENT: number;
  PARTIAL_CONTENT: number;
  MULTI_STATUS: number;
  ALREADY_REPORTED: number;
  IM_USED: number;
  MULTIPLE_CHOICES: number;
  MOVED_PERMANENTLY: number;
  MOVED_TEMPORARILY: number;
  SEE_OTHER: number;
  NOT_MODIFIED: number;
  USE_PROXY: number;
  UNUSED: number;
  TEMPORARY_REDIRECT: number;
  PERMANENT_REDIRECT: number;
  BAD_REQUEST: number;
  UNAUTHORIZED: number;
  PAYMENT_REQUIRED: number;
  FORBIDDEN: number;
  NOT_FOUND: number;
  METHOD_NOT_ALLOWED: number;
  NOT_ACCEPTABLE: number;
  PROXY_AUTHENTICATION_REQUIRED: number;
  REQUEST_TIMEOUT: number;
  CONFLICT: number;
  GONE: number;
  LENGTH_REQUIRED: number;
  PRECONDITION_FAILED: number;
  PAYLOAD_TOO_LARGE: number;
  REQUEST_URI_TOO_LONG: number;
  UNSUPPORTED_MEDIA_TYPE: number;
  REQUESTED_RANGE_NOT_SATISFIABLE: number;
  EXPECTATION_FAILED: number;
  IM_A_TEAPOT: number;
  INSUFFICIENT_SPACE_ON_RESOURCE: number;
  ENHANCE_YOUR_CALM: number;
  MISDIRECTED_REQUEST: number;
  UNPROCESSABLE_ENTITY: number;
  LOCKED: number;
  FAILED_DEPENDENCY: number;
  TOO_EARLY: number;
  UPGRADE_REQUIRED: number;
  PRECONDITION_REQUIRED: number;
  TOO_MANY_REQUESTS: number;
  WOULD_BLOCK: number;
  REQUEST_HEADER_FIELDS_TOO_LARGE: number;
  UNAVAILABLE_FOR_LEGAL_REASONS: number;
  INTERNAL_SERVER_ERROR: number;
  NOT_IMPLEMENTED: number;
  BAD_GATEWAY: number;
  SERVICE_UNAVAILABLE: number;
  GATEWAY_TIMEOUT: number;
  HTTP_VERSION_NOT_SUPPORTED: number;
  VARIANT_ALSO_NEGOTIATES: number;
  INSUFFICIENT_STORAGE: number;
  LOOP_DETECTED: number;
  BANDWIDTH_LIMIT_EXCEEDED: number;
  NOT_EXTENDED: number;
  NETWORK_AUTHENTICATION_REQUIRED: number;
};
/**
 * @description Status code texts
 * @readonly
 * @type {{"430": string, "431": string, "510": string, "511": string, "200": string, "201": string, "202": string, "400": string, "203": string, "401": string, "204": string, "402": string, "205": string, "403": string, "206": string, "404": string, "207": string, "405": string, "208": string, "406": string, "407": string, "408": string, "409": string, "451": string, "410": string, "411": string, "412": string, "413": string, "414": string, "415": string, "416": string, "417": string, "418": string, "419": string, "100": string, "101": string, "420": string, "102": string, "300": string, "421": string, "103": string, "301": string, "422": string, "302": string, "423": string, "500": string, "226": string, "303": string, "424": string, "501": string, "304": string, "425": string, "502": string, "305": string, "426": string, "503": string, "306": string, "504": string, "307": string, "428": string, "505": string, "308": string, "429": string, "506": string, "507": string, "508": string, "509": string}}
 */
export declare const STATUS_CODE_TEXT: {
  "100": string;
  "101": string;
  "102": string;
  "103": string;
  "200": string;
  "201": string;
  "202": string;
  "203": string;
  "204": string;
  "205": string;
  "206": string;
  "207": string;
  "208": string;
  "226": string;
  "300": string;
  "301": string;
  "302": string;
  "303": string;
  "304": string;
  "305": string;
  "306": string;
  "307": string;
  "308": string;
  "400": string;
  "401": string;
  "402": string;
  "403": string;
  "404": string;
  "405": string;
  "406": string;
  "407": string;
  "408": string;
  "409": string;
  "410": string;
  "411": string;
  "412": string;
  "413": string;
  "414": string;
  "415": string;
  "416": string;
  "417": string;
  "418": string;
  "419": string;
  "420": string;
  "421": string;
  "422": string;
  "423": string;
  "424": string;
  "425": string;
  "426": string;
  "428": string;
  "429": string;
  "430": string;
  "431": string;
  "451": string;
  "500": string;
  "501": string;
  "502": string;
  "503": string;
  "504": string;
  "505": string;
  "506": string;
  "507": string;
  "508": string;
  "509": string;
  "510": string;
  "511": string;
};
/**
 * @description httpResponse
 * @param {number|string} code
 * @param {object|string=} message
 * @example httpResponse(200)
 * @example httpResponse("200") // { message: "OK", statusCode: 200 }
 * @example httpResponse`200`
 * @example httpResponse(403, "Not for you") // { error: true, message: "Not for you", statusCode: 403 }
 * @example httpResponse`403 Not for you`
 * @example httpResponse(500, { errorForDeveloper: "", errorForUser: "" })
 * @returns {{message: string, statusCode: number}}
 */
export declare function httpResponse(code: number | string, message?: string | object): {
  [prop: string]: null | boolean | number | string | any[] | object;
};
/**
 * @description httpResponseHtml
 * @param {number|string} code
 * @param {object|string=} message
 * @example httpResponseHtml(200)
 * @example httpResponseHtml("200") // '<!DOCTYPE html><html><body><h1>200 OK</h1></body></html>'
 * @example httpResponseHtml`200`
 * @example httpResponseHtml(403, "Not for you") // '<!DOCTYPE html><html><body><h1>403 Forbidden</h1><h2>Not for you</h2></body></html>'
 * @example httpResponseHtml`403 Not for you`
 * @example httpResponseHtml(500, { ErrorForDeveloper: "Dev", ErrorForUser: "User" }) // '<!DOCTYPE html><html><body><h1>500 Internal Server Error</h1><p><strong>ErrorForDeveloper</strong><span>Dev</span></p><p><strong>ErrorForUser</strong><span>User</span></p></body></html>'
 * @returns {string}
 */
export declare function httpResponseHtml(code: number | string, message?: string | object): string;
/**
 * @description httpResponseJson
 * @param {number|string} code
 * @param {object|string=} message
 * @example httpResponseJson(200)
 * @example httpResponseJson("200") // '{"message":"OK","statusCode":200}'
 * @example httpResponseJson`200`
 * @example httpResponseJson(403, "Not for you") // '{"error":true,"message":"Not for you","statusCode":403}'
 * @example httpResponseJson`403 Not for you`
 * @example httpResponseJson(500, { errorForDeveloper: "", errorForUser: "" }) // '{"message":"Internal Server Error","statusCode":500,"errorForDeveloper":"","errorForUser":"","error":true}'
 * @returns {string}
 */
export declare function httpResponseJson(code: number | string, message?: string | object): string;
/**
 * @description httpResponseText
 * @param {number|string} code
 * @param {object|string=} message
 * @example httpResponseText(200)
 * @example httpResponseText("200") // '200 OK'
 * @example httpResponseText`200`
 * @example httpResponseText(403, "Not for you") // '403 Forbidden\nNot for you'
 * @example httpResponseText`403 Not for you`
 * @example httpResponseText(500, { ErrorForDeveloper: "Dev", ErrorForUser: "User" }) // '500 Internal Server Error\nErrorForDeveloper\tDev\nErrorForUser\tUser'
 * @returns {string}
 */
export declare function httpResponseText(code: number | string, message?: string | object): string;
/**
 * @description httpResponseXml
 * @param {number|string} code
 * @param {object|string=} message
 * @example httpResponseXml(200)
 * @example httpResponseXml("200") // '<?xml version="1.0" encoding="UTF-8"?><root><message>OK</message><statusCode>200</statusCode></root>'
 * @example httpResponseXml`200`
 * @example httpResponseXml(403, "Not for you") // '<?xml version="1.0" encoding="UTF-8"?><root><message>Not for you</message><statusCode>403</statusCode><error>true</error></root>'
 * @example httpResponseXml`403 Not for you`
 * @example httpResponseXml(500, { ErrorForDeveloper: "Dev", ErrorForUser: "User" }) // '<?xml version="1.0" encoding="UTF-8"?><root><message>Internal Server Error</message><statusCode>500</statusCode><ErrorForDeveloper>Dev</ErrorForDeveloper><ErrorForUser>User</ErrorForUser><error>true</error></root>'
 * @returns {string}
 */
export declare function httpResponseXml(code: number | string, message?: string | object): string;
/**
 * @description httpStatusCode
 * @param {number|string} code
 * @example httpStatusCode(200) // 200
 * @example httpStatusCode("200") // 200
 * @example httpStatusCode`200` // 200
 * @returns {number}
 */
export declare function httpStatusCode(code: number | string): number;
/**
 * @description httpStatusText
 * @param {number|string} code
 * @example httpStatusText(200)
 * @example httpStatusText("200")
 * @example httpStatusText`200`
 * @returns {string}
 */
export declare function httpStatusText(code: number | string): string;
