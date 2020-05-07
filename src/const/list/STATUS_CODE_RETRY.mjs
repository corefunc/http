/**
 * @description Status codes for when you should retry the request
 * @readonly
 * @type {number[]}
 */
const STATUS_CODE_RETRY = [502, 503, 504];
Object.freeze(STATUS_CODE_RETRY);
Object.seal(STATUS_CODE_RETRY);
export { STATUS_CODE_RETRY };
