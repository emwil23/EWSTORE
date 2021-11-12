import React from 'react';
import { connect } from 'react-redux';

//Components
import ProductCard from './ProductCard';

//Actions
import { getAllProducts, removeSelectedProduct } from '../../actions';

class Dashboard extends React.Component {
  state = { catchError: '' };

  componentDidMount() {
    this.props.getAllProducts(this.props.token);
    this.props.removeSelectedProduct();
  }

  render() {
    return this.props.error !== 'ERROR' ? (
      <div
        className='ui stackable grid container'
        style={{ marginTop: '45px', background: '#fff' }}
      >
        <ProductCard products={this.props.allProducts} />
      </div>
    ) : (
      <div>NOT LOGGED IN</div>
    );
  }
}

const stateMapToProps = (state) => {
  return {
    allProducts: state.productList.products,
    error: state.productList.errors,
    token: state.auth.token,
  };
};

export default connect(stateMapToProps, {
  getAllProducts,
  removeSelectedProduct,
})(Dashboard);
