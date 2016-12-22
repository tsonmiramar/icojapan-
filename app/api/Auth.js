module.exports = {
  login(username, pass, cb) {
    //console.log(cb);
    // cb = arguments[arguments.length - 1]
    // if (localStorage.token) {
    //   if (cb) cb(true)
    //   this.onChange(true)
    //   return
    // }
    // pretendRequest(email, pass, (res) => {
    //   if (res.authenticated) {
    //     localStorage.token = res.token
    //     if (cb) cb(true)
    //     this.onChange(true)
    //   } else {
    //     if (cb) cb(false)
    //     this.onChange(false)
    //   }
    // })

    if(username == 'adamkun' && pass == 'yamete') {
      localStorage.token = true;
      localStorage.username = username;
      this.onChange(true);
      console.log(this.loggedIn());
      // this.setState({username: 'adamkun'});
      return true;
    }
    else {
      this.onChange(false);
      return false;
    }
  },

  getToken() {
    return localStorage.token
  },

  logout(cb) {
    delete localStorage.token
    if (cb) cb()
    this.onChange(false)
  },

  loggedIn() {
    return !!localStorage.token
  },

  onChange() {}
}

function pretendRequest(email, pass, cb) {
  setTimeout(() => {
    if (email === 'joe@example.com' && pass === 'password1') {
      cb({
        authenticated: true,
        token: Math.random().toString(36).substring(7)
      })
    } else {
      cb({ authenticated: false })
    }
  }, 0)
}
