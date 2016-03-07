'use strict'
var readPaletteBitmap = require('./index.js').readPaletteBitmap;
var fs = require('fs');

//uses fs module TO READ in a file and WRITE TO new file using read bitmap
exports.transformPaletteBitmap = function transformPaletteBitmap(readPalette, newFile){
  fs.readFile('./lib/palette-bitmap.bmp', function(err, bitmap){
    if (err){ throw err }
    fs.writeFile(newFile, readPalette(bitmap));
  });
}

//takes in readPaletteBitmap() and a new file as args
exports.transformPaletteBitmap(readPaletteBitmap, 'newPalette.bmp');
