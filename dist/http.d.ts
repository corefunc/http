//#region 1XX
/**
 * @description Continue
 * {@link https://tools.ietf.org/html/rfc7231#section-6.2.1}
 * @description This interim response indicates that everything so far is OK and that the client should continue with the request or ignore it if it is already finished.
 * @type {number}
 */
export declare const CONTINUE: number;
/**
 * @description Switching Protocol
 * {@link https://tools.ietf.org/html/rfc7231#section-6.2.2}
 * @description This code is sent in response to an Upgrade request header by the client, and indicates the protocol the server is switching too.
 * @type {number}
 */
export declare const SWITCHING_PROTOCOLS: number;
/**
 * @description Processing
 * {@link https://tools.ietf.org/html/rfc2518#section-10.1}
 * @description This code indicates that the server has received and is processing the request, but no response is available yet.
 * @type {number}
 */
export declare const PROCESSING: number;
/**
 * @description Early Hints
 * {@link https://tools.ietf.org/html/rfc8297#section-2}
 * @description This status code is primarily intended to be used with the Link header, letting the user agent start preloading resources while the server prepares a response.
 * @type {number}
 */
export declare const EARLY_HINTS: number;
//#endregion
//#region 2XX
/**
 * @description OK
 * {@link https://tools.ietf.org/html/rfc7231#section-6.3.1}
 * @description
 * The request has succeeded. The meaning of a success varies depending on the HTTP method:
 * GET: The resource has been fetched and is transmitted in the message body.
 * HEAD: The entity headers are in the message body.
 * POST: The resource describing the result of the action is transmitted in the message body.
 * TRACE: The message body contains the request message as received by the server
 * @type {number}
 */
export declare const OK: number;
/**
 * @description Created
 * {@link https://tools.ietf.org/html/rfc7231#section-6.3.2}
 * @description The request has succeeded and a new resource has been created as a result of it. This is typically the response sent after a PUT request.
 * @type {number}
 */
export declare const CREATED: number;
/**
 * @description Accepted
 * {@link https://tools.ietf.org/html/rfc7231#section-6.3.3}
 * @description The request has been received but not yet acted upon. It is non-committal, meaning that there is no way in HTTP to later send an asynchronous response indicating the outcome of processing the request. It is intended for cases where another process or server handles the request, or for batch processing.
 * @type {number}
 */
export declare const ACCEPTED: number;
/**
 * @description Non-Authoritative Information
 * {@link https://tools.ietf.org/html/rfc7231#section-6.3.4}
 * @description This response code means returned meta-information set is not exact set as available from the origin server, but collected from a local or a third party copy. Except this condition, 200 OK response should be preferred instead of this response.
 * @type {number}
 */
export declare const NON_AUTHORITATIVE_INFORMATION: number;
/**
 * @description No Content
 * {@link https://tools.ietf.org/html/rfc7231#section-6.3.5}
 * @description There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones.
 * @type {number}
 */
export declare const NO_CONTENT: number;
/**
 * @description Reset Content
 * {@link https://tools.ietf.org/html/rfc7231#section-6.3.6}
 * @description This response code is sent after accomplishing request to tell user agent reset document view which sent this request.
 * @type {number}
 */
export declare const RESET_CONTENT: number;
/**
 * @description Partial Content
 * {@link https://tools.ietf.org/html/rfc7233#section-4.1}
 * @description This response code is used because of range header sent by the client to separate download into multiple streams.
 * @type {number}
 */
export declare const PARTIAL_CONTENT: number;
/**
 * @description Multi-Status
 * {@link https://tools.ietf.org/html/rfc2518#section-10.2}
 * @description A Multi-Status response conveys information about multiple resources in situations where multiple status codes might be appropriate.
 * @type {number}
 */
export declare const MULTI_STATUS: number;
/**
 * @description Already Reported
 * {@link https://tools.ietf.org/html/rfc5842#section-7.1}
 * @description Used inside a <dav:propstat> response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection.
 * @type {number}
 */
export declare const ALREADY_REPORTED: number;
/**
 * @description IM Used
 * {@link https://tools.ietf.org/html/rfc3229#section-10.6}
 * @description A Multi-Status response conveys information about multiple resources in situations where multiple status codes might be appropriate.
 * @type {number}
 */
export declare const IM_USED: number;
//#endregion
//#region 3XX
/**
 * @description Multiple Choice
 * {@link https://tools.ietf.org/html/rfc7231#section-6.4.1}
 * @description The request has more than one possible responses. User-agent or user should choose one of them. There is no standardized way to choose one of the responses.
 * @type {number}
 */
export declare const MULTIPLE_CHOICES: number;
/**
 * @description Moved Permanently
 * {@link https://tools.ietf.org/html/rfc7231#section-6.4.2}
 * @description This response code means that URI of requested resource has been changed. Probably, new URI would be given in the response.
 * @type {number}
 */
export declare const MOVED_PERMANENTLY: number;
/**
 * @description Found
 * {@link https://tools.ietf.org/html/rfc7231#section-6.4.3}
 * @description This response code means that URI of requested resource has been changed temporarily. New changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.
 * @type {number}
 */
export declare const MOVED_TEMPORARILY: number;
/**
 * @description See Other
 * {@link https://tools.ietf.org/html/rfc7231#section-6.4.4}
 * @description Server sent this response to directing client to get requested resource to another URI with an GET request.
 * @type {number}
 */
export declare const SEE_OTHER: number;
/**
 * @description Not Modified
 * {@link https://tools.ietf.org/html/rfc7232#section-4.1}
 * @description This is used for caching purposes. It is telling to client that response has not been modified. So, client can continue to use same cached version of response.
 * @type {number}
 */
export declare const NOT_MODIFIED: number;
/**
 * @description Use Proxy
 * {@link https://tools.ietf.org/html/rfc7231#section-6.4.6}
 * @description Was defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy.
 * @type {number}
 */
export declare const USE_PROXY: number;
/**
 * @description Unused
 * {@link https://tools.ietf.org/html/rfc2616#section-10.3.7}
 * @description This response code is no longer used; it is just reserved. It was used in a previous version of the HTTP/1.1 specification.
 * @type {number}
 */
export declare const UNUSED: number;
/**
 * @description Temporary Redirect
 * {@link https://tools.ietf.org/html/rfc7231#section-6.4.7}
 * @description Server sent this response to directing client to get requested resource to another URI with same method that used prior request. This has the same semantic than the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.
 * @type {number}
 */
export declare const TEMPORARY_REDIRECT: number;
/**
 * @description Permanent Redirect
 * {@link https://tools.ietf.org/html/rfc7538#section-3}
 * @description This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header. This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.
 * @type {number}
 */
export declare const PERMANENT_REDIRECT: number;
//#endregion
//#region 4XX
/**
 * @description Bad Request
 * {@link https://tools.ietf.org/html/rfc7231#section-6.5.1}
 * @description This response means that server could not understand the request due to invalid syntax.
 * @type {number}
 */
export declare const BAD_REQUEST: number;
/**
 * @description Unauthorized
 * {@link https://tools.ietf.org/html/rfc7235#section-3.1}
 * @description Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.
 * @type {number}
 */
export declare const UNAUTHORIZED: number;
/**
 * @description Payment Required
 * {@link https://tools.ietf.org/html/rfc7231#section-6.5.2}
 * @description This response code is reserved for future use. Initial aim for creating this code was using it for digital payment systems however this is not used currently.
 * @type {number}
 */
export declare const PAYMENT_REQUIRED: number;
/**
 * @description Forbidden
 * {@link https://tools.ietf.org/html/rfc7231#section-6.5.3}
 * @description The client does not have access rights to the content, i.e. they are unauthorized, so server is rejecting to give proper response. Unlike 401, the client's identity is known to the server.
 * @type {number}
 */
export declare const FORBIDDEN: number;
/**
 * @description Not Found
 * {@link https://tools.ietf.org/html/rfc7231#section-6.5.4}
 * @description The server can not find requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurence on the web.
 * @type {number}
 */
export declare const NOT_FOUND: number;
/**
 * @description Method Not Allowed
 * {@link https://tools.ietf.org/html/rfc7231#section-6.5.5}
 * @description The request method is known by the server but has been disabled and cannot be used. For example, an API may forbid DELETE-ing a resource. The two mandatory methods, GET and HEAD, must never be disabled and should not return this error code.
 * @type {number}
 */
export declare const METHOD_NOT_ALLOWED: number;
/**
 * @description Not Acceptable
 * {@link https://tools.ietf.org/html/rfc7231#section-6.5.6}
 * @description This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content following the criteria given by the user agent.
 * @type {number}
 */
export declare const NOT_ACCEPTABLE: number;
/**
 * @description Proxy Authentication Required
 * {@link https://tools.ietf.org/html/rfc7235#section-3.2}
 * @description This is similar to 401 but authentication is needed to be done by a proxy.
 * @type {number}
 */
export declare const PROXY_AUTHENTICATION_REQUIRED: number;
/**
 * @description Request Timeout
 * {@link https://tools.ietf.org/html/rfc7231#section-6.5.7}
 * @description This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message.
 * @type {number}
 */
export declare const REQUEST_TIMEOUT: number;
/**
 * @description Conflict
 * {@link https://tools.ietf.org/html/rfc7231#section-6.5.8}
 * @description This response is sent when a request conflicts with the current state of the server.
 * @type {number}
 */
export declare const CONFLICT: number;
/**
 * @description Gone
 * {@link https://tools.ietf.org/html/rfc7231#section-6.5.9}
 * @description This response would be sent when the requested content has been permenantly deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for "limited-time, promotional services". APIs should not feel compelled to indicate resources that have been deleted with this status code.
 * @type {number}
 */
export declare const GONE: number;
/**
 * @description Length Required
 * {@link https://tools.ietf.org/html/rfc7231#section-6.5.10}
 * @description Server rejected the request because the Content-Length header field is not defined and the server requires it.
 * @type {number}
 */
export declare const LENGTH_REQUIRED: number;
/**
 * @description Precondition Failed
 * {@link https://tools.ietf.org/html/rfc7232#section-4.2}
 * @description The client has indicated preconditions in its headers which the server does not meet.
 * @type {number}
 */
export declare const PRECONDITION_FAILED: number;
/**
 * @description Payload Too Large
 * {@link https://tools.ietf.org/html/rfc7231#section-6.5.11}
 * @description Request entity is larger than limits defined by server; the server might close the connection or return an Retry-After header field.
 * @type {number}
 */
export declare const PAYLOAD_TOO_LARGE: number;
/**
 * @description URI Too Long
 * {@link https://tools.ietf.org/html/rfc7231#section-6.5.12}
 * @description The URI requested by the client is longer than the server is willing to interpret.
 * @type {number}
 */
export declare const REQUEST_URI_TOO_LONG: number;
/**
 * @description Unsupported Media Type
 * {@link https://tools.ietf.org/html/rfc7231#section-6.5.13}
 * @description The media format of the requested data is not supported by the server, so the server is rejecting the request.
 * @type {number}
 */
export declare const UNSUPPORTED_MEDIA_TYPE: number;
/**
 * @description Range Not Satisfiable
 * {@link https://tools.ietf.org/html/rfc7233#section-4.4}
 * @description The range specified by the Range header field in the request can't be fulfilled; it's possible that the range is outside the size of the target URI's data.
 * @type {number}
 */
export declare const REQUESTED_RANGE_NOT_SATISFIABLE: number;
/**
 * @description Expectation Failed
 * {@link https://tools.ietf.org/html/rfc7231#section-6.5.14}
 * @description This response code means the expectation indicated by the Expect request header field can't be met by the server.
 * @type {number}
 */
export declare const EXPECTATION_FAILED: number;
/**
 * @description I'm a teapot
 * {@link https://tools.ietf.org/html/rfc2324#section-2.3.2}
 * @description Any attempt to brew coffee with a teapot should result in the error code "418 I'm a teapot". The resulting entity body MAY be short and stout.
 * @type {number}
 */
export declare const IM_A_TEAPOT: number;
/**
 * @description Insufficient space on resource
 * {@link https://tools.ietf.org/html/draft-ietf-webdav-protocol-05#section-10.4}
 * @description The resource does not have sufficient space to record the state of
 the resource after the execution of this method.
 * @type {number}
 */
export declare const INSUFFICIENT_SPACE_ON_RESOURCE: number;
/**
 * @description Enhance your calm
 * {@link https://tools.ietf.org/html/draft-ietf-webdav-protocol-05#section-10.4}
 * @description Used this to tell HTTP clients that they were being rate limited. Rate limiting means putting restrictions on the total number of requests a client may do within a time period.
 * @type {number}
 */
export declare const ENHANCE_YOUR_CALM: number;
/**
 * @description Misdirected Request
 * {@link https://tools.ietf.org/html/rfc7540#section-9.1.2}
 * @description The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.
 * @type {number}
 */
export declare const MISDIRECTED_REQUEST: number;
/**
 * {@link https://tools.ietf.org/html/rfc2518#section-10.3}
 * @description The request was well-formed but was unable to be followed due to semantic errors.
 * @type {number}
 */
export declare const UNPROCESSABLE_ENTITY: number;
/**
 * @description Locked
 * {@link https://tools.ietf.org/html/rfc2518#section-10.4}
 * @description The resource that is being accessed is locked.
 * @type {number}
 */
export declare const LOCKED: number;
/**
 * @description Failed Dependency
 * {@link https://tools.ietf.org/html/rfc2518#section-10.5}
 * @description The request failed due to failure of a previous request.
 * @type {number}
 */
export declare const FAILED_DEPENDENCY: number;
/**
 * @description Too Early
 * {@link https://tools.ietf.org/html/rfc8470#section-5.2}
 * @description Indicates that the server is unwilling to risk processing a request that might be replayed.
 * @type {number}
 */
export declare const TOO_EARLY: number;
/**
 * @description Upgrade Required
 * {@link https://tools.ietf.org/html/rfc7231#section-6.5.15}
 * @description The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an Upgrade header in a 426 response to indicate the required protocol(s).
 * @type {number}
 */
export declare const UPGRADE_REQUIRED: number;
/**
 * {@link https://tools.ietf.org/html/rfc6585#section-3}
 * @description The origin server requires the request to be conditional. Intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.
 * @type {number}
 */
export declare const PRECONDITION_REQUIRED: number;
/**
 * @description Too Many Requests
 * {@link https://tools.ietf.org/html/rfc6585#section-4}
 * @description The user has sent too many requests in a given amount of time ("rate limiting").
 * @type {number}
 */
export declare const TOO_MANY_REQUESTS: number;
/**
 * @description Would Block
 * {@link https://tools.ietf.org/html/draft-nottingham-http-pipeline-01}
 * @description The 430 Would Block status code was a code that a server could use to prevent pipelining multiple requests, for which one of the requests would block subsequent ones later in the pipeline.
 * @type {number}
 */
export declare const WOULD_BLOCK: number;
/**
 * @description Request Header Fields Too Large
 * {@link https://tools.ietf.org/html/rfc6585#section-5}
 * @description The server is unwilling to process the request because its header fields are too large. The request MAY be resubmitted after reducing the size of the request header fields.
 * @type {number}
 */
export declare const REQUEST_HEADER_FIELDS_TOO_LARGE: number;
/**
 * @description Unavailable For Legal Reasons
 * {@link https://tools.ietf.org/html/rfc7725#section-3}
 * @description The user-agent requested a resource that cannot legally be provided, such as a web page censored by a government.
 * @type {number}
 */
export declare const UNAVAILABLE_FOR_LEGAL_REASONS: number;
//#endregion
//#region 5XX
/**
 * @description Internal Server Error
 * {@link https://tools.ietf.org/html/rfc7231#section-6.6.1}
 * @description The server has encountered a situation it doesn't know how to handle.
 * @type {number}
 */
export declare const INTERNAL_SERVER_ERROR: number;
/**
 * @description Not Implemented
 * {@link https://tools.ietf.org/html/rfc7231#section-6.6.2}
 * @description The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.
 * @type {number}
 */
export declare const NOT_IMPLEMENTED: number;
/**
 * @description Bad Gateway
 * {@link https://tools.ietf.org/html/rfc7231#section-6.6.3}
 * @description This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.
 * @type {number}
 */
export declare const BAD_GATEWAY: number;
/**
 * @description Service Unavailable
 * {@link https://tools.ietf.org/html/rfc7231#section-6.6.4}
 * @description The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This responses should be used for temporary conditions and the Retry-After: HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.
 * @type {number}
 */
export declare const SERVICE_UNAVAILABLE: number;
/**
 * @description Gateway Timeout
 * {@link https://tools.ietf.org/html/rfc7231#section-6.6.5}
 * @description This error response is given when the server is acting as a gateway and cannot get a response in time.
 * @type {number}
 */
export declare const GATEWAY_TIMEOUT: number;
/**
 * @description HTTP Version Not Supported
 * {@link https://tools.ietf.org/html/rfc7231#section-6.6.6}
 * @description The HTTP version used in the request is not supported by the server.
 * @type {number}
 */
export declare const HTTP_VERSION_NOT_SUPPORTED: number;
/**
 * @description Variant Also Negotiates
 * {@link https://tools.ietf.org/html/rfc2295#section-8.1}
 * @description The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.
 * @type {number}
 */
export declare const VARIANT_ALSO_NEGOTIATES: number;
/**
 * @description Insufficient Storage
 * {@link https://tools.ietf.org/html/rfc2518#section-10.6}
 * @description The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.
 * @type {number}
 */
export declare const INSUFFICIENT_STORAGE: number;
/**
 * @description Loop Detected
 * {@link https://tools.ietf.org/html/rfc5842#section-7.2}
 * @description The server detected an infinite loop while processing the request.
 * @type {number}
 */
export declare const LOOP_DETECTED: number;
/**
 * @description Bandwidth Limit Exceeded
 * @description This status code, while used by many servers, is not specified in any RFCs.
 * @type {number}
 */
export declare const BANDWIDTH_LIMIT_EXCEEDED: number;
/**
 * @description Not Extended
 * {@link https://tools.ietf.org/html/rfc2774#section-7}
 * @description Further extensions to the request are required for the server to fulfil it.
 * @type {number}
 */
export declare const NOT_EXTENDED: number;
/**
 * {@link https://tools.ietf.org/html/rfc6585#section-6}
 * @description The 511 status code indicates that the client needs to authenticate to gain network access.
 * @type {number}
 */
export declare const NETWORK_AUTHENTICATION_REQUIRED: number;
//#endregion
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
  APP_VND_EXCEL: string;
  APP_VND_EXCEL_ADD_IN_MACRO: string;
  APP_VND_EXCEL_SHEET_BIN_MACRO: string;
  APP_VND_EXCEL_SHEET_MACRO: string;
  APP_VND_EXCEL_TPL_MACRO: string;
  APP_VND_OXF_DOC_SPREADSHEET_SHEET: string;
  APP_VND_OXF_DOC_SPREADSHEET_TPL: string;
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
  TEXT_COMMA_SEPARATED_VALUES: string;
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
 * @type {{APP_DART: string, TEXT_HTML: string, APP: string, AUDIO_VORBIS: string, APP_XHTML: string, TEXT_XML: string, AUDIO_BASIC: string, AUDIO_OGG: string, AUDIO_WEBM: string, VIDEO: string, APP_MICROSOFT_EXCEL: string, APP_RDF_XML: string, IMAGE_APNG: string, APP_RTF: string, TEXT: string, APP_EPUB: string, AUDIO_MP4: string, AUDIO: string, VIDEO_THREE_GPP2: string, IMAGE_WEBP: string, APP_WOFF: string, TEXT_CALENDAR: string, VIDEO_QUICKTIME: string, APP_PROTOBUF: string, IMAGE: string, VIDEO_MP4: string, IMAGE_SVG: string, VIDEO_OGG: string, TEXT_CACHE_MANIFEST: string, IMAGE_CRW: string, APP_PDF: string, APP_SKETCHUP: string, TEXT_JAVASCRIPT: string, APP_EOT: string, APP_MICROSOFT_WORD: string, TEXT_VCARD: string, IMAGE_ICO: string, TEXT_VTT: string, APP_GZIP: string, APP_LD_JSON: string, AUDIO_WAX: string, VIDEO_AV1: string, AUDIO_VND_REAL: string, IMAGE_BMP: string, APP_ATOM: string, IMAGE_AVIF: string, TEXT_COMMA_SEPARATED_VALUES: string, TEXT_CSV: string, APP_FORM_DATA: string, APP_XML: string, TEXT_CSS: string, APP_JAVASCRIPT: string, APP_SOAP_XML: string, APP_MICROSOFT_POWERPOINT: string, APP_MBOX: string, APP_MOBILE_CONFIG: string, APP_OGG: string, TEXT_PLAIN: string, APP_MANIFEST_JSON: string, APP_XRD: string, AUDIO_WMA: string, TEXT_TSV: string, VIDEO_WEBM: string, VIDEO_WMV: string, TEXT_WML: string, IMAGE_JPEG: string, IMAGE_PSD: string, AUDIO_VND_WAVE: string, APP_TAR: string, ANY: string, APP_BZIP2: string, APP_ZIP: string, IMAGE_PNG: string, APP_POSTSCRIPT: string, VIDEO_MPEG: string, APP_SFNT: string, IMAGE_TIFF: string, VIDEO_THREE_GPP: string, APP_KEY_ARCHIVE: string, APP_NACL: string, APP_BINARY: string, APP_KML: string, APP_NACL_PORTABLE: string, APP_WOFF2: string, APP_JSON: string, AUDIO_L24: string, APP_PASSBOOK: string, APP_SHOCKWAVE_FLASH: string, IMAGE_AVIF_SEQ: string, AUDIO_MPEG: string, VIDEO_FLV: string, IMAGE_GIF: string, IMAGE_HEIC: string, APP_OCTET_STREAM: string, APP_KMZ: string, IMAGE_HEIF: string, AUDIO_AAC: string}}
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
 * @description Status code text
 * @readonly
 * @type {{REQUEST_TIMEOUT: string, INSUFFICIENT_SPACE_ON_RESOURCE: string, USE_PROXY: string, UNPROCESSABLE_ENTITY: string, PROCESSING: string, TEMPORARY_REDIRECT: string, NOT_EXTENDED: string, MOVED_TEMPORARILY: string, PAYLOAD_TOO_LARGE: string, VARIANT_ALSO_NEGOTIATES: string, FAILED_DEPENDENCY: string, ACCEPTED: string, BAD_GATEWAY: string, IM_USED: string, NOT_ACCEPTABLE: string, RESET_CONTENT: string, PARTIAL_CONTENT: string, GATEWAY_TIMEOUT: string, WOULD_BLOCK: string, METHOD_NOT_ALLOWED: string, EXPECTATION_FAILED: string, LOCKED: string, UNUSED: string, NOT_FOUND: string, PERMANENT_REDIRECT: string, IM_A_TEAPOT: string, LENGTH_REQUIRED: string, BANDWIDTH_LIMIT_EXCEEDED: string, MULTIPLE_CHOICES: string, NETWORK_AUTHENTICATION_REQUIRED: string, SWITCHING_PROTOCOLS: string, GONE: string, UPGRADE_REQUIRED: string, UNAVAILABLE_FOR_LEGAL_REASONS: string, TOO_MANY_REQUESTS: string, INTERNAL_SERVER_ERROR: string, CONFLICT: string, INSUFFICIENT_STORAGE: string, HTTP_VERSION_NOT_SUPPORTED: string, UNSUPPORTED_MEDIA_TYPE: string, NO_CONTENT: string, PROXY_AUTHENTICATION_REQUIRED: string, REQUEST_HEADER_FIELDS_TOO_LARGE: string, PAYMENT_REQUIRED: string, CREATED: string, MOVED_PERMANENTLY: string, UNAUTHORIZED: string, REQUEST_URI_TOO_LONG: string, OK: string, REQUESTED_RANGE_NOT_SATISFIABLE: string, BAD_REQUEST: string, ENHANCE_YOUR_CALM: string, MISDIRECTED_REQUEST: string, SEE_OTHER: string, FORBIDDEN: string, CONTINUE: string, PRECONDITION_REQUIRED: string, NOT_MODIFIED: string, NOT_IMPLEMENTED: string, ALREADY_REPORTED: string, NON_AUTHORITATIVE_INFORMATION: string, PRECONDITION_FAILED: string, LOOP_DETECTED: string, SERVICE_UNAVAILABLE: string, TOO_EARLY: string, EARLY_HINTS: string, MULTI_STATUS: string}}
 */
export declare const STATUS_CODE_MEMO: {
  CONTINUE: string;
  SWITCHING_PROTOCOLS: string;
  PROCESSING: string;
  EARLY_HINTS: string;
  OK: string;
  CREATED: string;
  ACCEPTED: string;
  NON_AUTHORITATIVE_INFORMATION: string;
  NO_CONTENT: string;
  RESET_CONTENT: string;
  PARTIAL_CONTENT: string;
  MULTI_STATUS: string;
  ALREADY_REPORTED: string;
  IM_USED: string;
  MULTIPLE_CHOICES: string;
  MOVED_PERMANENTLY: string;
  MOVED_TEMPORARILY: string;
  SEE_OTHER: string;
  NOT_MODIFIED: string;
  USE_PROXY: string;
  UNUSED: string;
  TEMPORARY_REDIRECT: string;
  PERMANENT_REDIRECT: string;
  BAD_REQUEST: string;
  UNAUTHORIZED: string;
  PAYMENT_REQUIRED: string;
  FORBIDDEN: string;
  NOT_FOUND: string;
  METHOD_NOT_ALLOWED: string;
  NOT_ACCEPTABLE: string;
  PROXY_AUTHENTICATION_REQUIRED: string;
  REQUEST_TIMEOUT: string;
  CONFLICT: string;
  GONE: string;
  LENGTH_REQUIRED: string;
  PRECONDITION_FAILED: string;
  PAYLOAD_TOO_LARGE: string;
  REQUEST_URI_TOO_LONG: string;
  UNSUPPORTED_MEDIA_TYPE: string;
  REQUESTED_RANGE_NOT_SATISFIABLE: string;
  EXPECTATION_FAILED: string;
  IM_A_TEAPOT: string;
  INSUFFICIENT_SPACE_ON_RESOURCE: string;
  ENHANCE_YOUR_CALM: string;
  MISDIRECTED_REQUEST: string;
  UNPROCESSABLE_ENTITY: string;
  LOCKED: string;
  FAILED_DEPENDENCY: string;
  TOO_EARLY: string;
  UPGRADE_REQUIRED: string;
  PRECONDITION_REQUIRED: string;
  TOO_MANY_REQUESTS: string;
  WOULD_BLOCK: string;
  REQUEST_HEADER_FIELDS_TOO_LARGE: string;
  UNAVAILABLE_FOR_LEGAL_REASONS: string;
  INTERNAL_SERVER_ERROR: string;
  NOT_IMPLEMENTED: string;
  BAD_GATEWAY: string;
  SERVICE_UNAVAILABLE: string;
  GATEWAY_TIMEOUT: string;
  HTTP_VERSION_NOT_SUPPORTED: string;
  VARIANT_ALSO_NEGOTIATES: string;
  INSUFFICIENT_STORAGE: string;
  LOOP_DETECTED: string;
  BANDWIDTH_LIMIT_EXCEEDED: string;
  NOT_EXTENDED: string;
  NETWORK_AUTHENTICATION_REQUIRED: string;
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
