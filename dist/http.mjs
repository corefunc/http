const t=100,e=101,E=102,o=103,n=200,a=201,i=202,T=203,_=204,A=205,O=206,r=207,R=208,P=226,I=300,c=301,p=302,s=303,N=304,C=305,S=306,l=307,d=308,D=400,L=401,u=402,M=403,U=404,g=405,m=406,F=407,f=408,G=409,h=410,y=411,X=412,x=413,H=414,W=415,b=416,v=417,V=418,Y=419,w=420,B=421,j=422,K=423,$=424,k=425,Q=426,q=428,z=429,J=430,Z=431,tt=451,et=500,Et=501,ot=502,nt=503,at=504,it=505,Tt=506,_t=507,At=508,Ot=509,rt=510,Rt=511,Pt={ACCEPT:"Accept",ACCEPT_CHARSET:"Accept-Charset",ACCEPT_ENCODING:"Accept-Encoding",ACCEPT_LANGUAGE:"Accept-Language",ACCEPT_RANGES:"Accept-Ranges",ACCESS_CONTROL_ALLOW_CREDENTIALS:"Access-Control-Allow-Credentials",ACCESS_CONTROL_ALLOW_HEADERS:"Access-Control-Allow-Headers",ACCESS_CONTROL_ALLOW_METHODS:"Access-Control-Allow-Methods",ACCESS_CONTROL_ALLOW_ORIGIN:"Access-Control-Allow-Origin",ACCESS_CONTROL_EXPOSE_HEADERS:"Access-Control-Expose-Headers",ACCESS_CONTROL_MAX_AGE:"Access-Control-Max-Age",ACCESS_CONTROL_REQUEST_HEADERS:"Access-Control-Request-Headers",ACCESS_CONTROL_REQUEST_METHOD:"Access-Control-Request-Method",AGE:"Age",ALLOW:"Allow",AUTHORIZATION:"Authorization",CACHE_CONTROL:"Cache-Control",CONNECTION:"Connection",CONTENT_DISPOSITION:"Content-Disposition",CONTENT_ENCODING:"Content-Encoding",CONTENT_LANGUAGE:"Content-Language",CONTENT_LENGTH:"Content-Length",CONTENT_LOCATION:"Content-Location",CONTENT_MD5:"Content-MD5",CONTENT_RANGE:"Content-Range",CONTENT_SECURITY_POLICY:"Content-Security-Policy",CONTENT_SECURITY_POLICY_REPORT_ONLY:"Content-Security-Policy-Report-Only",CONTENT_TYPE:"Content-Type",COOKIE:"Cookie",DATE:"Date",DNT:"DNT",ETAG:"ETag",EXPECT:"Expect",EXPIRES:"Expires",FOLLOW_ONLY_WHEN_PRERENDER_SHOWN:"Follow-Only-When-Prerender-Shown",FORWARDED:"Forwarded",FROM:"From",HOST:"Host",IF_MATCH:"If-Match",IF_MODIFIED_SINCE:"If-Modified-Since",IF_NONE_MATCH:"If-None-Match",IF_RANGE:"If-Range",IF_UNMODIFIED_SINCE:"If-Unmodified-Since",LAST_EVENT_ID:"Last-Event-ID",LAST_MODIFIED:"Last-Modified",LINK:"Link",LOCATION:"Location",MAX_FORWARDS:"Max-Forwards",ORIGIN:"Origin",P3P:"P3P",PING_FROM:"Ping-From",PING_TO:"Ping-To",PRAGMA:"Pragma",PROXY_AUTHENTICATE:"Proxy-Authenticate",PROXY_AUTHORIZATION:"Proxy-Authorization",PUBLIC_KEY_PINS:"Public-Key-Pins",PUBLIC_KEY_PINS_REPORT_ONLY:"Public-Key-Pins-Report-Only",RANGE:"Range",REFERER:"Referer",REFRESH:"Refresh",RETRY_AFTER:"Retry-After",SERVER:"Server",SERVICE_WORKER:"Service-Worker",SERVICE_WORKER_ALLOWED:"Service-Worker-Allowed",SET_COOKIE2:"Set-Cookie2",SET_COOKIE:"Set-Cookie",STRICT_TRANSPORT_SECURITY:"Strict-Transport-Security",TE:"TE",TIMING_ALLOW_ORIGIN:"Timing-Allow-Origin",TRAILER:"Trailer",TRANSFER_ENCODING:"Transfer-Encoding",UPGRADE:"Upgrade",USER_AGENT:"User-Agent",VARY:"Vary",VIA:"Via",WARNING:"Warning",WWW_AUTHENTICATE:"WWW-Authenticate",X_CONTENT_SECURITY_POLICY:"X-Content-Security-Policy",X_CONTENT_SECURITY_POLICY_REPORT_ONLY:"X-Content-Security-Policy-Report-Only",X_CONTENT_TYPE_OPTIONS:"X-Content-Type-Options",X_DO_NOT_TRACK:"X-Do-Not-Track",X_FORWARDED_FOR:"X-Forwarded-For",X_FORWARDED_HOST:"X-Forwarded-Host",X_FORWARDED_PORT:"X-Forwarded-Port",X_FORWARDED_PROTO:"X-Forwarded-Proto",X_FRAME_OPTIONS:"X-Frame-Options",X_POWERED_BY:"X-Powered-By",X_REQUESTED_WITH:"X-Requested-With",X_USER_IP:"X-User-IP",X_WEBKIT_CSP:"X-WebKit-CSP",X_WEBKIT_CSP_REPORT_ONLY:"X-WebKit-CSP-Report-Only",X_XSS_PROTECTION:"X-XSS-Protection"};function constant(t,e){return`${t}/${e}`}function text(t){return constant("text",t)}function image(t){return constant("image",t)}function audio(t){return constant("audio",t)}function video(t){return constant("video",t)}function application(t){return constant("application",t)}Object.freeze(Pt),Object.seal(Pt);const It={ANY:constant("*","*"),APP:application("*"),APP_ATOM:application("atom+xml"),APP_BINARY:application("binary"),APP_BZIP2:application("x-bzip2"),APP_DART:application("dart"),APP_EOT:application("vnd.ms-fontobject"),APP_EPUB:application("epub+zip"),APP_FORM_DATA:application("x-www-form-urlencoded"),APP_GZIP:application("x-gzip"),APP_JAVASCRIPT:application("javascript"),APP_JSON:application("json"),APP_KEY_ARCHIVE:application("pkcs12"),APP_KML:application("vnd.google-earth.kml+xml"),APP_KMZ:application("vnd.google-earth.kmz"),APP_LD_JSON:application("ld+json"),APP_MANIFEST_JSON:application("manifest+json"),APP_MBOX:application("mbox"),APP_MICROSOFT_EXCEL:application("vnd.ms-excel"),APP_MICROSOFT_POWERPOINT:application("vnd.ms-powerpoint"),APP_MICROSOFT_WORD:application("msword"),APP_MOBILE_CONFIG:application("x-apple-aspen-config"),APP_NACL:application("x-nacl"),APP_NACL_PORTABLE:application("x-pnacl"),APP_OCTET_STREAM:application("octet-stream"),APP_OGG:application("ogg"),APP_PASSBOOK:application("vnd.apple.pkpass"),APP_PDF:application("pdf"),APP_POSTSCRIPT:application("postscript"),APP_PROTOBUF:application("protobuf"),APP_RDF_XML:application("rdf+xml"),APP_RTF:application("rtf"),APP_SFNT:application("font-sfnt"),APP_SHOCKWAVE_FLASH:application("x-shockwave-flash"),APP_SKETCHUP:application("vnd.sketchup.skp"),APP_SOAP_XML:application("soap+xml"),APP_TAR:application("x-tar"),APP_WOFF2:application("font-woff2"),APP_WOFF:application("font-woff"),APP_XHTML:application("xhtml+xml"),APP_XML:application("xml"),APP_XRD:application("xrd+xml"),APP_ZIP:application("zip"),AUDIO:audio("*"),AUDIO_AAC:audio("aac"),AUDIO_BASIC:audio("basic"),AUDIO_L24:audio("l24"),AUDIO_MP4:audio("mp4"),AUDIO_MPEG:audio("mpeg"),AUDIO_OGG:audio("ogg"),AUDIO_VND_REAL:audio("vnd.rn-realaudio"),AUDIO_VND_WAVE:audio("vnd.wave"),AUDIO_VORBIS:audio("vorbis"),AUDIO_WAX:audio("x-ms-wax"),AUDIO_WEBM:audio("webm"),AUDIO_WMA:audio("x-ms-wma"),IMAGE:image("*"),IMAGE_APNG:image("apng"),IMAGE_AVIF:image("avif"),IMAGE_AVIF_SEQ:image("avif-sequence"),IMAGE_BMP:image("bmp"),IMAGE_CRW:image("x-canon-crw"),IMAGE_GIF:image("gif"),IMAGE_HEIC:image("heic"),IMAGE_HEIF:image("heif"),IMAGE_ICO:image("vnd.microsoft.icon"),IMAGE_JPEG:image("jpeg"),IMAGE_PNG:image("png"),IMAGE_PSD:image("vnd.adobe.photoshop"),IMAGE_SVG:image("svg+xml"),IMAGE_TIFF:image("tiff"),IMAGE_WEBP:image("webp"),TEXT:text("*"),TEXT_CACHE_MANIFEST:text("cache-manifest"),TEXT_CALENDAR:text("calendar"),TEXT_CSS:text("css"),TEXT_CSV:text("csv"),TEXT_HTML:text("html"),TEXT_JAVASCRIPT:text("javascript"),TEXT_PLAIN:text("plain"),TEXT_TSV:text("tab-separated-values"),TEXT_VCARD:text("vcard"),TEXT_VTT:text("vtt"),TEXT_WML:text("vnd.wap.wml"),TEXT_XML:text("xml"),VIDEO:video("*"),VIDEO_AV1:video("av1"),VIDEO_FLV:video("x-flv"),VIDEO_MP4:video("mp4"),VIDEO_MPEG:video("mpeg"),VIDEO_OGG:video("ogg"),VIDEO_QUICKTIME:video("quicktime"),VIDEO_THREE_GPP2:video("3gpp2"),VIDEO_THREE_GPP:video("3gpp"),VIDEO_WEBM:video("webm"),VIDEO_WMV:video("x-ms-wmv")};Object.freeze(It),Object.seal(It);const ct={CONNECT:"CONNECT",DELETE:"DELETE",GET:"GET",HEAD:"HEAD",OPTIONS:"OPTIONS",PATCH:"PATCH",POST:"POST",PUT:"PUT",TRACE:"TRACE"};Object.freeze(ct),Object.seal(ct);const pt={CONTINUE:100,SWITCHING_PROTOCOLS:101,PROCESSING:102,EARLY_HINTS:103,OK:200,CREATED:201,ACCEPTED:202,NON_AUTHORITATIVE_INFORMATION:203,NO_CONTENT:204,RESET_CONTENT:205,PARTIAL_CONTENT:206,MULTI_STATUS:207,ALREADY_REPORTED:208,IM_USED:226,MULTIPLE_CHOICES:300,MOVED_PERMANENTLY:301,MOVED_TEMPORARILY:302,SEE_OTHER:303,NOT_MODIFIED:304,USE_PROXY:305,UNUSED:306,TEMPORARY_REDIRECT:307,PERMANENT_REDIRECT:308,BAD_REQUEST:400,UNAUTHORIZED:401,PAYMENT_REQUIRED:402,FORBIDDEN:403,NOT_FOUND:404,METHOD_NOT_ALLOWED:405,NOT_ACCEPTABLE:406,PROXY_AUTHENTICATION_REQUIRED:407,REQUEST_TIMEOUT:408,CONFLICT:409,GONE:410,LENGTH_REQUIRED:411,PRECONDITION_FAILED:412,PAYLOAD_TOO_LARGE:413,REQUEST_URI_TOO_LONG:414,UNSUPPORTED_MEDIA_TYPE:415,REQUESTED_RANGE_NOT_SATISFIABLE:416,EXPECTATION_FAILED:417,IM_A_TEAPOT:418,INSUFFICIENT_SPACE_ON_RESOURCE:419,ENHANCE_YOUR_CALM:420,MISDIRECTED_REQUEST:421,UNPROCESSABLE_ENTITY:422,LOCKED:423,FAILED_DEPENDENCY:424,TOO_EARLY:425,UPGRADE_REQUIRED:426,PRECONDITION_REQUIRED:428,TOO_MANY_REQUESTS:429,WOULD_BLOCK:430,REQUEST_HEADER_FIELDS_TOO_LARGE:431,UNAVAILABLE_FOR_LEGAL_REASONS:451,INTERNAL_SERVER_ERROR:500,NOT_IMPLEMENTED:501,BAD_GATEWAY:502,SERVICE_UNAVAILABLE:503,GATEWAY_TIMEOUT:504,HTTP_VERSION_NOT_SUPPORTED:505,VARIANT_ALSO_NEGOTIATES:506,INSUFFICIENT_STORAGE:507,LOOP_DETECTED:508,BANDWIDTH_LIMIT_EXCEEDED:509,NOT_EXTENDED:510,NETWORK_AUTHENTICATION_REQUIRED:511};Object.freeze(pt),Object.seal(pt);const st={100:"Continue",101:"Switching Protocols",102:"Processing",103:"Early Hints",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",306:"Unused",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",418:"I'm a Teapot",419:"Insufficient space on resource",420:"Enhance your calm",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Too Early",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",430:"Would Block",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",509:"Bandwidth Limit Exceeded",510:"Not Extended",511:"Network Authentication Required"};Object.freeze(st),Object.seal(st);const Nt=[204,205,304];Object.freeze(Nt),Object.seal(Nt);const Ct=[300,301,302,303,305,307,308];Object.freeze(Ct),Object.seal(Ct);const St=[502,503,504];function httpStatusCode(t){return Number.parseInt(Array.isArray(t)?""+t[0]:""+t,10)}function httpStatusText(t){return Array.isArray(t)?st[""+t[0]]:st[""+t]}function httpResponse(t,e){const E=httpStatusCode(t);let o=httpStatusText(E);"string"==typeof e?o=e:Array.isArray(t)&&"string"==typeof t[0]&&t[0].length>4&&(o=t[0].substr(4));const n=e&&"object"==typeof e&&!Array.isArray(e)?e:{};return E>399&&("error"in n||(n.error=!0)),{message:o,statusCode:E,...n}}function httpResponseHtml(t,e){const E=httpStatusCode(t);let o=`<!DOCTYPE html><html><body><h1>${E} ${httpStatusText(E)}</h1>`;return"string"==typeof e?o=`${o}<h2>${e}</h2>`:Array.isArray(t)&&"string"==typeof t[0]&&t[0].length>4?o=`${o}<h2>${t[0].substr(4)}</h2>`:e&&"object"==typeof e&&!Array.isArray(e)&&Object.keys(e).forEach(t=>{o=`${o}<p><strong>${t}</strong><span>${e[t]}</span></p>`}),o+"</body></html>"}function httpResponseJson(t,e){return JSON.stringify(httpResponse(t,e))}function httpResponseText(t,e){const E=httpStatusCode(t);let o=`${E} ${httpStatusText(E)}`;return"string"==typeof e?o=`${o}\n${e}`:Array.isArray(t)&&"string"==typeof t[0]&&t[0].length>4?o=`${o}\n${t[0].substr(4)}`:e&&"object"==typeof e&&!Array.isArray(e)&&Object.keys(e).forEach(t=>{o=`${o}\n${t}\t${e[t]}`}),o}function httpResponseXml(t,e){let E='<?xml version="1.0" encoding="UTF-8"?><root>';const o=httpResponse(t,e);return Object.keys(o).forEach(t=>{E=`${E}<${t}>${o[t]}</${t}>`}),E+"</root>"}Object.freeze(St),Object.seal(St);export{i as ACCEPTED,R as ALREADY_REPORTED,ot as BAD_GATEWAY,D as BAD_REQUEST,Ot as BANDWIDTH_LIMIT_EXCEEDED,G as CONFLICT,t as CONTINUE,a as CREATED,o as EARLY_HINTS,w as ENHANCE_YOUR_CALM,v as EXPECTATION_FAILED,$ as FAILED_DEPENDENCY,M as FORBIDDEN,at as GATEWAY_TIMEOUT,h as GONE,Pt as HTTP_HEADER,It as HTTP_MEDIA_TYPE,ct as HTTP_METHOD,it as HTTP_VERSION_NOT_SUPPORTED,V as IM_A_TEAPOT,P as IM_USED,Y as INSUFFICIENT_SPACE_ON_RESOURCE,_t as INSUFFICIENT_STORAGE,et as INTERNAL_SERVER_ERROR,y as LENGTH_REQUIRED,K as LOCKED,At as LOOP_DETECTED,g as METHOD_NOT_ALLOWED,B as MISDIRECTED_REQUEST,c as MOVED_PERMANENTLY,p as MOVED_TEMPORARILY,I as MULTIPLE_CHOICES,r as MULTI_STATUS,Rt as NETWORK_AUTHENTICATION_REQUIRED,T as NON_AUTHORITATIVE_INFORMATION,m as NOT_ACCEPTABLE,rt as NOT_EXTENDED,U as NOT_FOUND,Et as NOT_IMPLEMENTED,N as NOT_MODIFIED,_ as NO_CONTENT,n as OK,O as PARTIAL_CONTENT,x as PAYLOAD_TOO_LARGE,u as PAYMENT_REQUIRED,d as PERMANENT_REDIRECT,X as PRECONDITION_FAILED,q as PRECONDITION_REQUIRED,E as PROCESSING,F as PROXY_AUTHENTICATION_REQUIRED,b as REQUESTED_RANGE_NOT_SATISFIABLE,Z as REQUEST_HEADER_FIELDS_TOO_LARGE,f as REQUEST_TIMEOUT,H as REQUEST_URI_TOO_LONG,A as RESET_CONTENT,s as SEE_OTHER,nt as SERVICE_UNAVAILABLE,Nt as STATUS_CODE_EMPTY,Ct as STATUS_CODE_REDIRECT,St as STATUS_CODE_RETRY,pt as STATUS_CODE_TAG,st as STATUS_CODE_TEXT,e as SWITCHING_PROTOCOLS,l as TEMPORARY_REDIRECT,k as TOO_EARLY,z as TOO_MANY_REQUESTS,L as UNAUTHORIZED,tt as UNAVAILABLE_FOR_LEGAL_REASONS,j as UNPROCESSABLE_ENTITY,W as UNSUPPORTED_MEDIA_TYPE,S as UNUSED,Q as UPGRADE_REQUIRED,C as USE_PROXY,Tt as VARIANT_ALSO_NEGOTIATES,J as WOULD_BLOCK,httpResponse,httpResponseHtml,httpResponseJson,httpResponseText,httpResponseXml,httpStatusCode,httpStatusText};
//# sourceMappingURL=http.mjs.map
