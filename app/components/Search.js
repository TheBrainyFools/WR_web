var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = require('react-router').Link;

function Search() {
    return (
      <form action="#">
        <label className="mdl-button mdl-js-button mdl-button--icon">
          <Link to="/searchResult">
            <i className="material-icons">search</i>
          </Link>
        </label>
        <div className="mdl-textfield mdl-js-textfield">
          <input className="mdl-textfield__input" type="text"/>
          <label className="mdl-textfield__label">Search</label>
        </div>
      </form>
    );
  }

module.exports = Search;
