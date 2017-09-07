var VideoListView = Backbone.View.extend({
  
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(this.renderVideo, this);
    return this;
  },

  renderVideo: function(video) {
    var videoView = new VideoListEntryView({el: '.video-list', model: video});
    videoView.render();

  },

  template: templateURL('src/templates/videoList.html')

});
