// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
	var index; // current index position in 'json' string
	var token; // character at 'index' position in 'json' string

	// ------------- helper functions ----------------
	// token advancment
	var next = function() {
		token = json.charAt(++index); // increase index and assign next char at index
		return token;
	};

	//consume white spaces
	var white = function() {
		while ( token && token <= ' ') { // any character in ascii table below ' '(space) is either white space character or no printable character
			next();
		}
	};

	// ------------ main functions --------------------
	// main parsing function that sorts witch json value parseJSON has to deal with
	var value = function() {
		white(); //consume any preceding white spaces
		// is object
		// is array
		// is string
		// is boolean
		// is null
		// else
				// is number
				// else must be error
	};

	//initialization of values and first call to function
	index = 0;
	token = json.charAt(index);
	return value();
};
