window.addEventListener('scroll',()=>
{
	let content = document.querySelector('#ipad');
	let contentPosition = content.getBoundingClientRect().top;
	let screenPosition = window.innerHeight ; 
	if(contentPosition < screenPosition){
		
		content.classList.add('slide-top');
	}else{
		content.classList.remove('slide-top');
	}
});	
window.addEventListener('scroll',()=>
{
	let content = document.querySelector('#iphone');
	let contentPosition = content.getBoundingClientRect().top;
	let screenPosition = window.innerHeight ; 
	if(contentPosition < screenPosition){
		
		content.classList.add('slide-left');
	}else{
		content.classList.remove('slide-left');
		
	}
});	



