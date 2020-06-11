import { HTTP_HEADER } from "../../const/list/HTTP_HEADER.mjs";
import { HTTP_MEDIA_TYPE } from "../../const/list/HTTP_MEDIA_TYPE.mjs";

/**
 * @todo implement
 */
export class Header {
  constructor(headers = {}) {
    this.headers = { ...headers };
  }
  toObject() {
    return { ...this };
  }
  valueOf() {
    return this.toJSON();
  }
  toJSON() {
    return JSON.stringify(this.toObject());
  }
  //#region Message body information
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers#Message_body_information
  /**
   * @description The size of the resource, in decimal number of bytes.
   * @param {number} length The length in decimal number of octets.
   */
  ContentLength(length) {
    this.headers[HTTP_HEADER.CONTENT_LENGTH] = `${length}`;
    return this;
  }

  /**
   * @description The Content-Type entity header is used to indicate the media type of the resource.
   * @param {string} mediaType The MIME type of the resource or the data.
   * @param {string=} charset The character encoding standard.
   * @param {string=} boundary For multipart entities the boundary directive is required, which consists of 1 to 70 characters from a set of characters known to be very robust through email gateways, and not ending with white space.
   * @returns {Header}
   * @constructor
   */
  ContentType(mediaType = HTTP_MEDIA_TYPE.APP_JSON, charset = "", boundary = "") {
    this.headers[HTTP_HEADER.CONTENT_TYPE] = mediaType;
    if (charset.length) {
      this.headers[HTTP_HEADER.CONTENT_TYPE] += `; charset=${charset}`;
      if (boundary.length) {
        this.headers[HTTP_HEADER.CONTENT_TYPE] += `; boundary=${boundary}`;
      }
    }
    return this;
  }
  //#endregion
}

/**
 * @name Headers
 * @description Chained builder for headers
 * @param {object=} headers
 * @returns {Header}
 */
export function Headers(headers = {}) {
  return new Header(headers);
}
