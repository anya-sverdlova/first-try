	var myData = { count: 3, myButton: '<button>Comment</button>', starCount: 5  };
	
	var myParent = document.getElementsByTagName('head')[0];	
	
	var newScript = document.createElement('script');
	newScript.type = "text/javascript";
	newScript.src = "js/lib/jquery-2.1.0.min.js";
	myParent.appendChild(newScript);	

	var newCss = document.createElement('link');
	newCss.rel = "stylesheet";
	newCss.href = "css/stylesheet_testwork.css";
	myParent.appendChild(newCss);
	
	var date = new Date;
	date = date.toString().split(' ');
	
	var time = new Date().getTime();
	
	var myShowSetting, myStarActivate, myCongratulationCover, myReviewsArray, myPostTime, myPostName, myPostMessage, myPostReviews, myInnerWrapper, myButton, myCallEvent, myGetReviews, myTemplateCover, myTemplateCoverMini, myAddReviewEvent, myChangeInsets, myGet,
  
	myWidget = function(widgetParams) {					

		myGet = function(myData) { 
			$.get('https://api.mongolab.com/api/1/databases/first-base/collections/reviews?s={"number":-1}&apiKey=fUlPVExWjzXy1yjlMzvqzi1oREPQwkwQ' )
			.done(function(myData) {
				myGetReviews.call(this, myData);				
			})
			.fail(function(errError) {
				console.log('ERROR');
			});
		}
		
		myPostReviews = function() { 
			$.ajax({
				type: "POST",
				url: "https://api.mongolab.com/api/1/databases/first-base/collections/reviews?apiKey=fUlPVExWjzXy1yjlMzvqzi1oREPQwkwQ",
				data: JSON.stringify({
				message : $('.review-input').val(),
				author : $('.name-input').val(), 
				date: date[4].slice(0, 5) + ', ' + date[2] + ' ' + date[1] + ' ' + date[3],
				raiting: $('.choice-star.active-star').length,
				number: time
				}),
				success: function() {
					myTemplateCoverMini.css('display', 'none');
					myCongratulationCover.css('display', 'block');
					setTimeout(function() {
								myTemplateCoverMini.css('display', 'block');
								$('.name-input').val(' ');
								$('.review-input').val(' ');
								$('.choice-star').removeClass('active-star');
								myCongratulationCover.css('display', 'none');
								}, 2000)
						},
				contentType: "application/json"
			}); 
		},
		
		myAddReviewEvent = function() {
			$('.wrapper-get').css('display', 'none');
			myTemplateCoverMini = $('<div>').appendTo('#wrapper')
											.prop('class', 'wrapper-set inner-wrapper')
											.css('display', 'block')
											.html(myTmpl('request', myData));
			myCongratulationCover = $('<div>').appendTo('#cover')
											.prop('id', 'congratulation')
											.css({'display':'none', 'font-size':'20px', 'text-align':'center'})
											.html('Congratulation! Your review will be published!');											
			$('.add-reviews').unbind('click')	
						.on('click', myChangeInsets)
						.addClass('active-inset');
			$('.reviews').on('click', myChangeInsets)
						.removeClass('active-inset');
						
			$('.choice-star').on('click', myActivateStars);
		}	

		myActivateStars = function() {	
			$('.choice-star').removeClass('active-star');
			$(this).addClass('active-star'); 
			var myStars = $('.choice-star');
			for (var i = 0; i < myStars.length ; i++) { 
				if ($(myStars[i]).hasClass('active-star')) { 
					$('.choice-star:lt(' + i + ')').addClass('active-star');
					$('.choice-star:gt(' + i + ')').removeClass('active-star'); 
					return i = 0;
				}
			} 
		}
		
		myGetReviews = function(data) {	
		var currentRaiting = 0;		

			for (var l = 0; l < data.length; l++) {
				currentRaiting += data[l].raiting;
			}
//этот кусок цикла нужен на тот случай, если ревьюх меньше, чем требуется вывести на страницу. нужно вынести его в init
			if (myData.count > data.length) {  
				myData.count = data.length;		
			} 			
				
			for (var i = 0; i < myData.count; i++) {
				$('.text-feedback')[i].innerHTML = data[i].message;
				$('.from-container')[i].innerHTML = data[i].author;
				$('.date')[i].innerHTML = data[i].date;
				if (data[i].raiting > 2) { 
					$($('.comment-star')[i]).addClass('active-star');					
				}
			}
			for (var k = 0; k < Math.round(currentRaiting/data.length); k++) {
				$($('.star-container')[k]).addClass('active-star');
			}
			myTemplateCover.show(200); 
		},				
		
		myCall = function() {  
			myButton.css('display', 'none');	
			myTemplateCover.css('display', 'block'); 			
		},
		
		myClose = function() {
			myButton.css('display', 'block');	
			myTemplateCover.css('display', 'none'); 
		},
		
		myChangeInsets = function() { 
			if (!$(this).hasClass('active-inset')) {  
				$('.rev-btn').toggleClass('active-inset');
				myInnerWrapper = $('#wrapper').find('.inner-wrapper');
				for (var i = 0; i < myInnerWrapper.length; i++) { 
					if (myInnerWrapper[i].style.display === 'block') {
						myInnerWrapper[i].style.display = 'none';
					} else {
						myInnerWrapper[i].style.display = 'block';
					}
				}
				if ($(this).hasClass('reviews')) {
					myGet(this, myData);					
				}
			} 					
		}
		//настройка параметров settings
		mySettingsEvent = function() {		
			$('#reviews-cover').hide();
			$('#settings-cover').html(myTmpl('settings'));
			$('.page-title').removeClass('current-inset').on('click', myShowReviews);
			$(this).addClass('current-inset');
			$('.accordeon-header').on('click', myAccordeon); 
			$(this).unbind('click', mySettingsEvent); 
			$(this).on('click', myShowSettings); 
			$('#number-of-review-button').on('click', function() {myData.count = +$('input:checked').val()}); 			
		}
		
		myAccordeon = function() {			
			if ($(this).parent().css('height') === '17px') {
				$(this).parent().css('height', '100%') 
			} else {
				$(this).parent().css('height', '17px') 
			}
		}
		
		myShowReviews = function() { 
			$(this).addClass('current-inset');
			$('.settings').removeClass('current-inset');
			$('#reviews-cover').show();
			$('#settings-cover').hide(); 				
		}
		
		myShowSettings = function() {
			$(this).addClass('current-inset');
			$('.page-title').removeClass('current-inset');
			$('#reviews-cover').hide();
			$('#settings-cover').show(); 
		}
		
		myCallEvent = function() {
			myButton.css('display', 'none');
			myTemplateCover = $('<div>').appendTo('body')
										.prop('id', 'cover')
										.css('display','none')
										.html(myTmpl('result', myData));		
			myGet(this, myData);
			myButton.unbind('click');
			myButton.on('click', myCall);
			$('.add-reviews').on('click', myAddReviewEvent);
			$('.settings').on('click', mySettingsEvent);
		}			
		
		myButton = $('<button>').appendTo('body')
								.prop('id', 'startButton')
								.html('Get reviews')
								.on('click', myCallEvent);		
		
		if (widgetParams) { 			
			myButton.css('background-color', widgetParams.bgColor);
			myButton.css('opacity', widgetParams.bgFill);
		} 

		myTmpl = function tmpl(str, myData){ 
		var cache = {};
		var fn = !/\W/.test(str) ?
		cache[str] = cache[str] ||
        myTmpl(document.getElementById(str).innerHTML) :
      
		new Function("obj",
        "var p=[],print=function(){p.push.apply(p,arguments);};" +             
        "with(obj){p.push('" +

        str
          .replace(/[\r\t\n]/g, " ")
          .split("<%").join("\t")
          .replace(/((^|%>)[^\t]*)'/g, "$1\r")
          .replace(/\t=(.*?)%>/g, "',$1,'")
          .split("\t").join("');")
          .split("%>").join("p.push('")
          .split("\r").join("\\'")
      + "');}return p.join('');");

		return myData ? fn( myData ) : fn;
		};
		
	}; 