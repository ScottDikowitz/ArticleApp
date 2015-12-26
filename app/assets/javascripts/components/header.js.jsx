var Header = React.createClass({

authorSort: function(){
  ArticleStore.sortNames();
},

wordSort: function(){
  ArticleStore.sortWords();
},

render: function(){
  return <div>
    <header className="header group">
        <ul className="header-list">
          <li><a href="#">Unpublished Articles</a></li>
          <li><a onClick={this.authorSort} href="#">Author</a></li>
          <li><a onClick={this.wordSort} href="#">Words</a></li>
          <li><a href="#">Submitted</a></li>
        </ul>
    </header>
  <Articles/>
  </div>;
}

});
