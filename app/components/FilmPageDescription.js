var React = require('react');
var ReactRouter = require('react-router');
var PropTypes = React.PropTypes;
var FilmButtons = require('./FilmButtons');
var Star = require('./Star');

var FilmPageDescription = React.createClass({

  render: function(props) {
    return (
      <div className="description mdl-cell--6-col">
        <div className="mdl-grid">
        <div className="mdl-cell--6-col">
          <h2>{this.props.name}</h2>
          <Star/><Star/><Star/><Star/><Star/>
          <p><b>Genre</b>: Action</p>
          <p><b>Release Date</b>:02.03.17 </p>
          <p><b>Duration</b>: 2:20 </p>
        </div>
        <div className="mdl-cell--6-col" style={{marginTop:"30%"}}>
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
