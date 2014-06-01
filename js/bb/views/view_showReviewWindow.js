/**
 * Created by Sverdlova on 01.06.14.
 */

window.myWidget.showReviewWindow = Backbone.View.extend ({

    initialize: function(options) {
        $('#cover').addClass(this.model.defaults.widgetLook);
    }

});
