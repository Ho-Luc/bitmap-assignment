'use strict'

const expect = require('chai').expect;

describe('async testing', function(){
  it('blahsdsdf', function(){
    process.nextTick(function(unicorn){
      expect(true).to.equal(false);
      unicorn();
    });
  });
});
