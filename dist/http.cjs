"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const t={ACCEPT:"Accept",ACCEPT_CHARSET:"Accept-Charset",ACCEPT_ENCODING:"Accept-Encoding",ACCEPT_LANGUAGE:"Accept-Language",ACCEPT_RANGES:"Accept-Ranges",ACCESS_CONTROL_ALLOW_CREDENTIALS:"Access-Control-Allow-Credentials",ACCESS_CONTROL_ALLOW_HEADERS:"Access-Control-Allow-Headers",ACCESS_CONTROL_ALLOW_METHODS:"Access-Control-Allow-Methods",ACCESS_CONTROL_ALLOW_ORIGIN:"Access-Control-Allow-Origin",ACCESS_CONTROL_EXPOSE_HEADERS:"Access-Control-Expose-Headers",ACCESS_CONTROL_MAX_AGE:"Access-Control-Max-Age",ACCESS_CONTROL_REQUEST_HEADERS:"Access-Control-Request-Headers",ACCESS_CONTROL_REQUEST_METHOD:"Access-Control-Request-Method",AGE:"Age",ALLOW:"Allow",AUTHORIZATION:"Authorization",CACHE_CONTROL:"Cache-Control",CONNECTION:"Connection",CONTENT_DISPOSITION:"Content-Disposition",CONTENT_ENCODING:"Content-Encoding",CONTENT_LANGUAGE:"Content-Language",CONTENT_LENGTH:"Content-Length",CONTENT_LOCATION:"Content-Location",CONTENT_MD5:"Content-MD5",CONTENT_RANGE:"Content-Range",CONTENT_SECURITY_POLICY:"Content-Security-Policy",CONTENT_SECURITY_POLICY_REPORT_ONLY:"Content-Security-Policy-Report-Only",CONTENT_TYPE:"Content-Type",COOKIE:"Cookie",DATE:"Date",DNT:"DNT",ETAG:"ETag",EXPECT:"Expect",EXPIRES:"Expires",FOLLOW_ONLY_WHEN_PRERENDER_SHOWN:"Follow-Only-When-Prerender-Shown",FORWARDED:"Forwarded",FROM:"From",HOST:"Host",IF_MATCH:"If-Match",IF_MODIFIED_SINCE:"If-Modified-Since",IF_NONE_MATCH:"If-None-Match",IF_RANGE:"If-Range",IF_UNMODIFIED_SINCE:"If-Unmodified-Since",LAST_EVENT_ID:"Last-Event-ID",LAST_MODIFIED:"Last-Modified",LINK:"Link",LOCATION:"Location",MAX_FORWARDS:"Max-Forwards",ORIGIN:"Origin",P3P:"P3P",PING_FROM:"Ping-From",PING_TO:"Ping-To",PRAGMA:"Pragma",PROXY_AUTHENTICATE:"Proxy-Authenticate",PROXY_AUTHORIZATION:"Proxy-Authorization",PUBLIC_KEY_PINS:"Public-Key-Pins",PUBLIC_KEY_PINS_REPORT_ONLY:"Public-Key-Pins-Report-Only",RANGE:"Range",REFERER:"Referer",REFRESH:"Refresh",RETRY_AFTER:"Retry-After",SERVER:"Server",SERVICE_WORKER:"Service-Worker",SERVICE_WORKER_ALLOWED:"Service-Worker-Allowed",SET_COOKIE2:"Set-Cookie2",SET_COOKIE:"Set-Cookie",STRICT_TRANSPORT_SECURITY:"Strict-Transport-Security",TE:"TE",TIMING_ALLOW_ORIGIN:"Timing-Allow-Origin",TRAILER:"Trailer",TRANSFER_ENCODING:"Transfer-Encoding",UPGRADE:"Upgrade",USER_AGENT:"User-Agent",VARY:"Vary",VIA:"Via",WARNING:"Warning",WWW_AUTHENTICATE:"WWW-Authenticate",X_CONTENT_SECURITY_POLICY:"X-Content-Security-Policy",X_CONTENT_SECURITY_POLICY_REPORT_ONLY:"X-Content-Security-Policy-Report-Only",X_CONTENT_TYPE_OPTIONS:"X-Content-Type-Options",X_DO_NOT_TRACK:"X-Do-Not-Track",X_FORWARDED_FOR:"X-Forwarded-For",X_FORWARDED_HOST:"X-Forwarded-Host",X_FORWARDED_PORT:"X-Forwarded-Port",X_FORWARDED_PROTO:"X-Forwarded-Proto",X_FRAME_OPTIONS:"X-Frame-Options",X_POWERED_BY:"X-Powered-By",X_REQUESTED_WITH:"X-Requested-With",X_USER_IP:"X-User-IP",X_WEBKIT_CSP:"X-WebKit-CSP",X_WEBKIT_CSP_REPORT_ONLY:"X-WebKit-CSP-Report-Only",X_XSS_PROTECTION:"X-XSS-Protection"};function constant(t,e){return`${t}/${e}`}function text(t){return constant("text",t)}function image(t){return constant("image",t)}function audio(t){return constant("audio",t)}function video(t){return constant("video",t)}function application(t){return constant("application",t)}Object.freeze(t),Object.seal(t);const e={ANY:constant("*","*"),APP:application("*"),APP_ATOM:application("atom+xml"),APP_BINARY:application("binary"),APP_BZIP2:application("x-bzip2"),APP_DART:application("dart"),APP_EOT:application("vnd.ms-fontobject"),APP_EPUB:application("epub+zip"),APP_FORM_DATA:application("x-www-form-urlencoded"),APP_GZIP:application("x-gzip"),APP_JAVASCRIPT:application("javascript"),APP_JSON:application("json"),APP_KEY_ARCHIVE:application("pkcs12"),APP_KML:application("vnd.google-earth.kml+xml"),APP_KMZ:application("vnd.google-earth.kmz"),APP_LD_JSON:application("ld+json"),APP_MANIFEST_JSON:application("manifest+json"),APP_MBOX:application("mbox"),APP_MICROSOFT_EXCEL:application("vnd.ms-excel"),APP_MICROSOFT_POWERPOINT:application("vnd.ms-powerpoint"),APP_MICROSOFT_WORD:application("msword"),APP_MOBILE_CONFIG:application("x-apple-aspen-config"),APP_NACL:application("x-nacl"),APP_NACL_PORTABLE:application("x-pnacl"),APP_OCTET_STREAM:application("octet-stream"),APP_OGG:application("ogg"),APP_PASSBOOK:application("vnd.apple.pkpass"),APP_PDF:application("pdf"),APP_POSTSCRIPT:application("postscript"),APP_PROTOBUF:application("protobuf"),APP_RDF_XML:application("rdf+xml"),APP_RTF:application("rtf"),APP_SFNT:application("font-sfnt"),APP_SHOCKWAVE_FLASH:application("x-shockwave-flash"),APP_SKETCHUP:application("vnd.sketchup.skp"),APP_SOAP_XML:application("soap+xml"),APP_TAR:application("x-tar"),APP_WOFF2:application("font-woff2"),APP_WOFF:application("font-woff"),APP_XHTML:application("xhtml+xml"),APP_XML:application("xml"),APP_XRD:application("xrd+xml"),APP_ZIP:application("zip"),AUDIO:audio("*"),AUDIO_AAC:audio("aac"),AUDIO_BASIC:audio("basic"),AUDIO_L24:audio("l24"),AUDIO_MP4:audio("mp4"),AUDIO_MPEG:audio("mpeg"),AUDIO_OGG:audio("ogg"),AUDIO_VND_REAL:audio("vnd.rn-realaudio"),AUDIO_VND_WAVE:audio("vnd.wave"),AUDIO_VORBIS:audio("vorbis"),AUDIO_WAX:audio("x-ms-wax"),AUDIO_WEBM:audio("webm"),AUDIO_WMA:audio("x-ms-wma"),IMAGE:image("*"),IMAGE_APNG:image("apng"),IMAGE_AVIF:image("avif"),IMAGE_AVIF_SEQ:image("avif-sequence"),IMAGE_BMP:image("bmp"),IMAGE_CRW:image("x-canon-crw"),IMAGE_GIF:image("gif"),IMAGE_HEIC:image("heic"),IMAGE_HEIF:image("heif"),IMAGE_ICO:image("vnd.microsoft.icon"),IMAGE_JPEG:image("jpeg"),IMAGE_PNG:image("png"),IMAGE_PSD:image("vnd.adobe.photoshop"),IMAGE_SVG:image("svg+xml"),IMAGE_TIFF:image("tiff"),IMAGE_WEBP:image("webp"),TEXT:text("*"),TEXT_CACHE_MANIFEST:text("cache-manifest"),TEXT_CALENDAR:text("calendar"),TEXT_CSS:text("css"),TEXT_CSV:text("csv"),TEXT_HTML:text("html"),TEXT_JAVASCRIPT:text("javascript"),TEXT_PLAIN:text("plain"),TEXT_TSV:text("tab-separated-values"),TEXT_VCARD:text("vcard"),TEXT_VTT:text("vtt"),TEXT_WML:text("vnd.wap.wml"),TEXT_XML:text("xml"),VIDEO:video("*"),VIDEO_AV1:video("av1"),VIDEO_FLV:video("x-flv"),VIDEO_MP4:video("mp4"),VIDEO_MPEG:video("mpeg"),VIDEO_OGG:video("ogg"),VIDEO_QUICKTIME:video("quicktime"),VIDEO_THREE_GPP2:video("3gpp2"),VIDEO_THREE_GPP:video("3gpp"),VIDEO_WEBM:video("webm"),VIDEO_WMV:video("x-ms-wmv")};Object.freeze(e),Object.seal(e);const E={CONNECT:"CONNECT",DELETE:"DELETE",GET:"GET",HEAD:"HEAD",OPTIONS:"OPTIONS",PATCH:"PATCH",POST:"POST",PUT:"PUT",TRACE:"TRACE"};Object.freeze(E),Object.seal(E);const o={CONTINUE:100,SWITCHING_PROTOCOLS:101,PROCESSING:102,EARLY_HINTS:103,OK:200,CREATED:201,ACCEPTED:202,NON_AUTHORITATIVE_INFORMATION:203,NO_CONTENT:204,RESET_CONTENT:205,PARTIAL_CONTENT:206,MULTI_STATUS:207,ALREADY_REPORTED:208,IM_USED:226,MULTIPLE_CHOICES:300,MOVED_PERMANENTLY:301,MOVED_TEMPORARILY:302,SEE_OTHER:303,NOT_MODIFIED:304,USE_PROXY:305,UNUSED:306,TEMPORARY_REDIRECT:307,PERMANENT_REDIRECT:308,BAD_REQUEST:400,UNAUTHORIZED:401,PAYMENT_REQUIRED:402,FORBIDDEN:403,NOT_FOUND:404,METHOD_NOT_ALLOWED:405,NOT_ACCEPTABLE:406,PROXY_AUTHENTICATION_REQUIRED:407,REQUEST_TIMEOUT:408,CONFLICT:409,GONE:410,LENGTH_REQUIRED:411,PRECONDITION_FAILED:412,PAYLOAD_TOO_LARGE:413,REQUEST_URI_TOO_LONG:414,UNSUPPORTED_MEDIA_TYPE:415,REQUESTED_RANGE_NOT_SATISFIABLE:416,EXPECTATION_FAILED:417,IM_A_TEAPOT:418,INSUFFICIENT_SPACE_ON_RESOURCE:419,ENHANCE_YOUR_CALM:420,MISDIRECTED_REQUEST:421,UNPROCESSABLE_ENTITY:422,LOCKED:423,FAILED_DEPENDENCY:424,TOO_EARLY:425,UPGRADE_REQUIRED:426,PRECONDITION_REQUIRED:428,TOO_MANY_REQUESTS:429,WOULD_BLOCK:430,REQUEST_HEADER_FIELDS_TOO_LARGE:431,UNAVAILABLE_FOR_LEGAL_REASONS:451,INTERNAL_SERVER_ERROR:500,NOT_IMPLEMENTED:501,BAD_GATEWAY:502,SERVICE_UNAVAILABLE:503,GATEWAY_TIMEOUT:504,HTTP_VERSION_NOT_SUPPORTED:505,VARIANT_ALSO_NEGOTIATES:506,INSUFFICIENT_STORAGE:507,LOOP_DETECTED:508,BANDWIDTH_LIMIT_EXCEEDED:509,NOT_EXTENDED:510,NETWORK_AUTHENTICATION_REQUIRED:511};Object.freeze(o),Object.seal(o);const T={100:"Continue",101:"Switching Protocols",102:"Processing",103:"Early Hints",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",306:"Unused",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",418:"I'm a Teapot",419:"Insufficient space on resource",420:"Enhance your calm",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Too Early",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",430:"Would Block",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",509:"Bandwidth Limit Exceeded",510:"Not Extended",511:"Network Authentication Required"};Object.freeze(T),Object.seal(T);const _=[204,205,304];Object.freeze(_),Object.seal(_);const A=[300,301,302,303,305,307,308];Object.freeze(A),Object.seal(A);const O=[502,503,504];function httpStatusCode(t){return Number.parseInt(Array.isArray(t)?""+t[0]:""+t,10)}function httpStatusText(t){return Array.isArray(t)?T[""+t[0]]:T[""+t]}function httpResponse(t,e){const E=httpStatusCode(t);let o=httpStatusText(E);"string"==typeof e?o=e:Array.isArray(t)&&"string"==typeof t[0]&&t[0].length>4&&(o=t[0].substr(4));const T=e&&"object"==typeof e&&!Array.isArray(e)?e:{};return E>399&&("error"in T||(T.error=!0)),{message:o,statusCode:E,...T}}Object.freeze(O),Object.seal(O),exports.ACCEPTED=202,exports.ALREADY_REPORTED=208,exports.BAD_GATEWAY=502,exports.BAD_REQUEST=400,exports.BANDWIDTH_LIMIT_EXCEEDED=509,exports.CONFLICT=409,exports.CONTINUE=100,exports.CREATED=201,exports.EARLY_HINTS=103,exports.ENHANCE_YOUR_CALM=420,exports.EXPECTATION_FAILED=417,exports.FAILED_DEPENDENCY=424,exports.FORBIDDEN=403,exports.GATEWAY_TIMEOUT=504,exports.GONE=410,exports.HTTP_HEADER=t,exports.HTTP_MEDIA_TYPE=e,exports.HTTP_METHOD=E,exports.HTTP_VERSION_NOT_SUPPORTED=505,exports.IM_A_TEAPOT=418,exports.IM_USED=226,exports.INSUFFICIENT_SPACE_ON_RESOURCE=419,exports.INSUFFICIENT_STORAGE=507,exports.INTERNAL_SERVER_ERROR=500,exports.LENGTH_REQUIRED=411,exports.LOCKED=423,exports.LOOP_DETECTED=508,exports.METHOD_NOT_ALLOWED=405,exports.MISDIRECTED_REQUEST=421,exports.MOVED_PERMANENTLY=301,exports.MOVED_TEMPORARILY=302,exports.MULTIPLE_CHOICES=300,exports.MULTI_STATUS=207,exports.NETWORK_AUTHENTICATION_REQUIRED=511,exports.NON_AUTHORITATIVE_INFORMATION=203,exports.NOT_ACCEPTABLE=406,exports.NOT_EXTENDED=510,exports.NOT_FOUND=404,exports.NOT_IMPLEMENTED=501,exports.NOT_MODIFIED=304,exports.NO_CONTENT=204,exports.OK=200,exports.PARTIAL_CONTENT=206,exports.PAYLOAD_TOO_LARGE=413,exports.PAYMENT_REQUIRED=402,exports.PERMANENT_REDIRECT=308,exports.PRECONDITION_FAILED=412,exports.PRECONDITION_REQUIRED=428,exports.PROCESSING=102,exports.PROXY_AUTHENTICATION_REQUIRED=407,exports.REQUESTED_RANGE_NOT_SATISFIABLE=416,exports.REQUEST_HEADER_FIELDS_TOO_LARGE=431,exports.REQUEST_TIMEOUT=408,exports.REQUEST_URI_TOO_LONG=414,exports.RESET_CONTENT=205,exports.SEE_OTHER=303,exports.SERVICE_UNAVAILABLE=503,exports.STATUS_CODE_EMPTY=_,exports.STATUS_CODE_REDIRECT=A,exports.STATUS_CODE_RETRY=O,exports.STATUS_CODE_TAG=o,exports.STATUS_CODE_TEXT=T,exports.SWITCHING_PROTOCOLS=101,exports.TEMPORARY_REDIRECT=307,exports.TOO_EARLY=425,exports.TOO_MANY_REQUESTS=429,exports.UNAUTHORIZED=401,exports.UNAVAILABLE_FOR_LEGAL_REASONS=451,exports.UNPROCESSABLE_ENTITY=422,exports.UNSUPPORTED_MEDIA_TYPE=415,exports.UNUSED=306,exports.UPGRADE_REQUIRED=426,exports.USE_PROXY=305,exports.VARIANT_ALSO_NEGOTIATES=506,exports.WOULD_BLOCK=430,exports.httpResponse=httpResponse,exports.httpResponseHtml=function httpResponseHtml(t,e){const E=httpStatusCode(t);let o=`<!DOCTYPE html><html><body><h1>${E} ${httpStatusText(E)}</h1>`;return"string"==typeof e?o=`${o}<h2>${e}</h2>`:Array.isArray(t)&&"string"==typeof t[0]&&t[0].length>4?o=`${o}<h2>${t[0].substr(4)}</h2>`:e&&"object"==typeof e&&!Array.isArray(e)&&Object.keys(e).forEach(t=>{o=`${o}<p><strong>${t}</strong><span>${e[t]}</span></p>`}),o+"</body></html>"},exports.httpResponseJson=function httpResponseJson(t,e){return JSON.stringify(httpResponse(t,e))},exports.httpResponseText=function httpResponseText(t,e){const E=httpStatusCode(t);let o=`${E} ${httpStatusText(E)}`;return"string"==typeof e?o=`${o}\n${e}`:Array.isArray(t)&&"string"==typeof t[0]&&t[0].length>4?o=`${o}\n${t[0].substr(4)}`:e&&"object"==typeof e&&!Array.isArray(e)&&Object.keys(e).forEach(t=>{o=`${o}\n${t}\t${e[t]}`}),o},exports.httpResponseXml=function httpResponseXml(t,e){let E='<?xml version="1.0" encoding="UTF-8"?><root>';const o=httpResponse(t,e);return Object.keys(o).forEach(t=>{E=`${E}<${t}>${o[t]}</${t}>`}),E+"</root>"},exports.httpStatusCode=httpStatusCode,exports.httpStatusText=httpStatusText;
//# sourceMappingURL=http.cjs.map
