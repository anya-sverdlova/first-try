/**
 * Created by a.filippova on 02.06.14.
 */

window.myWidget = window.myWidget || {};

window.myWidget.showReviewWindow = Backbone.View.extend ({

    el: 'div.wrapper-get',
//НЕ РАБОТАЕТ
    events: {
        'click a.reviews' : 'forExample'
    },

    initialize: function(options) {
        this.render();
        this.myChangeStyle();
    },

    render: function() {
        widgetCount = this.model.params.widgetCount;
        this.$el.html(_.template($('#reviewInner').html()), widgetCount);
    },

    myChangeStyle: function() {
        $('#cover').removeClass().addClass(this.model.params.widgetLook)
    },

    forExample: function() {
        console.log('here')
    }

});
