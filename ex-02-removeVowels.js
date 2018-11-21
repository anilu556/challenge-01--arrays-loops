/**
 * removeVowels()
 *
 * Write a function called `removeVowels()`.
 * It should accept a string as input,
 * and it should return a new string without the vowels.
 *
*/



// ++ Write YOUR CODE Below

function removeVowels(value){
  var newString = "";
    for(var i = 0; i < value.length; i++){
     if ( value[i].toLowerCase() !== "a" && value[i].toLowerCase() !== "e" &&  value[i].toLowerCase() !== "i" && value[i].toLowerCase() !== "o" && value[i].toLowerCase() !== "u") {
       newString += value[i];
    }
  }
  return newString;
}





//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~



// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

/*-------------------TEST-1-------------------------*/
//  function accepts string as arguments and
//    should return string without vowels
/*--------------------------------------------------*/
console.log("==== ex-05-removeVowels : TEST 1 ====");

console.assert( removeVowels('milk') === 'mlk' );
console.assert( removeVowels('christmas') === 'chrstms' )
console.assert( removeVowels('moo shoo pork') === 'm sh prk' )
console.assert( removeVowels('good job girls') === 'gd jb grls' )

/*-------------------TEST-2-------------------------*/
//  function should not return capital letters
/*--------------------------------------------------*/
console.log("==== ex-05-removeVowels : TEST 2 ====");

console.assert( removeVowels('Out of Order') === 't f rdr' )
console.assert( removeVowels('Estados Unidos') === 'stds nds' )
console.assert( removeVowels('GOOD JOB GIRLS') === 'GD JB GRLS' )

/*--------------------------------------------------*/
/*-------------------END----------------------------*/
console.log('\n\n');
