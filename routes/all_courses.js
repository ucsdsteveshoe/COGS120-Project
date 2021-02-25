/*
 * GET home page.
 */
var data = require("../data.json");

exports.view = function(request, response){
  var username = request.body.username;
	var password = request.body.password;

  data["username"] = username;
  data["password"] = password;

  response.render('all_courses', data);
};