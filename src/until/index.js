export function format(val) {
	let timee = parseInt(val / 1000);
	//分钟
	var minute = timee / 60;
	var minutes = parseInt(minute);

	if (minutes < 10) {
		minutes = "0" + minutes;
	}

	//秒
	var second = timee % 60;
	var seconds = Math.round(second);
	seconds = parseInt(seconds)
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	return `${minutes}:${seconds}`;
}