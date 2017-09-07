var VideoListView = Backbone.View.extend({
  initialize: function() {
    this.collection.on('sync', function() {
      this.$el.empty();
      this.render(); 
    }, this);
  },

  render: function() {
    this.$el.empty();
    this.$el.html(this.template());
    for (var i = 0; i < 5; i++) {
      var model = this.collection.models[i];
      var view = new VideoListEntryView({el: '.video-list', model: model});
      var id = model.get('id');
      model.set('source', 'https://www.youtube.com/embed/' + id);
      view.render();
      console.log('im rendering');
    }


    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
