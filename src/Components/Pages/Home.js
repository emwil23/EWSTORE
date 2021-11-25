import React from 'react';
import { Link } from 'react-router-dom';

//SVG's
import { ReactComponent as IconApp } from '../../assets/logo-hollow.svg';
import { ReactComponent as IconSale } from '../../assets/home-sale.svg';
import { ReactComponent as IconBlob } from '../../assets/home-blob.svg';

class Home extends React.Component {
  render() {
    return (
      <div className='container__home'>
        <div className='home__header'>
          <div className='home__header-icon'>
            <IconApp className='home__header-icon' />
          </div>
          <IconBlob className='home__header-blob' />
        </div>
        <div className='home__body'>
          <div className='home__body-icon'>
            <IconSale className='home__body-icon' />
          </div>
          <div className='home__body-info'>
            <h1 className='home__body-info--title heading-1'>Welcome</h1>
            <h3 className='home__body-info--sub heading-2'>
              Your Shop Your Choices
            </h3>
            <p className='home__body-info--desc text-1'>
              This uses FakeStoreAPI, all the info you see are fake and genrated
              by the API.
            </p>
            <Link to={'/EWSTORE/dashboard'}>
              <button className='btn-shopnow'>Enter Shop</button>
            </Link>
            {/* <Link className='btn-shopnow' to={'/dashboard'}>
              Enter Shop
            </Link> */}
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
