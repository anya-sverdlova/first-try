	var data = { count: 3, myButton: '<button>Comment</button>', starCount: 5  };
	
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
	
	var myPostTime, myPostName, myPostMessage, myPostReviews, myInnerWrapper, myButton, myCallEvent, myGetReviews, myTemplateCover, myTemplateCoverMini, myAddReviewEvent, myShowReviews, myGet,
  
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
			/*$.post("https://api.mongolab.com/api/1/databases/first-base/collections/reviews?apiKey=fUlPVExWjzXy1yjlMzvqzi1oREPQwkwQ",
				JSON.stringify({
				message : $('.review-input').val(),
				author : $('.name-input').val(), 
				date: myDMYDate.join('.') + ' ' + nowDate.toString().split(' ')[4]
				}));*/			
			$.ajax({
				type: "POST",
				url: "https://api.mongolab.com/api/1/databases/first-base/collections/reviews?apiKey=fUlPVExWjzXy1yjlMzvqzi1oREPQwkwQ",
				data: JSON.stringify({
				message : $('.review-input').val(),
				author : $('.name-input').val(), 
				date: myDMYDate.join('.') + ' ' + nowDate.toString().split(' ')[4]
				}),
				success: console.log('success'),
				contentType: "application/json"
			});
		},
		
		myGetReviews = function(data) {
			for (var i = 0; i < data.length; i++) {
				$('.text-feedback')[i].innerHTML = data[i].message;
				$('.from-container')[i].innerHTML = data[i].author;
				$('.blue')[i].innerHTML = myDMYDate.join('.') + ' ' + nowDate.toString().split(' ')[4];
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
			} 					
		},
		
		myCallEvent = function() {
			myButton.css('display', 'none');
			myTemplateCover = $('<div>').appendTo('body')
										.prop('id', 'cover')
										.css('display','none')
										.html(myTmpl('result', data));						 
			myGet(this, data);
			myButton.unbind('click');
			myButton.on('click', myCall);
			$('.add-reviews').on('click', myAddReviewEvent);			
		}	
		
		myAddReviewEvent = function() {
			$('.wrapper-get').css('display', 'none');
			myTemplateCoverMini = $('<div>').appendTo('#wrapper')
											.prop('class', 'wrapper-set inner-wrapper')
											.css('display', 'block')
											.html(myTmpl('request', data));	
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

		myTmpl = function tmpl(str, data){ 
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

		return data ? fn( data ) : fn;
		};
		
		//get date
	var myAllDate;
	var myDMYDate = [];	
	var nowDate = new Date();
	var myGetDate = function(nowDate) {	
	myDMYDate.push(nowDate.getDate());
	myDMYDate.push(nowDate.getMonth());
	myDMYDate.push((nowDate.getFullYear() - 2000));
	for (var i = 0; i < myDMYDate.length; i++) {
		if (myDMYDate[i] < 10) {
			myDMYDate[i] = '0' + myDMYDate[i].toString();
		} else {
			myDMYDate[i] = myDMYDate[i].toString();
			}
	}		
	return myDMYDate.join('.');	
	}
	myGetDate(nowDate);	
	}; 