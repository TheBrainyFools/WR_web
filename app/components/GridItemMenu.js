var React = require('react');
var PropTypes = React.PropTypes;

var GridItemMenu = React.createClass({

  render: function() {
    var GridItemMenuStyles ={
      position: "absolute",
      right: "5px",
      top: "5px"
    };

    return (
      <div style={GridItemMenuStyles}>
        <button className="mdl-button mdl-js-button mdl-button--icon">
          <i className="material-icons">more_vert</i>
        </button>

        <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect">
          <li className="mdl-menu__item">Some Action</li>
          <li className="mdl-menu__item">Another Action</li>
          <li className="mdl-menu__item">Disabled Action</li>
          <li className="mdl-menu__item">Yet Another Action</li>
        </ul>
          <script src="../app/js/material.min.js" async></script>
      </div>
    );
  }
})
module.exports = GridItemMenu;
