var React = require('react');
var PropTypes = React.PropTypes;
var Menu = require('../components/Menu');
var Footer = require('../components/Footer');
var Films = require('../components/Films');

 var MainContainer = React.createClass({
   render: function(props) {
    return (
      <div className="main-container">
        <Menu/>
            <Films>
              <div>
                {this.props.children}
              </div>
            </Films>
        <Footer/>
      </div>
    );
  }
})
module.exports = MainContainer;
