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

> **Please Note:** This is not a production-ready package! Expect long stretches of zero updates—that does not mean that the module is outdated. This is "Don’t repeat yourself" collection. Yes, it's working fine, but it is not complete neither consistent. The files can move from folder to folder without warning. Everything is a "Work in Progress"!!!

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

-  HTTP_HEADER
-  HTTP_MEDIA_TYPE
-  HTTP_METHOD
-  STATUS_CODE_EMPTY
-  STATUS_CODE_REDIRECT
-  STATUS_CODE_RETRY
-  STATUS_CODE_TAG
-  STATUS_CODE_TEXT
-  httpResponse()
-  httpResponseHtml()
-  httpResponseJson()
-  httpResponseText()
-  httpResponseXml()
-  httpStatusCode()
-  httpStatusText()

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
[travis-url]: https://lgtm.com/projects/g/corefunc/http/?mode=list
[travis-img]: https://badgen.net/travis/corefunc/http?&icon=travis&label=build
[ts-url]: https://github.com/corefunc/http/blob/master/dist/http.d.ts
[ts-img]: https://badgen.net/npm/types/@corefunc/http?&icon=typescript&label=types&color=1E90FF
