var React = require('react');
var PropTypes = React.PropTypes;

var FilmButtons = React.createClass({

  render: function() {
    return (
      <div style={{marginTop:"40%"}}>
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
          <i className="material-icons">play_circle_outline</i> View Trailer
        </button>
      <br/>
        <button style={{marginTop:"20px"}} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
          <i className="material-icons">local_offer</i> Buu ticket
        </button>
      </div>
    );
  }

});

module.exports = FilmButtons;
