$(document).ready(function(){

	var checkedIcon = $('.checked_icon').css('display','none');
	//Search hide


	//menu navbar

	function sizing() {

		if($(window).width()>766){
			$('.menu_column').removeClass('menu_hidden');
			$('.menu_column').removeClass('menu_active');
			$('.main_wrap .nav_bar .get_out_cont').css('display','block');
		}
		else{
			$('.main_wrap .nav_bar .get_out_cont').css('display','none');
		}


		if($(window).width()<991){

		}

		else{
			$(".main_search").css('display','block');
		}

	}

	$('.humburger_icon').on('click', function(e){
		e.preventDefault();
		$('.humburger_icon').css('z-index','1');
		$('.menu_column').addClass('menu_active');
		$('.menu_column').removeClass('menu_hidden');
	});

	$('#close').on('click', function(){
		$('.menu_column').addClass('menu_hidden');
		$('.menu_column').removeClass('menu_active');
		$('.humburger_icon').css('transition','.5s');
	});

	$(document).ready(sizing);
	$(window).resize(sizing);

	function parallaxScroll(){
	    var scrolled = $(window).scrollTop();
	    $('.header_img').css('top',(0-(scrolled*.25))+'px');
	}


	/*var windowHeight = $(window).width(); //определяем высоту окна браузера


	if($(window).width()>1024){
			// Bind to the resize event of the window object
		$(window).on("resize", function () {
		    // Set .right's width to the window width minus 480 pixels
		   $('.seasons_latest_news_wrap .left_container').width($(window).width() - (630));
		// Invoke the resize event immediately
		}).resize();
	}*/


	//slider


    	//spinner

    	function spinnerShow(){
    		$('#spinner_wrap').css('display','flex');
    	}

    	function spinnerHide(){
    		$('#spinner_wrap').css('display','none');
    	}


		$('#emotion_list li input').on('change', function(e){
			e.preventDefault();
			var atLeastOneIsChecked = $('#emotion_list input:radio:checked').length > 0;
			if(atLeastOneIsChecked){
				$(atLeastOneIsChecked).parent('label').addClass('active_li_input_checked');
				console.log('checked');
			}
		})


		$('#calendar_page_input input').on('change', function(e){
			e.preventDefault();

			if($('input[type=checkbox]').length > 0){
				$(this).siblings('.non_checked_icon').css('display','none');
				$(this).siblings('.checked_icon').css('display','block');
				$(this).siblings('.checked_icon').css('color','#c31f26');
				console.log('checked');
			}

			else if($('input:checkbox:not(:checked)').length > 0){
				$(this).siblings('.non_checked_icon').css('display','block');
				$(this).siblings('.checked_icon').css('display','none');
				$(this).siblings('.checked_icon').css('color','#fff');
				console.log('not checked');
			}
		})


		var parallaxElements = $('.back_cont_'),
			parallaxQuantity = parallaxElements.length;

			$(window).on('scroll', function () {

				window.requestAnimationFrame(function () {

					for (var i = 0; i < parallaxQuantity; i++) {
					var currentElement = parallaxElements.eq(i);
					var scrolled = $(window).scrollTop();

						currentElement.css({
						'transform': 'translate3d(0,' + scrolled * -0.3 + 'px, 0)'
						});
					}
				});
			});

			$(document).mouseup(function (e) {
				var container = $(".menu_column");
				if (container.has(e.target).length === 0){
					container.removeClass('menu_active');
				}
			});


			if($('.lightSlider').length > 0){

			var $status = $('.pagingInfo');
			    var $slickElement = $('.lightSlider');


				$slickElement.each(function() {

					var slider = $(this);


  					slider.on('init', sliderScrollbarHandler);

				slider.slick({
				  dots: false,
				  infinite: true,
				  speed: 300,
				  item:6,
				  nextArrow: '<i class="fa fa-angle-right"></i>',
  				  prevArrow: '<i class="fa fa-angle-left"></i>',
				  slidesToShow: 6,
				  slidesToScroll: 6,
				  pager:false,
				  scrollOverflow:true,
				  responsive : [
				  		{
			                breakpoint:1601,
			                settings: {
			                    slidesToShow: 4,
			                    slidesToScroll: 4,
			                    slideMargin:6,
			                  },
			            },
				  		{
			                breakpoint:1441,
			                settings: {
			                    slidesToShow: 4,
			                    slidesToScroll: 4,
			                    slideMargin:6,
			                  },
			            },
			            {
			                breakpoint:1199,
			                settings: {
			                    slidesToShow: 3,
			                    slidesToScroll: 4,
			                    slideMargin:6,
			                  },
			            },
			            {
			                breakpoint:1020,
			                settings: {
			                    slidesToShow: 2,
			                    slidesToScroll: 2,
			                    slideMargin:6,
			                  },
			            },
			            {
			                breakpoint:501,
			                settings: {
			                    slidesToShow: 2,
			                    slidesToScroll: 1,
			                    slideMargin:1,
			                    initialSlide: 0,
			                    variableWidth: true,
			                  },
			            },
			        ]
				})

				slider.on('afterChange', sliderScrollbarHandler);

				function sliderScrollbarHandler(event, slick, currentSlide, nextSlide){
					var scrollH = $('.horizontal_scroll');
				    var scroller = $('.scroller');

				    var visibleCount = slider.find('.slick-active').length;

				    var totalCount = slider.find('.slick-slide:not(.slick-cloned)').length

				    //var totalCount = slider.find('.slick-slide').length;
				        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
				        var curSlide = (currentSlide ? currentSlide : 0) + 1;
				        $status.text(curSlide + '/' + slick.slideCount);

				    var widthScroller = ((visibleCount / totalCount) * 100);

				    slider.next().find('.scroller').css('width', widthScroller + '%');

				    var leftTransform = ((curSlide - 1) / totalCount) * 100;//* ((curSlide - 1) / visibleCount);

				    slider.next().find('.scroller').css('left', leftTransform + '%');

				    console.log("left " + leftTransform);
					console.log("curSlide " + curSlide);
				    console.log("visible " + visibleCount);
				    console.log("total " + totalCount);
				    console.log("widthScroller " + widthScroller);
				}
				});

			}


			if($('.friends_slider').length > 0){

			var $status = $('.pagingInfo');
			    var $slickElement = $('.friends_slider');


				$slickElement.each(function() {

					var slider = $(this);


  					slider.on('init', sliderScrollbarHandler);

				slider.slick({
				  dots: false,
				  infinite: true,
				  speed: 300,
				  item:8,
				  nextArrow: '<i class="fa fa-angle-right"></i>',
  				  prevArrow: '<i class="fa fa-angle-left"></i>',
				  slidesToShow: 8,
				  slidesToScroll: 3,
				  pager:false,
				  scrollOverflow:true,
				  responsive : [
			            {
			                breakpoint:1199,
			                settings: {
			                    slidesToShow: 6,
			                    slidesToScroll: 4,
			                    slideMargin:6,
			                  },
			            },
			            {
			                breakpoint:900,
			                settings: {
			                    slidesToShow: 5,
			                    slidesToScroll: 2,
			                    slideMargin:6,
			                  },
			            },
			            {
			                breakpoint:767,
			                settings: {
			                    slidesToShow: 3,
			                    slidesToScroll: 2,
			                    slideMargin:6,
			                  },
			            },
			            {
			                breakpoint:500,
			                settings: {
			                    slidesToShow: 3,
			                    slidesToScroll: 2,
			                    slideMargin:6,
			                  },
			            },
			        ]
				})

				slider.on('afterChange', sliderScrollbarHandler);

				function sliderScrollbarHandler(event, slick, currentSlide, nextSlide){
					var scrollH = $('.horizontal_scroll');
				    var scroller = $('.scroller');

				    var visibleCount = slider.find('.slick-active').length;

				    var totalCount = slider.find('.slick-slide:not(.slick-cloned)').length

				    //var totalCount = slider.find('.slick-slide').length;
				        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
				        var curSlide = (currentSlide ? currentSlide : 0) + 1;
				        $status.text(curSlide + '/' + slick.slideCount);

				    var widthScroller = ((visibleCount / totalCount) * 100);

				    slider.next().find('.scroller').css('width', widthScroller + '%');

				    var leftTransform = ((curSlide - 1) / totalCount) * 100;//* ((curSlide - 1) / visibleCount);

				    slider.next().find('.scroller').css('left', leftTransform + '%');

				    console.log("left " + leftTransform);
					console.log("curSlide " + curSlide);
				    console.log("visible " + visibleCount);
				    console.log("total " + totalCount);
				    console.log("widthScroller " + widthScroller);
			}
				});


			}



			if($('.member_opinions_wrapper').length > 0){

			var $status = $('.pagingInfo');
			    var $slickElement = $('.member_opinions_wrapper');


				$slickElement.each(function() {

					var slider = $(this);


  					slider.on('init', sliderScrollbarHandler);

				slider.slick({
				  dots: false,
				  infinite: true,
				  speed: 300,
				  item:8,
				  nextArrow: '<i class="fa fa-angle-right"></i>',
  				  prevArrow: '<i class="fa fa-angle-left"></i>',
				  slidesToShow: 6,
				  slidesToScroll: 3,
				  pager:false,
				  controls:true,
				  scrollOverflow:true,
				  responsive : [
			            {
			                breakpoint:1650,
			                settings: {
			                    slidesToShow: 5,
			                    slidesToScroll: 4,
			                    slideMargin:6,
			                  },
			            },
			            {
			                breakpoint:1440,
			                settings: {
			                    slidesToShow: 4,
			                    slidesToScroll: 2,
			                    slideMargin:6,
			                  },
			            },
			            {
			                breakpoint:1199,
			                settings: {
			                    slidesToShow: 3,
			                    slidesToScroll: 2,
			                    slideMargin:6,
			                  },
			            },
			            {
			                breakpoint:900,
			                settings: {
			                    slidesToShow: 2,
			                    slidesToScroll: 1,
			                    slideMargin:6,
			                  },
			            },
			            {
			                breakpoint:500,
			                settings: {
			                    slidesToShow: 1,
			                    slidesToScroll: 1,
			                    slideMargin:6,
			                  },
			            },
			        ]
				})

				slider.on('afterChange', sliderScrollbarHandler);

				function sliderScrollbarHandler(event, slick, currentSlide, nextSlide){
					var scrollH = $('.horizontal_scroll');
				    var scroller = $('.scroller');

				    var visibleCount = slider.find('.slick-active').length;

				    var totalCount = slider.find('.slick-slide:not(.slick-cloned)').length

				    //var totalCount = slider.find('.slick-slide').length;
				        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
				        var curSlide = (currentSlide ? currentSlide : 0) + 1;
				        $status.text(curSlide + '/' + slick.slideCount);

				    var widthScroller = ((visibleCount / totalCount) * 100);

				    slider.next().find('.scroller').css('width', widthScroller + '%');

				    var leftTransform = ((curSlide - 1) / totalCount) * 100;//* ((curSlide - 1) / visibleCount);

				    slider.next().find('.scroller').css('left', leftTransform + '%');

				    console.log("left " + leftTransform);
					console.log("curSlide " + curSlide);
				    console.log("visible " + visibleCount);
				    console.log("total " + totalCount);
				    console.log("widthScroller " + widthScroller);
				}

				});

			}


			if($('.latest_news_slider').length > 0){

			var $status = $('.pagingInfo');
			    var $slickElement = $('.latest_news_slider');


				$slickElement.each(function() {

					var slider = $(this);

  					slider.on('init', sliderScrollbarHandler);

				slider.slick({
				  dots: false,
				  infinite: true,
				  speed: 300,
				  item:8,
				  nextArrow: '<i class="fa fa-angle-right"></i>',
  				  prevArrow: '<i class="fa fa-angle-left"></i>',
				  slidesToShow: 6.9,
				  slidesToScroll: 3,
				  pager:false,
				  scrollOverflow:true,
				  responsive : [
			            {
			                breakpoint:1800,
			                settings: {
			                    slidesToShow: 5,
			                    slidesToScroll: 4,
			                    slideMargin:6,
			                  },
			            },
			            {
			                breakpoint:1440,
			                settings: {
			                    slidesToShow: 4,
			                    slidesToScroll: 2,
			                    slideMargin:6,
			                  },
			            },
			            {
			                breakpoint:1199,
			                settings: {
			                    slidesToShow: 3,
			                    slidesToScroll: 2,
			                    slideMargin:6,
			                  },
			            },
			            {
			                breakpoint:900,
			                settings: {
			                    slidesToShow: 2,
			                    slidesToScroll: 2,
			                    slideMargin:6,
			                  },
			            },
			            {
			                breakpoint:500,
			                settings: {
			                    slidesToShow: 1,
			                    slidesToScroll: 2,
			                    slideMargin:6,
			                  },
			            },
			        ]
				})

				slider.on('afterChange', sliderScrollbarHandler);

				function sliderScrollbarHandler(event, slick, currentSlide, nextSlide){
					var scrollH = $('.horizontal_scroll');
				    var scroller = $('.scroller');

				    var visibleCount = slider.find('.slick-active').length;

				    var totalCount = slider.find('.slick-slide:not(.slick-cloned)').length

				    //var totalCount = slider.find('.slick-slide').length;
				        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
				        var curSlide = (currentSlide ? currentSlide : 0) + 1;
				        $status.text(curSlide + '/' + slick.slideCount);

				    var widthScroller = ((visibleCount / totalCount) * 100);

				    slider.next().find('.scroller').css('width', widthScroller + '%');

				    var leftTransform = ((curSlide - 1) / totalCount) * 100;//* ((curSlide - 1) / visibleCount);

				    slider.next().find('.scroller').css('left', leftTransform + '%');

				    console.log("left " + leftTransform);
					console.log("curSlide " + curSlide);
				    console.log("visible " + visibleCount);
				    console.log("total " + totalCount);
				    console.log("widthScroller " + widthScroller);
			}
				});

			}


			/*$('.slider_explore').on('swipe', function(event, slick, direction){
			  console.log(direction);
			  // left
			});

			$('.your-element').on('edge', function(event, slick, direction){
			  console.log('edge was hit')
			});

			*/

			/*$('.lightSlider').on('afterChange', function (event, slick, currentSlide) {
			    var currentSlide = $('.your-element').slick('slickCurrentSlide');
			    console.log(currentSlide);
			});*/


			// datapicker

			if($( "#datepicker" ).length > 0){
				$( "#datepicker" ).datepicker();
			}



			    $( "#datepicker_calendar" ).datepicker({
			      showOn: "button",
			      buttonImage: "../img/kalendar.png",
			      buttonImageOnly: true,
			      buttonText: "Select date"
			    });


			    if($( "#accordion" ).length > 0){
			    	$( "#accordion" ).accordion();
			    }

			    if($('.profile_5_input').length > 0){
			    	$('.profile_5_input').iCheck({
				    checkboxClass: 'icheckbox_minimal-red',
				    radioClass: 'iradio_minimal-red',
				    increaseArea: '20%' // optional
				  });
			    }

			   if($('.profile_5_checkbox').length > 0){
			    	$('.profile_5_checkbox').iCheck({
				    checkboxClass: 'icheckbox_flat-red',
    				radioClass: 'iradio_flat-red',
				    increaseArea: '20%' // optional
				  });
			    }


			   /* $(".datapicker_wrap").sticky({topSpacing:0});
			    $('.datapicker_wrap').on('sticky-start', function() { console.log("Started"); });*/


				/*var names = $('.discussion_wrap .discussion_cont .messages_container .main_message .message_bottom span').text();

				var arr = names.split(' ');

				for (var i = 0; i < arr.length; i++) {
				  var firstElem = arr[0];
				  console.log(arr[0]);
				  $(firstElem).css('color','red');
				}*/

				$( ".discussion_wrap .discussion_cont .messages_container .main_message .message_bottom a" ).click(function(e) {
					e.preventDefault();
				  $( ".reply_comment_pole" ).slideToggle( "150", function() {
				    // Animation complete.
				  });
				});

});