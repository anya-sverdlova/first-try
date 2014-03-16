function ann_widget(widgetParams) {

	// not used yet
	var widgetParams = {
		earPosition : "left",    // ear position
		bgColor     : "red",   // ear and widget bg color 
		bgFill      : '50%'        // widget bg fill
	}
	
	//data for ann.tmpl
	var data = { count: 3, myButton: '<button>Comment</button>', starCount: 5  };
	
	script.onload = function() {
	//create new element for ann.js
	var myParent = document.getElementsByTagName('head')[0];	
	var newScript = document.createElement('script');
	newScript.type = "text/javascript";
	newScript.src = "js/lib/ann.js";
	newScript.async = 'true';
	myParent.appendChild(newScript);
	
	//create new element for template (?)
	var newTemplate = document.createElement('script');
	newTemplate.type = "text/template";
	newTemplate.src = "myTemplate.html";
	newTemplate.async = 'true';
	myParent.appendChild(newTemplate);
	
	//create new element for css
	var newCss = document.createElement('link');
	newCss.rel = "stylesheet";
	newCss.href = "css/stylesheet_testwork.css";
	myParent.appendChild(newCss);
	
	//and this part of code doesn't work because 'ann not defined'
	/*ann('body').newElement('button').id = 'startButton';
	ann("#startButton").domElements.onclick = function()  { 
	ann('#startButton').display('none');
	console.log(ann('#result'));
	};*/
	};
};
	
		
	
