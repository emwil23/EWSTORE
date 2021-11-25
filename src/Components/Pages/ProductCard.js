import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard(props) {
  //Render List
  const renderList = props.products.map((product) => {
    const { id, title, price, image, description } = product;

    return (
      <Link to={`/EWSTORE/products/${id}`}>
        <div className='card'>
          <img className='card__img' src={image} alt={id} />
          <div className='card__overlay'>
            <div className='card__header'>
              <svg className='card__arc' xmlnsXlink='http://www.w3.org/200/svg'>
                <path d='M 40 80 c 22 0 40 -22 40 -40 v 40 Z' />
              </svg>
              <div className='card__header-text'>
                <h3 className='card__title'>{title}</h3>
                <span className='card__price'>{'$ ' + price}</span>
              </div>
            </div>
            <p className='card__description'>{description}</p>
          </div>
        </div>
      </Link>
    );
  });
  //   console.log(props.products.map());

  return <>{renderList}</>;
}

export default ProductCard;

/* DEMO OF THE CODE
<a href="" class="card">
      <img src="https://i.imgur.com/oYiTqum.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">Jessica Parker</h3>            
            <span class="card__status">1 hour ago</span>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
*/
