var ArticleLine = React.createClass({

  timeAgo: function(time){

    var date = Date.parse(time);

        // milliseconds in an hour
        var hour = 3600000;
        var elapsed = Date.now() - date;
        elapsed = Math.floor(elapsed / hour);
        if (elapsed > 24){
          elapsed = Math.floor(elapsed /= 24);
          elapsed += " days ago";
        }
        else{
          elapsed += " hours ago";
        }

    return elapsed;
  },

  render: function(){

    return <li className='article-line group'>

      <div className="details">
        <div className="title">
        <a href={this.props.article.url}>{this.props.article.title}</a>
        </div>
        <div className="author">
          <a href="#">{this.props.article.profile.first_name + " " + this.props.article.profile.last_name}</a>
      </div>
      <div className="words">
        <span>{this.props.article.words}</span>
      </div>
      <div className="time-ago">
        <span>{this.timeAgo(this.props.article.publish_at)}</span>
      </div>
      </div>
    </li>;
  }
});
