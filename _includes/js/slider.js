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
	var stream = Bacon.sequentially(10000, srcs);
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
	// header.style.height = winHeight + 'px';


	header.style.background = 'url(' + src + ') no-repeat center center'
	header.style['background-size'] = 'cover';
	// header.style['background-size'] = '100%';
	// header.style['background-size'] = 'contain';
	header.style['background-repeat'] = 'no-repeat';

	console.log('height ' + winHeight)
	console.log('width ' + winWidth/1.5)

	if (winHeight < winWidth/1.5) {
		$(header).addClass('wide-landscape')
		console.log('wide')
		header.style.height = winHeight + 'px';
	} else {
		console.log('tall')
		$(header).removeClass('wide-landscape')
		header.style.height = winWidth/1.5 + 'px';
	}
}
