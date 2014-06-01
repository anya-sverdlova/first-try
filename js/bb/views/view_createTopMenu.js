/**Created by Sverdlova on 01.06.14.*/

window.myWidget.createTopMenu = Backbone.View.extend ({

    initialize: function(options) {
       this.setMenuButtons();
    },

    setMenuButtons: function() {
        $('.close').on('click', this.changeButtonState);
        $('.page-title').on('click', this.changeButtonState);
        $('.settings').on('click', this.changeButtonState);
    },

    changeButtonState: function() {
        $(this).parent().children().removeClass('current-inset');
        $(this).addClass('current-inset');
    }

});

