/*
 * GET home page.
 */
var data = require("../data.json");

exports.view = function(request, response){
  var username = request.body.username;
	var password = request.body.password;

  data["username"] = username;
  data["password"] = password;

  //for (var key in data) {
    //console.log(key + " -> " + data[key].class)
  //}

  response.render('all_courses', data);
};