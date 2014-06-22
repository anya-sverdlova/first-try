/**
 * Created by a.filippova on 29.05.14.
 */

window.myWidget = window.myWidget || {};

window.myWidget.router = Backbone.Router.extend ({

    routes: {
        '' : '',
        'main': 'showMainWindow',
        'settings': 'showSettingsWindow',
        'review': 'showReviewWindow',
        'addReview': 'showAddReviewWindow'
    },

    initialize : function() {
        this.startButton();
        this.createTopMenu();
        this.showRatingWindow();
    },
    //crate container-link for button
    startButton: function() {
        $('<a>').appendTo('body')
                    .css('display', 'block')
                    .attr({'href':'#/review', 'data-purpose':'top-container'})
                    .prop('class', 'startLink');
        $('<button>').appendTo('.startLink')
                    .prop('id', 'startButton')
                    .html('Get Reviews')
            .on('click', this.topContainerToggle);
    },

    createTopMenu: function() {
        this.myModel = new myWidget.model();
        this.myViewTopMenu = new myWidget.createTopMenu({model: this.myModel});

    },

    showRatingWindow: function() {
        this.myModel = new myWidget.model();
        this.myViewRating = new myWidget.showRatingWindow({model: this.myModel});
    },

    showMainWindow: function() {
        this.myModel = new myWidget.model();
        this.myViewMain = new myWidget.showMainWindow({model: this.myModel});
    },

    showSettingsWindow: function() {
        this.myModel = new myWidget.model();
        this.myViewSettings = new myWidget.showSettingsWindow({model: this.myModel});
    },

    showReviewWindow: function() {
        this.myModel = new myWidget.model();
        this.myViewReview = new myWidget.showReviewWindow({model: this.myModel});
    },

    showAddReviewWindow: function() {
        this.myModel = new myWidget.model();
        this.myView = new myWidget.showAddReviewWindow({model: this.myModel});
    },

    topContainerToggle: function() {
        $("[data-purpose=top-container]").toggle();
    },

    middleContainerToggle: function() {
        $("[data-purpose=middle-container]").toggle();
    },

    bottomContainerToggle: function() {
        $("[data-purpose=bottom-container]").toggle();
    }

});


