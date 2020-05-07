/**
 * @description httpStatusCode
 * @param {number|string} code
 * @example httpStatusCode(200) // 200
 * @example httpStatusCode("200") // 200
 * @example httpStatusCode`200` // 200
 * @returns {number}
 */
export function httpStatusCode(code) {
  return Number.parseInt(Array.isArray(code) ? `${code[0]}` : `${code}`);
}
