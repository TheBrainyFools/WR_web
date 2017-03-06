var React = require('react');
var PropTypes = React.PropTypes;
var Menu = require('./Menu');
var FilmPageImg = require('./FilmPageImg');
var FilmPageDescription = require('./FilmPageDescription');

var FilmPage = React.createClass({
  render: function() {
    var filmPageStyle = {
      boxShadow:"0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)",
      backgroundColor: "#fff",
      padding: "10px",
      marginTop:"5%",
      width:"90%",
      marginRight:"auto",
      marginLeft:"auto"
    };
    return (
      <div>
        <Menu/>
        <div className="mdl-grid" style={filmPageStyle}>
          <FilmPageImg/>
          <FilmPageDescription/>
        </div>
      </div>
    );
  }

});

module.exports = FilmPage;
