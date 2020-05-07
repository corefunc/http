import { httpStatusText } from "./httpStatusText.mjs";

/**
 * @description httpResponse
 * @param {number|string} code
 * @param {object|string=} message
 * @example httpResponse(200)
 * @example httpResponse("200") // { message: "OK", statusCode: 200 }
 * @example httpResponse`200`
 * @example httpResponse(403, "Not for you") // { error: true, message: "Not for you", statusCode: 403 }
 * @example httpResponse`403 Not for you`
 * @example httpResponse(500, { errorForDeveloper: "", errorForUser: "" })
 * @returns {{message: string, statusCode: number}}
 */
export function httpResponse(code, message) {
  const theCode = Number.parseInt(Array.isArray(code) ? code[0] : code, 10);
  let theMessage = httpStatusText(theCode);
  if (typeof message === "string") {
    theMessage = message;
  } else if (Array.isArray(code) && typeof code[0] === "string" && code[0].length > 4) {
    theMessage = code[0].substr(4);
  }
  const extend = message && typeof message === "object" && !Array.isArray(message) ? message : {};
  if (theCode > 399) {
    if (!("error" in extend)) {
      extend.error = true;
    }
  }
  return {
    message: theMessage,
    statusCode: theCode,
    ...extend,
  };
}
