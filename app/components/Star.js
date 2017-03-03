var React = require('react');
var PropTypes = React.PropTypes;

function Star(props) {
  var starStyles = {
    fontSize: '18px',
    color: '{props.color}'
  };
    return (
      <a href="#"><i style={starStyles} className="material-icons">star</i></a>
    );
  }

module.exports = Star;
