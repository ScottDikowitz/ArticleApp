var ArticleLine = React.createClass({

  render: function(){

    return <li className='article-line group'>
      <div className="title">
      <a href={this.props.article.url}>{this.props.article.title}</a>
      </div>
      <div className="details">
      <a href="#">{this.props.article.profile.first_name + " " + this.props.article.profile.last_name}</a>
      </div>
    </li>;
  }
});
