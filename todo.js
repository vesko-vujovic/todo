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
           console.log(arrayOfObj);
       }
   }
    //call creation of object
    function createObject(input)
    {
      obj = new templateObject(input);
      addbjectToArray(obj);
      console.log(obj);
    }

    //function for creating object
    function templateObject(input)
    {
        this.text = ''+ input + '';
    }

    //function to add obj to array
    function addbjectToArray(obj)
    {
        arrayOfObj = obj;
        serializeObject(arrayOfObj);
    }

    //function to serialize object
    function serializeObject(obj)
    {
        var newSerializedObject = $.param(obj);
        addToCookieSerializedObj(newSerializedObject);
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
        var deserialized = $.deserialize($.cookie('vesko'))
        readDeserialized(deserialized);
    }

    // function for reading cookie
    function readDeserialized(deserialized)
    {
        var listValues = deserialized;

        list.after('<li id="member"><input type="checkbox">' + listValues.text + '<button class="delete">Delete</button></li>');
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

       $(window).bind(function(){
           alert('do yu realy want to leave');
       });
   });

});