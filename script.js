$("#replyYes").click(function() {
  $("#homers-reply").text("Yes"); 
    $("body").css("background-color","red");
});
$("#replyNo").click(function() {
  $("#homers-reply").text("No");
    $("body").css("background-color","blue");
});