import React from 'react';
import { connect } from 'react-redux';

//Actions
import { getSelectedProduct } from '../../actions';

class ProductSelect extends React.Component {
  componentDidMount() {
    // console.log(this.props.match.params.id);
    this.props.getSelectedProduct(this.props.match.params.id);
  }

  render() {
    const { image, title, price, category, description } =
      this.props.selectedProduct;
    console.log(image);

    return Object.keys(this.props.selectedProduct).length === 0 ? (
      <div class='ui segment' style={{ height: '100vh' }}>
        <div class='ui active inverted dimmer'>
          <div class='ui indeterminate text loader'>Preparing Files</div>
        </div>
        <p></p>
      </div>
    ) : (
      <div className='ui placeholder segment' style={{}}>
        <div className='ui two column stackable center aligned grid'>
          <div className='ui vertical divider'>AND</div>
          <div className='middle aligned row'>
            <div
              className='column lp'
              style={{
                padding: '20px 40px 20px 20px',
                alignSelf: 'flex-start !important',
                height: '75%',
              }}
            >
              <img
                className='ui fluid image'
                src={image}
                style={{ height: '100%' }}
              />
            </div>
            <div
              className='column rp'
              style={{
                padding: '20px 20px 20px 40px',
                alignSelf: 'flex-start !important',
                textAlign: 'left',
              }}
            >
              <h1 style={{ color: '#333' }}>{title}</h1>
              <h2>
                <a className='ui teal tag label' style={{ fontSize: '22px' }}>
                  ${price}
                </a>
              </h2>
              <h3 className='ui brown block header'>{category}</h3>
              <p style={{ fontSize: '18px', color: '#777' }}>{description}</p>
              <div className='ui vertical animated button' tabIndex='0'>
                <div className='hidden content'>
                  <i className='shop icon'></i>
                </div>
                <div className='visible content'>Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { selectedProduct: state.productList.product };
};

export default connect(mapStateToProps, { getSelectedProduct })(ProductSelect);
