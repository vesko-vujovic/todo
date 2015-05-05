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
    //function to create object
    function createObject(input)
    {
        obj = new Object();
        obj.name = "input";
        obj.value = ''+ input +'';
        addObjectToArray(obj);
    }

    //function to push this object
    function addObjectToArray(obj)
    {
        arrayOfObj.push(obj);
        convertToJson(arrayOfObj);
    }

    //convert that array of objects to json
    function convertToJson(arrObj)
    {
        var convert = JSON.stringify(arrObj);
        addToCookie(convert);

    }

    //add converted json array of objects to cookie
    function addToCookie(converted)
    {
        var cook = $.cookie('tasks', converted)
        parseCookie();
    }

    // parse cookie with parseJSON
    function parseCookie()
    {
        var parsedCookie = $.parseJSON($.cookie('tasks'));
        readParsedCookie(parsedCookie);
    }

    //read parsed cookie
    function readParsedCookie(parsedCookie)
    {
           var lastOne = parsedCookie.pop();
           list.after('<li id="member"><input type="checkbox">' + lastOne.value + '<button class="delete">Delete</button></li>');

    }
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

    // this function will display everythig after page loads
    $(function() {
        var parse = $.parseJSON($.cookie('tasks'));
        $.each(parse, function(index, value){
           list.after('<li id="member"><input type="checkbox">' + value.value + '<button class="delete">Delete</button></li>');
        });
    });


});