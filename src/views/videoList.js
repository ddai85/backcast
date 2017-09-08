var VideoListView = Backbone.View.extend({


  initialize: function() {
    this.collection.on('sync', function() {
      this.$el.empty();
      this.render(); 
    }, this);
  },

  render: function() {
    this.$el.empty();
    this.$el.children().detach();
    this.$el.html(this.template());
    for (var i = 0; i < 5; i++) {
      var model = this.collection.at(i);
      var id = model.get('id');
      model.set('source', 'https://www.youtube.com/embed/' + id);
      var view = new VideoListEntryView({model: model});
      this.$('.video-list').append(view.render().el);

    }


    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
