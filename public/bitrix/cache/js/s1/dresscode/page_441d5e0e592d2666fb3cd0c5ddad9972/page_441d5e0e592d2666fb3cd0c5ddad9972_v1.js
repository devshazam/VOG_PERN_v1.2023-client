
; /* Start:"a:4:{s:4:"full";s:104:"/bitrix/templates/dresscode/components/bitrix/system.auth.registration/.default/script.js?16262889281044";s:6:"source";s:89:"/bitrix/templates/dresscode/components/bitrix/system.auth.registration/.default/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(function(){

	//modern mode
	"use strict";

	var authFormSubmit = function(event){

		//jquery vars
		var $form = $(this);
		var $formFields = $form.find("input").removeClass("error");
		var $userPersonalInfoReg = $form.find("#userPersonalInfoReg");

		//other
		var fieldsVerification = true;

		//check personal info
		if($userPersonalInfoReg.length !== 0 && !$userPersonalInfoReg.prop("checked")){
			$userPersonalInfoReg.addClass("error");
			fieldsVerification = false;
		}

		//verification fields
		$formFields.each(function(){

			//get jquery object for next field
			var $nextField = $(this);

			//check filling
			if($nextField.data("required") == "Y" && $nextField.val() ==""){

				//set error class
				$nextField.addClass("error");

				//set error flag
				fieldsVerification = false;

			}
		});

		//check errors
		if(fieldsVerification === false){
			return event.preventDefault();
		}

	};

	//bind
	$(document).on("submit", ".bx-auth-register-form", authFormSubmit);

});
/* End */
;; /* /bitrix/templates/dresscode/components/bitrix/system.auth.registration/.default/script.js?16262889281044*/
