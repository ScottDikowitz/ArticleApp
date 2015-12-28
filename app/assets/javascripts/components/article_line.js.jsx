var ArticleLine = React.createClass({

  timeAgo: function(time){

    var date = Date.parse(time);

        // milliseconds in an hour
        var hour = 3600000;
        var minutes = Math.floor(hour / 60);
        var elapsed = Date.now() - date;
        var timeStr;
        if (elapsed >= hour){
          elapsed = Math.floor(elapsed / hour);
          if (elapsed > 24){
            elapsed = Math.floor(elapsed /= 24);
            timeStr = " day";
          }
          else{
            timeStr = " hour";
          }
        }
        else if (elapsed < 60000 ){
          var second = (minutes / 60);
          elapsed = Math.floor(elapsed /second);
          timeStr = " second";
        }
        else {
          elapsed = Math.floor(elapsed / minutes);
          timeStr = " minute";
        }

        elapsed = elapsed === 1 ? elapsed + timeStr + " ago" : elapsed + timeStr + "s ago";

    return elapsed;
  },

  render: function(){

    return <li className='article-line group'>

      <div className="details">

        <div className="title">
          <img className="pic" src={this.props.article.image}/>
        <a href={this.props.article.url}>{this.props.article.title}</a>
        </div>
        <div className="author info">
          <a href="#">{this.props.article.profile.first_name + " " + this.props.article.profile.last_name}</a>
      </div>
      <div className="words info">
        <span>{this.props.article.words}</span>
      </div>
      <div className="time-ago info">
        <span>{this.timeAgo(this.props.article.publish_at)}</span>
      </div>
      </div>
    </li>;
  }
});
