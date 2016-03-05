'use strict'

const fs = require('fs');

let bitmap = fs.readFileSync(__dirname + '/palette-bitmap.bmp');
let bitmapData = {};

bitmapData.headField = bitmap.toString('ascii', 0, 2);
bitmapData.size = bitmap.readUInt32LE(2);
bitmapData.pixelArrayStart = bitmap.readUInt32LE(10);
bitmapData.paletteColors = bitmap.readUInt32LE(46);

console.log(bitmapData);
