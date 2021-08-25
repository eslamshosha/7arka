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

    ///////// ** details** /////////
    var specials = new Swiper('.details-section .swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.details-section .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.details-section .swiper-button-prev',
            prevEl: '.details-section .swiper-button-next',
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
        

    ////select bootstrap
    $('select').selectpicker();

    


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
        panel.style.maxHeight = panel.scrollHeight + 500 + "px";
        } 
    });
    }

    // commonjs // flatpicker date input
    $(".selector").flatpickr(
        {
            minDate: "today",
            maxDate: new Date().fp_incr(14), // 14 days from now
            defaultDate: "today"
        }
    );
    //file input
    $(".custom-file-upload .upload-change").change(function() {
        let file_val;
        if($(this).val() == '') {
            file_val = $('.file-txt').data('title');
        } else {
            file_val = $(this).prop('files')[0].name;
        }
        $('.file-txt').html(file_val); 
      });
});











	
	
		
	
		

