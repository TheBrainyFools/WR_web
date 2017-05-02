var React = require('react');
var ReactRouter = require('react-router');
var PropTypes = React.PropTypes;
var FilmButtons = require('./FilmButtons');
var Rating = require('./Rating');
var ItemsGrid = require('./ItemsGrid');
var Trailer = require('./Trailer');

var FilmPageDescription = React.createClass({
  initSubscribtion: function () {
    event.preventDefault();
    OneSignal.push(["registerForPushNotifications"]);
  },
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
  showVideo:function () {
          var videoBox = document.getElementById('video');
            videoBox.classList.remove('fadeOut');
            videoBox.classList.add('animated', 'fadeIn');
          setTimeout(function(){
            videoBox.style.display = 'block';
            videoBox.style.visibility = 'visible';
            videoBox.style.zIndex = 100;
          }, 500);
      },

  render: function(props) {
    var filmCast = [];
    this.props.filmCast.slice(0, 5).map(function(result) {
      filmCast.push(result.name)
    })

    var genres = [];
    this.props.genres.map(function(genre) {
      genres.push(genre.name);
    })

    var directorName = ''
    this.props.crew.slice(0, 1).map(function(director) {
      directorName = director.name
    })

    var producerName = ''
    this.props.crew.slice(5, 6).map(function(producer) {
    producerName = producer.name
    })
    return (
      <div id="filmPageDescription" className="description mdl-cell--6-col">
          <h2>{this.props.filmInfo.title}</h2>
        <div className="mdl-grid">
        <div className="mdl-cell--6-col">
          <Rating rating="4"/>
          <p><b>Genre</b>:{genres.join(", ")}</p>
          <p><b>Release Date</b>:{this.props.filmInfo.release_date} </p>
          <p><b>Duration</b>: {this.props.filmInfo.runtime} min</p>
        </div>
        <div className="mdl-cell--6-col">
          <p><b>Director</b>: {directorName}</p>
          <p><b>Producer</b>: {producerName}</p>
          <p><b>Cast</b>: {filmCast.join(", ")}</p>
        </div>
          <FilmButtons showVideo={this.showVideo} initSubscribtion={this.initSubscribtion}/>
          <Trailer src={this.props.trailerKey} hideVideo={this.hideVideo}/>
      </div>
      </div>
    );
  }

});

module.exports = FilmPageDescription;
