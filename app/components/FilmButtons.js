var React = require('react');
var PropTypes = React.PropTypes;

var FilmButtons = React.createClass({
  componentWillMount: function() {
    var OneSignal = OneSignal || [];
    OneSignal.push(function() {
        if (!OneSignal.isPushNotificationsSupported()) {
            return;
        }
        OneSignal.isPushNotificationsEnabled(function(isEnabled) {
            if (isEnabled) {
                document.getElementById("notification-button").style.backgroundColor = 'rgba(68, 138, 255, 0.58);';
            } else {
                document.getElementById("notification-button").style.backgroundColor = 'rgb(68, 138, 255);';
            }
        });
    });
  },
  render: function(props) {
    return (
      <div style={{marginTop:"5%"}}>
        <button onClick={this.props.showVideo} style={{display:"inline-block"}} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
          <i className="material-icons">play_circle_outline</i> View Trailer
        </button>
        <button style={{marginLeft:"20px", display:"inline-block"}} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
          <i className="material-icons">local_offer</i> Buy ticket
        </button>
        <a href="#" id="subscribe-link">
          <button id="notification-button" onClick={this.props.initSubscribtion} style={{marginLeft:"20px", display:"inline-block"}} className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--accent">
            <i id="notificationButton" className="material-icons">notifications</i>
          </button>
        </a>
      </div>
    );
  }

});


module.exports = FilmButtons;
