$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop()>= 200) {

            $('nav').css('background','#fff')
            $('nav a, .icon').css('color','#000')
            $('nav a img').attr('src',"img/asset 1.png")
            $('.navbar-toggler-icon').css('color','#000')
        } else{
            $('nav').css('background','transparent')
            $('nav a, .icon').css('color','#fff')
            $('nav a img').attr('src',"img/asset 0.png")
            $('.navbar-toggler-icon').css('color','#fff')
        }

    });

    $('html').niceScroll({

        cursorcolor: 'rgb(0,195,218)'
    });

    $('nav .collapse a').click(function () {

        $('html, body').animate({

            scrollTop: $('.'+ $(this).data('value')).offset().top
            
        }, 1000);

    });

    $('.works li').click(function () {

        $(this).addClass('act').siblings().removeClass('act');

        if ($(this).data('class') === 'all'){

            $('.works .col-lg-4').show();

        }else {

            $('.works .col-lg-4').hide();

            $('.'+ $(this).data('class')).show();
        }
    });

    $('.home').height($(window).height());
    $('.home .carousel-item img').height($(window).height());


    $(".counter").counterUp({
        delay: 10,
        time: 3000
    });

    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        }
    }
    });
/*Start Typed*/ 
    var options = {
        strings: ["apps", "softwares", "websites"],
        typeSpeed: 70,
        loop:true
      }
      
      var typed = new Typed(".type", options)

/*End Typed*/ 

/*Start Animation*/

    new WOW().init();
    
/*End Animation*/
/*Start Up*/ 
    $('.up').click(function () {

        $('html, body').animate({scrollTop: 0}, 1000);

    });

    $(window).scroll(function () {

    if ($(this).scrollTop()>= 200) {

        $('.up').show();

    } else {

        $('.up').hide();
    }

    });
/*End Up*/ 

});

$(window).on('load', function () {

    $('.spinner').fadeOut(5000);

});