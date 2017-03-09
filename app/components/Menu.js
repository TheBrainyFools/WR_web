var React = require('react');
var PropTypes = React.PropTypes;

function Menu (){
  return(
    <div>
  <header className="mdl-header whiteBg">
    <div className="mdl-layout__header-row">
      <div className='mdl-cell mdl-cell--4-col'>
        <form action="#">
          <label className="mdl-button mdl-js-button mdl-button--icon">
          <i className="material-icons">search</i>
          </label>
    <div className="mdl-textfield mdl-js-textfield">
      <input className="mdl-textfield__input" type="text"/>
      <label className="mdl-textfield__label">Search</label>
    </div>
  </form>
      </div>
      <div className=" text-center mdl-cell mdl-cell--4-col">
      <span className="mdl-layout-title">When Release</span>
      </div>
      <div className="mdl-cell mdl-cell--4-col">
      <nav className="mdl-navigation">
        <a className="mdl-navigation__link" href="">Home</a>
        <a className="mdl-navigation__link" href="">Books</a>
        <a className="mdl-navigation__link" href="">Films</a>
        <a className="mdl-navigation__link" href="">Latest</a>
      </nav>
    </div>
    </div>
  </header>
  <div className="mdl-layout__drawer">
    <span className="mdl-layout-title">Title</span>
    <nav className="mdl-navigation">
      <a className="mdl-navigation__link">Link</a>
      <a className="mdl-navigation__link">Link</a>
      <a className="mdl-navigation__link">Link</a>
      <a className="mdl-navigation__link">Link</a>
    </nav>
  </div>
</div>
  )
}

module.exports = Menu;
