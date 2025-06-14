(function($) {
    "use strict";


    // Masonary Grid
	$('.portfolio-masonary').isotope({
      itemSelector: '.pf02-single',
      masonry: {
        columnWidth: 0
      }
    });
    
    


    // isotope filtering
    $('.portfolio-masonary').isotope({
        // set itemSelector so .grid-sizer is not used in layout
        itemSelector: '.pf02-single',
        percentPosition: true,
        masonry: {
            // use element for option
            columnWidth: '.pf02-single'
        }
    });

    $('.portfolio-grid').isotope();



    // var $pf_masonary = jQuery('.portfolio-masonary');

    // $pf_masonary.imagesLoaded( function() {
    //     $pf_masonary.isotope({
    //         // set itemSelector so .grid-sizer is not used in layout
    //         itemSelector: '.pf02-single',
    //         percentPosition: true,
    //         masonry: {
    //             // use element for option
    //             columnWidth: '.pf02-single'
    //         }
    //     });
    // } );


    // var $pf_grid = jQuery('.portfolio-grid');
    // $pf_grid.imagesLoaded( function() {
    //     $pf_grid.isotope();
    // } );



    


    $(".portfolio-filter li").on('click', function () {
        $(".portfolio-filter li").removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $(".portfolio-masonary, .portfolio-grid").isotope({
            filter: selector
        });
    });


    $(".career-filter li").on('click', function () {
        $(".career-filter li").removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $(".career-grid").isotope({
            filter: selector
        });
    });



    $('.cons-carousel').owlCarousel({
    	autoplay: true,
    	center: true,
        loop: true,
        margin:30,
        nav:false,
        items: 3,
        thumbs: false,
        thumbsPrerendered: false,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
            }
        }
    });


    //========================
    // Testiomonial carousel
    //========================
    $('.img-carousel').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 10,
        nav: false,
        items: 1,
        smartSpeed: 500,
        thumbs: true,
        thumbsPrerendered: true
    });

    $('.testimonial-caro').owlCarousel({
        autoplay: true,
        loop: true,
        dots: false,
        nav: true,
        navText: ['<span class="lnr lnr-arrow-left"></span>','<span class="lnr lnr-arrow-right"></span>'],
        items: 1,
        smartSpeed: 500,
        thumbs: false,
        thumbsPrerendered: false
    });


	//=================================
    // Bootstrap accordian icon toggle
    //=================================
    $('h5').attr('data-toggle', 'collapse').on('click', function() {
    	$(this).prev('.more-less').toggleClass('fas fas fa-angle-down fa-angle-down');
    });


    $('.grid-view').on('click', function(e) {
    	e.preventDefault();
    	$('.product-layout').removeClass('list-layout');
    	$('.product-layout').addClass('grid-layout');
    	$('.grid-layout').children().removeClass('col-lg-12 col-md-12 col-sm-12');
    	$('.grid-layout').children().addClass('col-lg-3 col-md-4 col-sm-6');
    });
    $('.list-view').on('click', function(e) {
    	e.preventDefault();
    	$('.product-layout').removeClass('grid-layout');
    	$('.product-layout').addClass('list-layout');
    	$('.list-layout').children().removeClass('col-lg-3 col-md-4 col-sm-6');
    	$('.list-layout').children().addClass('col-lg-12 col-md-12 col-sm-12');
    });


	//=================================
    // Count Down
    //=================================
    if ($("#clock").length > 0) {
        $('#clock').countdown('2020/10/10').on('update.countdown', function(event) {
          var $this = $(this).html(event.strftime(''
            + '<p><span>Day%!d</span> %-d</p> '
            + '<p><span>Hour%!d</span> %H</p> '
            + '<p><span>Minute%!d</span> %M</p> '
            + '<p><span>Second%!d</span>%S</p>'));
        });
    }


    // var consowl = $('.cons-carousel');
    // // Listen to owl events:
    // consowl.on('changed.owl.carousel', function(event) {
    // 	$('.owl-item').removeClass('scale');
    //     $('.cons-carousel').find('.active:eq(1)').addClass('scale');
    // })



    //=================================
    // Add/Minus Quantity
    //=================================
    $('.incressQnt').on('click',function(){
        var $qty = $(this).closest('div').find('.qnttinput');
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal)) {
            $qty.val(currentVal + 1);
        }
    });
    $('.decressQnt').on('click',function(){
        var $qty = $(this).closest('div').find('.qnttinput');
        var currentVal = parseInt($qty.val());
        if (!isNaN(currentVal) && currentVal > 0) {
            $qty.val(currentVal - 1);
        }
    });
    


    //=================================
    // Fun Facts / Counter up
    //=================================
    var elemscroll = true;
    $('.about-sec, .funfacts-sec').appear();
    $('.about-sec, .funfacts-sec').on('appear', function() {
        if(elemscroll) {
            $('.countup').each(function() {
                var $this = $(this);
                jQuery({Counter: 0}).animate({Counter: $this.attr('data-counter')}, {
                    duration: 6000,
                    easing: 'swing',
                    step: function() {
                        var num = Math.ceil(this.Counter).toString();
                        if (Number(num) > 9999) {
                            while (/(\d+)(\d{3})/.test(num)) {
                                num = num.replace(/(\d+)(\d{3})/, '$1' + '$2');
                            }
                        }
                        $this.html(num);
                    }
                });
            });
            elemscroll = false;
        }        
    });


    //=================================
    // Mobile menu 
    //=================================
    $('.mobile-menu').on('click', function() {
        $('.primary-menu').slideToggle();
    });
    $('.primary-menu > li.menu-item-has-children > a, .sub-menu > li.menu-item-has-children > a').on('click', function(e) {
        e.preventDefault();
        $(this).siblings('.sub-menu').toggleClass('active');
    });

    //=================================
    // WoW js
    //=================================
    new WOW().init();


    //=================================
    // Magnify 
    //=================================
    $('.zoom').magnify();


    //======================
    // Preloder
    //======================
    $(window).on('load', function() {
        $('#status').fadeOut();
        $('#preloader').delay(250).fadeOut('slow');
        $('body').delay(250).css({'overflow':'visible'});
    });

})(jQuery);