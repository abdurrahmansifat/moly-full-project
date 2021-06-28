$(document).ready(function(){
//sticky
$(window).load(function(){
	$(this).on('scroll', function(){
    if($(this).scrollTop() > 10){
       $('.header').addClass('sticky');
    }
    else{
       $('.header').removeClass('sticky');
    }

	});
	
});
//skill
 $('.skill-per').each(function(){
        var $this = $(this);
        var per = $this.attr('per');
        $this.css("width",per+'%');
        $({animatedValue: 0}).animate({animatedValue: per},{
          duration: 1000,
          step: function(){
            $this.attr('per', Math.floor(this.animatedValue) + '%');
          },
          complete: function(){
            $this.attr('per', Math.floor(this.animatedValue) + '%');
          }
        });
      });
 //slideup
 $(window).scroll(function(){
  if($(this).scrollTop() >100){
  	 $('#scrolltop').fadeIn();
  	}else{
         $('#scrolltop').fadeOut();
  	}
});
 $('#scrolltop').click(function(){
    $('html, body').animate({
       scrolltop:0
    }, 2000);
 });

});





