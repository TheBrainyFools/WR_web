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
          <img src="http://spidermedia.ru/assets/images/movies/marvel/wolverine-3/cuaiczwueaaid_w-jpg-large.jpg" style={imgStyles}/>
          <span>{props.name}</span>
      </span>
      </div>
    );
  }
module.exports = TopViewedItem;
