var React = require('react');
var PropTypes = React.PropTypes;

var FilmPageImg = React.createClass({
  getInitialState: function() {
    return {
      imgPath:'https://image.tmdb.org/t/p/original'
    }
  },
  render: function functionName(props) {
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
        <img src={this.state.imgPath+this.props.imgSrc} style={filmImgStyles}/>
      </div>
    )
  }
  });

module.exports = FilmPageImg;
