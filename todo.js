$(document).ready(function(){
   var msg       = $('#danger').hide();
   var inputText = $('#todo');
   var list      = $('#list');
   var globalObj;

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

    function addCookie(inputValue)
    {
        globalObj = {text: ''+ inputValue+''};
        $.cookie('vesko', '' +  globalObj.text + '');

    }

    function readCookie()
    {
        var listCookie = $.cookie('vesko');

        list.after('<li><input type="checkbox">'  + listCookie  +'<button class="delete">Delete</button></li>');
    }



   $(function (){
       $('#add').on('click', addListElement);
   });

   
   



   





});