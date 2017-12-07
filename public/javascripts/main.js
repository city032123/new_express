$(function(){
    var w = $(window).width();
    var h = $(window).height();
    //$("#show").html(w+":"+h);
    $('#screen_one').css("height",+h+"px");
    $('.screen_two_mask').css("height",+h+"px");
    $('.content').css("top",+h/5+"px");
    $('.mouse_note').css("top",+h/1-113+"px");
    //$('.content').css("height",+h+"px");
});




var num = 200;
$(window).bind('scroll', function () {
    if ($('html').scrollTop() > num)  {
        $('.navbg').css("background-color","rgba(0,10,26,0.7)");
    }
    else if ($('body').scrollTop() > num)  {
        $('.navbg').css("background-color","rgba(0,10,26,0.7)"); 
    }
    else {
        $('.navbg').css("background-color","rgba(0,0,0,0.0)"); 
    }
});



function scrtest(){
	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
	}else{
        $(function(){
            $("html").niceScroll();
            $("#thisdiv").niceScroll({cursorcolor:"#00F"});
            $("#viewportdiv").niceScroll("#wrapperdiv",{cursorcolor:"#00F"});
        });
    }
};
scrtest();



function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("navbar").classList.toggle("showbg");
    document.getElementById("moblie_icon").classList.toggle("nav_swich");
}
//window.onclick = function(event) {
//  if (!event.target.matches('.dropbtn')) {
//
//    var dropdowns = document.getElementsByClassName("dropdown-content");
//    var i;
//    for (i = 0; i < dropdowns.length; i++) {
//      var openDropdown = dropdowns[i];
//      if (openDropdown.classList.contains('show')) {
//        openDropdown.classList.remove('show');
//      }
//    }
//  }
//}


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});



