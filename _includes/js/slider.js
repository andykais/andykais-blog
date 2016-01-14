$(document).ready(function () {
	var srcs = [
		'/img/landscape/DSC_0183_small.JPG',
		'/img/landscape/DSC_1021_bright_small.jpg',
		'/img/landscape/DSC_1570_small.JPG',
		'/img/landscape/DSC_1576_small.JPG',
		'/img/landscape/DSC_1731_small.JPG',
		'/img/landscape/DSC_1841_small.JPG',
		'/img/landscape/DSC_3613_small.JPG',
		'/img/landscape/DSC_0199_small.JPG',
		'/img/landscape/DSC_2341_small.JPG',
	]
	//snowshoes and backpack use uncropped version
	loop(srcs)


});

function loop(srcs) {
	// loop through array values
	var stream = Bacon.repeatedly(15000, srcs);
	// stream = Bacon.once(1).combine(stream)
	// stream.subscribe(Bacon.once(1))
	// var stream = Bacon.interval(10000)
	var loading = [srcs[srcs.length - 2], srcs[srcs.length - 1]]
	display_img(loading)

	stream.onValue(function (v) {
		loading[0] = loading[1];
		loading[1] = v;
		display_img(loading)
	})
	$(window).resize(function() {
		display_img(loading)
	})
}

function display_img(loading) {
	var header = document.getElementById('cover-photo');
	var postContainer = document.getElementById('post-container')
	var winHeight = window.innerHeight;
	var winWidth = window.innerWidth;
	//ratio where the view becomes 'tall' vs 'wide' (it is the ratio of a 5:7 cropped photo)
	var viewRatio = 1.4;

	//transitions the background urls
	var bg = $(header);

	insertBackground = loading.map(function (src) {
		return 'url(' + src + ')';
	})
	// console.log(insertBackground)
	var img = bg.css("background-image", insertBackground);

	header.style.height = winHeight*0.7 + 'px';
}
