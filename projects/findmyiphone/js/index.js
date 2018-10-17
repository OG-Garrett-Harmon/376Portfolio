 
//use the POWER jquery to...
$(document).ready(function() {
  
    $('.alert-msg').hide(); 
   
  var alert = "<b>Catastrophic Failure!</b> Toss phone in the river.";
  var caution = "<b>Session Expired.</b> Please Login."
  var info = "<b>Info:</b> Someting happening..Update acc't maybe.";
  var success = "<b>Hooray!</b> All systems go!"; 
  
  function displayAlertMsg(msg) {
    
    $('.alert-msg')
      .addClass(msg)
      .html(msg)
      //.delay(2000)
      .slideDown(500)
      .hide(4200);
  }
  
displayAlertMsg('caution');
  
  //is pwd have value? 
  //turn on button
  input = $("input[type=text]");
 pwinput = $("input[type=password]")
  button = $("button");
  
 toggleButton(); 
  
  
  input.keypress(toggleButton).keyup(toggleButton);
    pwinput.keypress(toggleButton).keyup(toggleButton);
  
  function toggleButton() {
    
 
    len = input.val().length;
    len2 = pwinput.val().length;

    if (len && len2 != 0) {
    button.text("Sign in...");
     button.removeAttr("disabled");
     button.addClass('activeButton'); 
      
    } 
    else {
       button.attr("disabled", "disabled");
       button.text("Sign in...");
       button.removeClass('activeButton'); 
    }
  };
  
});