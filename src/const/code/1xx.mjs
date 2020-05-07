/**
 * @description Continue
 * {@link https://tools.ietf.org/html/rfc7231#section-6.2.1}
 * @description This interim response indicates that everything so far is OK and that the client should continue with the request or ignore it if it is already finished.
 * @type {number}
 */
export const CONTINUE = 100;
/**
 * @description Switching Protocol
 * {@link https://tools.ietf.org/html/rfc7231#section-6.2.2}
 * @description This code is sent in response to an Upgrade request header by the client, and indicates the protocol the server is switching too.
 * @type {number}
 */
export const SWITCHING_PROTOCOLS = 101;
/**
 * @description Processing
 * {@link https://tools.ietf.org/html/rfc2518#section-10.1}
 * @description This code indicates that the server has received and is processing the request, but no response is available yet.
 * @type {number}
 */
export const PROCESSING = 102;
/**
 * @description Early Hints
 * {@link https://tools.ietf.org/html/rfc8297#section-2}
 * @description This status code is primarily intended to be used with the Link header, letting the user agent start preloading resources while the server prepares a response.
 * @type {number}
 */
export const EARLY_HINTS = 103;
