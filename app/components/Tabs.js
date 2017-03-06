var React = require('react');
var PropTypes = React.PropTypes;

function Tabs (){
    return (
    <div className="mdl-tabs mdl-js-tabs">
      <div className="mdl-tabs__tab-bar">
        <h4 style={{float:"left", marginRight:"50%"}}> Search by Genre </h4>
        <a href="#starks-panel" className="mdl-tabs__tab is-active">Filter1</a>
        <a href="#lannisters-panel" className="mdl-tabs__tab">Filter2</a>
        <a href="#targaryens-panel" className="mdl-tabs__tab">Filter3</a>
      </div>
    </div>
    );
  }

module.exports = Tabs;
