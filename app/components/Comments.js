var React = require('react');
var PropTypes = React.PropTypes;

var Comments = React.createClass({
  callComments: function() {
    _hcwp = window._hcwp || [];
    _hcwp.push({widget:"Stream", widget_id: 84767});
    (function() {
    if("HC_LOAD_INIT" in window)return;
    HC_LOAD_INIT = true;
    var lang = (navigator.language || navigator.systemLanguage || navigator.userLanguage || "en").substr(0, 2).toLowerCase();
    var hcc = document.createElement("script"); hcc.type = "text/javascript"; hcc.async = true;
    hcc.src = ("https:" == document.location.protocol ? "https" : "http")+"://w.hypercomments.com/widget/hc/84767/"+lang+"/widget.js";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hcc, s.nextSibling);
    })();
  },
  render: function() {
    return (
      <div id="hypercomments_widget" className="mdl-cell--12">
        <script type="text/javascript">
          {this.callComments()}
        </script>
      </div>
    );
  }

});

module.exports = Comments;
