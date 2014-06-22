/**
 * Created by Sverdlova on 01.06.14.
 */

window.myWidget = window.myWidget || {};

window.myWidget.showMainWindow = Backbone.View.extend ({

    el: 'div#cover',

    initialize: function(model) {
        this.render(model);
        this.model.myChangeStyle();
    },

    render: function(model) {
        widgetCount = this.model.params.widgetCount;
        this.$el.find('.wrapper-get').html(_.template($('#reviewInner').html()), widgetCount).show();
    }

});

ParentView = Backbone.View.extend({
	mySharedFunction: function () {

	}
});

ChildView1 = ParentView.extend({
	myFunc1 : function () {

	},

	myFunc: function() {
		this.mySharedFunction();
	}
});

ChildView2 = ParentView.extend({
	myFunc2 : function () {
		this.mySharedFunction();	
	}
});
