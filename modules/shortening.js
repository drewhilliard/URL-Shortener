exports.shortenUrl = function() {
	output = "http://shortening.com/" + Math.random().toString(36).slice(2).substr(0, 7);

	return output;
};