/**
 * @description Status codes for redirects
 * @readonly
 * @type {number[]}
 */
const STATUS_CODE_REDIRECT = [300, 301, 302, 303, 305, 307, 308];
Object.freeze(STATUS_CODE_REDIRECT);
Object.seal(STATUS_CODE_REDIRECT);
export { STATUS_CODE_REDIRECT };
