
; /* Start:"a:4:{s:4:"full";s:88:"/local/templates/.default/components/dresscode/catalog/.default/script.js?16262889281128";s:6:"source";s:73:"/local/templates/.default/components/dresscode/catalog/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(function(){

	//vars
	var openSmartFilterFlag = false;

	//functions
	var openSmartFilter = function(event){

		// smartFilter block adaptive toggle
		if(!openSmartFilterFlag){
			$("#smartFilter").addClass("opened").css('marginTop', ($('.oSmartFilter').offset().top - $('#nextSection').offset().top - $('#nextSection').height() +25));
			openSmartFilterFlag = true;
		}

		else{
			$("#smartFilter").removeClass("opened").removeAttr("style");
			openSmartFilterFlag = false;
		}

		return event.preventDefault();
	};

	var closeSmartFilter = function(event){
		if(openSmartFilterFlag){
			$("#smartFilter").removeClass("opened");
			openSmartFilterFlag = false;
		}
	};

	function appendToUrl(url, param){

		//check args
		if(typeof url != "undefined" && url != ""){
			//push
			url = url + url.indexOf("?") != "-1" ? "&" : "?" + param;
		}

		return url;

	}

	//binds
	$(document).on("click", ".oSmartFilter", openSmartFilter);
    $(document).on("click", "#smartFilter, .oSmartFilter, .rangeSlider", function(event){
    	return event.stopImmediatePropagation();
    });

	$(document).on("click", closeSmartFilter);

});
/* End */
;; /* /local/templates/.default/components/dresscode/catalog/.default/script.js?16262889281128*/
