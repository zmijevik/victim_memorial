define(
['jquery', 'lodash', 'backbone', 'utils/tpl'],

function($, _, Backbone, tpl) {

    var HeaderView = Backbone.View.extend({

        initialize: function() {
            this.template = _.template(tpl.get('header'));
        },

        render: function(eventName) {
            this.$el.html(this.template());
            return this.el;
        },

        events: {
            "click .new_wine": "newWine",
            "click .new_store": "newStore"
        },

        newWine: function(event) {
            app.navigate("wines/new", true);
            return false;
        },

        newStore: function(event) {
            app.navigate("stores/new", true);
            return false;
        }

    });

    return HeaderView;

});
