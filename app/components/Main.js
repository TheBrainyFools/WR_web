var React = require('react');
var ReactDom = require('react-dom');
var Menu = require('./Menu');
var Footer = require('./Footer');
require("jquery");
var Films = require('./Films');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Main = React.createClass({
  contextTypes: {
    PopularPosts: React.PropTypes.array,
    LatestPosts: React.PropTypes.array
  },
  render: function(props) {
    require("../js/material.min.js");
    return (
      <div className="main-container">
        <ReactCSSTransitionGroup
            transitionName="appear"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
        <Menu/>
            <Films>
              {this.props.children}
            </Films>
        <Footer/>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});
module.exports = Main;
