import { httpResponse } from "./httpResponse.mjs";

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
export function httpResponseJson(code, message) {
  return JSON.stringify(httpResponse(code, message));
}
