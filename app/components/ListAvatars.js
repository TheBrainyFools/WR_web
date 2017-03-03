var React = require('react');
var PropTypes = React.PropTypes;

 function ListAvatars(props) {
    return (
      <div className="mdl-list">
        {props.children}
      </div>
    );
  }

module.exports = ListAvatars;
