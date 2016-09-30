exports.shortenUrl = function() {
	// Creates a random string and concatenates it with a domain name to form a (potentially) functioning new URL
	output = "http://shortening.com/" + Math.random().toString(36).slice(2).substr(0, 7);

	return output;
};