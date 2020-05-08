![CoreFunc](docs/img/logo_128.png?raw=true "CoreFunc")

# CoreFunc HTTP

Utilities and tools to help build HTTP requests.

[![Buy Me A Coffee][buymeacoffee-img]][buymeacoffee-url]
[![Follow New Releases][releasly-img]][releasly-url]

[![NPM Version][npm-version-img]][npm-version-url]
[![NPM Downloads][npm-downloads-img]][npm-downloads-url]
[![GitHub Stars][gh-stars-img]][gh-stars-url]
[![TypeScript Typings][ts-img]][ts-url]
[![Travis CI][travis-img]][travis-url]
[![LGTM][lgtm-img]][lgtm-url]

---

*If you use this project don't forget to give a ⭐ [star](https://www.npmjs.com/package/@corefunc/http) ⭐ to it on GitHub!*

---

## Usage

CommonJS import.

```javascript
const {
  HTTP_HEADER,
  STATUS_CODE_EMPTY, STATUS_CODE_TEXT,
  httpResponseJson, httpStatusText,
} = require("@corefunc/http");
```

ECMAScript Module.

```javascript
import {
  HTTP_HEADER,
  STATUS_CODE_EMPTY, STATUS_CODE_TEXT,
  httpResponseJson, httpStatusText,
} from "@corefunc/http";
```

AMD, UMD, browser script tag.

```html
<script src="https://unpkg.com/@corefunc/http"></script>
```

CDN (unpkg [https://unpkg.com/](https://unpkg.com/))

```html
<script src="https://unpkg.com/@corefunc/http" type="module"></script>
```

Deno (Pika [https://pika.dev/](https://pika.dev/))

```javascript
import {
  HTTP_HEADER,
  STATUS_CODE_EMPTY, STATUS_CODE_TEXT,
  httpResponseJson, httpStatusText,
} from "https://cdn.pika.dev/@corefunc/http";
```

---

## Examples

```javascript
httpResponseJson(200);
// '{"message":"OK","statusCode":200}'
httpResponseJson("200");
// '{"message":"OK","statusCode":200}'
httpResponseJson`200`;
// '{"message":"OK","statusCode":200}'
httpResponseJson(403, "Not for you");
// '{"error":true,"message":"Not for you","statusCode":403}'
httpResponseJson`403 Not for you`;
// '{"error":true,"message":"Not for you","statusCode":403}'
httpResponseJson(500, { errorForDeveloper: "", errorForUser: "" });
// '{"message":"Internal Server Error","statusCode":500,"errorForDeveloper":"","errorForUser":"","error":true}'
```

## API

```typescript
const HTTP_HEADER: { [key: string]: string };
const HTTP_MEDIA_TYPE: { [key: string]: string };
const HTTP_METHOD: { [key: string]: string };
const STATUS_CODE_EMPTY: number[];
const STATUS_CODE_REDIRECT: number[];
const STATUS_CODE_RETRY: number[];
const STATUS_CODE_TAG: { [key: string]: number };
const STATUS_CODE_TEXT: { [key: string]: string };
function httpResponse(code: number | string, message?: string | object): { [key: string]: any; };
function httpResponseHtml(code: number | string, message?: string | object): string;
function httpResponseJson(code: number | string, message?: string | object): string;
function httpResponseText(code: number | string, message?: string | object): string;
function httpResponseXml(code: number | string, message?: string | object): string;
function httpStatusCode(code: number | string): number;
function httpStatusText(code: number | string): string;
```

---

## See also

[My other projects](https://r37r0m0d3l.icu/open_source_map)

<img src="https://raw.githubusercontent.com/r37r0m0d3l/r37r0m0d3l/master/osmap.svg?sanitize=true" width="960" height="520" style="display:block;height:auto;margin-left:auto;margin-right:auto;min-height:520px;min-width:960px;width:100%;">

<!-- Badges -->

[buymeacoffee-url]: https://buymeacoffee.com/r37r0m0d3l
[buymeacoffee-img]: https://img.shields.io/badge/support-buymeacoffee-1E90FF.svg?&logo=buy-me-a-coffee&label=support
[gh-stars-url]: https://github.com/corefunc/http
[gh-stars-img]: https://badgen.net/github/stars/corefunc/http?&icon=github&label=stars&color=FFCC33
[lgtm-url]: https://lgtm.com/projects/g/corefunc/http
[lgtm-img]: https://badgen.net/lgtm/grade/g/corefunc/http?&icon=lgtm&label=lgtm:js/ts&color=00C853
[npm-version-url]: https://npmjs.com/package/@corefunc/http
[npm-version-img]: https://badgen.net/npm/v/@corefunc/http?&icon=npm&label=npm&color=DD3636
[npm-downloads-url]: https://npmjs.com/package/@corefunc/http
[npm-downloads-img]: https://badgen.net/npm/dt/@corefunc/http?&icon=terminal&label=downloads&color=009688
[releasly-url]: https://app.releasly.co/sites/corefunc/http?utm_source=github_badge
[releasly-img]: https://app.releasly.co/assets/badges/badge-blue-classic.svg
[travis-url]: https://travis-ci.com/github/corefunc/http
[travis-img]: https://badgen.net/travis/corefunc/http?&icon=travis&label=build
[ts-url]: https://github.com/corefunc/http/blob/master/dist/http.d.ts
[ts-img]: https://badgen.net/npm/types/@corefunc/http?&icon=typescript&label=types&color=1E90FF
