'use strict';
function times2(element){
  return element * 2;
}
function doMapping(collection, fn){
  for (var i = 0; i < collection.length; i++){
    collection[i] = fn(collection[i]);
  }
  return collection;
}


function map_to_even(result){
 return doMapping(result, times2);
}


module.exports = map_to_even;
