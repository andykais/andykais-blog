$(document).ready(function () {
	var srcs = [
		'/img/landscape/15596853295_f58af35a10_o_72.jpg',
		'/img/landscape/15867559253_79eddac6ef_o_72.jpg',
		'/img/landscape/16299985978_a0703be4c9_o_72.jpg',
		'/img/landscape/16301422639_2af15cd8ac_o_72.jpg',
		'/img/landscape/20151857072_8f030baeb1_o_72.jpg',
		'/img/landscape/15868736011_1bdac9d348_o_72.jpg'
	];
	//snowshoes and backpack use uncropped version

	display_img(srcs[0])
	var stream = Bacon.interval(10000);
	// var stream = Bacon.interval(2000);
	var i = 0;
	stream.onValue(function (v) {
		display_img(srcs[i]);

		if (i >= srcs.length - 1) i=0;
		else i++;
		// console.log(srcs[i])
	});
	$(window).resize(function() {
		display_img(srcs[i])
	})
	var circle = document.getElementById('face')
	var img = document.createElement('img');
	img.src = '/img/me/734163_710085245668602_1982396748_n_small.jpg';
	circle.appendChild(img)
});
function orient() {
	var imgHeight = document.getElementById('landscape').height;
	var winHeight = window.innerHeight;
	console.log(imgHeight)
	console.log(winHeight)
	if (imgHeight < winHeight) {
		console.log('test')
	}
	else {
		console.log('wrong')
	}
}
function display_img(src) {
	var header = document.getElementById('header-photo');
	var img = header.childNodes[0];
	img.src = src;

	img.width = window.innerWidth;
	header.style.height = window.innerHeight + 'px';
}