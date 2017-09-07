var VideoListEntryView = Backbone.View.extend({
  
  events: {
    'click .video-list-entry-title': 'select'
  },

  render: function() {
    var html = this.template(this.model.attributes);
    this.$el.append(html);
    return this;
  },

  select: function() {
    console.log('run');
    this.model.select();
  },

  template: templateURL('src/templates/videoListEntry.html')

});
