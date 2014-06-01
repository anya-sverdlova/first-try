/**
 * Created by a.filippova on 29.05.14.
 */

window.myWidget.router = Backbone.Router.extend ({
    routes: {
        '' : '',
        'reviews': 'showReviewWindow',
        'settings': 'showSettingsWindow'
    },

    initialize : function() {
        console.log('here is initialisation');
        this.startButton();
        this.createTopMenu();
        this.showRaitingWindow();
    },
    //crate container-link for button
    startButton: function() {
        $('<a>').appendTo('body')
                    .css('display', 'block')
                    .attr({'href':'#/reviews', 'data-purpose':'top-container'})
                    .prop('class', 'startLink');
        $('<button>').appendTo('.startLink')
                    .prop('id', 'startButton')
                    .html('Get Reviews');
    },

    createTopMenu: function() {
        var myModel = new myWidget.model();
        var myView = new myWidget.createTopMenu({model: myModel});
        $('.top-menu-cover').html(_.template($('#top-menu').html()));
    },

    showRaitingWindow: function() {
        var myModel = new myWidget.model();
        var myView = new myWidget.showRaitingWindow({model: myModel});
        $('.raiting-cover').html(_.template($('#raiting').html()));
    },

    showSettingsWindow: function() {
        var myModel = new myWidget.model();
        var myView = new myWidget.showSettingsWindow({model: myModel});
        $('#settings-cover').html(_.template($('#settings').html()));
    },

    showReviewWindow: function() {
        var myModel = new myWidget.model();
        this.myView = new myWidget.showReviewWindow({model: myModel});
        $('[data-purpose=top-container]').toggle();
    }

});


