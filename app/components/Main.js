var React = require('react');
var ReactDom = require('react-dom');
require("jquery");
require("../js/material.min.js");
var MainContainer = require('../containers/MainContainer.js')
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Main = React.createClass({
  contextTypes: {
    PopularPosts: React.PropTypes.array,
    LatestPosts: React.PropTypes.array
  },
  render: function(props) {
    return (
      <MainContainer>
      <ReactCSSTransitionGroup
          transitionName="appear"
          transitionEnterTimeout="500"
          transitionLeaveTimeout="300">
          {this.props.children}
      </ReactCSSTransitionGroup>
    </MainContainer>
    );
  }
});
module.exports = Main;
