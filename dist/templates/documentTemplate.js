"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.documentTemplate = exports.defaultMargins = void 0;
exports.defaultMargins = {
    top: 1440,
    right: 1440,
    bottom: 1440,
    left: 1440,
    header: 720,
    footer: 720,
    gutter: 0,
};
exports.documentTemplate = function (width, height, orient, margins) {
    return "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n<w:document\n  xmlns:w=\"http://schemas.openxmlformats.org/wordprocessingml/2006/main\"\n  xmlns:m=\"http://schemas.openxmlformats.org/officeDocument/2006/math\"\n  xmlns:r=\"http://schemas.openxmlformats.org/officeDocument/2006/relationships\"\n  xmlns:wp=\"http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing\"\n  xmlns:a=\"http://schemas.openxmlformats.org/drawingml/2006/main\"\n  xmlns:ns6=\"http://schemas.openxmlformats.org/schemaLibrary/2006/main\"\n  xmlns:c=\"http://schemas.openxmlformats.org/drawingml/2006/chart\"\n  xmlns:ns8=\"http://schemas.openxmlformats.org/drawingml/2006/chartDrawing\"\n  xmlns:dgm=\"http://schemas.openxmlformats.org/drawingml/2006/diagram\"\n  xmlns:pic=\"http://schemas.openxmlformats.org/drawingml/2006/picture\"\n  xmlns:ns11=\"http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing\"\n  xmlns:dsp=\"http://schemas.microsoft.com/office/drawing/2008/diagram\"\n  xmlns:ns13=\"urn:schemas-microsoft-com:office:excel\"\n  xmlns:o=\"urn:schemas-microsoft-com:office:office\"\n  xmlns:v=\"urn:schemas-microsoft-com:vml\"\n  xmlns:w10=\"urn:schemas-microsoft-com:office:word\"\n  xmlns:ns17=\"urn:schemas-microsoft-com:office:powerpoint\"\n  xmlns:odx=\"http://opendope.org/xpaths\"\n  xmlns:odc=\"http://opendope.org/conditions\"\n  xmlns:odq=\"http://opendope.org/questions\"\n  xmlns:odi=\"http://opendope.org/components\"\n  xmlns:odgm=\"http://opendope.org/SmartArt/DataHierarchy\"\n  xmlns:ns24=\"http://schemas.openxmlformats.org/officeDocument/2006/bibliography\"\n  xmlns:ns25=\"http://schemas.openxmlformats.org/drawingml/2006/compatibility\"\n  xmlns:ns26=\"http://schemas.openxmlformats.org/drawingml/2006/lockedCanvas\">\n  <w:body>\n    <w:altChunk r:id=\"htmlChunk\" />\n    <w:sectPr>\n      <w:pgSz w:w=\"" + width + "\" w:h=\"" + height + "\" w:orient=\"" + orient + "\" />\n      <w:pgMar w:top=\"" + margins.top + "\"\n               w:right=\"" + margins.right + "\"\n               w:bottom=\"" + margins.bottom + "\"\n               w:left=\"" + margins.left + "\"\n               w:header=\"" + margins.header + "\"\n               w:footer=\"" + margins.footer + "\"\n               w:gutter=\"" + margins.gutter + "\"/>\n    </w:sectPr>\n  </w:body>\n</w:document>\n";
};
//# sourceMappingURL=documentTemplate.js.map