var React = require('react');
var PropTypes = React.PropTypes;

function FilmPlot(props) {
  var plotStyles={
    padding:"0 5%",
    marginTop: "5%"
  }
    return (
      <div>
        <p style={plotStyles}>
          {props.filmPlot}
        </p>
      </div>
    );
  }

module.exports = FilmPlot;
