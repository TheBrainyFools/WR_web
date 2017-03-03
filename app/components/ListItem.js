var React = require('react');

const ListItem = (props) => {

  return (
    <div className="mdl-list__item" >
      <span className="mdl-list__item-primary-content">
        <i className="material-icons mdl-list__item-avatar"></i>
        <span>{props.name}</span>
      </span>
    </div>
  )
}

module.exports = ListItem;
