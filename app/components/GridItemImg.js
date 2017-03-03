var React = require('react');
var PropTypes = React.PropTypes;

function GridItemImg () {
  var imgStyles = {
    width: "100%",
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 2px 10px rgba(0,0,0,0.23)",
    position: "relative",
    top: "-50px"
  };
    return (
      <div className="mdl-cell mdl-cell--5-col">
        <img src="http://spidermedia.ru/assets/images/movies/marvel/wolverine-3/cuaiczwueaaid_w-jpg-large.jpg" style={imgStyles}/>
     </div>
    );
  }


module.exports = GridItemImg;
