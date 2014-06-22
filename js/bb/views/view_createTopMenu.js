/**Created by Sverdlova on 01.06.14.*/

window.myWidget = window.myWidget || {};

window.myWidget.createTopMenu = Backbone.View.extend ({

    el: 'div.top-menu-cover',
//не могу передать в events функцию из модели
    events: {
        'click' : 'changeButton',
        'click [data-purpose=toggle-button]' : 'middleContainerToggle'
    },

    initialize: function() {
        this.render();
    },

    render: function() {
        this.$el.html(_.template($('#top-menu').html()));
    },

    changeButton: function(target, myClass) {
        this.model.myButtonToggle(target, 'current-inset');
    },

    middleContainerToggle: function(e) {
        if ($(e.target).hasClass('_active-button')) {
            $("[data-purpose=middle-container]").toggle();
            $('[data-purpose=toggle-button]').toggleClass('_active-button');
        }
    }

});
