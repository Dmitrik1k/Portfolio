

let button_info1 = document.querySelector('.button_info1');
let button_delivery = document.querySelector('.button_delivery');
let button_pay = document.querySelector('.button_pay');
let call_block = document.querySelector('.call_block');
let dark = document.querySelector('.dark');

let close_call = document.querySelector('.close_call');

let info = document.querySelector('.info');
let delivery = document.querySelector('.delivery');
let pay = document.querySelector('.pay');
let price_button = document.querySelector('.price_button');



let table_anim = document.querySelector('.table_anim');

let wh =document.querySelector('.wh');
let table =document.querySelector('.table');
let arrow_wh =document.querySelector('.arrow_wh');

let button_call2 = document.querySelector('.button_call2');

let button_footer_call = document.querySelector('.button_footer_call');
let button_header = document.querySelector('.button_header');


let size_bag = document.querySelector('.size_bag');

let block_size = document.querySelector('.block_size');

let wrapper3 = document.querySelector('.wrapper3');
let slide_home = document.querySelector('.slide_home');

let white_block2 = document.querySelector('.white_block2');

let menu_mobile = document.querySelector('.menu_mobile');
let mobile_list = document.querySelector('.mobile_list');
let btn_call = document.querySelector('.btn_call');





wh.addEventListener('click', ()=>{
	if (table_anim.classList.contains('display_none')) {
	table_anim.classList.add('slide-in-top')
	table_anim.classList.remove('display_none')
	table.classList.remove('slide-in-top1')
	arrow_wh.classList.add('transform')
	}
	 else {
		table_anim.classList.remove('slide-in-top')
		table.classList.add('slide-in-top1')
		setTimeout("table_anim.classList.add('display_none')", 450)
	arrow_wh.classList.remove('transform')

	}

});








size_bag.addEventListener('click', ()=>{
	if (slide_home.classList.contains('slide-bottom')) {
	slide_home.classList.remove('slide-bottom')
	white_block2.classList.remove('margin_bottom')

	}
	 else {

	white_block2.classList.add('margin_bottom')
	slide_home.classList.add('slide-bottom')
	}

});





menu_mobile.addEventListener('click', ()=>{
	if (menu_mobile.classList.contains('color')) {
	menu_mobile.classList.remove('color')

	}
	 else {

		menu_mobile.classList.add('color')
	}

});


menu_mobile.addEventListener('click', ()=>{
	if (mobile_list.classList.contains('display_none')) {
	mobile_list.classList.remove('display_none')

	}
	 else {

	mobile_list.classList.add('display_none')
	}

});






btn_call.addEventListener('click', ()=>{

	dark.classList.remove('display_none')
	call_block.classList.remove('display_none')


});




button_header.addEventListener('click', ()=>{

	dark.classList.remove('display_none')
	call_block.classList.remove('display_none')


});


button_footer_call.addEventListener('click', ()=>{

	dark.classList.remove('display_none')
	call_block.classList.remove('display_none')


});

button_call2.addEventListener('click', ()=>{

	dark.classList.remove('display_none')
	call_block.classList.remove('display_none')


});




price_button.addEventListener('click', ()=>{

	dark.classList.remove('display_none')
	call_block.classList.remove('display_none')


});

dark.addEventListener('click', ()=>{

	dark.classList.add('display_none')
	call_block.classList.add('display_none')


});


close_call.addEventListener('click', ()=>{

	dark.classList.add('display_none')
	call_block.classList.add('display_none')


});









button_info1.addEventListener('click', ()=>{
	info.classList.remove('display_none')
	delivery.classList.add('display_none')
	pay.classList.add('display_none')
});


button_info1.addEventListener('mouseup', ()=>{
	button_info1.classList.add('active_button')
	button_delivery.classList.remove('active_button')
	button_pay.classList.remove('active_button')
});











button_pay.addEventListener('click', ()=>{
	pay.classList.remove('display_none')
	info.classList.add('display_none')
	delivery.classList.add('display_none')

});




button_pay.addEventListener('click', ()=>{
	button_pay.classList.add('active_button')
	button_info1.classList.remove('active_button')
	button_delivery.classList.remove('active_button')

});












button_delivery.addEventListener('click', ()=>{
	delivery.classList.remove('display_none')
	info.classList.add('display_none')
	pay.classList.add('display_none')
});


button_delivery.addEventListener('click', ()=>{
	button_delivery.classList.add('active_button')
	button_info1.classList.remove('active_button')
	button_pay.classList.remove('active_button')
});


$(document).ready(function(){
	$('.slider4').slick({
		arrows:true,
		slidesToShow:6,
		autoplay:false,

		speed:800,
		infinite:false,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:2
				}
			}
		]
	});
});









$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		mobileFirst:true,
		autoplay:true,
		speed:500,
		autoplaySpeed:5000,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});




$(document).ready(function(){
	$('.slider2').slick({
		arrows:true,
		dots:true,
		slidesToShow:1,
		autoplay:false,
		speed:1000,
		autoplaySpeed:5000,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});



$(document).ready(function(){
	$('.slider3').slick({
		arrows:true,
		dots:true,
		slidesToShow:1,
		centerMode:true,
		mobileFirst:true,
		dots:false,

		fade:true,
		autoplay:true,
		speed:1000,
		autoplaySpeed:5000,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});





$(document).ready(function(){
	$('.slider5').slick({
		arrows:true,
		slidesToShow:4,
		autoplay:true,
		speed:1000,
		autoplaySpeed:4000,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});





