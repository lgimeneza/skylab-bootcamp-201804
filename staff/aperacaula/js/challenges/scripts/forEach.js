function forEach(array, action) {
    if (typeof action=== "function" && array instanceof Array)
    var index=0;
    function iterate(index) {
    action(array[index],index,array);
    index++
    if (index<array.length) iterate(index);
  }
  iterate (index);
}
