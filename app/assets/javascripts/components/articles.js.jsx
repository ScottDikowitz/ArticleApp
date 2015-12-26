var Articles = React.createClass({

  getInitialState: function(){
    return ({articles: [] });
  },

  _changed: function(){

    this.setState({articles: ArticleStore.all()});
  },

  componentDidMount: function(){
    // this.getJson();
    ArticleStore.addChangeHandler(this._changed);
    ApiUtil.fetchArticles();
  },

  componentWillUnmount: function(){
    ArticleStore.removeChangeHandler(this._changed);
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
