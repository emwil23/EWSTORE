import { React, useState } from 'react';

const Accordian = (props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className='accordion'>
        <div className='accordion-item'>
          <div
            className='accordion-title'
            onClick={() => setIsActive(!isActive)}
          >
            <div
              className='heading-3'
              style={{
                marginBottom: '0.5rem',
                display: 'flex',
                cursor: 'pointer',
              }}
            >
              <div>&#9675; {props.title}</div>
            </div>
          </div>
          {isActive && <div className='accordion-content'>{props.content}</div>}
        </div>
      </div>
    </div>
  );
};

export default Accordian;
