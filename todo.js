$(document).ready(function(){
   var msg     = $('#danger').hide();
   var inputText = $('#todo');
   var globalObj = {};


   function checkTextField(input)
   { 
     if(input == '')
     {
     	msg.show();
     	return true;
     }
     else
     {
     	msg.hide();
     	return false;
     }	


   }
    
   //function to add task 
   $('#add').click(function(event){
   	 event.preventDefault();
   	 var textField = inputText.val();
     var state     = checkTextField(textField)

     if(!state === true)
     {
     	 globalObj     = {text: ''+ textField +'', completed: false};   
     	 $.cookie("tasks", globalObj, {expires: 1});
     	 $.each($.cookie("tasks"), function(index, value) {
     		$('#list').after('<li>' + value.tasks + '<button id="del" class="btn btn-default">delete </button>' + '</li>');
     	}); 
     }
     
   });

   //function to delete single task





});