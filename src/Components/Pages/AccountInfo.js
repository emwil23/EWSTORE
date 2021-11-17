import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//Images and SVGs
import { ReactComponent as IconLogo } from '../../assets/logo-hollow.svg';
import { ReactComponent as IconAvatar } from '../../assets/avatar.svg';
import MapBox from './MapBox';

class AccountInfo extends React.Component {
  render() {
    return (
      <div className='container__acountinfo'>
        <div className='info__logo'>
          <IconLogo className='info__logo-icon' />
        </div>
        <div className='info__menu'></div>
        <div className='info__content'>
          <div className='info__content-container'>
            <div className='info-header heading-2'>Personal Details</div>
            <div className='info-name'>
              <div className='info-name--avatar'>
                <IconAvatar className='info-name--avatar-1' />
              </div>
              <div className='info-name--first'>
                {this.props.userDetail.name.firstname}
              </div>
              <div className='info-name--last'>
                {this.props.userDetail.name.lastname}
              </div>
            </div>
            {/* <div className='seperator' /> */}
            <div className='info-email'>
              <div className='info-email--header heading-3'>Email</div>
              <input
                className='info-email--content'
                value={this.props.userDetail.email}
                readOnly={true}
              ></input>
            </div>
            <div className='info-userDetails'>
              <div className='info-userDetails--header heading-3'>
                Username and Password
              </div>
              <div className='info-userDetails--content'>
                <input
                  className='info-userDetails--username'
                  value={this.props.userDetail.username}
                  readOnly={true}
                ></input>
                <input
                  className='info-userDetails--password'
                  value={this.props.userDetail.password}
                  readOnly={true}
                ></input>
              </div>
            </div>
            <div className='info-phone'>
              <div className='info-phone--header heading-3'>Phone</div>
              <input
                className='info-phone--content'
                value={this.props.userDetail.phone}
                readOnly={true}
              ></input>
            </div>
            <div className='info-address'>
              <div className='info-address--header heading-3'>Address</div>
              <div className='info-address--content'>
                <input
                  className='info-address--number'
                  value={this.props.userDetail.address.number}
                  readOnly={true}
                ></input>
                <input
                  className='info-address--street'
                  value={this.props.userDetail.address.street}
                  readOnly={true}
                ></input>
                <input
                  className='info-address--city'
                  value={this.props.userDetail.address.city}
                  readOnly={true}
                ></input>
                <input
                  className='info-address--zip'
                  value={this.props.userDetail.address.zipcode}
                  readOnly={true}
                ></input>
              </div>
            </div>
            <div className='info-address--map'>
              <div className='info-address--header heading-3'>
                LoggedIn location
              </div>
              <MapBox />
            </div>
            <div className='backToHome'>
              <Link to={'/dashboard'}>
                <button className='backToHome-btn'>&lt;</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { userDetail: state.auth.userInfo };
};

export default connect(mapStateToProps)(AccountInfo);
