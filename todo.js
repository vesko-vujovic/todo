$(document).ready(function(){
    var msg        = $('#danger').hide();
    var inputText  = $('#todo');
    var list       = $('#list');
    var arrayOfObj = [];
    var obj;

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
           createObject(input);
           inputText.val('');
       }
   }
    //function for creating object
    function createObject(input)
    {
        obj = new Object();
        obj.text = ''+ input +'';
        serializeObject(obj);
    }
    //function to add obj to array and serialize
    function addbjectToArray(obj)
    {
        arrayOfObj  = obj;

    }
    //function to serialize object
    function


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

});