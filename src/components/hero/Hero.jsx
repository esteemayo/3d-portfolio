import Speech from './Speech';

import './Hero.scss';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__left'>
        <h1 className='hero__left--title'>
          Hey There, <br /> <span>I&apos;m Robert</span>
        </h1>

        <div className='hero__awards'>
          <h2 className='hero__awards--heading'>Top rated designers</h2>

          <p className='hero__awards--desc'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>

          <div className='hero__awards--list'>
            <img src='/award1.png' alt='' />
            <img src='/award2.png' alt='' />
            <img src='/award3.png' alt='' />
          </div>

          <svg
            width='50px'
            height='50px'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            role='img'
            aria-hidden='true'
            focusable='false'
          >
            <path
              d='M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z'
              stroke='white'
              strokeWidth='1'
            />
          </svg>
        </div>
      </div>

      <div className='hero__right'>
        <div className='hero__right--follow'>
          <a href='/'>
            <img src='/instagram.png' alt='' />
          </a>
          <a href=''>
            <img src='/facebook.png' alt='' />
          </a>
          <a href=''>
            <img src='/youtube.png' alt='' />
          </a>
        </div>

        <Speech />

        <div className='hero__right--certificate'>
          <img src='/certificate.png' alt='' />
          LMA CERTIFIED
          <br />
          PROFESSIONAL
          <br />
          DESIGNER
        </div>

        <a href='/#contact' className='hero__contact-link'>
          <svg
            viewBox='0 0 200 200'
            width='150'
            height='150'
            role='img'
            aria-hidden='true'
            focusable='false'
          >
            <circle cx='100' cy='100' r='90' fill='pink' />
            <path
              id='innerCirclePath'
              fill='none'
              d='M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0'
            />
            <text className='circleText'>
              <textPath href='#innerCirclePath'>Hire Now •</textPath>
            </text>
            <text className='circleText'>
              <textPath href='#innerCirclePath' startOffset='44%'>
                Contact Me •
              </textPath>
            </text>
          </svg>

          <div className='arrow'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='50'
              height='50'
              fill='none'
              stroke='black'
              strokeWidth='2'
              role='img'
              aria-hidden='true'
              focusable='false'
            >
              <line x1='6' y1='18' x2='18' y2='6' />
              <polyline points='9 6 18 6 18 15' />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
