
$(document).ready(function()
{
  $("#btn1").click(function()
  {
if($("#t1").val()=='')
{
	alert("enter the Task ");
}
else
{


var a=$("#t1").val();
$("#t1").val('');
    $("ul").append("<li><input type='checkbox' id='check'><span class='cssd'>"+a+"</span><input type='button' id='edit' value='Edit'><input type='button' id='delete' value=Delete></li>");


$('#u').on('click', '#edit', function(){
    $(this).prev().attr('contenteditable','true').focus();
 

});
}
$('#u').on('click', '#delete',function(){
    $(this).parent().remove();
});
$('#u').on('click', '#check',function(){
    $(this).parent().appendTo("#com");
   
});
$('#com').on('click', '#check',function(){
    $(this).parent().appendTo("#u");
 
});




  });
});
