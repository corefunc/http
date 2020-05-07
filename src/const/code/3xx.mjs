/**
 * @description Multiple Choice
 * {@link https://tools.ietf.org/html/rfc7231#section-6.4.1}
 * @description The request has more than one possible responses. User-agent or user should choose one of them. There is no standardized way to choose one of the responses.
 * @type {number}
 */
export const MULTIPLE_CHOICES = 300;
/**
 * @description Moved Permanently
 * {@link https://tools.ietf.org/html/rfc7231#section-6.4.2}
 * @description This response code means that URI of requested resource has been changed. Probably, new URI would be given in the response.
 * @type {number}
 */
export const MOVED_PERMANENTLY = 301;
/**
 * @description Found
 * {@link https://tools.ietf.org/html/rfc7231#section-6.4.3}
 * @description This response code means that URI of requested resource has been changed temporarily. New changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.
 * @type {number}
 */
export const MOVED_TEMPORARILY = 302;
/**
 * @description See Other
 * {@link https://tools.ietf.org/html/rfc7231#section-6.4.4}
 * @description Server sent this response to directing client to get requested resource to another URI with an GET request.
 * @type {number}
 */
export const SEE_OTHER = 303;
/**
 * @description Not Modified
 * {@link https://tools.ietf.org/html/rfc7232#section-4.1}
 * @description This is used for caching purposes. It is telling to client that response has not been modified. So, client can continue to use same cached version of response.
 * @type {number}
 */
export const NOT_MODIFIED = 304;
/**
 * @description Use Proxy
 * {@link https://tools.ietf.org/html/rfc7231#section-6.4.6}
 * @description Was defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy.
 * @type {number}
 */
export const USE_PROXY = 305;
/**
 * @description Unused
 * {@link https://tools.ietf.org/html/rfc2616#section-10.3.7}
 * @description This response code is no longer used; it is just reserved. It was used in a previous version of the HTTP/1.1 specification.
 * @type {number}
 */
export const UNUSED = 306;
/**
 * @description Temporary Redirect
 * {@link https://tools.ietf.org/html/rfc7231#section-6.4.7}
 * @description Server sent this response to directing client to get requested resource to another URI with same method that used prior request. This has the same semantic than the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.
 * @type {number}
 */
export const TEMPORARY_REDIRECT = 307;
/**
 * @description Permanent Redirect
 * {@link https://tools.ietf.org/html/rfc7538#section-3}
 * @description This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header. This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.
 * @type {number}
 */
export const PERMANENT_REDIRECT = 308;
