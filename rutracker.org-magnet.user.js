// ==UserScript==
// @id             rutracker.org-magnet
// @name           rutracker.org magnet
// @version        1.0
// @author         alezhu
// @description    Добавляет на страницу с раздачей magnet-ссылку (там где хэш)
// @include        http://*.rutracker.org/* 
// @include        https://*.rutracker.org/*
// @include        http://rutracker.org/* 
// @include        https://rutracker.org/*
// @match          *://rutracker.org/*   
// @match          *://*.rutracker.org/*   
// ==/UserScript==
(function(){
	var LOG = 0;
	var PREFIX = 'T2M';
	if(window.parent == window ){	

		window.addEventListener("DOMContentLoaded", function(){
			if(LOG)console.log(PREFIX + ": Loaded. " + window.location.href);
			// debugger
			var span = window.document.getElementById('tor-hash');
			if(span){
				var a = window.document.createElement('A');
				a.href = 'magnet:?xt=urn:btih:' + span.innerText;
				a.innerText = span.innerText;
				span.innerText = '';
				span.appendChild(a);			
			}
		}, false);
	}
})();
