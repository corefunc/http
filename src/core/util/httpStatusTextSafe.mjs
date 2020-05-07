// import { STATUS_CODE_TEXT } from "../../const/list/STATUS_CODE_TEXT.mjs";
//
// /**
//  * @description httpStatusTextSafe
//  * @param {number|string} code
//  * @example httpStatusTextSafe(200)
//  * @example httpStatusTextSafe("200")
//  * @example httpStatusTextSafe`200`
//  * @returns {string}
//  * @throws {Error}
//  */
// export function httpStatusTextSafe(code) {
//   let input = code;
//   if (Array.isArray(code)) {
//     // noinspection JSUnresolvedVariable
//     if (code.raw.length !== 1) {
//       throw Error("HTTP_STATUS_TEXT: interpolation is not supported");
//     }
//     input = code[0];
//   }
//   if (typeof input !== "number" && typeof input !== "string") {
//     throw Error("HTTP_STATUS_TEXT: expect number or string");
//   }
//   if (!(input in STATUS_CODE_TEXT)) {
//     throw Error("HTTP_STATUS_TEXT: wrong code");
//   }
//   return STATUS_CODE_TEXT[`${input}`];
// }
