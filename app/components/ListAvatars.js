var React = require('react');
var PropTypes = React.PropTypes;

 function ListAvatars(props) {
    return (
      <div className="mdl-list">
        <h4> Top people </h4>
        {props.children}
      </div>
    );
  }

module.exports = ListAvatars;
