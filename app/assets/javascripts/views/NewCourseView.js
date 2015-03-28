var app = app || {};

app.NewCourseView = Backbone.View.extend({
    el: '#landing-main',
    events: {
        'click #create-Course': 'createNewCourse',
        'click #clear-Course': 'clearCourse'
    },

    render: function() {
        var newCourseViewHTML = $('#newCourseView-template').html();

        this.$el.html(newCourseViewHTML);
    },

    createNewCourse: function(event) {
        event.preventDefault();

        app.currentUser = $.getJSON('/currentuser').done(function() {

            var name = $('#name').val();
            var description = $('#description').val();
            var startDate = $('#start_date').val();
            var endDate = $('#end_date').val();
            var startTime = $('#start_time').val();
            var endTime = $('#end_time').val();
            var courseCost = $('#course_cost').val();
            var weekdays = $('#weekdays').val();
            var skillLevel = $('#skill_level').val();
            var userID = app.currentUser.responseJSON.id;
            console.log(userID); 



            var course = new app.Course({
                name: name,
                description: description,
                start_date: startDate,
                end_date: endDate,
                start_time: startTime,
                end_time: endTime,
                course_cost: courseCost,
                weekdays: weekdays,
                skill_level: skillLevel,
                user_id: userID
            });

            course.save();
            app.courses.add(course);
            app.router.navigate('courses', true);

        });




    },

    clearCourse: function(event) {
        event.preventDefault();
        $('#newCourseView-template').empty();

    }
});
