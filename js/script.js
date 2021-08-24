$(document).ready(function() {
	new WOW().init();


	//phone size menu onclick
	if ($(window).width() <= 1199) {
        $('#menu-id').click(function (e) {
           e.preventDefault()
           $(".overlay-box").fadeToggle(300);
           $(".navgition").toggleClass("reset-left");
           $("body").toggleClass("overflow");
       });
       $(".nav-head .close-btn, .overlay-box").click(function () {
           $(".overlay-box").fadeOut(300);
           $(".navgition").removeClass("reset-left");
           $("body").removeClass("overflow");
       });

	   //dropdown inside menu
	   $('.lang-word').click(function (e) {
		e.preventDefault()
		var item =  $(this).siblings(".dropdown-content");
		item.slideToggle(500);
		})
   	}
	// //main Slider Carousel
    ///////// ** main** /////////
    var specials = new Swiper('.main-slider .swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.main-slider .swiper-btn-next',
            prevEl: '.main-slider .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 1,
            },
            1199: {
                slidesPerView: 1,
            },
        },
    });

    // //brand Slider Carousel
    ///////// ** brand** /////////
    var specials = new Swiper('.brand-slider .swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.brand-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.brand-slider .swiper-btn-next',
            prevEl: '.brand-slider .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 25,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 25,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 25,
            },
            1199: {
                slidesPerView: 5,
                spaceBetween: 35,
            },
        },
    });
    // //clints Slider Carousel
    ///////// ** cints** /////////
    var specials = new Swiper('.clints-slider .swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.clints-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.clints-slider .swiper-btn-next',
            prevEl: '.clints-slider .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 25,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 25,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 25,
            },
            1199: {
                slidesPerView: 5,
                spaceBetween: 35,
            },
        },
    });

    
        

    ////select bootstrap
    $('select').selectpicker();


    //to change logo in mobile size
    var example = document.getElementById('slam');
    if ($(window).width() <= 1199) {
        example.setAttribute("src", "images/red-logo.png");
    } else {
        example.setAttribute("src", "images/logo.png");
    }

    //search filter
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    });
    }
});











	
	
		
	
		

