'use strict';

function choose_even(collection) {
  var result = [];
  var r = 0;
  var length = collection.length;
  for (var i = 0; i < length; i++){
    if (collection[i]%2 == 0)
       result.push(collection[i]);
       r++;

  }
  return result;
}

module.exports = choose_even;
