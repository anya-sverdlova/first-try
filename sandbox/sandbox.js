﻿
function startSandBox(){

    var byTag = ann('span');
    console.log(byTag);	

    var byClass = ann('.class1.class2');
    console.log(byClass);
	byClass[0][0].innerHTML = 'rrr';
	
	var byId = ann('#someID');
    console.log(byId); 
	
	var byTagPlusClass = ann('div.class1');
	console.log(byTagPlusClass);
	byTagPlusClass.innerHTML = 'green';
}
