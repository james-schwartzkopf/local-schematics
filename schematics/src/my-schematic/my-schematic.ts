import { Rule } from '@angular-devkit/schematics';

export function mySchematic(schema: any): Rule {
  console.log('hello world');
  return (tree, context) => tree;
}
