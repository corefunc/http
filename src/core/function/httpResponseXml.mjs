import { httpResponse } from "./httpResponse.mjs";

/**
 * @description httpResponseXml
 * @param {number|string} code
 * @param {object|string=} message
 * @example httpResponseXml(200)
 * @example httpResponseXml("200") // '<?xml version="1.0" encoding="UTF-8"?><root><message>OK</message><statusCode>200</statusCode></root>'
 * @example httpResponseXml`200`
 * @example httpResponseXml(403, "Not for you") // '<?xml version="1.0" encoding="UTF-8"?><root><message>Not for you</message><statusCode>403</statusCode><error>true</error></root>'
 * @example httpResponseXml`403 Not for you`
 * @example httpResponseXml(500, { ErrorForDeveloper: "Dev", ErrorForUser: "User" }) // '<?xml version="1.0" encoding="UTF-8"?><root><message>Internal Server Error</message><statusCode>500</statusCode><ErrorForDeveloper>Dev</ErrorForDeveloper><ErrorForUser>User</ErrorForUser><error>true</error></root>'
 * @returns {string}
 */
export function httpResponseXml(code, message) {
  let response = `<?xml version="1.0" encoding="UTF-8"?><root>`;
  const result = httpResponse(code, message);
  Object.keys(result).forEach((key) => {
    response = `${response}<${key}>${result[key]}</${key}>`;
  });
  return `${response}</root>`;
}
