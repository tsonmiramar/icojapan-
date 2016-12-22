var React = require('react');
var ResultCardComponent = require('ResultCardComponent');

var ResultsComponent = React.createClass({
  render: function() {
    var studentCards = [];
    for (var i = 0; i < 10; i++) {
      studentCards.push(<ResultCardComponent name="Ly Tits Xuan" id={i}/>);
    }
    return (
      <div className=" ui five stackable cards">
        {studentCards}
      </div>
    );
  }
});

module.exports = ResultsComponent;
