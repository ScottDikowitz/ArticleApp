var ArticleLine = React.createClass({

  render: function(){

    return <li className='article-line'>
      <a href={this.props.article.url}>{this.props.article.title}</a>
    </li>;
  }
});
