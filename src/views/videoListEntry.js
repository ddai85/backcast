var VideoListEntryView = Backbone.View.extend({

  render: function() {
    var html = this.template(this.model.attributes);
    this.$el.append(html);
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
