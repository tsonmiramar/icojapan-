var React = require('react');
var SearchFormComponent = require('SearchFormComponent');
var ResultsComponent = require('ResultsComponent');

var SearchStudentsComponent = React.createClass({
  getInitialState: function () {
    return {
      results: false
    }
  },
  handleSearch: function() {
    //handle search Application

    //

    this.setState({
      results: true
      //set results to state
    });
  },

  render: function() {
    var {results} = this.state;

    function renderResults() {
        if (results) {
          return (
            <div>
              <hr/>
              <ResultsComponent />
            </div>
          );
        }
    }

    return(
      <div>
        <SearchFormComponent onSearch={this.handleSearch}/>
        {renderResults()}
      </div>
    );
  }
})

module.exports = SearchStudentsComponent;
