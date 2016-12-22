var React = require('react');
var SearchFormComponent = require('SearchFormComponent');
var ResultsComponent = require('ResultsComponent');
var axios = require('axios');

var SearchStudentsComponent = React.createClass({
  getInitialState: function () {
    return {
      results: false
    }
  },
  handleSearch: function() { 
    //handle search Application
    axios.post("/search_student", searchInputs)
         .then(function(response){
             console.log(response); 
             this.setState({
             results: true
             });
         })
         .catch(function(err){
              this.setState({
              results: false
              });
              console.log(err); 
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
