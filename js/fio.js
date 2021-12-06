$.get("./data/sig.js", function(data) {
	let index = 0;
	let textArr = new Array();
	let lines = data.split("\n");
	$.each(lines, function(n, elem) {
		textArr[index] = elem;
		index++;
	})
	return textArr;
})