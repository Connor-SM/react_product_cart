import React, { Component } from 'react';
import AnimalInfo from './animalInfo';


class Animals extends Component {
  render() {
    let animals;
    if (this.props.animals) {
      animals = this.props.animals.map(animal => {
        return <AnimalInfo key={animal.name} animal={animal} />
      })
    }

    return (
      <div className="Animals col-md-12">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Species</th>
              <th scope="col">Foods - Likes</th>
              <th scope="col">Foods - Dislikes</th>
            </tr>
          </thead>
          <tbody>
            {animals}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Animals;
