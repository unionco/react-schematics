import { Rule, SchematicContext, Tree, url, template, apply, move, mergeWith } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';

import { Schema } from './schema';
// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function react(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const sourceFiles = url('./files');
    const { path } = _options;
    const sourceTemplates = apply(sourceFiles, [
      template({
        ..._options,
        ...strings
      }),
      move(path)
    ]);

    return mergeWith(sourceTemplates)(tree, _context);
  };
}
