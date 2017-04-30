var React = require('react');
var PropTypes = React.PropTypes;

var Trailer = React.createClass({
  render: function(props) {
    return (
      <div id="video" className="lightbox" onClick={this.props.hideVideo}>
        <div className="lightbox-container">
          <div className="lightbox-content">
            <button onClick={this.props.hideVideo} className="lightbox-close">
            </button>
            <div className="video-container">
              <iframe id="youtube" width="960" height="540" src={"https://www.youtube.com/embed/"+this.props.src+"?showinfo=0"} frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Trailer;
