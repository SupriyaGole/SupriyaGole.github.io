$(document).ready(function(){
  $('#myComment').click(function(){
    window.location.href = "comments.html";
  });

  $('#postComment').click(function(){
    var enteredComment = $('#comment').val();
    alert(enteredComment);
  })
});
