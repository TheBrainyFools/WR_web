var React = require('react');
var Link = require('react-router').Link;

const ListItem = (props) => {

  return (
    <div className="mdl-list__item" >
      <span className="mdl-list__item-primary-content">
        <div style={{
            backgroundImage:'url('+props.imgSrc+')',
            backgroundSize:'cover',
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 2px 10px',
            width:50+'px',
            height:50+'px',
            marginRight:'15px',
            borderRadius:100+'%'}}>
        </div>
      <span>{props.name}</span>
      </span>
    </div>
  )
}

module.exports = ListItem;
