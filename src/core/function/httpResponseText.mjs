import { httpStatusCode } from "./httpStatusCode.mjs";
import { httpStatusText } from "./httpStatusText.mjs";

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
export function httpResponseText(code, message) {
  const theCode = httpStatusCode(code);
  let response = `${theCode} ${httpStatusText(theCode)}`;
  if (typeof message === "string") {
    response = `${response}\n${message}`;
  } else if (Array.isArray(code) && typeof code[0] === "string" && code[0].length > 4) {
    response = `${response}\n${code[0].substr(4)}`;
  } else if (message && typeof message === "object" && !Array.isArray(message)) {
    Object.keys(message).forEach((key) => {
      response = `${response}\n${key}\t${message[key]}`;
    });
  }
  return response;
}
