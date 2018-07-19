import React, { Component } from 'react';

class AnimalInfo extends Component {
  render() {
    return (
      <tr className="AnimalInfo">
        <th scope="row">{this.props.animal.name}</th>
        <td>{this.props.animal.species}</td>
        <td>{this.props.animal.foods.likes}</td>
        <td>{this.props.animal.foods.dislikes}</td>
      </tr>
    );
  }
}

export default AnimalInfo;
