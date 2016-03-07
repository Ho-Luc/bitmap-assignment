'use strict'

var expect = require('chai').expect;
var readPaletteBitmap = require('./../index.js').readPaletteBitmap;
var transformPaletteBitmap = require('./../writeBmp.js').transformPaletteBitmap;
var fs = require('fs');

describe('testing if values in readPaletteBitmap are being reversed', function(){
  before(function(){
    var bitmap = readPaletteBitmap();
    console.log(bitmap);
  });

  it('should return bitmap vals', function(){
    expect(pixelArrayStart).to.equal(1078);
    if (err) {throw err}
  });
});
