var React = require('react');
var Star = require('./Star');
var GridItemMenu = require('./GridItemMenu');
var GridItemImg = require('./GridItemImg');

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
          <img src={"https://image.tmdb.org/t/p/original"+this.props.src}  style={{width:"100%"}}/>
       </div>
      <div className="mdl-cell mdl-cell--7-col">
        <h6>{this.props.name}</h6>
        <Star/><Star/><Star/><Star/><Star color="#ccc"/>
        <p style={fontStyles}> {this.props.overview}</p>
     </div>
    </div>
  </div>
  )
}

module.exports = SidebarCard;
