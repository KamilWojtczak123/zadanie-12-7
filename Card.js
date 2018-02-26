var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
    'X-Client-Id': '2989',
    'X-Auth-Token': '74f2696f134cc86cf93f291c02c2085e'
};

// KLASA KANBAN CARD
function Card(id, name) {
	var self = this;
	
	this.id;
	this.name = name || 'No name given';
	this.element = createCard();

	function createCard() {
		var card = $('<li class="card"></li>');
		var cardDeleteBtn = $('<button class="btn-delete">x</button>');
		var cardDescription = $('<p class="card-description"></p>');
		
		cardDeleteBtn.click(function(){
			self.removeCard();
		});
        }
		card.append(cardDeleteBtn);
		cardDescription.text(self.name);
		card.append(cardDescription)
		return card;
        }
Card.prototype = {
	removeCard: function() {
        var self = this;
            $.ajax({
                url: baseUrl + '/card/' + self.id,
                method: 'DELETE',
                success: function() {
                    self.$element.remove();
                }
	});
}
}
