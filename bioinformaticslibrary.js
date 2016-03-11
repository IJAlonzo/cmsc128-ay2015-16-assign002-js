//Programming Assignment 002
//Simple Bioinformatics Library

function getHammingDistance(string1, string2) 
{
	var hammingDistance = 0;

	//Checks if string1 and string2's length are greater than zero
	if ((string1.length > 0) && (string2.length > 0)) {

		//Check if string1 and string2 have equal length
		if (string1.length == string2.length) {

			//Traverses through each element of the string
			for (var i = 0; i < string1.length; i++) {
				
				//If elements of each string are not equal, add 1 to hamming distance
				if(string1[i] != string2[i]) {
					hammingDistance++;
				}

			}

			//Prints the Hamming Distance
			console.log("Hamming Distance: " + hammingDistance);

		} else {

			console.log("ERROR: Strings are not equal.");

		}

	} else {

		console.log("ERROR: One or both of the strings has a length equal or less than 0.");

	}

	return hammingDistance;

}

function countSubstrPattern(original, pattern)
{

   	console.log(original);

   	//Checks if one or both of the strings are empty or length is less than 0
    if ((original.length <= 0) && (pattern.length <= 0)) {

    	console.log("ERROR: String length is equal or less than to 0.");

    } else {

	    var count = 0, position = 0, step = 1;

	    //Loop through the string to get the substring
	    while (true) {

	        position = original.indexOf(pattern, position);
	        if (position >= 0) {
	            ++count;
	            position += step;
	        } else break;

	    }
	}

    console.log(original.length);
    console.log(count);
    return count;
}