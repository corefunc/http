/**
 * @description Bad Request
 * {@link https://tools.ietf.org/html/rfc7231#section-6.5.1}
 * @description This response means that server could not understand the request due to invalid syntax.
 * @type {number}
 */
export const BAD_REQUEST = 400;
/**
 * @description Unauthorized
 * {@link https://tools.ietf.org/html/rfc7235#section-3.1}
 * @description Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.
 * @type {number}
 */
export const UNAUTHORIZED = 401;
/**
 * @description Payment Required
 * {@link https://tools.ietf.org/html/rfc7231#section-6.5.2}
 * @description This response code is reserved for future use. Initial aim for creating this code was using it for digital payment systems however this is not used currently.
 * @type {number}
 */
export const PAYMENT_REQUIRED = 402;
/**
 * @description Forbidden
 * {@link https://tools.ietf.org/html/rfc7231#section-6.5.3}
 * @description The client does not have access rights to the content, i.e. they are unauthorized, so server is rejecting to give proper response. Unlike 401, the client's identity is known to the server.
 * @type {number}
 */
export const FORBIDDEN = 403;
/**
 * @description Not Found
 * {@link https://tools.ietf.org/html/rfc7231#section-6.5.4}
 * @description The server can not find requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurence on the web.
 * @type {number}
 */
export const NOT_FOUND = 404;
/**
 * @description Method Not Allowed
 * {@link https://tools.ietf.org/html/rfc7231#section-6.5.5}
 * @description The request method is known by the server but has been disabled and cannot be used. For example, an API may forbid DELETE-ing a resource. The two mandatory methods, GET and HEAD, must never be disabled and should not return this error code.
 * @type {number}
 */
export const METHOD_NOT_ALLOWED = 405;
/**
 * @description Not Acceptable
 * {@link https://tools.ietf.org/html/rfc7231#section-6.5.6}
 * @description This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content following the criteria given by the user agent.
 * @type {number}
 */
export const NOT_ACCEPTABLE = 406;
/**
 * @description Proxy Authentication Required
 * {@link https://tools.ietf.org/html/rfc7235#section-3.2}
 * @description This is similar to 401 but authentication is needed to be done by a proxy.
 * @type {number}
 */
export const PROXY_AUTHENTICATION_REQUIRED = 407;
/**
 * @description Request Timeout
 * {@link https://tools.ietf.org/html/rfc7231#section-6.5.7}
 * @description This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message.
 * @type {number}
 */
export const REQUEST_TIMEOUT = 408;
/**
 * @description Conflict
 * {@link https://tools.ietf.org/html/rfc7231#section-6.5.8}
 * @description This response is sent when a request conflicts with the current state of the server.
 * @type {number}
 */
export const CONFLICT = 409;
/**
 * @description Gone
 * {@link https://tools.ietf.org/html/rfc7231#section-6.5.9}
 * @description This response would be sent when the requested content has been permenantly deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for "limited-time, promotional services". APIs should not feel compelled to indicate resources that have been deleted with this status code.
 * @type {number}
 */
export const GONE = 410;
/**
 * @description Length Required
 * {@link https://tools.ietf.org/html/rfc7231#section-6.5.10}
 * @description Server rejected the request because the Content-Length header field is not defined and the server requires it.
 * @type {number}
 */
export const LENGTH_REQUIRED = 411;
/**
 * @description Precondition Failed
 * {@link https://tools.ietf.org/html/rfc7232#section-4.2}
 * @description The client has indicated preconditions in its headers which the server does not meet.
 * @type {number}
 */
export const PRECONDITION_FAILED = 412;
/**
 * @description Payload Too Large
 * {@link https://tools.ietf.org/html/rfc7231#section-6.5.11}
 * @description Request entity is larger than limits defined by server; the server might close the connection or return an Retry-After header field.
 * @type {number}
 */
export const PAYLOAD_TOO_LARGE = 413;
/**
 * @description URI Too Long
 * {@link https://tools.ietf.org/html/rfc7231#section-6.5.12}
 * @description The URI requested by the client is longer than the server is willing to interpret.
 * @type {number}
 */
export const REQUEST_URI_TOO_LONG = 414;
/**
 * @description Unsupported Media Type
 * {@link https://tools.ietf.org/html/rfc7231#section-6.5.13}
 * @description The media format of the requested data is not supported by the server, so the server is rejecting the request.
 * @type {number}
 */
export const UNSUPPORTED_MEDIA_TYPE = 415;
/**
 * @description Range Not Satisfiable
 * {@link https://tools.ietf.org/html/rfc7233#section-4.4}
 * @description The range specified by the Range header field in the request can't be fulfilled; it's possible that the range is outside the size of the target URI's data.
 * @type {number}
 */
export const REQUESTED_RANGE_NOT_SATISFIABLE = 416;
/**
 * @description Expectation Failed
 * {@link https://tools.ietf.org/html/rfc7231#section-6.5.14}
 * @description This response code means the expectation indicated by the Expect request header field can't be met by the server.
 * @type {number}
 */
export const EXPECTATION_FAILED = 417;
/**
 * @description I'm a teapot
 * {@link https://tools.ietf.org/html/rfc2324#section-2.3.2}
 * @description Any attempt to brew coffee with a teapot should result in the error code "418 I'm a teapot". The resulting entity body MAY be short and stout.
 * @type {number}
 */
export const IM_A_TEAPOT = 418;
/**
 * @description Insufficient space on resource
 * {@link https://tools.ietf.org/html/draft-ietf-webdav-protocol-05#section-10.4}
 * @description The resource does not have sufficient space to record the state of
 the resource after the execution of this method.
 * @type {number}
 */
export const INSUFFICIENT_SPACE_ON_RESOURCE = 419;
/**
 * @description Enhance your calm
 * {@link https://tools.ietf.org/html/draft-ietf-webdav-protocol-05#section-10.4}
 * @description Used this to tell HTTP clients that they were being rate limited. Rate limiting means putting restrictions on the total number of requests a client may do within a time period.
 * @type {number}
 */
export const ENHANCE_YOUR_CALM = 420;
/**
 * @description Misdirected Request
 * {@link https://tools.ietf.org/html/rfc7540#section-9.1.2}
 * @description The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.
 * @type {number}
 */
export const MISDIRECTED_REQUEST = 421;
/**
 * {@link https://tools.ietf.org/html/rfc2518#section-10.3}
 * @description The request was well-formed but was unable to be followed due to semantic errors.
 * @type {number}
 */
export const UNPROCESSABLE_ENTITY = 422;
/**
 * @description Locked
 * {@link https://tools.ietf.org/html/rfc2518#section-10.4}
 * @description The resource that is being accessed is locked.
 * @type {number}
 */
export const LOCKED = 423;
/**
 * @description Failed Dependency
 * {@link https://tools.ietf.org/html/rfc2518#section-10.5}
 * @description The request failed due to failure of a previous request.
 * @type {number}
 */
export const FAILED_DEPENDENCY = 424;
/**
 * @description Too Early
 * {@link https://tools.ietf.org/html/rfc8470#section-5.2}
 * @description Indicates that the server is unwilling to risk processing a request that might be replayed.
 * @type {number}
 */
export const TOO_EARLY = 425;
/**
 * @description Upgrade Required
 * {@link https://tools.ietf.org/html/rfc7231#section-6.5.15}
 * @description The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an Upgrade header in a 426 response to indicate the required protocol(s).
 * @type {number}
 */
export const UPGRADE_REQUIRED = 426;
/**
 * {@link https://tools.ietf.org/html/rfc6585#section-3}
 * @description The origin server requires the request to be conditional. Intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.
 * @type {number}
 */
export const PRECONDITION_REQUIRED = 428;
/**
 * @description Too Many Requests
 * {@link https://tools.ietf.org/html/rfc6585#section-4}
 * @description The user has sent too many requests in a given amount of time ("rate limiting").
 * @type {number}
 */
export const TOO_MANY_REQUESTS = 429;
/**
 * @description Would Block
 * {@link https://tools.ietf.org/html/draft-nottingham-http-pipeline-01}
 * @description The 430 Would Block status code was a code that a server could use to prevent pipelining multiple requests, for which one of the requests would block subsequent ones later in the pipeline.
 * @type {number}
 */
export const WOULD_BLOCK = 430;
/**
 * @description Request Header Fields Too Large
 * {@link https://tools.ietf.org/html/rfc6585#section-5}
 * @description The server is unwilling to process the request because its header fields are too large. The request MAY be resubmitted after reducing the size of the request header fields.
 * @type {number}
 */
export const REQUEST_HEADER_FIELDS_TOO_LARGE = 431;
/**
 * @description Unavailable For Legal Reasons
 * {@link https://tools.ietf.org/html/rfc7725#section-3}
 * @description The user-agent requested a resource that cannot legally be provided, such as a web page censored by a government.
 * @type {number}
 */
export const UNAVAILABLE_FOR_LEGAL_REASONS = 451;
