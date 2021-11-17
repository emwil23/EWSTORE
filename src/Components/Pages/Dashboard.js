import React from 'react';
import { connect } from 'react-redux';

//Images and SVGs
import { ReactComponent as IconLogo } from '../../assets/logo-hollow.svg';
import { ReactComponent as IconEle } from '../../assets/cat-ele.svg';
import { ReactComponent as IconJewelary } from '../../assets/cat-jew.svg';
import { ReactComponent as IconMens } from '../../assets/cat-men.svg';
import { ReactComponent as IconWomens } from '../../assets/cat-women.svg';
import { ReactComponent as IconLogout } from '../../assets/logout.svg';

//Components
import ProductCard from './ProductCard';

//Actions
import {
  getAllProducts,
  removeSelectedProduct,
  logOut,
  getCategory,
} from '../../actions';

class Dashboard extends React.Component {
  state = { category: '' };

  componentDidMount() {
    if (this.state.category === '') this.props.getAllProducts();
    else this.props.getCategory(this.state.category);

    this.props.removeSelectedProduct();
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.category !== '') this.props.getCategory(this.state.category);
  }

  render() {
    return (
      <div className='container__dashboard'>
        <div className='dashboard__logo'>
          <IconLogo className='dashboard__logo-icon' />
        </div>
        <div className='empty-space'></div>
        <div className='dashboard__side-menu'>
          <div className='category'>
            <ul className='category__list'>
              <li className='category__list--1'>
                <button
                  className='category__list-btn'
                  onClick={() => this.setState({ category: 'electronics' })}
                >
                  Electronics
                  <div>
                    <IconEle className='category__list-icon' />
                  </div>
                </button>
              </li>
              <li className='category__list--2'>
                <button
                  className='category__list-btn'
                  onClick={() => this.setState({ category: 'jewelery' })}
                >
                  Jewelery
                  <div>
                    <IconJewelary className='category__list-icon' />
                  </div>
                </button>
              </li>
              <li className='category__list--3'>
                <button
                  className='category__list-btn'
                  onClick={() => this.setState({ category: "men's clothing" })}
                >
                  Men's Clothing
                  <div>
                    <IconMens className='category__list-icon' />
                  </div>
                </button>
              </li>
              <li className='category__list--4'>
                <button
                  className='category__list-btn'
                  onClick={() =>
                    this.setState({ category: "women's clothing" })
                  }
                >
                  Women's Clothing
                  <div>
                    <IconWomens className='category__list-icon' />
                  </div>
                </button>
              </li>
            </ul>
          </div>
          <div className='discount-banner'>
            <div className='banner-div'>
              <div className='banner-content'>
                REFER A FRIEND AND GET A DISCOUNT
                <span className='banner-content-span'>25%</span>
              </div>
            </div>
          </div>
        </div>
        {this.props.token === '' ? (
          <div>''</div>
        ) : (
          <div className='dashboard__logout'>
            <button
              className='dashboard__logout-btn'
              onClick={() => this.props.logOut()}
            >
              Log Out
              <IconLogout className='dashboard__logout-icon' />
            </button>
          </div>
        )}
        <div className='dashboard__content'>
          <ProductCard products={this.props.allProducts} />
        </div>
      </div>
    );
  }
}

const stateMapToProps = (state) => {
  return {
    allProducts: state.productList.products,
    // error: state.productList.errors,
    token: state.auth.token,
  };
};

export default connect(stateMapToProps, {
  getAllProducts,
  removeSelectedProduct,
  logOut,
  getCategory,
})(Dashboard);

//FETCHING ALL PRODUCTS
//<ProductCard products={this.props.allProducts} />
