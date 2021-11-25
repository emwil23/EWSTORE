import React from 'react';
import { Link } from 'react-router-dom';

//Images and SVGs
import { ReactComponent as IconAbout } from '../../assets/about.svg';
import sprite from '../../assets/sprite.svg';

const About = () => {
  return (
    <div className='about__container-main'>
      <div className='about__container-secondary'>
        <div className='about__back'>
          <Link to={'/dashboard'}>
            <button className='backToHome-btn'>&lt;</button>
          </Link>
        </div>
        <div className='about__content'>
          <div className='about__content-info'>
            <div className='about__content-info--title heading-2'>
              Emmanuel Wilson
            </div>
            <div className='seperator about__content-info--seperator' />
            <p className='about__content-info--text'>
              Hi There! Hope you liked my work. If you did then checkout my
              other works on my github, or connect with me lets have a talk
              about your upcoming project.
            </p>
            <div className='about__content-info--connect'>
              <svg
                className='about__content-info--connect-icon'
                title='github'
                onClick={() =>
                  window.open('https://github.com/emwil23', '_blank')
                }
              >
                <use xlinkHref={sprite + '#icon-github'} />
              </svg>
              <svg
                className='about__content-info--connect-icon'
                title='instagrem'
                onClick={() =>
                  window.open('https://www.instagram.com/iam_e.w/', '_blank')
                }
              >
                <use xlinkHref={sprite + '#icon-instagrem'} />
              </svg>
              <svg
                className='about__content-info--connect-icon'
                title='linkdin'
                onClick={() =>
                  window.open('https://www.linkedin.com/in/ewilly/', '_blank')
                }
              >
                <use xlinkHref={sprite + '#icon-linkedin-alt'} />
              </svg>
            </div>
          </div>
          <div className='about__content-image'>
            <IconAbout className='about__content-image--icon' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
