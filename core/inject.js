
/*
	Специальный хак для подключения скрипта стикеров
	что бы корректно работать с контентом
*/
// var s = document.createElement('script');
// s.src = chrome.extension.getURL('core/vk.js');
// s.src += '?r=' + Math.floor(Math.random() * 999999000);
// s.charset = "utf-8";
// s.onload = function() {
//     this.remove();
// };
// (document.head || document.documentElement).appendChild(s);



$(document).ready(function(){
	var injectScript = function(id, src){
		!function() {
			var e = document.createElement("script"),
				t = document.getElementsByTagName("script")[0];
				e.id = id,
				e.charset = "utf-8",
				e.src = chrome.extension.getURL(src),
				t.parentNode.insertBefore(e, t)
		}();
	};

	injectScript('jquery', 'core/jquery.js');
	injectScript('vk_stick', 'core/vk.js');

});
