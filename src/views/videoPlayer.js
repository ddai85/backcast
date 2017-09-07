var VideoPlayerView = Backbone.View.extend({

  index: 2,

  initialize: function() {
    this.collection.on('select', this.render, this);
  },

  render: function() {
    var arg = arguments[0] || this.collection.at(0);
    this.$el.html(this.template(arg.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
