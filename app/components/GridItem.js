var React = require('react');
var Star = require('./Star');
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
  };
  return (
    <div className="mdl-card mdl-shadow--2dp" style={gridItemStyle}>
      <div className="mdl-grid">
       <GridItemImg/>
      <div className="mdl-cell mdl-cell--7-col">
        <GridItemMenu/>
        <Link to={"/films/"+props.name}><h6> {props.name} </h6></Link>
        <Star/><Star/><Star/><Star/><Star color="#ccc"/>
        <p style={fontStyles}> In the near future, a weary Logan cares for an ailing Professor X in a hide out on the Mexican border. But Logan's... </p>
     </div>
    </div>
  </div>
  )
}

module.exports = GridItem;
