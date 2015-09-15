$(document).ready(function () {
	var srcs = [
		'/img/landscape/DSC_0183.JPG',
		'/img/landscape/DSC_0199.JPG',
		'/img/landscape/DSC_1021_bright.jpg',
		'/img/landscape/DSC_1570.JPG',
		'/img/landscape/DSC_1576.JPG',
		'/img/landscape/DSC_1731.JPG',
		'/img/landscape/DSC_1841.JPG',
		'/img/landscape/DSC_2341.JPG',
		'/img/landscape/DSC_3613.JPG',
		'/img/landscape/DSC_3616.JPG'
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
	var loading = [srcs[1], srcs[srcs.length - 1]]
	display_img(loading)

	stream.onValue(function (v) {
		loading[0] = loading[1];
		loading[1] = v;
		display_img(loading)
	})
	$(window).resize(function() {})
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

	header.style.height = winHeight*0.8 + 'px';
}
