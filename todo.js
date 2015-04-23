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
        addbjectToArray(obj);
    }

    //function to add obj to array
    function addbjectToArray(obj)
    {
        arrayOfObj  = obj;
        console.log(obj);
        serializeObject(arrayOfObj);
    }

    //function to serialize object
    function serializeObject(obj)
    {
        var newSerializedObject = $.serialize(obj);
        console.log(newSerializedObject);
        addToCookieSerializedObj(newSerializedObject);
    }

    //function for adding value to cookie
    function addToCookieSerializedObj(serializedObj)
    {
        $.cookie('vesko', serializedObj);
        console.log($.cookie('vesko'));
        deserializeObj();
    }

    function deserializeObj()
    {


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