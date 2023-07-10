
; /* Start:"a:4:{s:4:"full";s:111:"/bitrix/templates/dresscode/components/bitrix/news/.default/bitrix/news.detail/.default/script.js?1626288928269";s:6:"source";s:97:"/bitrix/templates/dresscode/components/bitrix/news/.default/bitrix/news.detail/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(window).on('load', function() {
	$('.banner-animated').addClass('banner-image-load');
});

$(function(){
	var openCommentForm = function(event){
		$(".form-with-comments").click();
	}
	$(document).on("click", ".open-form-with-comments", openCommentForm);
});
/* End */
;; /* /bitrix/templates/dresscode/components/bitrix/news/.default/bitrix/news.detail/.default/script.js?1626288928269*/
