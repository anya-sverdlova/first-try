/**
 * Created by a.filippova on 29.05.14.
 */

window.myWidget = window.myWidget || {};

myWidget.model = Backbone.Model.extend({
    defaults: {
        widgetLook: 'widget-blue'
    },

    params: {
        widgetLook: '',
        widgetCount: '4'
    },

    myModelMethod: function( ) {
    	alert("From model");
    },

    myModelToggle: function() {
        $('[data-purpose=top-container]').toggle();
    }

});



