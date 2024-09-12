import React from "react";
import Card from "./Card";
import axios from "axios";

class List extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/clay-most/followers")
      .then(response => {
        this.setState({ friends: response.data });
      });
  }
  render() {
    if (this.state.friends) {
      return (
        <div className="List">
          <h4>These guys think I'm pretty neat!</h4>
          {this.state.friends.map(person => {
            return <Card key={person.id} user={person}></Card>;
          })}
        </div>
      );
    }
    {
      return <div>Just hang on a second</div>;
    }
  }
}

export default List;
