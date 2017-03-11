// Empty JS for your own code to be here

$(document).ready(function(){
    $('.carousel.slide').carousel({
        interval: 5000,
        cycle: true
    });

    $(window).scroll(function(){
        if($(window).scrollTop()!=0){
            $('.navbar').css("padding-top","0vw");
            $('.navbar').css("padding-bottom","1.3vw");
            $('.navbar').css("background-color","#231f20");
            $('.nav-btn-right-h').addClass('nav-btn-right-scroll');
            $('.nav-btn-right-h').removeClass('nav-btn-right-h');            
        }else{
            $('.navbar').css("padding-top","3vw");
            $('.navbar').css("padding-bottom","0vw");
            $('.navbar').css("background-color","rgba(0, 0, 0, 0)");
            $('.nav-btn-right-scroll').addClass('nav-btn-right-h');
            $('.nav-btn-right-scroll').removeClass('nav-btn-right-scroll');
        }
    });

    $('#Google_Play').mouseover(function(){
        $('#Google_Play img').attr("src","img/Google Play hover.png");
    });
    $('#Apple_Store').mouseover(function(){
        $('#Apple_Store img').attr("src","img/Apple Store hover.png");
    });

    $('#Google_Play').mouseout(function(){
        $('#Google_Play img').attr("src","img/Google Play.png");
    });
    $('#Apple_Store').mouseout(function(){
        $('#Apple_Store img').attr("src","img/Apple Store.png");
    });

    $('iframe').load(function(){
        $('.place-card').css("display","none");
        $('.login-control').css("display","none");
    });

})

/*function initMap() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 120, lng: 23},
        scrollwheel: false,
        zoom: 8
    });
}*/ 