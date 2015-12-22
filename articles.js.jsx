var Articles = React.createClass({

  getInitialState: function(){
    return ({articles: [] });
  },

  getJson: function(){

    var that = this;
    var request = new XMLHttpRequest();
    request.open('GET', './data/articles.json', true);
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
  },

  render: function(){
    return <div>
      {this.state.articles.map(function(el){
        return <li key={el.id}>{el.title}</li>;

      })}
    </div>;
  }
});
