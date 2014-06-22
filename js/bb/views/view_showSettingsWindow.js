/**
 * Created by Sverdlova on 01.06.14.
 */

window.myWidget = window.myWidget || {};

window.myWidget.showSettingsWindow = Backbone.View.extend ({

    el: 'div#settings-cover',

    events: {
        'click a.setting-button'     : 'changingWidget',
        'click h4.accordion-header'  : 'initialAccordion'
    },

    initialize: function(model) {
        this.render();
    },

    render: function() {
        this.$el.html(_.template($('#settings').html()));
    },
//не работает аккордеон при повторном использовании
    initialAccordion: function(e) {
        var parentHeight = parseInt($(e.target).parent().css('height'));
        switch (parentHeight) {
            case 17:
                $(e.target).parent().css('height', '120px');
                break;
            case 120 :
                $(e.target).parent().css('height', '17px');
                break;
        }

//        if (parentHeight == 17) {
//            parentHeight = '120px';
//        } else {
//            parentHeight = '17px';
//        }
//        return $(e.target).parent().css('height', parentHeight);
    },

    changingWidget: function(e, model) {
        var parentUpdate = $(e.target).parent().parent().find('input:checked');
        switch(parentUpdate.attr('name')) {
            case 'decor':
                this.model.params.widgetLook = parentUpdate.attr('value');
                break;
            case 'number-of-review':
                this.model.params.widgetCount = parentUpdate.attr('value');
                break;
            case 'reviews-order' :
                break;
        }
        this.middleContainerToggle();
    },

    middleContainerToggle: function(e) {
        $("[data-purpose=middle-container]").toggle();
        $('[data-purpose=toggle-button]').toggleClass('_active-button current-inset');
    }

});

