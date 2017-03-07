var React = require('react');
var PropTypes = React.PropTypes;

var FilmButtons = React.createClass({

  render: function() {
    return (
      <div style={{marginTop:"5%"}}>
        <button style={{display:"inline-block"}} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
          <i className="material-icons">play_circle_outline</i> View Trailer
        </button>
        <button style={{marginLeft:"20px", display:"inline-block"}} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
          <i className="material-icons">local_offer</i> Buy ticket
        </button>
      </div>
    );
  }

});

module.exports = FilmButtons;
