/**
 * Created by a.filippova on 02.06.14.
 */

window.myWidget = window.myWidget || {};

window.myWidget.showAddReviewWindow = Backbone.View.extend ({
//НЕ РАБОТАЕТ
    events: {
        'click .add-reviews' : 'forExample'
    },

    el: 'div.wrapper-set',

    initialize: function(options) {
        this.render();
    },

    render: function() {
        this.$el.html(_.template($('#request').html()))
    },

    forExample: function() {
        alert('here')
    }

});
