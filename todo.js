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
        console.log()
        addobjectToArray(obj);

    }
    //function to add obj to array
    function addobjectToArray(obj)
    {
        arrayOfObj.push(obj);
        serializeObject(arrayOfObj);
    }

    //function to serialize object
    function serializeObject(arrObj)
    {
        var serializedObject = $.param(arrObj);
        addToCookieSerializedObj(serializedObject);

    }

    //function for adding value to cookie
    function addToCookieSerializedObj(serializedObj)
    {
        $.cookie('vesko', serializedObj);
        deserializeObj();
    }

    // function to deserialize object
    function deserializeObj()
    {
        var des = $.deserialize($.cookie('vesko'));
        //i need this cookie for later
        $.cookie('after',des.input);
        readDeserialized(des);

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

        $.each($.cookie('after'), function(index, value){
            console.log(value);
        })

    });

});