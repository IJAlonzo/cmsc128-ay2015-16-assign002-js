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