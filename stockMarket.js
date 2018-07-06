function stockMarket(array){
  var max = 0;
  for(var i = 0; i < array.length - 1; i++){
    for(var j = i + 1; j < array.length; j++){
      if(array[i] < array[j] && diff(array[i], array[j]) > max){
        max = diff(array[i], array[j]);
      }
    }
  }

  if(max == 0){
    return -1;
  }

  return max;
}

function diff(x, y){
  if (x > y){
    return x - y;
  }
  return y - x;
}

array = [45, 24, 35, 31, 40, 38, 11];

console.log(stockMarket(array));