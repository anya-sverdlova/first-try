/**
 * Created by Sverdlova on 01.06.14.
 */

window.myWidget.createTopMenu = Backbone.View.extend ({

    initialize: function(options) {
        $('#cover').html(_.template($('#top-menu').html()));
        this.setMenuButtons();
    },

    setMenuButtons: function() {
        $('.close').on('click', function() {console.log(this)});
        $('.page-title').on('click', function() {console.log(this)});
        $('.settings').on('click', function() {console.log(this)});
    }

});
