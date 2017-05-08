var React = require('react');
var ReactRouter = require('react-router');
var Link = require('react-router').Link;
var PropTypes = React.PropTypes;
var SearchHandler = require('./SearchHandler');
var drawer = document.querySelector('#drawer');


function Menu(){
  return(
    <div className="mdl-layout">
  <header className="mdl-header whiteBg">
    <div aria-expanded="false" role="button" tabIndex="0" className="mdl-layout__drawer-button">
      <i className="material-icons">menu</i>
    </div>
    <div className="mdl-layout__header-row">
      <div className='mdl-cell mdl-cell--4-col'>
        <SearchHandler/>
      </div>
      <div className=" text-center mdl-cell mdl-cell--4-col">
        <Link to="/">
          <span className="mdl-layout-title">When Release</span>
        </Link>
      </div>
      <div className="mdl-layout-spacer"></div>
      <div className="mdl-cell mdl-cell--4-col">
        <nav className="mdl-navigation">
          <Link className="mdl-navigation__link" to="/">Home</Link>
          <Link className="mdl-navigation__link" to="/popular">Popular</Link>
          <Link className="mdl-navigation__link" to="/latest">Latest</Link>
        </nav>
    </div>
    </div>
  </header>
  <div id="drawer" className="mdl-layout__drawer" aria-hidden="true">
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
