'use strict'

exports.readPaletteBitmap = function readPaletteBitmap(bitmap) {
  var pixelArrayStart = bitmap.readUInt32LE(10);

  //uses buffer write/read methods and inverts max color - current pixel val
  for (var i = 54; i < pixelArrayStart; i++) {
    bitmap.writeUInt8(255 - bitmap.readUInt8(i), i);
  }

  return bitmap;
}
