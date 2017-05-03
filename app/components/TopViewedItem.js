var React = require('react');
var GridItemImg = require('./GridItemImg');
var axios = require('axios');

var TopViewedItem = React.createClass({
  getInitialState: function() {
    return {
      crew: []
    };
  },
componentWillMount: function() {
  var _this = this
  this.serverRequest =
  axios.get("https://api.themoviedb.org/3/movie/"+this.props.filmId+"/credits?api_key=fe497b618e596d47a41279dafb0d1cbf")
    .then(function(result) {
      _this.setState({
        crew: result.data.crew
      });
    })
},
  render: function(props) {
    var directorName = ''
    this.state.crew.slice(0, 1).map(function(director) {
      directorName = director.name
    })
  var imgStyles = {
    width: "20%",
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 2px 10px rgba(0,0,0,0.23)",
    marginRight:"20px"
  };
    return (
      <div className="mdl-list__item" >
        <span className="mdl-list__item-primary-content">
          <img src={'https://image.tmdb.org/t/p/original'+ this.props.imgSrc} style={imgStyles}/>
          <div>
          <span>{this.props.name}</span>
          <p style={{fontWeight:"300"}}> by {directorName}</p>
          </div>
        </span>
      </div>
    );
  }
})
module.exports = TopViewedItem;
