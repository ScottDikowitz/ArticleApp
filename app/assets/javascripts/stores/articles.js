(function (root) {
  var articles = [];
  var CHANGE_EVENT = "change";
  var fetched = false;
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
      // debugger;
      if (_articles.slice(0, 100).length === _articles.length && fetched === false){
        ApiUtil.fetchMoreArticles();
        fetched = true;
      }
      return _articles.slice(0, 10*num);
    },

    mergeSort: function(arr){

      if (arr.length <= 1)
        return arr;

      var middle = Math.floor(arr.length / 2);

      var left_half = arr.slice(0, middle);
      var right_half = arr.slice(middle);

      var merge = function(left, right) {
        var result = [];

        while (left.length > 0 && right.length > 0) {

          if (left[0].profile.first_name < right[0].profile.first_name)
            result.push(left.shift());
          else
            result.push(right.shift());
        }

        return result.concat(left).concat(right);
      };

      return merge(ArticleStore.mergeSort(left_half), ArticleStore.mergeSort(right_half));
    },

    sortNames: function(){
      _articles = ArticleStore.mergeSort(_articles);
      ArticleStore.emit(CHANGE_EVENT);
    },

    mergeSort2: function(arr){

      if (arr.length <= 1)
        return arr;

      var middle = Math.floor(arr.length / 2);

      var left_half = arr.slice(0, middle);
      var right_half = arr.slice(middle);

      var merge = function(left, right) {
        var result = [];

        while (left.length > 0 && right.length > 0) {

          if (left[0].words >= right[0].words)
            result.push(left.shift());
          else
            result.push(right.shift());
        }

        return result.concat(left).concat(right);
      };

      return merge(ArticleStore.mergeSort2(left_half), ArticleStore.mergeSort2(right_half));
    },

    sortWords: function(){
      _articles = ArticleStore.mergeSort2(_articles);
      ArticleStore.emit(CHANGE_EVENT);
    },

    moreArticles: function(articles){
      _articles = _articles.concat(articles);
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
          case "MORE_ARTICLES_RECEIVED":
            ArticleStore.moreArticles(payload.articles);
            ArticleStore.emit(CHANGE_EVENT);
            break;

      }
    }),

  });
})(this);
