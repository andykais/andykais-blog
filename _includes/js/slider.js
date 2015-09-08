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
	var stream = Bacon.sequentially(100000, srcs);
	stream.onValue(function (v) {
		display_img(v)
		value = v;
	})
	$(window).resize(function() {
		display_img(value)
	})
	// var stream = Bacon.interval(2000);
	// stream.subscribe(
	// 	return function () {
	// 	Bacon.repeat(function (i) {
	// 		console.log(i);
	// 	})
	// })
	// // var stream = Bacon.interval(2000);
	// var i = 0;
	// stream.onValue(function (v) {
	// 	console.log('!slide!')
	// 	display_img(srcs[i]);

	// 	if (i >= srcs.length - 1) i=0;
	// 	else i++;
	// 	// console.log(srcs[i])
	// });
}

function display_img(src) {

	var header = document.getElementById('header-photo');
	var img = document.getElementById('landscape')

	img.width = window.innerWidth;

	// var imgHeight =img.height;
	// var winHeight = window.innerHeight;
	// //taller than wide
	// if (imgHeight < winHeight) {
	// 	header.style.height = imgHeight + 'px';
	// }//wider than tall
	// else {
	// 	$(img).addClass(' wide-landscape');
	// 	header.style.height = winHeight + 'px';
	// }


/*	$(img).off('load.landscape');

	$(img).on('load.landscape', function(){
		var imgHeight =img.height;
		var winHeight = window.innerHeight;
		//taller than wide
		if (imgHeight < winHeight) {
			header.style.height = imgHeight + 'px';
		}//wider than tall
		else {
			$(img).addClass(' wide-landscape');
			header.style.height = winHeight + 'px';
		}

	});
*/	
	img.onload = function () {
		var imgHeight = img.height;
		var winHeight = window.innerHeight;
		//taller than wide
		if (imgHeight < winHeight) {
			header.style.height = imgHeight + 'px';
			$(img).removeClass('wide-landscape')
		}//wider than tall
		else {
			$(img).addClass('wide-landscape');
			header.style.height = winHeight + 'px';
		}
	}
	img.src = src;

	header.style.background = 'url(' + src + ') no-repeat center center'
	header.style['background-size'] = 'cover';
	header.style['background-repeat'] = 'no-repeat';
}
