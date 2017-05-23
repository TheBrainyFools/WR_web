var React = require('react');
var PropTypes = React.PropTypes;


var GridItemImg = React.createClass({
  getInitialState: function() {
    return {
      imgPath:'https://image.tmdb.org/t/p/original'
    }
  },
  render: function (props){
    var imgStyles = {
      width: "100%",
      boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 2px 10px rgba(0,0,0,0.23)",
      position: "relative",
      top: "-50px"
    };
    return (
      <div className="mdl-cell mdl-cell--5-col">
        <img src={this.state.imgPath+this.props.src} style={imgStyles}/>
     </div>
    );
  }
})


module.exports = GridItemImg;
