var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
    'X-Client-Id': '2989',
    'X-Auth-Token': '74f2696f134cc86cf93f291c02c2085e'
};


var board = {
	name: 'Tablica Kanban',
	createColumn: function(column) {
	  this.element.append(column.element);
	  initSortable();
	},
	element: $('#board .column-container')
};
$('.create-column').click(function() {
    var columnName = prompt('Enter a new column name');
    board.createColumn(new Column(columnName));
});


$('.create-column')
	.click(function(){
		var columnName = prompt('Enter a column name');
        $.ajax({
            url: baseUrl + '/column',
            method: 'POST',
            data: {
                name: columnName
            },
            success: function(response) {
                var Column = new Column (response.id, columnName);
                board.createColumn(column);
            }
        });
	});
	
function initSortable() {
    $('.card-list').sortable({
      connectWith: '.card-list',
      placeholder: 'card-placeholder'
    }).disableSelection();
  }