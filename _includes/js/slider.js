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
	var value = srcs[0];
	display_img(value)
	// loop through array values
	// var stream = Bacon.repeatedly(2000, srcs);
	var stream = Bacon.interval(10000)
	stream.onValue(function (v) {
		display_img(v)
		value = v;
	})
	$(window).resize(function() {
		display_img(value)
	})
}

function display_img(src) {
	var header = document.getElementById('header-photo');
	var winHeight = window.innerHeight;
	var winWidth = window.innerWidth;
	var viewRatio = 1.5;
	// header.style.height = winHeight + 'px';

			var bg = $(header);
			var img = bg.css("backgroundImage").split(", ");
			console.log(img.length)
			img = img.concat(img[0]).splice(1, img.length).join(",");
			bg.css("backgroundImage", img);

	if (winHeight < winWidth/viewRatio) {
		$(header).addClass('wide-landscape')
		console.log('wide')
		header.style.height = winHeight + 'px';
	} else {
		console.log('tall')
		$(header).removeClass('wide-landscape')
		header.style.height = winWidth/viewRatio + 'px';
	}
}
