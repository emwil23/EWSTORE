import React from 'react';
import { connect } from 'react-redux';

class CartProducts extends React.Component {
  returnPrice = (products) => {
    let setPrice = 0;
    products.map(({ productId, quantity }) => {
      return (setPrice =
        setPrice + this.props.allProduct[productId - 1].price * quantity);
    });

    return this.props.setPrice(setPrice);
  };

  getProducts = (products) => {
    return products.map(({ productId, quantity }) => {
      return (
        <div className='cartProduct__container' key={productId}>
          <div className='cartProduct__image'>
            <img
              className='cartProduct__image-1'
              alt={productId}
              src={this.props.allProduct[productId - 1].image}
            />
          </div>
          <div className='cartProduct__info'>
            <div className='cartProduct__info-heading heading-3'>
              {this.props.allProduct[productId - 1].title}
            </div>
            <div className='cartProduct__info-content'>
              <div className='cartProduct__info-content--price'>
                ${this.props.allProduct[productId - 1].price}
              </div>
              <div className='cartProduct__info-content--qty'>X {quantity}</div>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <>
        {this.getProducts(this.props.products)}
        {this.returnPrice(this.props.products)}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { allProduct: state.productList.products };
};

export default connect(mapStateToProps)(CartProducts);
