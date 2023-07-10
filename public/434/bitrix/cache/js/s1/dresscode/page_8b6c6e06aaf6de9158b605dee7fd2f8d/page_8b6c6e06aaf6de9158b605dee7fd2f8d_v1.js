
; /* Start:"a:4:{s:4:"full";s:85:"/bitrix/components/bitrix/map.yandex.view/templates/.default/script.js?16262889181540";s:6:"source";s:70:"/bitrix/components/bitrix/map.yandex.view/templates/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
if (!window.BX_YMapAddPlacemark)
{
	window.BX_YMapAddPlacemark = function(map, arPlacemark)
	{
		if (null == map)
			return false;

		if(!arPlacemark.LAT || !arPlacemark.LON)
			return false;

		var props = {};
		if (null != arPlacemark.TEXT && arPlacemark.TEXT.length > 0)
		{
			var value_view = '';

			if (arPlacemark.TEXT.length > 0)
			{
				var rnpos = arPlacemark.TEXT.indexOf("\n");
				value_view = rnpos <= 0 ? arPlacemark.TEXT : arPlacemark.TEXT.substring(0, rnpos);
			}

			props.balloonContent = arPlacemark.TEXT.replace(/\n/g, '<br />');
			props.hintContent = value_view;
		}

		var obPlacemark = new ymaps.Placemark(
			[arPlacemark.LAT, arPlacemark.LON],
			props,
			{balloonCloseButton: true}
		);

		map.geoObjects.add(obPlacemark);

		return obPlacemark;
	}
}

if (!window.BX_YMapAddPolyline)
{
	window.BX_YMapAddPolyline = function(map, arPolyline)
	{
		if (null == map)
			return false;

		if (null != arPolyline.POINTS && arPolyline.POINTS.length > 1)
		{
			var arPoints = [];
			for (var i = 0, len = arPolyline.POINTS.length; i < len; i++)
			{
				arPoints.push([arPolyline.POINTS[i].LAT, arPolyline.POINTS[i].LON]);
			}
		}
		else
		{
			return false;
		}

		var obParams = {clickable: true};
		if (null != arPolyline.STYLE)
		{
			obParams.strokeColor = arPolyline.STYLE.strokeColor;
			obParams.strokeWidth = arPolyline.STYLE.strokeWidth;
		}
		var obPolyline = new ymaps.Polyline(
			arPoints, {balloonContent: arPolyline.TITLE}, obParams
		);

		map.geoObjects.add(obPolyline);

		return obPolyline;
	}
}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:97:"/bitrix/templates/dresscode/components/bitrix/form.result.new/twoColumns/script.js?16262889283758";s:6:"source";s:82:"/bitrix/templates/dresscode/components/bitrix/form.result.new/twoColumns/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(function(){

	var sendWebForm = function(event, data){

		var requiredErrorPosition = false;
		var requiredError = false;

		var $thisForm = $(this).addClass("loading");
		var $parentThis = $thisForm.parents(".webFormDw");
		var $thisFormFields = $thisForm.find(".webFormItemField");
		var $thisFormErrors = $thisForm.find(".webFormItemError");
		var $submitButton = $thisForm.find('input[type="submit"]').addClass("loading");
		var $webFormError = $thisForm.find(".webFormError");
		var $webFormCaptchaSid = $thisForm.find(".webFormCaptchaSid");
		var $webFormCaptchaImage = $thisForm.find(".webFormCaptchaImage");

		var formId = $parentThis.data("id");

		$thisFormFields.each(function(i, nextField){

			var $nextField = $(nextField);
			if($nextField.data("required") == "Y"){
				var $nextFieldEx = $nextField.find('input[type="text"], input[type="password"], input[type="file"], select, textarea');
				if($nextFieldEx.attr("name")){
					if(!$nextFieldEx.val() || $nextFieldEx.val().length == 0){
						$nextFieldEx.addClass("error");
						if(!requiredError){
							requiredErrorPosition = $nextFieldEx.offset().top;
							requiredError = true;
						}
					}
				}

			}
		});

		//get form data
		var formData = new FormData(this);

		//set control
		formData.append("control", Math.floor((new Date()).getTime() / 1000));

		var $personalInfo = $thisForm.find("#personalInfoFieldStatic");
		if(!$personalInfo.prop("checked")){
			$personalInfo.addClass("error");
			requiredError = true;
		}

		//check errors
		if(requiredError == false){
	  		$.ajax({
	  			url: webFormAjaxDir + "?FORM_ID=" + formId + "&SITE_ID=" + webFormSiteId,
	  			data: formData,
			    cache: false,
		        contentType: false,
		        processData: false,
		        enctype: "multipart/form-data",
		        type: "POST" ,
		        dataType: "json",
	  			success: function(response){

	  				//remove error labels
	  				$thisFormErrors.empty().removeClass("visible");
	  				$webFormError.empty().removeClass("visible");

		  			if(response["SUCCESS"] != "Y"){

			  			//set errors
			  			$.each(response["ERROR"], function(nextId, nextValue){
			  				var $errorItemContainer = $("#WEB_FORM_ITEM_" + nextId);
			  				if(nextId != 0 && $errorItemContainer){
			  					$errorItemContainer.find(".webFormItemError").html(nextValue).addClass("visible");
			  				}else{
			  					$webFormError.append(nextValue).addClass("visible");
			  				}
			  			});

			  			// reload captcha
			  			if(response["CAPTCHA"]){
							$webFormCaptchaSid.val(response["CAPTCHA"]["CODE"]);
							$webFormCaptchaImage.attr("src", response["CAPTCHA"]["PICTURE"]);
						}

					}else{
						$("#webFormMessage_" + formId).css({
							display: "block"
						});
						$thisForm[0].reset();
					}

		  			//remove loader
		  			$thisForm.removeClass("loading");
		  			$submitButton.removeClass("loading");

		  		}

	  		});
	  	}else{
	  		
	  		if(requiredErrorPosition){
	  			$("html, body").animate({
	  				"scrollTop": requiredErrorPosition - $(window).height() / 2
	  			}, 250);
	  		}

	  		$thisForm.removeClass("loading");
	  		$submitButton.removeClass("loading");
	  	}

		return event.preventDefault();

	}

	var removeErrors = function(event){
		$(this).removeClass("error");
	};

	var webFormExit = function(event){
		$(".webFormMessage").hide();
		return event.preventDefault();
	}

	$(document).on("focus", ".webFormItemField input, .webFormItemField select, .webFormItemField textarea", removeErrors);
	$(document).on("click", ".webFormMessageExit", webFormExit);
	$(document).on("submit", ".webFormDw form", sendWebForm);

});
/* End */
;; /* /bitrix/components/bitrix/map.yandex.view/templates/.default/script.js?16262889181540*/
; /* /bitrix/templates/dresscode/components/bitrix/form.result.new/twoColumns/script.js?16262889283758*/
