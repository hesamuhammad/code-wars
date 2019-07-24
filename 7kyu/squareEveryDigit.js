function squareDigits(num){
    //may the code be with you
    var numString = num.toString()
    var arr = []
    
    for(var i = 0; i < numString.length; i++) {
      arr[i] = numString[i] * numString[i]
    }
    return Number(arr.join(''))
    
  }

  console.log(squareDigits(9119), 811181);
