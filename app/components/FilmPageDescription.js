var React = require('react');
var PropTypes = React.PropTypes;
var FilmButtons = require('./FilmButtons');

var FilmPageDescription = React.createClass({

  render: function(props) {
    return (
      <div className="description mdl-cell--6-col">
        <div className="mdl-grid">
        <div className="mdl-cell--6-col">
        <h2>Logan</h2>
        <p><b>Genre</b>: Action</p>
        <p><b>Release Date</b>:02.03.17 </p>
        <p><b>Duration</b>: 2:20 </p>
        <p><b>Director</b>: James Mangold </p>
        <p><b>Producer</b>:James Mangold</p>
        <p><b>Cast</b>:  Hugh Jackman, Patrick Stewart, Dafne Keen</p>
        </div>
        <div className="mdl-cell--6-col">
          <FilmButtons/>
        </div>
      </div>
      </div>
    );
  }

});

module.exports = FilmPageDescription;
