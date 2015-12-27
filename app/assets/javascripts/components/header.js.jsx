var Header = React.createClass({

authorSort: function(){
  if (document.cookie.split('=')[1] !== "author"){
    ArticleStore.sortNames();
    document.cookie="sort=author";
  }
},

wordSort: function(){
  if (document.cookie.split('=')[1] !== "words"){
    ArticleStore.sortWords();
    document.cookie="sort=words";
    var x = document.cookie;
  }
},

timeSort: function(){
  if (document.cookie.split('=')[1] !== "time"){
    ArticleStore.sortTime();
    document.cookie="sort=time";
  }
},

render: function(){
  return <div>
    <header className="header group">
        <ul className="header-list group">
          <li><a href="#">Unpublished Articles</a></li>
          <li><a onClick={this.authorSort} href="#">Author</a></li>
          <li><a onClick={this.wordSort} href="#">Words</a></li>
          <li><a onClick={this.timeSort} href="#">Submitted</a></li>
        </ul>
    </header>
  <Articles/>
  </div>;
}

});
