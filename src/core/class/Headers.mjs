import { HTTP_HEADER } from "../../const/list/HTTP_HEADER.mjs";
import { HTTP_MEDIA_TYPE } from "../../const/list/HTTP_MEDIA_TYPE.mjs";

/**
 * @todo implement
 */
export class Header {
  constructor(headers = {}) {
    this.headers = { ...headers };
  }
  ContentType(header = HTTP_MEDIA_TYPE.APP_JSON) {
    this.headers[HTTP_HEADER.CONTENT_TYPE] = header;
    return this;
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
