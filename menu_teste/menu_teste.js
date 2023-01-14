$(document).ready(function(){

	function addBackgroundToMenu(e){
		const menu = document.querySelector("#header__container")
		if(e.currentTarget.scrollY > 0 && menu) {
			return menu.classList.add("scrollDown")
		}
		menu.classList.remove("scrollDown")
	}

	window.addEventListener('scroll', addBackgroundToMenu)
	
	$('.hamburger').click(function(){
		
		var $this = $( this );
		
		if ($this.hasClass('is-active')){
			$('.fsmenu, .logo').removeClass('is-active');
			$('.fsmenu, .logo').addClass('close-menu');
			document.body.style.overflow = "auto"
			$('.fsmenu, .fsmenu--container').removeClass('.pointer-all');
		} else{
			$('.fsmenu, .logo').removeClass('close-menu');
			$('.fsmenu, .logo').addClass('is-active');
			document.body.style.overflow = "hidden"
			$('.fsmenu, .fsmenu--container').addClass('.pointer-all');
		};
		$this.toggleClass('is-active');
	});
	
	$( ".fsmenu--list-element" ).hover(
		function() {
			$( this ).addClass('open');
			$( this ).removeClass('is-closing');
		}, function() {
			$( this ).removeClass('open');
			$( this ).addClass('is-closing');
		}
	);
		
});

