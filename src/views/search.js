var SearchView = Backbone.View.extend({

  events: {
    'click .btn': 'sendQuery'
  },

  render: function() {
    this.$el.html(this.template());
  },

  sendQuery: function() {
    var query = $('.form-control').val();
    this.collection.search(query);
  },

  template: templateURL('src/templates/search.html')

});
