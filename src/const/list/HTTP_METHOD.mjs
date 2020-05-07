/**
 * @description Common HTTP methods
 * @readonly
 * @type {{TRACE: string, HEAD: string, DELETE: string, POST: string, GET: string, CONNECT: string, OPTIONS: string, PATCH: string, PUT: string}}
 */
const HTTP_METHOD = {
  CONNECT: "CONNECT",
  DELETE: "DELETE",
  GET: "GET",
  HEAD: "HEAD",
  OPTIONS: "OPTIONS",
  PATCH: "PATCH",
  POST: "POST",
  PUT: "PUT",
  TRACE: "TRACE",
};
Object.freeze(HTTP_METHOD);
Object.seal(HTTP_METHOD);
export { HTTP_METHOD };
