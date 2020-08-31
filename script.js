$(document).ready(function(){
	$(window).scroll(function() {
    if ($(window).scrollTop() > 740) {
      $(".navbar").addClass("bg-dark");
    } else {
      $(".navbar").removeClass("bg-dark");
    }
  });
});
$(document).ready(function(){
	$('.menus li a').click(function(e){
		let target=$(this).attr("href");
		$('html,body').animate({
			scrollTop:$(target).offset().top-59,
		},1000);
		e.preventDefault();
	});
})
