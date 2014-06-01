/**
 * Created by a.filippova on 30.05.14.
 */

window.myWidget.showMainMenu = Backbone.View.extend ({

    initialize: function(options) {
        this.el = $('.main-menu-cover');
        $('.close').on('click', this.myToggle);
    },

    myClose: function() {

    },

    myToggle: function() {
        console.log(this);
    }
});