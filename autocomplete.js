/*
###############################################################
### autocomplete.js ###########################################
### https://github.com/mjansma/AutoComplete/autocomplete.js ###
### Copyright 2016 M.Jansma ###################################
###############################################################
 */
$.fn.autoComplete = function(config) {
	//Add dropdown menu to parent div
	var list = $('<ul />').attr('class', 'dropdown-menu').attr('role', 'listbox').attr('style', 'overflow-x:hidden;max-height:200px');
	$(this).closest('div').append(list);

	$(this).keyup(function(){
		//Character length needs to be higher or equal to min length 
		var searchValue = $(this).val().toLowerCase();
		if(searchValue.length < config.minLength) {
			return console.log('Not enough characters set');
		}
		//Get resultset bij query
		$.getJSON(config.dataURL + '?query=' + searchValue, function(data){
			//Data is empty
			list.empty();
			if(!data.length) {
				return list.append($('<li />').html(config.noResultText));
			};
			//Add records to dropdown
			data.forEach(function(record){
				if(config.filter && record[config.label].toLowerCase().indexOf(searchValue) != -1 || !config.filter) {
					listitem = $('<li />').append($('<a />').attr('role', 'option').attr('href', '#').html(record[config.label]));
					list.append(listitem);
					list.show();
					listitem.click(function(){
						config.onselect(record, listitem);
						list.empty();
						list.hide();
					});
				};
			});
		});
	});

};
