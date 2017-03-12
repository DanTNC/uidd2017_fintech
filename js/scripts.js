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

    $('iframe').load(function(){
        $('.place-card').css("display","none");
        $('.login-control').css("display","none");
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

})

/*
                <div class="btn-group divider">
					<div class="cnvc">					
						<button class="btn btn-default" type="button">
							Company
						</button> 
						<button class="btn btn-default" type="button">
							News
						</button> 
						<button class="btn btn-default" type="button">
							Vote
						</button> 
						<button class="btn btn-default" type="button">
							Contact
						</button>
					</div>
				</div>
}*/ 