/*
 * @Author: 无崖子
 * @Date: 2020-05-23 22:26:11
 * @LastEditTime: 2020-05-23 22:38:24
 * @FilePath: /fe-progress/Users/lvqiang/Desktop/lodash/src/lodash/chunk.js
 */ 
/**
 * 
 * @param {Array} array The array to process
 * @param {number} [size =1] The length of each chunk
 * @param- {object} [guard] Enables use as iteratee for methods like `_.map`.
 * @returns {Array} Returns the new array of chunks.
 * @example
 * 
 * _.chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a','b'],['c','d']]
 * 
 * _.chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a','b','c'],['d']]
 * 
 */

var baseSlice = require('./_baseSlice'),
    isIterateeCall = require('./_isIterateeCall'),
    toInteger = require('./toInteger');

var nativeCeil = Math.ceil,
    nativeMax = Math.max;

function chunk(array, size, guard) {
  if((guard ? isIterateeCall(array,size,guard) : size === 0)) {
    size = 1;
  } else {
    size = nativeMax(toInteger(size), 0);
  }
}