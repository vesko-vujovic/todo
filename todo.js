$(document).ready(function(){
   var msg     = $('#danger').hide();
   var inputText = $('#todo');
   var list      = $('#list');
   var globalObj;

   // function for check is field empty
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
   
   // function to add cookie
   function addCookie(inputValue)
   {   
   	   globalObj = {text: ''+ inputValue+''};
   	   $.cookie('vesko', '' +  globalObj.text + '');

   }

   // function to list data from object-cookie

   function readCookie()
   { 
   	 var listCookie = $.cookie('vesko');

   	 list.after('<li>' + listCookie + '</li>');   

   }
   
   //function for deleting a node
   function deleteElement()
   {

   }


 

    
   //event  function to add task 
   $('#add').click(function(event){
   	 event.preventDefault();
   	 var textField = inputText.val();
     var state     = checkTextField(textField)
     
     if(!state === true)
     {   
     	addCookie(textField);
     	readCookie();
        
     }
     
   });

   





});