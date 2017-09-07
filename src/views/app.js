var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    this.render();
    
  },


  render: function() {
    this.$el.html(this.template());

    this.videoListView = new VideoListView({el: '.list', collection: this.videos});
    this.videoListView.render();

    this.videoPlayer = new VideoPlayerView({el: '.player'});
    this.videoPlayer.render();

    this.search = new SearchView({el: '.search'});
    this.search.render();

    return this;
  },

  template: templateURL('src/templates/app.html')

});
