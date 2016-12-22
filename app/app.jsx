var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, browserHistory} = require('react-router');
var SearchStudentsComponent = require('SearchStudentsComponent');
var LoginComponent = require('LoginComponent');
var Auth = require('Auth');
var Main = require('Main');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// Load semantic
require('style!css!semantic-ui/dist/semantic.min.css')

// App css
require('style!css!sass!applicationStyles')

function authenticate(nextState, replaceState) {
  console.log(Auth.loggedIn());
  if (!Auth.loggedIn())
    replaceState({ nextPathname: nextState.location.pathname }, '/login')

}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/login" component={LoginComponent}/>
    <Route path="/" component={Main}>
      <IndexRoute component={SearchStudentsComponent} onEnter={authenticate}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
