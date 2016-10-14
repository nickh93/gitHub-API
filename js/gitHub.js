var apiKey = require('./../.env').apiKey;

User = function() {

}

User.prototype.getUser = function(username)
{
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response) {
    for (var index = 0; index < response.length; index ++)
    {
      $(".showUser").append("<li> Name: " + response[index].name + "<li> Description: " + response[index].description + "</li>" + "</li>");
    }
    // displayFunction(username, response.login);
    // console.log(response);
  }).fail(function(error){
    $('.showUser').text(error.responseJSON.message);
  });

}

exports.userModule = User;
