import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//Actions
import { getSelectedProduct } from '../../actions';

//SVGs and Images
// import { ReactComponent as IconLogo } from '../../assets/logo-hollow.svg';
import { ReactComponent as Iconrating } from '../../assets/rating.svg';

class ProductSelect extends React.Component {
  componentDidMount() {
    // console.log(this.props.match.params.id);
    this.props.getSelectedProduct(this.props.match.params.id);
  }

  render() {
    const { image, title, price, category, description, id, rating } =
      this.props.selectedProduct;

    return Object.keys(this.props.selectedProduct).length === 0 ? (
      <div className='loader__container'>
        <div class='loading'>
          <div class='dot'></div>
          <div class='dot'></div>
          <div class='dot'></div>
          <div class='dot'></div>
        </div>
      </div>
    ) : (
      <div className='proSelect__container'>
        <div className='proSelect__logo'>
          {/* <IconLogo className='proSelect__logo-icon' /> */}
        </div>
        <div className='proSelect__container-inner'>
          <div className='product__container'>
            <div className='proSelect__back'>
              <Link to={'/dashboard'}>
                <button className='backToHome-btn'>&lt;</button>
              </Link>
            </div>
            <div className='product__image'>
              <img src={image} alt={id} className='product__image-img' />
            </div>
            <div className='product__details'>
              <div className='product__details--title heading-2'>{title}</div>
              <div className='seperator' />
              <div className='product__details--price heading-2'>${price}</div>
              <div className='product__details--category heading-3'>
                {category}
              </div>
              <div className='product__details--rating'>
                <div className='product__details--rating-icon'>
                  <Iconrating className='product__details--rating-icon-1' />
                </div>
                <div className='product__details--rating-stats'>
                  <div className='product__details--rating-rate heading-3'>
                    {rating.rate}
                  </div>
                  <div className='product__details--rating-count heading-3'>
                    votes: {rating.count}
                  </div>
                </div>
              </div>
              <div className='product__details--description heading-3'>
                {description}
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
