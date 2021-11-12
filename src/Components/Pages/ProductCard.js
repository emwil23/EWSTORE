import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard(props) {
  //Render List
  const renderList = props.products.map((product) => {
    const { id, title, price, image, category } = product;

    return (
      <div className='four wide column' key={id}>
        <Link to={`/products/${id}`}>
          <div className='ui link cards'>
            <div className='card'>
              <div
                className='image'
                style={{
                  height: '250px',
                  padding: '20px',
                  background: '#fff',
                  margin: 'auto',
                }}
              >
                <img
                  src={image}
                  alt={title}
                  style={{ height: '100%', maxWidth: '100%', width: 'auto' }}
                />
              </div>
              <div className='content'>
                <div
                  className='header'
                  style={{
                    height: '48px',
                    overflow: 'hidden',
                    marginBottom: '5px',
                  }}
                >
                  {title}
                </div>
                <div
                  className='meta price'
                  style={{
                    marginBottom: '5px',
                    fontSize: '18px',
                    color: '#333',
                    fontWeight: '600',
                  }}
                >
                  $ {price}
                </div>
                <div className='meta'>{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  //   console.log(props.products.map());

  return <>{renderList}</>;
}

export default ProductCard;
