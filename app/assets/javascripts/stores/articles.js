(function (root) {
  var _articles = [];
  var CHANGE_EVENT = "change";
  var fetched = false;
  var _page = 1;

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

    numShowing: function(){
      return _articles.slice(0, 10*_page).length;
    },

    getPage: function(){
      return _articles.slice(0, 10*_page);
    },

    sortMore: function(articles){
      switch (document.cookie.split('=')[1]) {

        case "words":
          return ArticleStore.sort("words", articles);
        case "author":
          return ArticleStore.sort("author", articles);
        case "time":
          return ArticleStore.sort("time", articles);
        default:
          return articles;
        }
    },

    page: function(num){
      _page = num;
      if (_articles.slice(0, 10*num).length === _articles.length && fetched === false){
        ApiUtil.fetchMoreArticles();
        fetched = true;
      }
      return _articles.slice(0, 10*num);
    },

    mergeSort: function(arr, comparator){
      if (arr.length <= 1)
        return arr;

      var middle = Math.floor(arr.length / 2);

      var left_half = arr.slice(0, middle);
      var right_half = arr.slice(middle);

      var merge = function(left, right, comparator) {
        var result = [];
        while (left.length > 0 && right.length > 0) {

          if (comparator(left, right))
            result.push(left.shift());
          else
            result.push(right.shift());
        }

        return result.concat(left).concat(right);
      };
      return merge(ArticleStore.mergeSort(left_half, comparator), ArticleStore.mergeSort(right_half, comparator), comparator);
    },

    sort: function(sort, more){
      var comparator;
      switch (sort){
        case "time":
          comparator = function(left, right){
            if (Date.parse(left[0].publish_at) >= Date.parse(right[0].publish_at))
              return true;
            else
              return false;
          };
          break;
        case "author":
          comparator = function(left, right){
            if (left[0].profile.first_name < right[0].profile.first_name)
              return true;
            else
              return false;
          };
          break;
        case "words":
          comparator = function(left, right){
            if (left[0].words >= right[0].words)
              return true;
            else
              return false;
          };
          break;
      }
      if (more){
        return ArticleStore.mergeSort(more, comparator);
      }
      else{
        return ArticleStore.mergeSort(_articles, comparator);
      }
    },

    moreArticles: function(articles){
      var sorted = ArticleStore.sortMore(articles);
      _articles = _articles.concat(sorted || articles);
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
        case "TURN_PAGE":
          ArticleStore.page(payload.page);
          ArticleStore.emit(CHANGE_EVENT);
          break;
        case "SORT":
          _articles = ArticleStore.sort(payload.sort);
          ArticleStore.emit(CHANGE_EVENT);

      }
    }),

  });
})(this);
