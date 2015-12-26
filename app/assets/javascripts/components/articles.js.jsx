var Articles = React.createClass({

  getInitialState: function(){
    return ({articles: [], page: 1 });
  },

  _changed: function(){

    this.setState({articles: ArticleStore.page(this.state.page)});
  },

  turnPage: function(){
    this.setState({articles: ArticleStore.page(this.state.page + 1)});
    this.setState({page: this.state.page + 1});

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
    <button onClick={this.turnPage}>load more</button>
    </div>;
  }
});
