var apiKey = require('./../.env').apiKey;

User = function() {

}

User.prototype.getUser = function(username, displayFunction)
{
    $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response) {
      displayFunction(username, response.login);
    }).fail(function(error){
      $('.showUser').text(error.responseJSON.message);
    });

}

exports.userModule = User;
