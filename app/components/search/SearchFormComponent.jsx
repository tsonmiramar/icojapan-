var React = require('react');

var SearchFormComponent = React.createClass({
  getInitialState: function() {
    return ({searchIsClicked: false})
  },
  searchClick: function(e) {
    e.preventDefault();

    var searchInputs = {
      firstName: this.refs.firstName.value,
      lastName: this.refs.lastName.value,
      age: this.refs.age.value,
      school: this.refs.school.value
    };

    this.props.onSearch(searchInputs);
  },
  render: function() {
    return (
        <div className="searchForm">
          <div className="ui segment" onSubmit={this.searchClick}>
            <div className="ui top left attached label">Search Students</div>
            <form className="ui form">
            <div className="field">
              <label>Name</label>
              <div className="two fields">
                <div className="field">
                  <input type="text" name="firstName" placeholder="First Name" pattern="[A-Za-z]" ref="firstName"/>
                </div>
                <div className="field">
                  <input type="text" name="lastName" placeholder="Last Name" pattern="[A-Za-z]" ref="lastName"/>
                </div>
              </div>
            </div>
            <div className="field">
              <label>Age</label>
              <input type="number" name="age" placeholder="Age" ref="age"/>
            </div>
            <div className="field">
              <label>School</label>
              <input type="text" name="school" placeholder="School" ref="school"/>
            </div>
            <button className="searchButton ui button teal" align="center">Search</button>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = SearchFormComponent;
