var React = require('react');
var ReactRouter = require('react-router');
var Link = require('react-router').Link;
var PropTypes = React.PropTypes;
var Search = require('./Search');

function Menu (){
  return(
    <div>
  <header className="mdl-header whiteBg">
    <div className="mdl-layout__header-row">
      <div className='mdl-cell mdl-cell--4-col'>
        <Search/>
      </div>
      <div className=" text-center mdl-cell mdl-cell--4-col">
        <Link to="/">
          <span className="mdl-layout-title">When Release</span>
        </Link>
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
