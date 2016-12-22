var React = require('react');

var ResultModalComponent = React.createClass({
  render: function() {
    var modalId = this.props.modalId;
    var studentDetail = this.props.studentDetail;
    return (
      <div className="ui modal" id={modalId}>
        <i className="close icon"></i>
        <div className="header">
          {studentDetail.name}
        </div>
        <div className="image content">
          <div className="ui medium image">
            <img src="https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/15219663_10207875298461068_6183857438634643977_n.jpg?oh=b163f3b5170f5ad9a671fafbf66864fe&oe=58BA43CF"/>
          </div>
          <div className="description">
            <div className="ui header">This is a rapist</div>
            <p>Age: {studentDetail.age}</p>
            <p>School: {studentDetail.school}</p>
            <p>Occupation: {studentDetail.occupation}</p>
          </div>
        </div>
        <div className="actions">
          <div className="ui black deny button">
            Remove
          </div>
          <div className="ui positive right labeled icon button">
            Done
            <i className="checkmark icon"></i>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ResultModalComponent;
