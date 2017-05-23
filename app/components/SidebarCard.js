var React = require('react');
var Rating = require('./Rating');
var GridItemMenu = require('./GridItemMenu');
var GridItemImg = require('./GridItemImg');
var Link = require('react-router').Link;

function SidebarCard(props){
  var fontStyles = {
    fontSize: "12px"
  };
  var gridItemStyle = {
     display: "inline-block",
     height: "220px",
     marginTop: "10px",
     marginRight: "2em"
  };
  return (
    <div className="mdl-card mdl-shadow--2dp" style={gridItemStyle}>
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--5-col">
          <img src={"https://image.tmdb.org/t/p/original"+props.imgSrc}  style={{width:"100%"}}/>
       </div>
      <div className="mdl-cell mdl-cell--7-col">
        <Link to={"/films/"+props.filmId}><h6>{props.name}</h6></Link>
        <Rating rating={props.rating}/>
        <p className="excerpt-small" id="overview" style={fontStyles}> {props.overview}</p>
     </div>
    </div>
  </div>
  )
}

module.exports = SidebarCard;
