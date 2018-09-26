	var emptyObj = {};
//function countLetters(str) {
	function countLetters(str) {
		var noSpaces = str.split(" ").join("").toLowerCase();
		
		for (var letter of noSpaces) {
			emptyObj[letter] = 0;
		}
		for (var letter of noSpaces) {
			emptyObj[letter]+= 1

	}
	return emptyObj
}

   
   //return uniqueArray;
	// var
	// for ( var i = 0; i < countLetters.length; i++) {
		
	

//};



//console.log(countLetters("lighthouse in the house"));
var x = countLetters("Lighthouse in the house")
console.log(JSON.stringify(x, null, 2));