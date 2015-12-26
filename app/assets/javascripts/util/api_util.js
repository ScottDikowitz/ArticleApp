var ApiUtil = window.ApiUtil = {

  fetchArticles: function(){
    // var that = this;
    var request = new XMLHttpRequest();
    request.open('GET', './assets/data/articles.json', true);
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
        var articles = JSON.parse(request.responseText);
        ApiActions.receiveAll(articles);

      }
    };
    request.send();
  }
};
