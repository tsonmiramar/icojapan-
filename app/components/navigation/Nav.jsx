var React = require('react');
var {Link, IndexLink} = require('react-router');
var Auth = require('Auth');
import { browserHistory } from 'react-router';

var Nav = React.createClass({
  logout: function() {
    Auth.logout();
    browserHistory.push('/login');
  },
  componentDidMount: function() {
    $('.dropdown')
      .dropdown({
        // you can use any ui transition
        on: 'hover'
      })
    ;
  },
  render: function() {
      return(
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">
                <button className="teal ui left floated button">
                  <i className="book icon"></i>
                  Ico Japan
                </button>
              </li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li className="menu-text">
                <button className="teal ui button">
                  <i className="search icon"></i>
                  <IndexLink to="/">
                    Search Students
                  </IndexLink>
                </button>
              </li>
              <li className="menu-text">
                <button className="teal ui button">
                  <i className="add user icon"></i>
                  <Link to="/add">Add Students</Link>
                </button>
              </li>
              <li className="menu-text">
                <div className="ui floating dropdown icon button teal">
                  <i className="spy icon"></i>
                  {localStorage.username}
                  <div className="menu teal">
                    <div className="item teal" data-value="profile">Profile</div>
                    <div className="item teal" data-value="logout" onClick={this.logout}>
                        Logout
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      );
  }
});

module.exports = Nav;
