var React = require('react');
var PropTypes = React.PropTypes;
var Menu = require('./Menu');
var FilmPageImg = require('./FilmPageImg');
var FilmPageDescription = require('./FilmPageDescription');
var FilmPlot = require('./FilmPlot');
var SidebarSingle = require('./SidebarSingle');
var Comments = require('./Comments')
var axios = require('axios');


var FilmPage = React.createClass({

  getInitialState: function() {
    return {
      filmInfo: [],
      filmCast: [],
      genres: [],
      crew: []
    };
  },
  componentDidMount: function() {
    var _this = this;
    var id = this.props.params.id;
     this.serverRequest =
      axios.get("https://api.themoviedb.org/3/movie/"+id+"?api_key=fe497b618e596d47a41279dafb0d1cbf")
        .then(function(result) {
          _this.setState({
            filmInfo: result.data,
            genres: result.data.genres
          });
        })
      axios.get("https://api.themoviedb.org/3/movie/"+id+"/credits?api_key=fe497b618e596d47a41279dafb0d1cbf")
        .then(function(result) {
          _this.setState({
            filmCast: result.data.cast,
            crew: result.data.crew
          });
        })
  },
  contextTypes: {
    PopularPosts: React.PropTypes.array
  },
  render: function() {
    var filmPageStyle = {
      boxShadow:"0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)",
      backgroundColor: "#fff",
      padding: "10px",
      marginTop:"30px",
      marginRight:"auto",
      marginLeft:"auto"
    };
    return (
      <div>
        <div className="mdl-grid transition-item">
        <SidebarSingle/>
        <div className="mdl-cell--8-col" style={filmPageStyle}>
          <div className="mdl-grid">
          <FilmPageImg imgSrc={this.state.filmInfo.poster_path}/>
          <FilmPageDescription filmInfo={this.state.filmInfo} filmCast={this.state.filmCast} genres={this.state.genres} crew={this.state.crew}/>
          <FilmPlot filmPlot={this.state.filmInfo.overview}/>
            <Comments/>
          </div>
        </div>
      </div>
      </div>
    );
  }

});

module.exports = FilmPage;
