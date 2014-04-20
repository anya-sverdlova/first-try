	var myData = { count: 1, myButton: '<button>Comment</button>', starCount: 5  };
	
	var myParent = document.getElementsByTagName('head')[0];	
	
	var newScript = document.createElement('script');
	newScript.type = "text/javascript";
	newScript.src = "js/lib/jquery-2.1.0.min.js";
	myParent.appendChild(newScript);	

	// var newScript2 = document.createElement('script');
	// 	newScript2.type = "text/html";
	// 	newScript2.src = "template-result.html";
	// 	newScript2.id = "result";
	// 	myParent.appendChild(newScript2);
	// 	newScript2.onload = function() {
	// 		console.log("test jquery: " + $('body'));
	// 	};

	var newCss = document.createElement('link');
	newCss.rel = "stylesheet";
	newCss.href = "css/stylesheet_testwork.css";
	myParent.appendChild(newCss);
	
	var date = new Date;
	date = date.toString().split(' ');
	
	var reviewsNumber, myReviewsArray, myPostTime, myPostName, myPostMessage, myPostReviews, myInnerWrapper, myButton, myCallEvent, myGetReviews, myTemplateCover, myTemplateCoverMini, myAddReviewEvent, myShowReviews, myGet,
  
	myWidget = function(widgetParams) {					
		
		myGet = function(data) { 
			$.get('https://api.mongolab.com/api/1/databases/first-base/collections/reviews?apiKey=fUlPVExWjzXy1yjlMzvqzi1oREPQwkwQ' )
			.done(function(data) {
				myGetReviews.call(this, data);				
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
				date: date[4].slice(0, 5) + '  ' + date[2] + ' ' + date[1] + ' ' + date[3]
				}),
				success: $('.wrapper-set').html('Congratulation! Your review will be publiced.'),
				contentType: "application/json"
			}); 
		},
		
		myGetReviews = function(data) {	
			myGet();
			reviewsNumberOnPage = data.length - myData.count; 
			if (reviewsNumberOnPage < 0) {  //почему, когда myData.count = data.length = 1, выводится все равно три блока? 
				reviewsNumberOnPage = 0;
				myData.count = data.length;
			} 
			for (var j = 0, i = reviewsNumberOnPage; i < data.length, j < myData.count; i++, j++) {	
				$('.text-feedback')[j].innerHTML = data[i].message;
				$('.from-container')[j].innerHTML = data[i].author;
				$('.blue')[j].innerHTML = data[i].date	 			
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
		
		myShowReviews = function() { 
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
		},
		
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
		}	
		//сделать так, чтобы после успешной отправки иннер хтмл содержал просто надпись "все получилось", а потом, например, через 30сек, выдавал ту же формуц
		myAddReviewEvent = function() {
			$('.wrapper-get').css('display', 'none');
			myTemplateCoverMini = $('<div>').appendTo('#wrapper')
											.prop('class', 'wrapper-set inner-wrapper')
											.css('display', 'block')
											.html(myTmpl('request', myData));	
			//$('').on();
			$('.add-reviews').unbind('click')	
						.on('click', myShowReviews)
						.addClass('active-inset');
			$('.reviews').on('click', myShowReviews)
						.removeClass('active-inset');;									
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