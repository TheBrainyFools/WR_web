var React = require('react');
var ReactRouter = require('react-router');
var PropTypes = React.PropTypes;
var FilmButtons = require('./FilmButtons');
var Star = require('./Star');
var ItemsGrid = require('./ItemsGrid');

var FilmPageDescription = React.createClass({

  render: function(props) {
    return (
      <div className="description mdl-cell--6-col">
          <h2>{this.props.filmInfo.title}</h2>
        <div className="mdl-grid">
        <div className="mdl-cell--6-col">
          <Star/><Star/><Star/><Star/><Star/>
          <p><b>Genre</b>:{this.props.filmInfo.adult}</p>
          <p><b>Release Date</b>:{this.props.filmInfo.release_date} </p>
          <p><b>Duration</b>: {this.props.filmInfo.runtime} </p>
        </div>
        <div className="mdl-cell--6-col">
          <p><b>Director</b>: James Mangold </p>
          <p><b>Producer</b>:James Mangold</p>
          <p><b>Cast</b>:  Hugh Jackman, Patrick Stewart, Dafne Keen</p>
        </div>
          <FilmButtons/>
      </div>
      </div>
    );
  }

});

module.exports = FilmPageDescription;
