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
   	   globalObj = '{"name":"John Johnson","street":"Oslo West 16","phone":"555 1234567"}';


   	   $.cookie("vesko", parsedObj);

   }


   // function to list data from object-cookie

   function readCookie()
   { 
   	 var listCookie = $.cookie("vesko");
   	 var obj        = $.parseJSON(''+ listCookie +'');

    $.each(obj, function (index, value){
   		list.after('<li>'+ value + '</li>');

   	});


   }


   //function to delete tasks

    
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