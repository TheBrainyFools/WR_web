var React = require('react');

const GridItem = (props) => {
  var gridItemStyle = {
     display: "inline-block",
     width: "45%",
     height: "300px",
     marginTop: "10px",
     marginRight: "2em"
  };
  return (
    <div className="mdl-card mdl-shadow--2dp" style={gridItemStyle}>
    </div>
  )
}

module.exports = GridItem;
