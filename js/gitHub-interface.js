var User = require('./../js/gitHub.js').userModule;

var displayUserData = function(username, login)
{
  $(".showUser").text(username + "'s login is " + login  + ".");
}

$(document).ready(function() {
  var currentUserObject = new User();
  $("#usernameInput").click(function() {
      var username = $("#username").val();
      $("#username").val("");
      currentUserObject.getUser(username, displayUserData);
  });
});
