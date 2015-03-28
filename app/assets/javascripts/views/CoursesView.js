var app = app || {}; 
app.CoursesView = Backbone.View.extend({
  el: '#landing-main',
  events: {
    'click a': 'showCourse'
  }, 

  render: function () {
    this.$el.empty(); 

    app.courses.each(function (course) {
      var coursesViewTemplate = $('#coursesView-template').html();
      var coursesViewHTML = _.template(coursesViewTemplate);

      // var name = course.attributes.name; 
      // view.$el.prepend(name); 

      var course = course.attributes
      var compiledHTML = coursesViewHTML(course); 
      $('#landing-main').append(compiledHTML); 
    }); 
  }, 

  showCourse: function (result) {
    var id = result.currentTarget.id;
    app.router.navigate('courses/' + id, true);   
  }


}); 


