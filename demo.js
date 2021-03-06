/*
#######################################################
### demo.js ###########################################
### https://github.com/mjansma/AutoComplete/demo.js ###
### Copyright 2016 M.Jansma ###########################
#######################################################
 */
$(document).ready(function(){

	$('input#autocomplete').autoComplete({
		//Min length of characters before autocomplete will be triggered
		minLength 	 : 3,
		//Path to dataset. Path will be completed with '?query='
		dataURL   	 : 'https://raw.githubusercontent.com/mjansma/AutoComplete/master/dataset.json',
		//Label which will be shown in autocomplete 
		label	  	 : 'UserName',
		//If set to false, autocomplete does not filter the datasource for you
		filter	     : true,
		//String which will be displayed in autocomplete when there is no result
		noResultText : 'No records found',
		//Callback when user clicks autocomplete item
		onselect     : function(user) {
			$('input#autocomplete').val(user.UserName);
			$('input[name=first-name]').val(user.FirstName);
			$('input[name=last-name]').val(user.LastName);
			$('input[name=user-name]').val(user.UserName);
			$('input[name=email]').val(user.EmailAddress);
		}
	});

});
