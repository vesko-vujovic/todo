$(document).ready(function(){
    var msg       = $('#danger').hide();
    var inputText = $('#todo');
    var list      = $('#list');
    var globalObj = {};

   //general function that will call other functions
   function addListElement(event)
   {
       event.preventDefault();
       var input = inputText.val();
       if( input == '')
       {
           msg.show();
       }
       else
       {
           msg.hide();
           addCookie(input);
           readCookie();
           inputText.val('');

       }

   }
    //function for adding value to cookie
    function addCookie(inputValue)
    {
        globalObj = {text: ''+ inputValue+''};
        $.cookie('vesko', '' +  globalObj.text + '');

    }
    // function for reading cookie
    function readCookie()
    {
        var listCookie = $.cookie('vesko');

        list.after('<li id="member"><input type="checkbox">' + listCookie + '<button class="delete">Delete</button></li>');
    }

<<<<<<< HEAD
   //function for deleting nodes
   
   
  
   $('#add').click(function(event){
   	 event.preventDefault();
   	 var textField = inputText.val();
     var state     = checkTextField(textField)
     
     if(!state === true)
     {   
     	addCookie(textField);
     	readCookie();
        
     }
     
   }); */

    //rewrited event for adding element
    $('#add').on('click', function(){
        event.preventDefault();
        var textField = inputText.val();
        var state     = checkTextField(textField)

        if(!state === true)
        {
            addCookie(textField);
            readCookie();

        }
    });

   //event to delete nodes
   $('.delete').on('click', function(){
       $(this).parent().remove();
   });
=======

   $(function (){
       //event for invoking a function that calls other functions
       $('#add').on('click', addListElement);
       //event for deleting a node
       $(document).on('click', '.delete', function(){
           $(this).parent().remove();
       });
       //event for deleting checked input fields
       $('#clear').on('click', function(){
          $('input:checked').parent().remove();
       });
   });
<<<<<<< HEAD
=======
  

>>>>>>> origin/master
   
   



   



>>>>>>> origin/master


});