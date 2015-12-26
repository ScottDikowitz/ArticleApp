var ApiUtil = window.ApiUtil = {

  fetchArticles: function(){
    // var that = this;
    var request = new XMLHttpRequest();
    request.open('GET', './assets/data/articles.json', true);
    request.onload = function() {
      console.log("1234");
        if (request.status >= 200 && request.status < 400) {
        var my_JSON_object = JSON.parse(request.responseText);
        // console.log(my_JSON_object);
        debugger;

      }
    };
    request.send();
  }
};
