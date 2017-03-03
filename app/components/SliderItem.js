var React = require('react');
var Star = require('./Star');

function SliderItem() {
  var sliderImgStyles = {
      maxHeight: '320px',
      width: 'auto',
      boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 2px 10px rgba(0,0,0,0.23)",
      position: "relative",
      bottom: "-20px",
      left: '30px'

  };
  var sliderTextStyles = {
    color: '#fff'
  }
    return (
      <div>
        <div className="mdl-grid" style={{borderRight:'solid 1px #fff'}}>
        <div className="mdl-cell mdl-cell--6-col">
          <img src="https://d35fkdjhhgt99.cloudfront.net/static/use-media-items/48/47382/upto-700xauto/587a5198/1.jpeg?resolution=0" style={sliderImgStyles}/>
        </div>
        <div style={sliderTextStyles} className="mdl-cell mdl-cell--6-col">
          <h5> La La Land (2017) </h5>
          <Star/><Star/><Star/><Star/><Star/>
          <p> In the near future, a weary Logan cares for an ailing Professor X in a hide out on the Mexican border. But Logan's... </p>
          <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" style={{backgroundColor:'#fff'}}>
            Learn more
          </button>
        </div>
      </div>
      </div>
    );
  }

module.exports = SliderItem ;
