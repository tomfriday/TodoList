var requestId = 0;

class Task{
    constructor(requestName,columnId)
    {
        this.requestName = requestName;
        this.columnId = columnId;
        this.requestId=requestId;
        requestId++;
    }    
    makeRequest(){
        var newTaskToFill = '<li><div class="request animated zoomIn" id="'+this.requestId+'"><textarea rows="4"  class="textarea-css"></textarea></div></li>';
        var myList = $('.column#'+this.columnId).find('.content').find('ul');
        var iconThumbtack = '<i class="fas fa-thumbtack"></i>';
         
        myList.append(newTaskToFill);
         $('.request').append(iconThumbtack);
        }
    getValueFromTextArea() { 
        var textAreaValue = $('.content').find('.request#'+this.requestId).find('textarea').val();
        return textAreaValue; 
    }
    setValueFromTextAreaOnClick(){
        var self=this;
        var textArea = $('.content').find('.request#'+this.requestId).find('textarea');
        
        $(textArea).keypress(function (e) {
            if (e.which == 13) {
                textArea.replaceWith(self.getValueFromTextArea());
            }
          });
        }
    deleteRequest(){
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
        console.log(myRequest);
        myRequest.setValueFromTextAreaOnClick();
    });
    
    }
 )


