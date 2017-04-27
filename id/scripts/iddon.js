$(document).ready(function(){
	function load(){
		var wt = $(window).scrollTop();
		var wb = wt + $(window).height();
		$(".id--unloaded").each(function(){
			var ot = $(this).offset().top;
			var ob = ot + $(this).height();
			if(!$(this).attr("loaded") && wt<=ob && wb >= ot){
				$(this).attr("loaded",true);
			}
		});
		$("[data-bg]").each(function(){
			var ot = $(this).offset().top;
			var ob = ot + $(this).height();
			var bg = $(this).attr("data-bg");
			if(!$(this).attr("loaded-bg") && wt<=ob && wb >= ot){
				$(this).attr("style","background-image:url('"+ bg +"');");
				$(this).attr("loaded-bg",true);
			}
		});
		$("[data-img]").each(function(){
			var ot = $(this).offset().top;
			var ob = ot + $(this).height();
			var img = $(this).attr("data-img");
			if(!$(this).attr("loaded-bg") && wt<=ob && wb >= ot){
				$(this).attr("src",img);
				$(this).attr("loaded-img",true);
			}
		});
	}
	load();
	$(document).scroll(function(){
		load();
	});

	var $root = $('html, body');
	$('a').click(function() {
		var href = $.attr(this, 'href');
		$root.animate({
			scrollTop: $(href).offset().top
		}, 500, function () {
			window.location.hash = href;
		});
		return false;
	});
	var hash = window.location.hash;
	$(".id-nav--link[href^="+ hash +"]").addClass("active");

	$(".id-nav--link").click(function(){
		$(".id-nav--link").removeClass("active");
		$(this).addClass("active");
	});

});

function iddon(){
	var c = '#';
	var id = ['ffffff','171117','171111','171711','111711','1b1916','1b1616','1b1b16','161b16','16191b','19161b','1b161a'];
	c += id[Math.floor(Math.random() * id.length)];
	document.getElementById('don').style.background = c;
}
function click(e){
	if (e.button==2) {return false;}
}
document.onmousedown = click;