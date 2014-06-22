/**
 * Created by Sverdlova on 01.06.14.
 */

window.myWidget = window.myWidget || {};

window.myWidget.showRatingWindow = Backbone.View.extend ({

    el: 'div.raiting-cover',

    events: {
        'click a' : 'changeButton'
    },

    initialize: function(options) {
        this.render();
    },

    render: function(options) {
        this.$el.html(_.template($('#raiting').html()))
    },

    changeButton: function(target, myClass) {
        this.model.myButtonToggle(target, 'active-inset');
    }


});
