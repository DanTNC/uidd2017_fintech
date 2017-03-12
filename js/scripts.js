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
            $('.navbar').css("background-color","rgba(35, 31, 35, 0.9)");
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

    $('.dropdown-menu li a').click(function(){
        if($(this).attr("id") == "default"){
            $('button.col4-input').html( "Choose your city" );
            $('button.col4-input').css("color","#727272");
            $('button.col4-input:hover').css("color","#727272");
        }else{
            $('button.col4-input').html( $(this).text() );
            $('button.col4-input').css("color","#231f20");
            $('button.col4-input:hover').css("color","#231f20");
        }
    });

    $("#arrow").click(function(event) {
        scroll_map(event);
    });

    $(".search_top").change(function(event) {
        if($(".search_top").is(":focus") === true){
            scroll_map(event);
        } 
    });

    $(".search").change(function() {
        if($(".search").is(":focus") === true){
            for(var i = 0 ; i < 2 ; i++){
                $(".search")[i].value = $(this).val();
            }
            search_map($(this).val());
        } 
    });

    $(".search_it").click(function(){
        for(var i = 0 ; i < 2 ; i++){
            $(".search")[i].value = $(".div_in_google_map div div input").val();
        }
        search_map($(".div_in_google_map div div input").val());
    });
});

var scroll_map = (event) => {
    event.preventDefault();

    // Store hash
    var hash = $("#arrow a").attr("href");

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 400, function(){
            // Add hash (#) to URL when done scrolling (default click behavior)
            //window.location.hash = hash;
    });
}

var search_map = (address) => {
    $.getJSON("https://maps.googleapis.com/maps/api/geocode/json",
        {"address":address,"key":"AIzaSyDR6karV1VluUdop9oZ_hhE4uBRHLeh3ys"},
        function(data){
            var loc = data.results[0].geometry.location;
            map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: loc.lat, lng: loc.lng},
                scrollwheel: false,
                disableDefaultUI: true,
                zoom: 11
            });
        }
    );
}

var initMap = () => {
	// Create a map object and specify the DOM element for display.
	var map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: 22.9997281, lng: 120.2270277},
	scrollwheel: false,
	disableDefaultUI: true,
	zoom: 11
	});
}
