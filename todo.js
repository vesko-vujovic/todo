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
        addobjectToArray(obj);

    }
    //function to add obj to array
    function addobjectToArray(obj)
    {
        arrayOfObj.push(obj);
        convertToJson(arrayOfObj);

    }
    // convert to JSON this string
    function convertToJson(obj)
    {
        var converted = JSON.stringify(obj);
        addToCookie(converted);

    }

    //add to cookie
    function addToCookie(obj)
    {
        var cookie = $.cookie('vesko',obj);
        parseJsonFromCookie(cookie);
    }

    //parse value from cookie
    function parseJsonFromCookie(cookie)
    {
        var parsedJson = $.parseJSON(cookie);
        printEverything(parsedJson);

    }
    //function to print everything
    function printEverything(parsedJson)
    {
        

    }




    // function for reading cookie
    function readDeserialized(deserialized)
    {
        var listValues = deserialized;
        list.after('<li id="member"><input type="checkbox">' + listValues.input.replace(/['+']/g,"&nbsp") + '<button class="delete">Delete</button></li>');

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

    $(function() {
       parseJsonFromCookie();
    });

});