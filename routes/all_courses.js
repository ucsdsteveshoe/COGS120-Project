/*
 * GET home page.
 */
var data = require("../data.json");

exports.view = function(request, response){
  var courses = [];
  var courseList = [];

  for (key in data){
    courses.push(key);
  }

  for(var i = 0; i < courses.length; i++){
    var newCourse = {
      "class": data[courses[i]][0].class,
      "professer": data[courses[i]][0].professer,
			"grade": data[courses[i]][0].grade
    };

    courseList.push(newCourse);
  }

  var tempJSON = {
    classes: courseList
  };

  var username = request.body.username;
	var password = request.body.password;

  tempJSON["username"] = username;
  tempJSON["password"] = password;

  response.render('all_courses', tempJSON);
};