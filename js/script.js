var requestId = 0;


class Task {
	constructor(requestName, columnId) {
		this.requestName = requestName;
		this.columnId = columnId;
		this.requestId = requestId;
		requestId++;
		this.request;
    self = this;
    
	}

	makeRequest() {
		var exitButton = '<i class="fas fa-times"></i>';
		var newTaskToFill =
			'<li><div class="request animated zoomIn" id="' +
			this.requestId +
			'"><textarea rows="4"  class="textarea-css" placeholder="Type description of your task..."></textarea></div></li>';
		var myList = $('.column#' + this.columnId).find('.content').find('ul');
		/* var iconThumbtack = '<i class="fas fa-thumbtack"></i>'; */
		myList.append(newTaskToFill);
    this.request = $('.content').find('.request#' + this.requestId);
    console.log(this.request);
		this.request.append(exitButton);
		this.request.append(dateOutput);
	}
	getValueFromTextArea() {
		var textAreaValue = $(this.request).find('textarea').val();
		return textAreaValue;
	}
	setValueFromTextAreaOnClick() {
		var self = this;
		console.log(this.request);
		$(this.request).keypress(function(e) {
			var textArea = $('.content').find('.request#' + self.requestId).find('textarea');
			if (e.which == 13) {
				textArea.replaceWith('<p class="text">' + self.getValueFromTextArea() + '</p>');
			}
		});
	}
	editRequest() {
    var textValue;
		var self = this;
		$(this.request).dblclick(function() {
      textValue = self.request.find('.text').text();
			console.log(textValue);
      self.request.find('textarea').remove();
      self.request.find('.date').remove();
			self.request.append(
        '<textarea rows="4"  placeholder="Type description of your task..." class="textarea-css">' + textValue + '</textarea>'
      );
    self.request.find('.text').remove();
    self.request.append(dateOutput);
      
		});
	}

	deleteRequest() {
		var self = this;
		var exitButtonClick = this.request.find('.fa-times');
		exitButtonClick.click(function() {
			self.request.addClass('animated zoomOut');
			setTimeout(function() {
				self.request.remove();
			}, 500);
			console.log('lol');
		});
	}
}

$(document).ready(function() {
	/* Preload */
	$('.trello').hide();
	setTimeout(() => {
		$('.preloader-wrapper').hide();
		$('.trello').show();
		$('.trello').addClass('animated fadeIn');
	}, 4000);
	/*  Sortowanie  */
	$('#sort').sortable({
		connectWith: [ '.sortable,#sortable' ],
		items: 'li',
		handle: $('.content'),
		containment: $('.trello')
	});
	$('#sortable').sortable({
		connectWith: [ '.sortable,#sort' ],
		items: 'li',
		containment: $('.trello')
	});
	$('.sortable').sortable({
		connectWith: [ '#sortable,#sort' ],
		items: 'li',
		containment: $('.trello')
	});
	/*  */
	var columnToDo = $('#1').find('.column-name');
	columnToDo.append('<div class="fas fa-plus"></div>');
	var plusButton = $('.fa-plus');
	plusButton.click(function() {
		myRequest = new Task('Marcin', 1);
		myRequest.makeRequest();
		myRequest.editRequest();
		myRequest.setValueFromTextAreaOnClick();
		myRequest.deleteRequest();
	});
});
