import React from 'react';
  
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'start',
        };
    }

    render() {
      console.log('login');
        return (
        <div>
          <h1>Login</h1>
        </div>
        );
    }
}

export default Login;