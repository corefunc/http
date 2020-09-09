// const CHARSET_UTF_8 = ";charset=UTF-8";

/**
 * @param {string} type
 * @param {string} subType
 * @returns {string}
 */
function constant(type, subType) {
  return `${type}/${subType}`;
}

/**
 * @param {string} subType
 * @returns {string}
 */
function text(subType) {
  return constant("text", subType);
}

/**
 * @param {string} subType
 * @returns {string}
 */
function image(subType) {
  return constant("image", subType);
}

/**
 * @param {string} subType
 * @returns {string}
 */
function audio(subType) {
  return constant("audio", subType);
}

/**
 * @param {string} subType
 * @returns {string}
 */
function video(subType) {
  return constant("video", subType);
}

/**
 * @param {string} subType
 * @returns {string}
 */
function application(subType) {
  return constant("application", subType);
}

/**
 * @description Common HTTP Media Types
 * @readonly
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
  APP_VND_EXCEL: "application/vnd.ms-excel",
  APP_VND_EXCEL_ADD_IN_MACRO: "application/vnd.ms-excel.addin.macroEnabled.12",
  APP_VND_EXCEL_SHEET_BIN_MACRO: "application/vnd.ms-excel.sheet.binary.macroEnabled.12",
  APP_VND_EXCEL_SHEET_MACRO: "application/vnd.ms-excel.sheet.macroEnabled.12",
  APP_VND_EXCEL_TPL_MACRO: "application/vnd.ms-excel.template.macroEnabled.12",
  APP_VND_OXF_DOC_SPREADSHEET_SHEET: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  APP_VND_OXF_DOC_SPREADSHEET_TPL: "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
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
  TEXT_COMMA_SEPARATED_VALUES: text("comma-separated-values"),
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
