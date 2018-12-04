$(function(){
  $('#console-box').append('console is ready...');
  
  $('div').click(function(){
    $('#console-box').append('<br>class:'+$(this).attr("class")+'|value:'+$(this).text()+'.');
    $(this).toggleClass('selected').siblings().removeClass('selected');
 ;
  });
  
});