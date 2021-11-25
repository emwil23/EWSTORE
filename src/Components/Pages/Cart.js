import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getAllProducts } from '../../actions';

//Components
import Accordian from '../Accordian';
import CartProducts from './CartProducts';

//SVGs and Images
// import { ReactComponent as IconLogo } from '../../assets/logo-hollow.svg';

class Cart extends React.Component {
  state = { isActive: false, totalPrice: 0 };

  setPrice = (price) => {
    this.setState({ totalPrice: price + 10 });
  };

  componentDidMount() {
    this.props.getAllProducts();
  }

  render() {
    const { number, street, city, zipcode } = this.props.ship;
    const { firstname, lastname } = this.props.name;

    return Object.keys(this.props.cart).length === 0 ? (
      <div className='loader__container'>
        <div class='loading'>
          <div class='dot'></div>
          <div class='dot'></div>
          <div class='dot'></div>
          <div class='dot'></div>
        </div>
      </div>
    ) : (
      <div className='cart__container-main'>
        <div className='cart__logo'>
          {/* <IconLogo className='cart__logo-icon' /> */}
        </div>
        <div className='cart__container-secondary'>
          <div className='cart__content'>
            <div className='cart__back'>
              <Link to={'/EWSTORE/dashboard'}>
                <button className='backToHome-btn'>&lt;</button>
              </Link>
            </div>
            <div className='cart__col1'>
              <div className='cart__shipping'>
                <div className='cart__shipping--header heading-3'>
                  Shipping Details &#10003;
                </div>
                <div className='cart__shipping--text'>
                  {firstname} {lastname}, {number}, {street}, {city}, {zipcode}
                </div>
              </div>

              <div className='cart__payment'>
                <div className='cart__payment--header heading-3'>
                  Payment Methods
                </div>
                <Accordian
                  title={'Google / Apple wallets'}
                  content={
                    <form className='cart__form'>
                      <div className='cart__form-item'>
                        {/* <label className='cart__form--label'>Wallet Id</label> */}
                        <input
                          type='text'
                          className='cart__form--input'
                          placeholder='Wallet Id'
                          required
                        />
                      </div>
                      <button
                        className='cart__form--btn'
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        PAY $ {this.state.totalPrice}
                      </button>
                    </form>
                  }
                />
                <Accordian
                  title={'UPI'}
                  content={
                    <form className='cart__form'>
                      <div className='cart__form-item'>
                        {/* <label className='cart__form--label'>UPI Id</label> */}
                        <input
                          type='text'
                          className='cart__form--input'
                          placeholder='UPI Id'
                          required
                        />
                      </div>
                      <button
                        className='cart__form--btn'
                        onClick={(e) => e.preventDefault()}
                      >
                        PAY $ {this.state.totalPrice}
                      </button>
                    </form>
                  }
                />
              </div>
            </div>
            <div className='cart__col2'>
              <div className='order__list'>
                <div className='order__list-header heading-2'>Your Order</div>
                <div className='order__list-items'>
                  <CartProducts
                    products={this.props.cart.products}
                    setPrice={this.setPrice}
                  />
                </div>
                <div className='seperator' />
                <div className='order__list-extra'>
                  <div className='order__list-extra--delivery'>
                    <div className='order__list-extra--delivery-text'>
                      Delivery
                    </div>
                    <div className='order__list-extra--delivery-price'>
                      $20(2days)
                    </div>
                  </div>
                  <div className='order__list-extra--discount'>
                    <div className='order__list-extra--discount-text'>
                      Discount
                    </div>
                    <div className='order__list-extra--discount-price'>
                      -$10
                    </div>
                  </div>
                </div>
                <div className='order__list-payment'>
                  <div className='order__list-payment--text'>Total Price</div>
                  <div className='order__list-payment--price'>
                    $ {this.state.totalPrice}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ship: state.auth.userInfo.address,
    products: state.productList.products,
    name: state.auth.userInfo.name,
    cart: state.productList.cart,
  };
};

export default connect(mapStateToProps, {
  getAllProducts,
})(Cart);
