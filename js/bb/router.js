/**
 * Created by a.filippova on 29.05.14.
 */

window.myWidget.router = Backbone.Router.extend ({
    routes: {
        '' : 'createTopMenu',
        'reviews': 'showMainWindow'
    },

    initialize : function() {
        console.log('here is initialisation');
        this.startButton();
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
    },

    showMainWindow : function() {
        var myModel = new myWidget.model();
        var myView = new myWidget.showMainWindow({model: myModel});
    }

});


