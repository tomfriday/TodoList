var d = new Date();

var month = d.getMonth() + 1;
var day = d.getDate();

var dateOutput =
	'<p class="date">' +
	d.getFullYear() +
	'.' +
	(('' + month).length < 2 ? '0' : '') +
	month +
	'.' +
	(('' + day).length < 2 ? '0' : '') +
	day +
	'</p>';
