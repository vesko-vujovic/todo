$(document).ready(function(){
   var msg       = $('#danger').hide();
   var inputText = $('#todo');
   //var list      = $('#list');
   var globalObj;

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

        $('#list').append('<li><input type="checkbox">' + listCookie + '<button class="delete">Delete</button></li>');
    }



   $(function (){
       $('#add').on('click', addListElement);
       $('.delete').on('click', function(){
         $('.delete').parent().remove();
       });
   });

   
   



   





});