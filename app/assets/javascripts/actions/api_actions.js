var ApiActions = window.ApiActions = {

  receiveAll: function(articles){
    AppDispatcher.dispatch({
      actionType: "ARTICLES_RECEIVED",
      articles: articles
    });
  },

  moreArticles: function(articles){
    AppDispatcher.dispatch({
      actionType: "MORE_ARTICLES_RECEIVED",
      articles: articles
    });
  },

  turnPage: function(page){
    AppDispatcher.dispatch({
      actionType: "TURN_PAGE",
      page: page
    });
  }
};
