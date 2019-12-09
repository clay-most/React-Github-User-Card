import React from "react";

class Card extends React.Component {
  render() {
    return (<div className="Card">{this.props.user.login}</div>);
  }
}

export default Card;
