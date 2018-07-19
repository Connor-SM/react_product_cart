import React, { Component } from 'react';
import ProductItem from './productItem';


class Products extends Component {
  render() {
    function twoDecimals(num) {
      return num.toFixed(2);
    }

    let items;
    if (this.props.items) {
      items = this.props.items.filter(this.props.isSearched(this.props.term)).map(item => {
        return <ProductItem key={item.id} item={item} handleRemoveProduct={this.props.handleRemoveProduct} />
      })
    }

    return (
      <div className="Products col-md-6">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
          <tfoot>
            <tr>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col">Total: ${twoDecimals(this.props.total)}</th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default Products;
