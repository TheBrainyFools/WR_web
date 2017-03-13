var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = require('react-router').Link;

function Search(props) {
    return (
      <form onSubmit={props.onSubmitSearch}>
        <label className="mdl-button mdl-js-button mdl-button--icon">
          <Link to={"/search/"+props.searchWord}>
            <button type="submit">
            <i className="material-icons">search</i>
            </button>
          </Link>
        </label>
        <div className="mdl-textfield mdl-js-textfield">
          <input className="mdl-textfield__input" type="text"
            onChange={props.onUpdateSearch}
            value={props.searchWord}/>
          <label className="mdl-textfield__label">Search</label>
        </div>
      </form>
    );
  }

  Search.propTypes = {
  onSubmitSearch: PropTypes.func.isRequired,
  onUpdateSearch: PropTypes.func.isRequired,
  searchWord: PropTypes.string.isRequired,
}

module.exports = Search;
