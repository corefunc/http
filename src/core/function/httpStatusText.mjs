import { STATUS_CODE_TEXT } from "../../const/list/STATUS_CODE_TEXT.mjs";

/**
 * @description httpStatusText
 * @param {number|string} code
 * @example httpStatusText(200)
 * @example httpStatusText("200")
 * @example httpStatusText`200`
 * @returns {string}
 */
export function httpStatusText(code) {
  return Array.isArray(code) ? STATUS_CODE_TEXT[`${code[0]}`] : STATUS_CODE_TEXT[`${code}`];
}
