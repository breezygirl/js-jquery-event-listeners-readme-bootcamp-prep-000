//define functions here
function getIt(){
  $('p').on('click', function(){
  alert("Hey!");
  })
}

function frameIt(){
 $('img').on('load', function(){
  //actions you want to happen
  $('img').addClass('tasty')
}); 

}

function submitIt(){
  $('form').on(submit, function(){
  
 alert("Your form is going to be submitted now.");
  })
}
$(document).ready(function(){

// call functions here

});
