'use strict'

exports.readPaletteBitmap = function readPaletteBitmap(bitmap) {
  var pixelArrayStart = bitmap.readUInt32LE(10);

  //subtracts each color value from the max color value which is 255
  for (var i = 54; i < pixelArrayStart; i++) {
    //inverts colors using buf.writeUInt8(value, offset)
    bitmap.writeUInt8(255 - bitmap.readUInt8(i), i);
  }
  return bitmap; //returns the read buffer so fs module can write file
}
