'use strict'

var expect = require('chai').expect;
var readPaletteBitmap = require(__dirname + '/../index.js').readPaletteBitmap;
var transformPaletteBitmap = require(__dirname + '/../index.js').transformPaletteBitmap;
var fs = require('fs');

describe('testing if values in transformPaletteBitmap is reversed', function(){
  var mockPaletteObj = new Buffer([1, 2, 3, 4]);
  var mockRead = readPaletteBitmap(mockPaletteObj);
  console.log(mockRead);
  it('should return bitmap vals', function(){

    // expect(bitmap).to.equal(1078);
    // if (err) {throw err}
  });
});
