/**
 * Created by a.filippova on 29.05.14.
 */

window.myWidget.showMainWindow = Backbone.View.extend ({

    initialize: function(options) {
        this.el = $('.content-cover');
        this.el.parent().addClass(this.model.defaults.widgetLook);
        this.render();
        this.model.myModelToggle();
    },

    getButtons: function() {

    },

    render: function() {
        this.el.html(_.template($('#result').html()));
        return this;
    }

});
