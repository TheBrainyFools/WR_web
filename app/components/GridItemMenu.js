var React = require('react');
var PropTypes = React.PropTypes;
require("../js/material.min.js");

const GridItemMenu = (props) => {

    var GridItemMenuStyles ={
      position: "absolute",
      right: "5px",
      top: "5px"
    };

    return (
      <div style={GridItemMenuStyles}>
        <button className="mdl-button mdl-js-button mdl-button--icon" data-mdl-for="demo-menu-top-right">
          <i className="material-icons">more_vert</i>
        </button>

        <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect">
          <li className="mdl-menu__item">Some Action</li>
          <li className="mdl-menu__item">Another Action</li>
          <li className="mdl-menu__item">Disabled Action</li>
          <li className="mdl-menu__item">Yet Another Action</li>
        </ul>
      </div>
    );
  }

module.exports = GridItemMenu;
