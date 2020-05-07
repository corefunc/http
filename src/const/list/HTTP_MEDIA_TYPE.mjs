const CHARSET_UTF_8 = ";charset=UTF-8";

function constant(type, subType) {
  return `${type}/${subType}`;
}

function text(subType) {
  return constant("text", subType);
}

function image(subType) {
  return constant("image", subType);
}

function audio(subType) {
  return constant("audio", subType);
}

function video(subType) {
  return constant("video", subType);
}

function application(subType) {
  return constant("application", subType);
}

/**
 * @description Common HTTP Media Types
 * @readonly
 * @type {{APP_DART: string, TEXT_HTML: string, APP: string, AUDIO_VORBIS: string, APP_XHTML: string, TEXT_XML: string, AUDIO_BASIC: string, AUDIO_OGG: string, AUDIO_WEBM: string, VIDEO: string, APP_MICROSOFT_EXCEL: string, APP_RDF_XML: string, IMAGE_APNG: string, APP_RTF: string, TEXT: string, APP_EPUB: string, AUDIO_MP4: string, AUDIO: string, VIDEO_THREE_GPP2: string, IMAGE_WEBP: string, APP_WOFF: string, TEXT_CALENDAR: string, VIDEO_QUICKTIME: string, APP_PROTOBUF: string, IMAGE: string, VIDEO_MP4: string, IMAGE_SVG: string, VIDEO_OGG: string, TEXT_CACHE_MANIFEST: string, IMAGE_CRW: string, APP_PDF: string, APP_SKETCHUP: string, TEXT_JAVASCRIPT: string, APP_EOT: string, APP_MICROSOFT_WORD: string, TEXT_VCARD: string, IMAGE_ICO: string, TEXT_VTT: string, APP_GZIP: string, APP_LD_JSON: string, AUDIO_WAX: string, VIDEO_AV1: string, AUDIO_VND_REAL: string, IMAGE_BMP: string, APP_ATOM: string, IMAGE_AVIF: string, TEXT_CSV: string, APP_FORM_DATA: string, APP_XML: string, TEXT_CSS: string, APP_JAVASCRIPT: string, APP_SOAP_XML: string, APP_MICROSOFT_POWERPOINT: string, APP_MBOX: string, APP_MOBILE_CONFIG: string, APP_OGG: string, TEXT_PLAIN: string, APP_MANIFEST_JSON: string, APP_XRD: string, AUDIO_WMA: string, TEXT_TSV: string, VIDEO_WEBM: string, VIDEO_WMV: string, TEXT_WML: string, IMAGE_JPEG: string, IMAGE_PSD: string, AUDIO_VND_WAVE: string, APP_TAR: string, ANY: string, APP_BZIP2: string, APP_ZIP: string, IMAGE_PNG: string, APP_POSTSCRIPT: string, VIDEO_MPEG: string, APP_SFNT: string, IMAGE_TIFF: string, VIDEO_THREE_GPP: string, APP_KEY_ARCHIVE: string, APP_NACL: string, APP_BINARY: string, APP_KML: string, APP_NACL_PORTABLE: string, APP_WOFF2: string, APP_JSON: string, AUDIO_L24: string, APP_PASSBOOK: string, APP_SHOCKWAVE_FLASH: string, IMAGE_AVIF_SEQ: string, AUDIO_MPEG: string, VIDEO_FLV: string, IMAGE_GIF: string, IMAGE_HEIC: string, APP_OCTET_STREAM: string, APP_KMZ: string, IMAGE_HEIF: string, AUDIO_AAC: string}}
 */
const HTTP_MEDIA_TYPE = {
  //#region any
  ANY: constant("*", "*"),
  //#endregion

  //#region application
  APP: application("*"),
  APP_ATOM: application("atom+xml"),
  APP_BINARY: application("binary"),
  APP_BZIP2: application("x-bzip2"),
  APP_DART: application("dart"),
  APP_EOT: application("vnd.ms-fontobject"),
  APP_EPUB: application("epub+zip"),
  APP_FORM_DATA: application("x-www-form-urlencoded"),
  APP_GZIP: application("x-gzip"),
  APP_JAVASCRIPT: application("javascript"),
  APP_JSON: application("json"),
  APP_KEY_ARCHIVE: application("pkcs12"),
  APP_KML: application("vnd.google-earth.kml+xml"),
  APP_KMZ: application("vnd.google-earth.kmz"),
  APP_LD_JSON: application("ld+json"),
  APP_MANIFEST_JSON: application("manifest+json"),
  APP_MBOX: application("mbox"),
  APP_MICROSOFT_EXCEL: application("vnd.ms-excel"),
  APP_MICROSOFT_POWERPOINT: application("vnd.ms-powerpoint"),
  APP_MICROSOFT_WORD: application("msword"),
  APP_MOBILE_CONFIG: application("x-apple-aspen-config"),
  APP_NACL: application("x-nacl"),
  APP_NACL_PORTABLE: application("x-pnacl"),
  APP_OCTET_STREAM: application("octet-stream"),
  APP_OGG: application("ogg"),
  APP_PASSBOOK: application("vnd.apple.pkpass"),
  APP_PDF: application("pdf"),
  APP_POSTSCRIPT: application("postscript"),
  APP_PROTOBUF: application("protobuf"),
  APP_RDF_XML: application("rdf+xml"),
  APP_RTF: application("rtf"),
  APP_SFNT: application("font-sfnt"),
  APP_SHOCKWAVE_FLASH: application("x-shockwave-flash"),
  APP_SKETCHUP: application("vnd.sketchup.skp"),
  APP_SOAP_XML: application("soap+xml"),
  APP_TAR: application("x-tar"),
  APP_WOFF2: application("font-woff2"),
  APP_WOFF: application("font-woff"),
  APP_XHTML: application("xhtml+xml"),
  APP_XML: application("xml"),
  APP_XRD: application("xrd+xml"),
  APP_ZIP: application("zip"),
  //#endregion

  //#region audio
  AUDIO: audio("*"),
  AUDIO_AAC: audio("aac"),
  AUDIO_BASIC: audio("basic"),
  AUDIO_L24: audio("l24"),
  AUDIO_MP4: audio("mp4"),
  AUDIO_MPEG: audio("mpeg"),
  AUDIO_OGG: audio("ogg"),
  AUDIO_VND_REAL: audio("vnd.rn-realaudio"),
  AUDIO_VND_WAVE: audio("vnd.wave"),
  AUDIO_VORBIS: audio("vorbis"),
  AUDIO_WAX: audio("x-ms-wax"),
  AUDIO_WEBM: audio("webm"),
  AUDIO_WMA: audio("x-ms-wma"),
  //#endregion

  //#region image
  IMAGE: image("*"),
  IMAGE_APNG: image("apng"),
  IMAGE_AVIF: image("avif"),
  IMAGE_AVIF_SEQ: image("avif-sequence"),
  IMAGE_BMP: image("bmp"),
  IMAGE_CRW: image("x-canon-crw"),
  IMAGE_GIF: image("gif"),
  IMAGE_HEIC: image("heic"),
  IMAGE_HEIF: image("heif"),
  IMAGE_ICO: image("vnd.microsoft.icon"),
  IMAGE_JPEG: image("jpeg"),
  IMAGE_PNG: image("png"),
  IMAGE_PSD: image("vnd.adobe.photoshop"),
  IMAGE_SVG: image("svg+xml"),
  IMAGE_TIFF: image("tiff"),
  IMAGE_WEBP: image("webp"),
  //#endregion

  //#region text
  TEXT: text("*"),
  TEXT_CACHE_MANIFEST: text("cache-manifest"),
  TEXT_CALENDAR: text("calendar"),
  TEXT_CSS: text("css"),
  TEXT_CSV: text("csv"),
  TEXT_HTML: text("html"),
  TEXT_JAVASCRIPT: text("javascript"),
  TEXT_PLAIN: text("plain"),
  TEXT_TSV: text("tab-separated-values"),
  TEXT_VCARD: text("vcard"),
  TEXT_VTT: text("vtt"),
  TEXT_WML: text("vnd.wap.wml"),
  TEXT_XML: text("xml"),
  //#endregion

  //#region video
  VIDEO: video("*"),
  VIDEO_AV1: video("av1"),
  VIDEO_FLV: video("x-flv"),
  VIDEO_MP4: video("mp4"),
  VIDEO_MPEG: video("mpeg"),
  VIDEO_OGG: video("ogg"),
  VIDEO_QUICKTIME: video("quicktime"),
  VIDEO_THREE_GPP2: video("3gpp2"),
  VIDEO_THREE_GPP: video("3gpp"),
  VIDEO_WEBM: video("webm"),
  VIDEO_WMV: video("x-ms-wmv"),
  //#endregion
};
Object.freeze(HTTP_MEDIA_TYPE);
Object.seal(HTTP_MEDIA_TYPE);
export { HTTP_MEDIA_TYPE };
