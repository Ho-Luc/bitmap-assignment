'use strict'
var readPaletteBitmap = require('./index.js').readPaletteBitmap;
var fs = require('fs');

function transformPaletteBitmap(readPalette, newFile){
  //fs.readFile asyncronously reads in content (file 'my filepath', callback(read bitmap))
  fs.readFile('./lib/palette-bitmap.bmp', function(err, bitmap){
    if (err){ throw err }
    //fs.writeFile asyncronously writes data to file(file 'already wrapped in a filepath', data 'writing to new file', callback(use readPalette(passing in my bitmap data)))
    fs.writeFile(newFile, readPalette(bitmap));
  });
}

//call transform passing the read bitmap data as args, and name of new file
transformPaletteBitmap(readPaletteBitmap, 'newPalette.bmp');
