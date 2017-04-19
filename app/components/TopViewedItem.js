var React = require('react');
var GridItemImg = require('./GridItemImg');

function TopViewedItem(props) {
  var imgStyles = {
    width: "20%",
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 2px 10px rgba(0,0,0,0.23)",
    marginRight:"20px"
  };
    return (
      <div className="mdl-list__item" >
        <span className="mdl-list__item-primary-content">
          <img src={'https://image.tmdb.org/t/p/original'+ props.imgSrc} style={imgStyles}/>
          <div>
          <span>{props.name}</span>
          <p style={{fontWeight:"300"}}> by {props.author}</p>
          </div>
      </span>
      </div>
    );
  }
module.exports = TopViewedItem;
