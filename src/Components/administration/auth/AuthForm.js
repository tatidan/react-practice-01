import React, { Component} from 'react';

class AuthForm extends Component {
  state = {
    email: "",
    password:""
  }
  
  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });

    // console.group("e target")
    // console.log(e.target.name);
    // console.log(e.target.value);
    // console.groupEnd()
  }

  onHandleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    console.log({ email, password });
    //тут должна быть отправка данных на бэкенд
    // axios.post("https://", { email, password });
    //axios теперь вместо fetch
    this.setState({ email: "", password:""})
  }

  render() {
      const { email, password } = this.state;
    return (
      <>
        <form className="authForm" onSubmit={ this.onHandleSubmit}>
          <label className="authLabel">
            Email
            <input type="email" name="email"
              value={email}
              onChange={this.onHandleChange}/>
          </label>
        
          <label className="authLabel">
            Password
              <input type="text" name="password"
              value={password}
              onChange={this.onHandleChange}
            // type="password" дает на экран буллиты вместо text
            />
          </label>
          
          <button type="submit">
            REGISTER
            {/* {route.path === "/register" ? "Register" : "Login"} */}
          </button>

        </form>
      </>
    );
  }
}

export default AuthForm;