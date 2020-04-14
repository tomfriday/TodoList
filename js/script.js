var requestId = 0;


class Task{
    constructor(requestName,columnId)
    {
        this.requestName = requestName;
        this.columnId = columnId;
        this.requestId=requestId;
        requestId++;
        this.request;
        self=this;
        
    }

    
    makeRequest(){
        var exitButton = '<i class="fas fa-times"></i>';
        var newTaskToFill = '<li><div class="request animated zoomIn" id="'+this.requestId+'"><textarea rows="4"  class="textarea-css"></textarea></div></li>';
        var myList = $('.column#'+this.columnId).find('.content').find('ul');
        /* var iconThumbtack = '<i class="fas fa-thumbtack"></i>'; */
        myList.append(newTaskToFill);
        this.request = $('.content').find('.request#'+this.requestId);
        this.request.append(exitButton);
        

        }
    getValueFromTextArea() { 
        var textAreaValue = $(this.request).find('textarea').val();
        return textAreaValue; 
    }
    setValueFromTextAreaOnClick(){
        var self=this;
       console.log(this.request);
        $(this.request).keypress(function (e) {
            var textArea = $('.content').find('.request#'+self.requestId).find('textarea');
            if (e.which == 13) {
                textArea.replaceWith('<p>'+self.getValueFromTextArea()+'</p>');
            }
          });
        }
    editRequest(){
        
        var textValue = this.request.find('p').text();
        var self = this;
        $(this.request).dblclick(function(){
            console.log(textValue);
            self.request.find('textarea').remove();
            self.request.append('<textarea rows="4"  class="textarea-css">'+self.request.find('p').text()+'</textarea>');
            self.request.find('p').remove();
        }) 
    }
  
    deleteRequest(){
        var self=this;
        var exitButtonClick = this.request.find('.fa-times');
        exitButtonClick.click(function(){
            self.request.remove();
            console.log('lol');
        })
    }
}

$(document).ready( function(){
/*  Sortowanie  */
    $("#sort").sortable({connectWith:['.sortable,#sortable'],items: 'li', handle: $('.content'), containment: $('.trello') });
    $("#sortable").sortable({connectWith:['.sortable,#sort'],items: 'li', containment: $('.trello')});
    $(".sortable").sortable({connectWith:['#sortable,#sort'],items: 'li', containment: $('.trello')});
/*  */
    var columnToDo = $('#1').find('.column-name')
    columnToDo.append('<i class="fas fa-plus"></i>');
    var button = $('#buttonAdd');
    button.click(function()
    {
        myRequest = new Task('Marcin',1);
        myRequest.makeRequest();
        myRequest.editRequest();
        myRequest.setValueFromTextAreaOnClick();
        myRequest.deleteRequest();
    });
    
    
    }
 )


