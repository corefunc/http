/**
 * @description Internal Server Error
 * {@link https://tools.ietf.org/html/rfc7231#section-6.6.1}
 * @description The server has encountered a situation it doesn't know how to handle.
 * @type {number}
 */
export const INTERNAL_SERVER_ERROR = 500;
/**
 * @description Not Implemented
 * {@link https://tools.ietf.org/html/rfc7231#section-6.6.2}
 * @description The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.
 * @type {number}
 */
export const NOT_IMPLEMENTED = 501;
/**
 * @description Bad Gateway
 * {@link https://tools.ietf.org/html/rfc7231#section-6.6.3}
 * @description This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.
 * @type {number}
 */
export const BAD_GATEWAY = 502;
/**
 * @description Service Unavailable
 * {@link https://tools.ietf.org/html/rfc7231#section-6.6.4}
 * @description The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This responses should be used for temporary conditions and the Retry-After: HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.
 * @type {number}
 */
export const SERVICE_UNAVAILABLE = 503;
/**
 * @description Gateway Timeout
 * {@link https://tools.ietf.org/html/rfc7231#section-6.6.5}
 * @description This error response is given when the server is acting as a gateway and cannot get a response in time.
 * @type {number}
 */
export const GATEWAY_TIMEOUT = 504;
/**
 * @description HTTP Version Not Supported
 * {@link https://tools.ietf.org/html/rfc7231#section-6.6.6}
 * @description The HTTP version used in the request is not supported by the server.
 * @type {number}
 */
export const HTTP_VERSION_NOT_SUPPORTED = 505;
/**
 * @description Variant Also Negotiates
 * {@link https://tools.ietf.org/html/rfc2295#section-8.1}
 * @description The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.
 * @type {number}
 */
export const VARIANT_ALSO_NEGOTIATES = 506;
/**
 * @description Insufficient Storage
 * {@link https://tools.ietf.org/html/rfc2518#section-10.6}
 * @description The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.
 * @type {number}
 */
export const INSUFFICIENT_STORAGE = 507;
/**
 * @description Loop Detected
 * {@link https://tools.ietf.org/html/rfc5842#section-7.2}
 * @description The server detected an infinite loop while processing the request.
 * @type {number}
 */
export const LOOP_DETECTED = 508;
/**
 * @description Bandwidth Limit Exceeded
 * @description This status code, while used by many servers, is not specified in any RFCs.
 * @type {number}
 */
export const BANDWIDTH_LIMIT_EXCEEDED = 509;
/**
 * @description Not Extended
 * {@link https://tools.ietf.org/html/rfc2774#section-7}
 * @description Further extensions to the request are required for the server to fulfil it.
 * @type {number}
 */
export const NOT_EXTENDED = 510;
/**
 * {@link https://tools.ietf.org/html/rfc6585#section-6}
 * @description The 511 status code indicates that the client needs to authenticate to gain network access.
 * @type {number}
 */
export const NETWORK_AUTHENTICATION_REQUIRED = 511;
