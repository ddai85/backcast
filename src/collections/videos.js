var Videos = Backbone.Collection.extend({

  model: Video,
  url: 'https://www.googleapis.com/youtube/v3/search',
  
  search: function(query) {
    var query = query;
    var context = this;
    var APIKey = window.YOUTUBE_API_KEY;

    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {
        key: APIKey,
        maxResults: '5',
        part: 'snippet',
        q: query,
        type: 'video'
      },
      success: function (data) {
        console.log('chatterbox: Message received');
        context.onSuccess(data);

      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to get message', data);
      }
    });
  },
  onSuccess(data) {
    var newData = this.makeArr(data);
    this.reset(newData);
    this.trigger('sync');
    this.trigger('poop');

  },
  makeArr: function(data) {
    return data.items;
  },

});
