/*
General Notes and Coming Improvements:
Why are there errors? Even though the code functions perfectly?
-Dont forget to remove this when the website is complete!-
*/
$(document).ready(function (){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 100){
            $("nav").removeClass("navTransparent");
            $("nav").addClass("navColor");
            $("footer").removeClass("footer-white");
            $("footer").addClass("footer-colored");
        }
        else{
            $("nav").removeClass("navColor");
            $("nav").addClass("navTransparent");
            $("footer").removeClass("footer-colored");
            $("footer").addClass("footer-white");
        }
    });
});
