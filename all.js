window.addEventListener('', changeBlock);

function changeBlock(){
	let width = window.width;
	console.log(width)
	let nav_imgs = document.getElementsByClassName("icon_like");
	if(width > 600){
		for(var i = 0; i < nav_imgs.length; i++){
			nav_imgs[i].setAttribute("class", "no_display");
		}
	} else{
		for(var i = 0; i < nav_imgs.length; i++){
			nav_imgs[i].setAttribute("class", "please_display");
		}
	}
}