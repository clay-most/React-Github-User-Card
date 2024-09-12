import React from "react";
import List from "./Components/List";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    axios.get("https://api.github.com/users/clay-most").then(response => {
      this.setState({ user: response.data });
    });
  }

  render() {
    if (this.state.user) {
      return (
        <div className="App">
          {console.log(this.state)}
          <h1>I'm {this.state.user.login}</h1>
          <img
            src={`${this.state.user.avatar_url}`}
            alt={this.state.user.name}
          ></img>
          <List></List>
        </div>
      );
    }
    {
      return <div>Just wait a moment</div>;
    }
  }
}

export default App;
