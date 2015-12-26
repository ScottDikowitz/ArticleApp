var ApiUtil = window.ApiUtil = {

  fetchArticles: function(){
    $.ajax ({
      url: './assets/data/articles.json',
      type: 'GET',
      dataType: 'json',
      success: function(articles) {
        ApiActions.receiveAll(articles);
      }
    });
  },

  fetchMoreArticles: function(){
    $.ajax ({
      url: './assets/data/more-articles.json',
      type: 'GET',
      dataType: 'json',
      success: function(articles) {
        ApiActions.moreArticles(articles);
      }
    });
  }
};
