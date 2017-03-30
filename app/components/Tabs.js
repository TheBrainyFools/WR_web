var React = require('react');
var PropTypes = React.PropTypes;
require("../js/material.min.js");
var Link = require('react-router').Link;

function Tabs (props){
    return (
    <div className="mdl-tabs mdl-js-tabs">
      <div className="mdl-tabs__tab-bar">
        <h4 style={{float:"left", marginRight:"63%", lineHeight:"24px"}}> Filter by </h4>
        <a onClick={props.handleFilterPopular} href="#mostPopular" className="mdl-tabs__tab is-active">Most popular</a>
        <a onClick={props.handleFilterLatest} href="#latest" className="mdl-tabs__tab">Latest</a>
      </div>
    </div>
    );
  }

module.exports = Tabs;
