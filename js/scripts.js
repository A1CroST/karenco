jQuery(document).ready(function() {	
	//Add tags
	jQuery('.wpcf7-response-output').html('<p>Спасибо, что выбрали нас.</p><p>В рабочее время с Вами свяжется наш сотрудник</p>');
    //Answers
    jQuery('.answers-card').find('.answers-answer').on('click', function() {
        let val = jQuery(this).attr('data-value');
        jQuery(this).siblings('.wpcf7-form-control-wrap').children('input').attr('value', val);
        jQuery(this).parents('.answers-card').children('.answers-answer').removeClass('answers-answer-active');
        jQuery(this).addClass('answers-answer-active');
    });
    //Кнопка подвтердить
    jQuery('.answers-next').on('click', function(e) {
        e.preventDefault();
        let index = jQuery(this).parents('.answers-card').index();
        let btnText = jQuery(this).text();
        if (jQuery(this).siblings().children('.answers-hidden').attr('value') !== '') {
            jQuery(this).removeClass('answers-next-error');
            jQuery(this).text(btnText);
            jQuery(this).parents('.answers-card').removeClass('answers-card-active');
            jQuery('.answers-card').eq(index).addClass('answers-card-active');
        } else {
            jQuery(this).addClass('answers-next-error');
            jQuery(this).text('сначала выберите ответ');
        }
    });
    //Кнопки контроля переключения слайдов
    jQuery('.controls-next').on('click', function() {
        let index = jQuery(this).parents('.answers-card').index();
        let lastIndex = jQuery('.answers-card').last().index();
        if (index < lastIndex) {
            if (jQuery(this).parents('.answers-card').children('.answers-hidden').attr('value') !== '') {
                jQuery(this).parents('.answers-card').removeClass('answers-card-active');
                jQuery('.answers-card').eq(index + 1).addClass('answers-card-active');
            }
        }
    });
    jQuery('.controls-prev').on('click', function() {
        let index = jQuery(this).parents('.answers-card').index();
        jQuery(this).parents('.answers-card').removeClass('answers-card-active');
        jQuery('.answers-card').eq(index - 1).addClass('answers-card-active');
    });
	// Tooltip open
	jQuery('.answers-answer[data-value="до 6 месяцев"]').on('click', function() {
		jQuery('.tooltip').css('display', 'flex');
	});
	//Tooltop close
	jQuery('.tooltip-yes').on('click', function() {
		jQuery('.tooltip').css('display', 'none');
	});
	//Close answers
	jQuery('.tooltip-no').on('click', function() {
		jQuery('.tooltip').css('display', 'none');
		jQuery('.answers-card').removeClass('answers-card-active');
		jQuery('.unhappy').slideToggle();
	});

    //Swiper
    const swiperPartners = new Swiper('.swiper-partners', {
        // Optional parameters
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        slidesPerView: 6,
        spaceBetween: 30,
        speed: 3600,
        freeMode: {
            enabled: true
        },
        freeModeMomentum: false,
        // centeredSlides: true,
    });

    //Services screen animation
//     var serv_flag = false;
//     jQuery('.services-up').on('click', function() {
//         jQuery('.services-screen-1, .services-screen-2').animate({top: '-740px'}, 500);
// 		serv_flag = true;
//     });
	
// 	jQuery(window).scroll(function () {
// 		if(serv_flag == false){
// 			if (jQuery(this).scrollTop() > (jQuery('.services-up').offset().top) - jQuery(window).height() + 500) {
// 				console.log('ok');
// 				jQuery('.services-screen-1, .services-screen-2').animate({top: '-740px'}, 500);
// 				serv_flag = true;
// 			} 
// 		}
// 	});
	
    //Services back to main screen button
//     jQuery('.services-back-screen').on('click', function() {
// 		serv_flag = false;
//         jQuery('.services-screen-1, .services-screen-2').animate({top: '0px'}, 500);
//     });

    //Services card hover
    //1
    if(jQuery(window).width() >= 768){
		jQuery( ".serv-box1" ).on('mouseenter', function() {
			jQuery('.services-card-position1').show( 0 );
			jQuery('.services-card').addClass('serv-box-rgba');
		});
		jQuery('.services-card-position1').on('mouseleave', function() {
			jQuery('.services-card-position1').hide( 0 );
			jQuery('.services-card').removeClass('serv-box-rgba');
		});
		//2
		jQuery( ".serv-box2" ).on('mouseenter', function() {
			jQuery('.services-card-position2').show( 0 );
			jQuery('.services-card').addClass('serv-box-rgba');
		});
		jQuery('.services-card-position2').on('mouseleave', function() {
			jQuery('.services-card-position2').hide( 0 );
			jQuery('.services-card').removeClass('serv-box-rgba');
		});
		//3
		jQuery( ".serv-box3" ).on('mouseenter', function() {
			jQuery('.services-card-position3').show( 0 );
			jQuery('.services-card').addClass('serv-box-rgba');
		});
		jQuery('.services-card-position3').on('mouseleave', function() {
			jQuery('.services-card-position3').hide( 0 );
			jQuery('.services-card').removeClass('serv-box-rgba');
		});
		//4
		jQuery( ".serv-box4" ).on('mouseenter', function() {
			jQuery('.services-card-position4').show( 0 );
			jQuery('.services-card').addClass('serv-box-rgba');
		});
		jQuery('.services-card-position4').on('mouseleave', function() {
			jQuery('.services-card-position4').hide( 0 );
			jQuery('.services-card').removeClass('serv-box-rgba');
		});
		//5
		jQuery( ".serv-box5" ).on('mouseenter', function() {
			jQuery('.services-card-position5').show( 0 );
			jQuery('.services-card').addClass('serv-box-rgba');
		});
		jQuery('.services-card-position5').on('mouseleave', function() {
			jQuery('.services-card-position5').hide( 0 );
			jQuery('.services-card').removeClass('serv-box-rgba');
		});
		//6
		jQuery( ".serv-box6" ).on('mouseenter', function() {
			jQuery('.services-card-position6').show( 0 );
			jQuery('.services-card').addClass('serv-box-rgba');
		});
		jQuery('.services-card-position6').on('mouseleave', function() {
			jQuery('.services-card-position6').hide( 0 );
			jQuery('.services-card').removeClass('serv-box-rgba');
		});
	}
	
	if(jQuery(window).width() < 768){
		// 1
		jQuery( ".serv-box1" ).click(function() {
			if(!jQuery('.services-card').hasClass('serv-box-rgba')){
				jQuery('.services-card-position1').show( 0 );
				jQuery('.services-card').addClass('serv-box-rgba');
			}
		})
		jQuery( ".services-card-position1" ).click(function() {
			jQuery('.services-card-position1').hide( 0 );
			jQuery('.services-card').removeClass('serv-box-rgba');
		})
		// 2
		jQuery( ".serv-box2" ).click(function() {
			if(!jQuery('.services-card').hasClass('serv-box-rgba')){
				jQuery('.services-card-position2').show( 0 );
				jQuery('.services-card').addClass('serv-box-rgba');
			}
		})
		jQuery( ".services-card-position2" ).click(function() {
			jQuery('.services-card-position2').hide( 0 );
			jQuery('.services-card').removeClass('serv-box-rgba');
		})
		// 3
		jQuery( ".serv-box3" ).click(function() {
			if(!jQuery('.services-card').hasClass('serv-box-rgba')){
				jQuery('.services-card-position3').show( 0 );
				jQuery('.services-card').addClass('serv-box-rgba');
			}
		})
		jQuery( ".services-card-position3" ).click(function() {
			jQuery('.services-card-position3').hide( 0 );
			jQuery('.services-card').removeClass('serv-box-rgba');
		})
		// 4
		jQuery( ".serv-box4" ).click(function() {
			if(!jQuery('.services-card').hasClass('serv-box-rgba')){
				jQuery('.services-card-position4').show( 0 );
				jQuery('.services-card').addClass('serv-box-rgba');
			}
		})
		jQuery( ".services-card-position4" ).click(function() {
			jQuery('.services-card-position4').hide( 0 );
			jQuery('.services-card').removeClass('serv-box-rgba');
		})
		// 5
		jQuery( ".serv-box5" ).click(function() {
			if(!jQuery('.services-card').hasClass('serv-box-rgba')){
				jQuery('.services-card-position5').show( 0 );
				jQuery('.services-card').addClass('serv-box-rgba');
			}
		})
		jQuery( ".services-card-position5" ).click(function() {
			jQuery('.services-card-position5').hide( 0 );
			jQuery('.services-card').removeClass('serv-box-rgba');
		})
		// 6
		jQuery( ".serv-box6" ).click(function() {
			if(!jQuery('.services-card').hasClass('serv-box-rgba')){
				jQuery('.services-card-position6').show( 0 );
				jQuery('.services-card').addClass('serv-box-rgba');
			}
		})
		jQuery( ".services-card-position6" ).click(function() {
			jQuery('.services-card-position6').hide( 0 );
			jQuery('.services-card').removeClass('serv-box-rgba');
		})
	}


    //Modal services
   /* jQuery('.services-form-title').on('click', function() {
        jQuery('.services-form').animate({top: '-250px', borderRadius: '12px'}, 300);
        jQuery('.services-form-form').show(300);
        jQuery('.services-open-arrow').hide(300);
    });
    jQuery('.services-form-close').on('click', function() {
        jQuery('.services-form').animate({top: '0px', borderRadius: '48px'}, 300);
        jQuery('.services-form-form').hide(300);
        jQuery('.services-open-arrow').show(300);
    });*/

    //Animations dialog
    const animMes = () => {
        jQuery('.preim-quest').animate({width: '250px'}, 0);
        jQuery('.preim-quest').text('Почему с вами выгоднее?');
        jQuery('.preim-quest').animate({marginTop: '290px'}, 300);
    }
    const animMes2 = () => {
//         jQuery('.preim-quest').animate({marginTop: '195px'}, 300);
        jQuery('.preim-quest').animate({marginTop: '195px'}, 300);
    }
    const animMes3 = () => {
//         jQuery('.preim-quest').animate({marginTop: '120px'}, 300);
        jQuery('.preim-quest').animate({marginTop: '120px'}, 300);
    }
    const animMes4 = () => {
//         jQuery('.preim-quest').animate({marginTop: '-35px'}, 300);
        jQuery('.preim-quest').animate({marginTop: '45px'}, 300);
    }
    const animMes5 = () => {
//         jQuery('.preim-quest').animate({marginTop: '-150px'}, 300);
        jQuery('.preim-quest').animate({marginTop: '-30px'}, 300);
    }
    const animMes6 = () => {
//         jQuery('.preim-quest').animate({marginTop: '-250px'}, 300);
        jQuery('.preim-quest').animate({marginTop: '-250px'}, 300);
    }

    const timeOuts = () => {
        setTimeout(function() {
            animMes();
        }, 500);
        setTimeout(function() {
            animMes2();
        }, 1500);
        setTimeout(function() {
            animMes3();
        }, 3500);
        setTimeout(function() {
            animMes4();
        }, 5500);
        setTimeout(function() {
            animMes5();
        }, 7500);
        setTimeout(function() {
            animMes6();
        }, 12000);
    }
// 	const timeOuts = () => {
//         setTimeout(function() {
//             animMes();
//         }, 1000);
//         setTimeout(function() {
//             animMes2();
//         }, 3500);
//         setTimeout(function() {
//             animMes3();
//         }, 6000);
//         setTimeout(function() {
//             animMes4();
//         }, 8500);
//         setTimeout(function() {
//             animMes5();
//         }, 11000);
//         setTimeout(function() {
//             animMes6();
//         }, 12000);
//     }
    let timeoutsflag = false;
    jQuery(window).on("scroll", function() {
        if (jQuery(window).scrollTop() > 3200 && timeoutsflag == false) {
            timeOuts();
			timeoutsflag = true;
        }
    });
    jQuery('.preim-box-btn').on('click', function() {
        timeOuts();
    });
    
    //Accordeon
    jQuery('.now-quest').on('click', function() {
        jQuery(this).siblings('.now-answer').slideToggle();
        jQuery(this).children('span').toggleClass('arrow-rotate');
    });

    //Animate rows
    let offset1 = jQuery('.row-1').offset();
    let offset2 = jQuery('.row-2').offset();
    let offset3 = jQuery('.row-3').offset();
    jQuery(window).scroll(function(event) {
//         let st = jQuery(this).scrollTop() - 7070;
        let st = jQuery(this).scrollTop() - 9000;
     	if(jQuery(window).width() < 768){
			st = jQuery(this).scrollTop() - 5500;
		} 
        jQuery('.row-1').css('left', st + offset1.left);
        jQuery('.row-2').css('left', offset2.left - st);
        jQuery('.row-3').css('left', st + offset3.left);
		//console.log('scroll mob');
    });
	
	
	
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > (jQuery('.way-1').offset().top) - jQuery(window).height() + 250) {
			jQuery('.way-1').addClass('way-opacity');
		}
		if (jQuery(this).scrollTop() > (jQuery('.way-2').offset().top) - jQuery(window).height() + 250) {
			jQuery('.way-2').addClass('way-opacity');
		}
		if (jQuery(this).scrollTop() > (jQuery('.way-3').offset().top) - jQuery(window).height() + 250) {
			jQuery('.way-3').addClass('way-opacity');
		}
		if (jQuery(this).scrollTop() > (jQuery('.way-4').offset().top) - jQuery(window).height() + 250) {
			jQuery('.way-4').addClass('way-opacity');
		}
		if (jQuery(this).scrollTop() > (jQuery('.way-5').offset().top) - jQuery(window).height() + 250) {
			jQuery('.way-5').addClass('way-opacity');
		}
		if (jQuery(this).scrollTop() > (jQuery('.way-6').offset().top) - jQuery(window).height() + 250) {
			jQuery('.way-6').addClass('way-opacity');
		}
	});
	
	jQuery(window).scroll(function () {
		
		if(jQuery(window).width() >= 768){
			if (jQuery(this).scrollTop() > (jQuery('.preim-card-1').offset().top) - jQuery(window).height() + 250) {
				jQuery('.preim-card-1').addClass('preim-card-1-js');
				jQuery('.preim-card-2').addClass('preim-card-2-js');
			}
			if (jQuery(this).scrollTop() > (jQuery('.preim-card-3').offset().top) - jQuery(window).height() + 250) {
				jQuery('.preim-card-3').addClass('preim-card-3-js');
				jQuery('.preim-card-4').addClass('preim-card-4-js');
			}
			if (jQuery(this).scrollTop() > (jQuery('.preim-card-5').offset().top) - jQuery(window).height() + 250) {
				jQuery('.preim-card-5').addClass('preim-card-5-js');
				jQuery('.preim-card-6').addClass('preim-card-6-js');
			}
		} else if(jQuery(window).width() < 768){
			if (jQuery(this).scrollTop() > jQuery('.preim-card-1').offset().top - jQuery(window).height() + 100) {
				jQuery('.preim-card-1').addClass('preim-card-1-js');
				jQuery('.preim-card-2').addClass('preim-card-2-js');
			}
			if (jQuery(this).scrollTop() > jQuery('.preim-card-3').offset().top - jQuery(window).height() + 100) {
				jQuery('.preim-card-3').addClass('preim-card-3-js');
				jQuery('.preim-card-4').addClass('preim-card-4-js');
			}
			if (jQuery(this).scrollTop() > jQuery('.preim-card-5').offset().top - jQuery(window).height() + 100) {
				jQuery('.preim-card-5').addClass('preim-card-5-js');
				jQuery('.preim-card-6').addClass('preim-card-6-js');
			}
		}
	});
	
	// slider
	// 
	
// 	win block animation
	if(jQuery(window).width() >= 768){
		jQuery(window).scroll(function () {
			if (jQuery(this).scrollTop() > (jQuery('.win-container').offset().top) - jQuery(window).height() + 550) {
				jQuery('.wr1').addClass('win-row-1');
				jQuery('.wr2').addClass('win-row-2');
				jQuery('.wr3').addClass('win-row-3');
			}
		});
	}
	if(jQuery(window).width() < 768){
		jQuery(window).scroll(function () {
			if (jQuery(this).scrollTop() > (jQuery('.win-container').offset().top) - jQuery(window).height() + 300) {
				jQuery('.wr1').addClass('win-row-1');
				jQuery('.wr2').addClass('win-row-2');
				jQuery('.wr3').addClass('win-row-3');
			}
		});
	}
	
 	jQuery('#mask-phone').mask("+7(999)999-99-99");
 	jQuery('#inn-mask-phone').mask("+7(999)999-99-99");
 	jQuery('#footer-mask-phone').mask("+7(999)999-99-99");
 	//jQuery('#inn-mask-inn').mask("999999999999");
 	$('#inn-mask-inn').on('change keyup', function() {
	  var res = $(this).val()
	  console.log(res.length);
	  if(res.length > 12) $(this).val(res.substring(0, 12));
	});
	
// 	ЖЕКА ВОТ ТУТ КОД ПРОВЕРКИ ДЛЯ ОТПРАВКИ ЗАЯВКИ
// 	$(".wpcf7-form").on("submit", function(e){
// 		e.preventDefault();
// 		$(".btn-answers-submit").attr("disabled", "disabled");
// 		if((jQuery('.answers-answer-name').val().length > 2) && (jQuery('.answers-answer-phone').val().length == 16)){
// 			$(this).submit();
// 		}
// 	})
	let nameStatus = false,
		phoneStatus = false;
	jQuery('.btn-answers-submit').attr('disabled', 'disabled');
	function valName() {
		jQuery('.answers-answer-name').on('change', function() {
			if (jQuery(this).val().length > 2) {
				nameStatus = true;
			} else {
				nameStatus = false;
			}
		});
	}
	function valPhone() {
		jQuery('.answers-answer-phone').on('change', function() {
			console.log(jQuery(this).val());
			if (jQuery(this).val().length == 16) {
				phoneStatus = true;
			} else {
				phoneStatus = false;
			}
		});
	}
	function enableBtn() {
		if (valName() === true && valPhone() === true) {
			jQuery('.btn-answers-submit').removeAttr('disabled');
		}
	}
	enableBtn();
	
	
	jQuery(document).keyup(function(){
		if((jQuery('.answers-answer-name').val().length > 2) && (jQuery('.answers-answer-phone').val().length == 16)){
			jQuery('.check-btn-dis').removeAttr('disabled');
			jQuery('.check-btn-dis').removeClass('check-btn-dis-clr');
		}
		if(jQuery('.answers-answer-phone').val().length == 16){
			jQuery('.answers-answer-phone').removeClass('bg-red');
		} else if(jQuery('.answers-answer-phone').val().length != 16){
			jQuery('.answers-answer-phone').addClass('bg-red');
		}
	})
	
	// мобильная версия менюшки  burger-cls   header-menu-mob-close
	jQuery('.burger-cls').click(function(){
		jQuery('.header-menu').removeClass('header-menu-mob-close');
	})
	jQuery('.burger-open').click(function(){
		jQuery('.header-menu').addClass('header-menu-mob-close');
	})
	
	//.wpcf7-response-output
	jQuery('form').on('submit', function() {
		setTimeout(() => {
		  jQuery('.wpcf7-response-output').addClass('d-none');
		}, 3000);
	});
	
});