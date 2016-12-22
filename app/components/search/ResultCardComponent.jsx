var React = require('react');
var ResultModalComponent = require('ResultModalComponent');
var ResultCardComponent = React.createClass({
  renderModal: function() {
    var modalId = this.props.id;
    $('#' + modalId)
      .modal('show')
    ;
  },
  render: function() {
    var studentDetail = {
      age: 69,
      school: "JAV",
      occupation: "Rapist",
      name: this.props.name
    }
    return(
        <div className="ui card">
          <div className="content">
            <div className="header">{studentDetail.name}</div>
            <div className="meta">
              <div className="right floated author">
                <img className="ui avatar image" src="https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/15219663_10207875298461068_6183857438634643977_n.jpg?oh=b163f3b5170f5ad9a671fafbf66864fe&oe=58BA43CF"/> Zin
              </div>
              <span className="category">Animals</span>
            </div>
            <div className="description">
              <p>Age: {studentDetail.age}</p>
              <p>School: {studentDetail.school}</p>
              <p>Occupation: {studentDetail.occupation}</p>
            </div>
          </div>
          <div className="extra content">
            <div className="extra content">
              <button className="ui right floated button">
                <i className="remove user icon"></i>
                Remove
              </button>
              <button className="ui left floated button" onClick={this.renderModal}>
                <i className="edit icon"></i>
                Edit
              </button>
            </div>
          </div>
          <ResultModalComponent modalId={this.props.id}
                                studentDetail = {studentDetail}
                                />

        </div>
    );
  }
});

module.exports = ResultCardComponent;
