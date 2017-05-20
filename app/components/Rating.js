var React = require('react');
var $ = require("jquery");

var Rating = React.createClass({
    propTypes: {
        disabled: React.PropTypes.bool
    },
    componentDidMount: function() {
      window.randomize = function() {
		$('.radial-progress').each(function() {
			var transform_styles = ['-webkit-transform', '-ms-transform', 'transform'];
      $(this).find('span').fadeTo('slow', 1);
			var score = $(this).data('score');
			var deg = (((100 / 10) * score) / 100) * 180;
			var rotation = deg;
			var fill_rotation = rotation;
			var fix_rotation = rotation * 2;
			for(i in transform_styles) {
				$(this).find('.circle .fill, .circle .mask.full').css(transform_styles[i], 'rotate(' + fill_rotation + 'deg)');
				$(this).find('.circle .fill.fix').css(transform_styles[i], 'rotate(' + fix_rotation + 'deg)');
			}
		});
	}
	setTimeout(window.randomize, 200);
    },
    render(props) {
        return (
                <div className="radial-progress" data-score={this.props.rating}>
                    <div className="circle">
                        <div className="mask full">
                            <div className="fill"></div>
                        </div>
                        <div className="mask half">
                            <div className="fill"></div>
                            <div className="fill fix"></div>
                        </div>
                    </div>
                    <div className="inset">
                        <span className='big'>{this.props.rating}
                        </span>
                        <span className='little'>/ 10</span>
                    </div>
                </div>
        );
    }
});

module.exports = Rating;
