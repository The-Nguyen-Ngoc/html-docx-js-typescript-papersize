"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFiles = exports.generateDocument = void 0;
var tslib_1 = require("tslib");
var utils_1 = require("./utils");
var assets_1 = require("./assets");
var templates_1 = require("./templates");
var browser_or_node_1 = require("browser-or-node");
var defaultDocumentOptions = {
    orientation: 'portrait',
    margins: {},
    paperWidth: 11905.511,
    paperHeight: 16837.795
};
function mergeOptions(options, patch) {
    return tslib_1.__assign(tslib_1.__assign({}, options), patch);
}
function generateDocument(zip) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var buffer;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, zip.generateAsync({ type: 'arraybuffer' })];
                case 1:
                    buffer = _a.sent();
                    if (browser_or_node_1.isBrowser) {
                        return [2 /*return*/, new Blob([buffer], {
                                type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                            })];
                    }
                    else {
                        return [2 /*return*/, new Buffer(new Uint8Array(buffer))];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.generateDocument = generateDocument;
function getBinaryData(str) {
    return browser_or_node_1.isBrowser ? new Blob([str]) : new Buffer(str, 'utf-8');
}
function renderDocumentFile(documentOptions) {
    var orientation = documentOptions.orientation, margins = documentOptions.margins, paperWidth = documentOptions.paperWidth, paperHeight = documentOptions.paperHeight;
    var marginsOptions = mergeOptions(templates_1.defaultMargins, margins);
    var width = 0;
    var height = 0;
    if (orientation === 'landscape') {
        height = paperWidth;
        width = paperHeight;
    }
    else {
        width = paperWidth;
        height = paperHeight;
    }
    return templates_1.documentTemplate(width, height, orientation, marginsOptions);
}
function addFiles(zip, htmlSource, options) {
    var documentOptions = mergeOptions(defaultDocumentOptions, options);
    zip.file('[Content_Types].xml', getBinaryData(assets_1.contentTypesXml), {
        createFolders: false,
    });
    zip.folder('_rels').file('.rels', getBinaryData(assets_1.relsXml), { createFolders: false });
    return zip
        .folder('word')
        .file('document.xml', renderDocumentFile(documentOptions), {
        createFolders: false,
    })
        .file('afchunk.mht', utils_1.getMHTdocument(htmlSource), {
        createFolders: false,
    })
        .folder('_rels')
        .file('document.xml.rels', getBinaryData(assets_1.documentXmlRels), {
        createFolders: false,
    });
}
exports.addFiles = addFiles;
//# sourceMappingURL=internal.js.map