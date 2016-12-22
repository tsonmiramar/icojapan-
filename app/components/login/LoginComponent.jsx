var React = require('react');
var Auth = require('Auth');
var {Link} = require('react-router');
import { browserHistory } from 'react-router';

var LoginComponent = React.createClass({
  getInitialState: function() {
    return {errorMessage: null}
  },
  login: function(e) {
    e.preventDefault();
    var username = this.refs.username.value;
    var password = this.refs.password.value;

    if (username == null || username == '') {
      this.setState({
        errorMessage: 'Please enter Username'
      });
    }
    else if (password == null || password == '') {
      this.setState({
        errorMessage: 'Please enter Password'
      });
    }
    else {
      var result = Auth.login(username, password);

      if (!result) {
        this.setState({
          errorMessage: 'Username or Password incorrect'
        });
      }
    }

    browserHistory.push('/');
  },
  componentWillReceiveProps(nextProps) {
    this.setState({
        children: nextProps.children
    });
  },
  render: function() {
    var errorMessage = this.state.errorMessage;
    console.log(errorMessage);
    function renderErrorMessage() {
      if (errorMessage != null && errorMessage != '') {
        console.log('suck');
        return (
          <div>
            <br/>
            <div className="ui form error loginErrorForm">
              <div className="ui error message">
                <div className="header">Error</div>
                <p className="headerMessage">{errorMessage}</p>
              </div>
            </div>
          </div>
        );
      }
      else {
        return (
          <div>
            <br/>
            <br/>
            <br/>
          </div>
        )
      }
    }

    return (
      <div>
        {renderErrorMessage()}
        <br/>
        <h1 className="logo ui header teal">
          <img className="ui image" src={require ('app/images/school.png')}/>
          <div className="content teal">
            Ico Japan
          </div>
        </h1>
        <div className="searchForm">
          <div className="ui segment" >
            <div className="ui top attached label">Login</div>
            <form className="ui form">
              <div className="field">
                <label>Username</label>
                <input type="text" name="username" placeholder="Username" ref="username"/>
              </div>
              <div className="field">
                <label>Password</label>
                <input type="password" name="password" placeholder="Password" ref="password"/>
              </div>
              <button className="loginButton ui teal button" align="center" type="submit" onClick={this.login}>
                Login
              </button>
            </form>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
});

module.exports = LoginComponent;
