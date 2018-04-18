"use strict";

function forEach(arr, myHandler) {
  if (typeof arr !== "object") {
    throw Error("It is not an object or array!");
  }
  var index = 0;
  var iterator = function() {
    if (index < arr.length) {
      myHandler(arr[index], index, arr);
      index++;
      iterator();
    }
  };
  iterator();
}
