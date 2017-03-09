var React = require('react');
var PropTypes = React.PropTypes;

var Footer = React.createClass({

  render: function() {
    return (
      <div className="footer"
        style={{backgroundColor:"#fff", textAlign:"center", height:"80px"}}>
        <p style={{lineHeight:"70px", fontWeight:"200"}}> All rights reserved (c) When Realese </p>
      </div>
    );
  }

});

module.exports = Footer;
