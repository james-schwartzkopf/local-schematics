//This file lets you create schematics in typescript without having to have
//  a separate build step to use them.

//For this file to work, the schematic should have a directory under src with the
//  same name, a ts file in that directory with the same name, and an export that
//  matches the symbol after the # in the factory in collection.json.

require('ts-node').register({
  project: require('path').join(__dirname, 'tsconfig.schematics.json')
});

const col = require('./collection.json');
module.exports = Object.fromEntries(
  Object.entries(col.schematics)
    .filter(([s, c]) => c.factory.startsWith('./collection#'))
    .map(([s, {factory}]) => [s, factory.substring(factory.indexOf('#') + 1)])
    .map(([s, ex]) => [ex, require(`./src/${s}/${s}.ts`)[ex]])
);
