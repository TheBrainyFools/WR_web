var React = require('react');
var PropTypes = React.PropTypes;

function FilmPageImg() {
  var filmImgStyles ={
    width: "80%",
    height:"auto",
    boxShadow:"0 3px 6px rgba(0,0,0,0.16), 0 2px 10px rgba(0,0,0,0.23)",
    display:"block",
    marginRight:"auto",
    marginLeft:"auto",
    marginTop:"5%"
  };
    return (
      <div className="mdl-cell--4-col">
        <img src="http://spidermedia.ru/assets/images/movies/marvel/wolverine-3/cuaiczwueaaid_w-jpg-large.jpg" style={filmImgStyles}/>
      </div>
    );
  }

module.exports = FilmPageImg;
