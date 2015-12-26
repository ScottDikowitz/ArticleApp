(function (root) {
  var _search_results = {articles: []};
  var CHANGE_EVENT = "change";

  root.ArticleStore = $.extend({}, EventEmitter.prototype, {



    addChangeHandler: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    all: function () {
      return _articles.slice();
    },

    page: function(num){
      return _articles.slice(0, 10*num);
    },

    totalCount: function () {
      return _articles.length || 0;
    },

    resetArtices: function(articles){
      _articles = articles;
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {

        case "ARTICLES_RECEIVED":
          ArticleStore.resetArtices(payload.articles);
          ArticleStore.emit(CHANGE_EVENT);
          break;

      }
    }),

  });
})(this);
