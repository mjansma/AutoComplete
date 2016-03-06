# AutoComplete
jQuery Bootstrap AutoComplete library for input field search

//Min length of characters before autocomplete will be triggered
minLength : 3,
//Path to dataset. Path will be completed with '?query='
dataURL : 'https://raw.githubusercontent.com/mjansma/AutoComplete/master/dataset.json',
//Label which will be shown in autocomplete 
label : 'UserName'
//If set to false, autocomplete does not filter the datasource for you
filter	: true
//String which will be displayed in autocomplete when there is no result
noResultText : 'No records found'
//Callback when user clicks autocomplete item
onselect : function(user);

For more info see demo.js
