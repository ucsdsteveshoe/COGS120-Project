var data = require("../data.json");

exports.viewCourse = function(request, response){
    var course_name = request.params.course_name;

    var course_path = "../" + course_name + ".json";
    var course = require(course_path)

    response.render("course", course);
}