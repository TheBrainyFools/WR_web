var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = require('react-router').Link;

var LearnMoreButton = React.createClass({

  render: function() {
    return (
      <Link to="/filmPage">
        <button className="mdl-button mdl-js-button mdl-button--raised" style={{backgroundColor:'#fff', borderRadius:'50px', padding:"0px 20px"}}>
          Learn more
        </button>
      </Link>
    );
  }

});

module.exports = LearnMoreButton;
