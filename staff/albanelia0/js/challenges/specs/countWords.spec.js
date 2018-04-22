'use strict';

describe('countWords', function(){
  it('countWords("hello world") should return 2', function(){
    expect(countWords("hello world")).toBe(2);
  });
  it('countWords() - without arguments - should throw error',function(){
    expect(function(){
      countWords()
    }).toBeDefined();
  });
});