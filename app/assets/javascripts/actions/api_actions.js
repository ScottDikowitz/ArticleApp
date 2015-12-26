var ApiActions = window.ApiActions = {

  receiveAll: function(articles){
    AppDispatcher.dispatch({
      actionType: "ARTICLES_RECEIVED",
      articles: articles
    });
  }
};
