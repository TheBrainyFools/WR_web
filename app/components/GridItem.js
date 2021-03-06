var React = require('react');
var Rating = require('./Rating');
var GridItemMenu = require('./GridItemMenu');
var GridItemImg = require('./GridItemImg');
var Link = require('react-router').Link;

function GridItem(props){
  var fontStyles = {
    fontSize: "12px"
  };
  var gridItemStyle = {
     display: "inline-block",
     width: "45%",
     height: "220px",
     marginTop: "60px",
     marginRight: "2em"
  }
  return (
    <div className="mdl-card mdl-shadow--2dp" style={gridItemStyle}>
      <div className="mdl-grid">
       <GridItemImg src={props.imgSrc}/>
      <div className="mdl-cell mdl-cell--7-col">
        <Link to={"/films/"+props.filmId}><h6> {props.name} </h6></Link>
        <Rating rating={props.rating}/>
        <p id="overview" style={fontStyles}> {props.overview}</p>
     </div>
    </div>
  </div>
  )
}

module.exports = GridItem;
