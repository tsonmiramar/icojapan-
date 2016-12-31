var React = require('react');
var SearchFormComponent = require('SearchFormComponent');
var ResultsComponent = require('ResultsComponent');
var axios = require('axios');

var SearchStudentsComponent = React.createClass({
  getInitialState: function () {
    return {
      results: false,
      data: null
    };
  },
  handleSearch: function(searchInputs) {
    var thisComponent = this;
    //handle search Application
    axios.post("/search_student", searchInputs)
         .then(function(response){
             thisComponent.setState({
               results:true,
               data: response.data
             });
          })
         .catch(function(err){
           thisComponent.setState({
             results: false,
             data: null
           });
           console.log(err); 
         });
},

  render: function() {
    var {results,data} = this.state;
    function renderResults() {
        if (results) {
          return (
            <div>
              <hr/>
                <ResultsComponent studentData={data}/>
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
