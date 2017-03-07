var React = require('react');
var PropTypes = React.PropTypes;
var Menu = require('./Menu');
var FilmPageImg = require('./FilmPageImg');
var FilmPageDescription = require('./FilmPageDescription');
var FilmPlot = require('./FilmPlot');
var SidebarSingle = require('./SidebarSingle');

var FilmPage = React.createClass({
  render: function() {
    var filmPageStyle = {
      boxShadow:"0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)",
      backgroundColor: "#fff",
      padding: "10px",
      marginTop:"30px",
      marginRight:"auto",
      marginLeft:"auto"
    };
    return (
      <div>
        <Menu/>
        <div className="mdl-grid">
        <SidebarSingle/>
        <div className="mdl-cell--8-col" style={filmPageStyle}>
          <div className="mdl-grid">
          <FilmPageImg/>
          <FilmPageDescription/>
          <FilmPlot/>
          </div>
        </div>
      </div>
      </div>
    );
  }

});

module.exports = FilmPage;
