// function getCount(str) {
//     return (str.match(/[aeiou]/ig) || []).length
//   }

function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a","e","i","o","u"];
    for(var i = 0; i < str.length; i++){
      for(var j = 0; j < vowels.length; j++){
        if(str[i] === vowels[j]){
          vowelsCount++;
        }
      }
    }
    
    return vowelsCount;
}

  console.log(getCount("abracadabra"), 5)
  console.log(getCount("aku cinta kau dan dia"), 9)
  console.log(getCount("aiuep"), 4)
  console.log(getCount("hesa muhammad"), 5)