'use strict';

function BinarySearch(array, keyVal){
  for(var i = 0 ; i < array.length ; i++){
    if ( array[i] === keyVal ){
      return i;
    }
    return -1;
  }

}