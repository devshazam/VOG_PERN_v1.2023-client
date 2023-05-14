
; /* Start:"a:4:{s:4:"full";s:92:"/bitrix/templates/dresscode/components/dresscode/slider/promoSlider/js/init.js?1626288928418";s:6:"source";s:78:"/bitrix/templates/dresscode/components/dresscode/slider/promoSlider/js/init.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(function() {

	$("#slider").dwSlider({
		afterResize: setSliderHeight, // callback
		afterLoad: setSliderHeight, // callback
		timeLine: false,
		responsive: true,
		delay: 5000,
		speed: 1000
	});

	//callBack functions
	function setSliderHeight(link) {

		function setHeight() {
			return false;
		}

		setHeight();

	}

	//
	$("#slider .sliderContent").removeClass("loading").show();

});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:97:"/bitrix/templates/dresscode/components/dresscode/offers.product/.default/script.js?16262889282287";s:6:"source";s:82:"/bitrix/templates/dresscode/components/dresscode/offers.product/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(function(){

	var mainElementID = "#homeCatalog"; //--\\
	var $self = $(mainElementID);
	var httpLock = false;

	var getProductByGroup = function(event){
		if(httpLock == false){
			if(offersProductParams != ""){

				var $this = $(this);
				var $parentThis = $this.parent();

				var page = $this.data("page");
				var groupID = $this.data("group");
				var changeSheet = $this.data("sheet");


				if($parentThis.hasClass("selected") && changeSheet != "Y"){
					return false;
				}

				if(changeSheet != "Y"){
					var $captionEL = $self.find(".caption")
										.removeClass("selected");

				}

				var $ajaxContainer = $self.find(".ajaxContainer")
												.addClass("loading");

				$parentThis
					.addClass("loading");

				$this.data("sheet", "N");	// clear status

				if(parseInt(groupID, 10) > 0 || groupID == "all"){

					httpLock = true;

					var sendDataObj = {
						params: offersProductParams,
						siteId: offersSiteId,
						groupID: groupID,
						page: page
					}

					var jqxhr = $.get(ajaxDir + "/ajax.php", sendDataObj, function(http) {
						if(http){

							$ajaxContainer.html(http)
								.removeClass("loading");

							$parentThis
								.removeClass("loading");

							if(changeSheet != "Y"){
								$this.parents(".caption")
									.addClass("selected");
							}
							httpLock = false;
							//addCart button reload
							changeAddCartButton(basketProductsNow);
							//subscribe button reload
							subscribeOnline();
							checkLazyItems();
						}
					});

				}else{
					console.error("check data group (data.group not found)");
				}

			}else{
				console.error("var type (json) not found (name offersProductParams)");
			}
		}
		return event.preventDefault();

	};

	var getProductNextPage = function(event){

		var $activeGroup = $self.find(".caption.selected a");
		var currentPage = parseInt($activeGroup.data("page"), 10);

		$activeGroup.data({
			"page": currentPage + 1,
			"sheet": "Y"
		});

		$activeGroup.trigger("click");

		return event.preventDefault();
	
	}

	$(document).on("click", ".getProductByGroup", getProductByGroup);
	$(document).on("click", ".product .showMore", getProductNextPage);

});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:93:"/bitrix/templates/dresscode/components/dresscode/pop.section/.default/script.js?1626288928604";s:6:"source";s:79:"/bitrix/templates/dresscode/components/dresscode/pop.section/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(function(){

	var getNextPage = function(event){

		var $self =  $("#popSection");
		var page = $self.data("page") + 1;


		var $ajaxContainer = $self.find(".ajaxContainer")
										.addClass("loading");

		var sendDataObj = {
			params: popSectionParams,
			page: page
		}

		var jqxhr = $.get(ajaxDirPopSection + "/ajax.php", sendDataObj, function(http){
			if(http){
				$ajaxContainer.html(http)
					.removeClass("loading");

				$self.data("page", page);
				checkLazyItems();
			}
		});

		return event.preventDefault();
	};

	$(document).on("click", "#popSection .showMore", getNextPage);
});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:87:"/bitrix/templates/dresscode/components/dresscode/slider/middle/js/init.js?1626288928172";s:6:"source";s:73:"/bitrix/templates/dresscode/components/dresscode/slider/middle/js/init.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(function() {

	$("#middleSlider").dwSlider({
       rightButton: ".middleSliderBtnRight",
       leftButton: ".middleSliderBtnLeft",
		delay: 4000,
		speed: 800
	});

});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:93:"/bitrix/templates/dresscode/components/dresscode/brands.list/.default/script.js?1626288928605";s:6:"source";s:79:"/bitrix/templates/dresscode/components/dresscode/brands.list/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(function(){

	var getNextPage = function(event){
		
		var $self =  $("#brandList");
		var page = $self.data("page") + 1;			


		var $ajaxContainer = $self.find(".ajaxContainer")
										.addClass("loading");

		var sendDataObj = {
			params: brandListParams,
			page: page
		}

		var jqxhr = $.get(ajaxDirBrandList + "/ajax.php", sendDataObj, function(http){
			if(http){
				$ajaxContainer.html(http)
					.removeClass("loading");

				$self.data("page", page);
				checkLazyItems();
			}
		});

		return event.preventDefault();
	};

	$(document).on("click", "#brandList .showMore", getNextPage);
});
/* End */
;; /* /bitrix/templates/dresscode/components/dresscode/slider/promoSlider/js/init.js?1626288928418*/
; /* /bitrix/templates/dresscode/components/dresscode/offers.product/.default/script.js?16262889282287*/
; /* /bitrix/templates/dresscode/components/dresscode/pop.section/.default/script.js?1626288928604*/
; /* /bitrix/templates/dresscode/components/dresscode/slider/middle/js/init.js?1626288928172*/
; /* /bitrix/templates/dresscode/components/dresscode/brands.list/.default/script.js?1626288928605*/
