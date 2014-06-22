/**
 * Created by a.filippova on 29.05.14.
 */

window.myWidget = window.myWidget || {};

myWidget.model = Backbone.Model.extend({

    params: {
        widgetLook: 'widget-blue',
        widgetCount: '3'
    },

    /*validate: function(element, Class) {
       if (!$(element).hasClass(Class)) {
            console.log($(element))
       } //переделать логику таким образом, чтобы href аттачились на элементы внутри вьюхи после того, как пройдет валидация. в противном случае не делать ничего
    },

    isValid: function(element) {
       return element.attr('href', '#');
    },*/

    myButtonToggle: function(target, myClass) {
        var elem = $(target.toElement);
        elem.parent().children().removeClass(myClass);
        elem.addClass(myClass);
        return elem;
    },

    topContainerToggle: function() {
        $("[data-purpose=top-container]").toggle();
    },

    myGet : function(data) {
    $.get('https://api.mongolab.com/api/1/databases/first-base/collections/reviews?s={"number":-1}&apiKey=fUlPVExWjzXy1yjlMzvqzi1oREPQwkwQ' )
        .done(function(data) {
            console.log(data);
        })

    },

    forExample: function() {
        console.log('here')
    }
});



