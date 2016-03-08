'use strict'

var fs = require('fs');
// var bitmap = fs.readFile('./lib/palette-bitmap.bmp', function(err, bitmap){
// });

exports.readPaletteBitmap = function readPaletteBitmap(bitmap) {
  var pixelArrayStart = bitmap.readUInt32LE(10);
  for (var i = 54; i < pixelArrayStart; i++) {
    bitmap.writeUInt8(255 - bitmap.readUInt8(i), i);
  }

  return bitmap;
}

exports.transformPaletteBitmap = function transformPaletteBitmap(readPalette, newFile){
  fs.readFile('./lib/palette-bitmap.bmp', function(err, bitmap){
    if (err){ throw err }
    fs.writeFile(newFile, readPalette(bitmap));
  });
}

exports.transformPaletteBitmap(exports.readPaletteBitmap, 'newPalette.bmp');
