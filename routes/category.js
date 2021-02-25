exports.viewCategory = function(request, response){
    var course_name = request.params.course_name;

    response.render("category", {
        "course": course_name
    });
}