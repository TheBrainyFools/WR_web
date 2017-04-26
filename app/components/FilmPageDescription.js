var React = require('react');
var ReactRouter = require('react-router');
var PropTypes = React.PropTypes;
var FilmButtons = require('./FilmButtons');
var Rating = require('./Rating');
var ItemsGrid = require('./ItemsGrid');
var Trailer = require('./Trailer');

var FilmPageDescription = React.createClass({
  hideVideo: function (){
          var videoBox = document.getElementById('video');
          var video = document.getElementById('youtube');
          var videoSrc = document.getElementById('youtube').src;
          videoBox.classList.remove('fadeIn');
          videoBox.classList.add('animated', 'fadeOut');
          setTimeout(function(){
            videoBox.style.visibility = 'hidden';
            videoBox.style.display = 'none';
            videoBox.style.zIndex = -10;
          }, 500);
          var cleaned = videoSrc.replace('&autoplay=1',''); // removing autoplay form url
          video.src = cleaned;
      },
  showVideo:function functionName() {
          var videoBox = document.getElementById('video');
            videoBox.classList.remove('fadeOut');
            videoBox.classList.add('animated', 'fadeIn');
          setTimeout(function(){
            videoBox.style.display = 'block';
            videoBox.style.visibility = 'visible';
            videoBox.style.zIndex = 1;
          }, 500);
      },
  render: function(props) {
    return (
      <div id="filmPageDescription" className="description mdl-cell--6-col">
          <h2>{this.props.filmInfo.title}</h2>
        <div className="mdl-grid">
        <div className="mdl-cell--6-col">
          <Rating rating="4"/>
          <p><b>Genre</b>:{this.props.filmInfo.adult}</p>
          <p><b>Release Date</b>:{this.props.filmInfo.release_date} </p>
          <p><b>Duration</b>: {this.props.filmInfo.runtime} </p>
        </div>
        <div className="mdl-cell--6-col">
          <p><b>Director</b>: James Mangold </p>
          <p><b>Producer</b>:James Mangold</p>
          <p><b>Cast</b>:  Hugh Jackman, Patrick Stewart, Dafne Keen</p>
        </div>
          <FilmButtons showVideo={this.showVideo}/>
          <Trailer hideVideo={this.hideVideo}/>
      </div>
      </div>
    );
  }

});

module.exports = FilmPageDescription;
