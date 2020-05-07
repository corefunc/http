import { httpStatusCode } from "./httpStatusCode.mjs";
import { httpStatusText } from "./httpStatusText.mjs";

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
export function httpResponseHtml(code, message) {
  const theCode = httpStatusCode(code);
  let response = `<!DOCTYPE html><html><body><h1>${theCode} ${httpStatusText(theCode)}</h1>`;
  if (typeof message === "string") {
    response = `${response}<h2>${message}</h2>`;
  } else if (Array.isArray(code) && typeof code[0] === "string" && code[0].length > 4) {
    response = `${response}<h2>${code[0].substr(4)}</h2>`;
  } else if (message && typeof message === "object" && !Array.isArray(message)) {
    Object.keys(message).forEach((key) => {
      response = `${response}<p><strong>${key}</strong><span>${message[key]}</span></p>`;
    });
  }
  return `${response}</body></html>`;
}
