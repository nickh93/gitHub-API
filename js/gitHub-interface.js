var User = require('./../js/gitHub.js');

var displayUserData = function(username, login)
{
  $(".showUser").text(username + "'s login is " + login  + ".");
}

$(document).ready(function () {
  var currentUserObject = new User();
  $("#usernameInput").click(function() {
    var username = $("#location").val();
    $("#location").val("");
    currentUserObject.getUser(username, displayUserData);
  });
});
