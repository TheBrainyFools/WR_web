var React = require('react');
var PropTypes = React.PropTypes;
var ReactRouter = require('react-router');
var Link = require('react-router').Link;


var Search = React.createClass({

  render: function(props) {
    return (
      <form onSubmit={this.props.onSubmitSearch}>
        <label className="mdl-button mdl-js-button mdl-button--icon">
          <Link to={"/search/"+this.props.searchWord}>
            <button type="submit">
            <i className="material-icons">search</i>
            </button>
          </Link>
        </label>
        <div className="mdl-textfield mdl-js-textfield">
          <input className="mdl-textfield__input" type="text"
            onChange={this.props.onUpdateSearch}
            value={this.props.searchWord}/>
          <label className="mdl-textfield__label">Search</label>
        </div>
      </form>
    );
  }
});
Search.propTypes = {
onSubmitSearch: PropTypes.func.isRequired,
onUpdateSearch: PropTypes.func.isRequired,
searchWord: PropTypes.string.isRequired,
}

module.exports = Search;
