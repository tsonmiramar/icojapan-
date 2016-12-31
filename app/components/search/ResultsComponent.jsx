var React = require('react');
var ResultCardComponent = require('ResultCardComponent');

var ResultsComponent = React.createClass({
  render: function() {
    const studentData = this.props.studentData;
    var studentCards = [];
    for (var i=0; i< studentData.length; i++) {
      studentCards.push(<ResultCardComponent key={i} studentDetail={studentData[i]} id={i}/>);
    }
    return (
      <div className=" ui five stackable cards">
        {studentCards}
      </div>
    );
  }
});

module.exports = ResultsComponent;
