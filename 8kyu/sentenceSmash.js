// function smash (words) {
//     var newWords = ''
//     for (var i = 0; i < words.length; i++) {
//     if (i === words.length - 1) {
//       newWords += words[i]
//     } else {
//       newWords = newWords + words[i] + ' '
//     }
//   }
//   return newWords
// };

//or

function smash (words) {
    return words.join(' ');
};


console.log(smash(["hello"]), "hello");
console.log(smash(["hello", "world"]), "hello world");