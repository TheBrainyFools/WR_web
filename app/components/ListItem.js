var React = require('react');
var Link = require('react-router').Link;

const ListItem = (props) => {

  return (
    <div className="mdl-list__item" >
      <span className="mdl-list__item-primary-content">
        <i className="shadow1 material-icons mdl-list__item-avatar"></i>
        <Link to="/searchResultsByAuthor"><span>{props.name}</span></Link>
      </span>
    </div>
  )
}

module.exports = ListItem;
