var React = require('react');
var PropTypes = React.PropTypes;
var TopViewedItem = require('./TopViewedItem');

function TopViewed (props) {
    return (
      <div className="mdl-list">
        <h4>Top viewed today </h4>
        {props.children}
      </div>
    );
  }

module.exports = TopViewed;
