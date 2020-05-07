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
export const OK = 200;
/**
 * @description Created
 * {@link https://tools.ietf.org/html/rfc7231#section-6.3.2}
 * @description The request has succeeded and a new resource has been created as a result of it. This is typically the response sent after a PUT request.
 * @type {number}
 */
export const CREATED = 201;
/**
 * @description Accepted
 * {@link https://tools.ietf.org/html/rfc7231#section-6.3.3}
 * @description The request has been received but not yet acted upon. It is non-committal, meaning that there is no way in HTTP to later send an asynchronous response indicating the outcome of processing the request. It is intended for cases where another process or server handles the request, or for batch processing.
 * @type {number}
 */
export const ACCEPTED = 202;
/**
 * @description Non-Authoritative Information
 * {@link https://tools.ietf.org/html/rfc7231#section-6.3.4}
 * @description This response code means returned meta-information set is not exact set as available from the origin server, but collected from a local or a third party copy. Except this condition, 200 OK response should be preferred instead of this response.
 * @type {number}
 */
export const NON_AUTHORITATIVE_INFORMATION = 203;
/**
 * @description No Content
 * {@link https://tools.ietf.org/html/rfc7231#section-6.3.5}
 * @description There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones.
 * @type {number}
 */
export const NO_CONTENT = 204;
/**
 * @description Reset Content
 * {@link https://tools.ietf.org/html/rfc7231#section-6.3.6}
 * @description This response code is sent after accomplishing request to tell user agent reset document view which sent this request.
 * @type {number}
 */
export const RESET_CONTENT = 205;
/**
 * @description Partial Content
 * {@link https://tools.ietf.org/html/rfc7233#section-4.1}
 * @description This response code is used because of range header sent by the client to separate download into multiple streams.
 * @type {number}
 */
export const PARTIAL_CONTENT = 206;
/**
 * @description Multi-Status
 * {@link https://tools.ietf.org/html/rfc2518#section-10.2}
 * @description A Multi-Status response conveys information about multiple resources in situations where multiple status codes might be appropriate.
 * @type {number}
 */
export const MULTI_STATUS = 207;
/**
 * @description Already Reported
 * {@link https://tools.ietf.org/html/rfc5842#section-7.1}
 * @description Used inside a <dav:propstat> response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection.
 * @type {number}
 */
export const ALREADY_REPORTED = 208;
/**
 * @description IM Used
 * {@link https://tools.ietf.org/html/rfc3229#section-10.6}
 * @description A Multi-Status response conveys information about multiple resources in situations where multiple status codes might be appropriate.
 * @type {number}
 */
export const IM_USED = 226;
