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
        console.log(arrayOfObj);
    }
    //convert that array of objects to json
    function convertToJson(arrObj)
    {
        var convert = JSON.stringify(arrObj);
        console.log(convert);
        addToCookie(convert);


    }
    //add converted json array of objects to cookie
    function addToCookie(converted)
    {
        var cook = $.cookie('tasks', converted)
        console.log(cook);

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


});