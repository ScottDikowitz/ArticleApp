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
  }
};
