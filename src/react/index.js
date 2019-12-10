"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
// You don't have to export the function as default. You can also have more than one rule factory
// per file.
function react(_options) {
    return (tree, _context) => {
        const sourceFiles = schematics_1.url('./files');
        const { path } = _options;
        const sourceTemplates = schematics_1.apply(sourceFiles, [
            schematics_1.template(Object.assign({}, _options, core_1.strings)),
            schematics_1.move(path)
        ]);
        return schematics_1.mergeWith(sourceTemplates)(tree, _context);
    };
}
exports.react = react;
//# sourceMappingURL=index.js.map