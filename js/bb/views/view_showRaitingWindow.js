/**
 * Created by Sverdlova on 01.06.14.
 */

window.myWidget.showRaitingWindow = Backbone.View.extend ({

    initialize: function(options) {
        $('.wrapper-get').html(_.template($('#reviewInner').html()));
    }

});
