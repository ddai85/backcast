var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    console.log(this.videos);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());

    this.videoListView = new VideoListView({el: '.list', collection: this.videos});
    this.videoListView.render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
