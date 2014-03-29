
	var data = { count: 3, myButton: '<button>Comment</button>', starCount: 5  };
	
	var myParent = document.getElementsByTagName('head')[0];	
	var newScript = document.createElement('script');
	newScript.type = "text/javascript";
	newScript.src = "https://raw.githubusercontent.com/anya-sverdlova/first-try/widget/js/lib/ann.js";
	myParent.appendChild(newScript);	
	
	var newCss = document.createElement('link');
	newCss.rel = "stylesheet";
	newCss.href = "css/stylesheet_testwork.css";
	myParent.appendChild(newCss);

	var myTemplateCover;
	
	var ann_widget = function(widgetParams){ 
		return new ann_widget.Object(widgetParams);
		};		
		
	ann_widget.Object = function(widgetParams) {
		myButton = ann('body').newElement('button');
		myButton.id = 'startButton';
		myButton.innerHTML = 'Get reviews';
		myTemplateCover = ann('body').newElement('div');
		myTemplateCover.id = ('cover');
		myTemplateCover.innerHTML = ann.tmpl('result', data);
		ann('#cover').display('none');
		if (widgetParams) {
			myButton.style.backgroundColor = widgetParams.bgColor;
			myButton.style.opacity = widgetParams.bgFill;
		} else {
			myButton.style.backgroundColor = 'blue';
			myButton.style.opacity = '1';
		}			
	}; 
	
	ann_widget.Object.prototype = {
		myCall: function() {
			myButton.onclick = function(){ 
			ann('#startButton').display('none'); 
			ann('#cover').display('block');			
			};
		}
	};

	function myClose() {
		ann('#cover').display('none');
		ann('#startButton').display('block');
	}
	
	function myAddReview() {
		ann('#wrapper').inside(ann.tmpl('request', data));
	}
	
	function myShowReviews() {
		ann('#cover').inside(ann.tmpl('result', data));
	}
	