var React = require('react');
var PropTypes = React.PropTypes;

function Tabs (){
    return (
    <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
      <div className="mdl-tabs__tab-bar">
        <a href="#starks-panel" className="mdl-tabs__tab is-active">Filter1</a>
        <a href="#lannisters-panel" className="mdl-tabs__tab">Filter2</a>
        <a href="#targaryens-panel" className="mdl-tabs__tab">Filter3</a>
      </div>
    </div>
    );
  }

module.exports = Tabs;
