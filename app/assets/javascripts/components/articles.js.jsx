var Articles = React.createClass({

  getInitialState: function(){
    return ({articles: [] });
  },

  getJson: function(){

    var that = this;
    var request = new XMLHttpRequest();
    request.open('GET', './assets/data/articles.json', true);
    request.onload = function() {
      console.log("1234");
        if (request.status >= 200 && request.status < 400) {
        var my_JSON_object = JSON.parse(request.responseText);
        console.log(my_JSON_object);
        that.setState({articles: my_JSON_object});
      }
    };
    request.send();
  },

  componentDidMount: function(){
    this.getJson();
    // ApiUtil.fetchArticles();
  },

  render: function(){
    return <div><ul className="grid">
      {this.state.articles.map(function(el){
        return <ArticleLine article={el} key={el.id}/>;

      })}
    </ul>
    </div>;
  }
});
