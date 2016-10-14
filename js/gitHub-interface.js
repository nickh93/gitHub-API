var User = require('./../js/gitHub.js').userModule;


$(document).ready(function() {
  var currentUserObject = new User();
  $("#usernameInput").click(function() {
      var username = $("#username").val();
      $("#username").val("");
      currentUserObject.getUser(username);
  });
});
