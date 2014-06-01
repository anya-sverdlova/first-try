/**
 * Created by Sverdlova on 01.06.14.
 */

window.myWidget.showSettingsWindow = Backbone.View.extend ({

    initialize: function(options) {
        $('[data-purpose=middle-container]').toggle();
    }

});

