var Header = React.createClass({

  getInitialState: function(){
    return ({showing: 0});
  },

  componentDidMount: function(){
    ArticleStore.addChangeHandler(this._changed);
  },

  componentWillUnmount: function(){
    ArticleStore.removeChangeHandler(this._changed);
  },

  _changed: function(){
    this.setState({showing: ArticleStore.numShowing()});
  },

  authorSort: function(){
    if (document.cookie.split('=')[1] !== "author"){
      ApiActions.sortBy("author");
      document.cookie="sort=author";
    }
  },

  wordSort: function(){
    if (document.cookie.split('=')[1] !== "words"){
      ApiActions.sortBy("words");
      document.cookie="sort=words";
      var x = document.cookie;
    }
  },

  timeSort: function(){
    if (document.cookie.split('=')[1] !== "time"){
      ApiActions.sortBy("time");
      document.cookie="sort=time";
    }
  },

  render: function(){
    return <div>
            <div className="content">
              <header className="header group">
                  <ul className="header-list group">
                    <li><a href="#">Unpublished Articles: ({this.state.showing})</a></li>
                    <li><a onClick={this.authorSort} href="#">Author</a></li>
                    <li><a onClick={this.wordSort} href="#">Words</a></li>
                    <li><a onClick={this.timeSort} href="#">Submitted</a></li>
                  </ul>
              </header>
              <Articles/>
            </div>

    </div>;
  }

});
