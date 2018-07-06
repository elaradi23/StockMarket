function stockMarket(array){
  //Using divide and conquer, the elements of the array is chunked into pairs
  //Every time the difference between the pair numbers is checked against a max value (which is inititated to 0)
  //If the pair have a difference greater than the stored max, it's swapped
  var max = 0;
  for(var i = 0; i < array.length - 1; i++){
    for(var j = i + 1; j < array.length; j++){
      if(array[i] < array[j] && diff(array[i], array[j]) > max){
        max = diff(array[i], array[j]);
      }
    }
  }

  //In case max difference was not changed, return 1
  if(max == 0){
    return -1;
  }
  return max;
}

//A method to calculate the difference between the bigger number and smaller number
function diff(x, y){
  if (x > y){
    return x - y;
  }
  return y - x;
}

array = [45, 24, 35, 31, 40, 38, 11];

console.log(stockMarket(array));