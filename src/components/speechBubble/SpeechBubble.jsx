import { TypeAnimation } from 'react-type-animation';

import './SpeechBubble.scss';

const SpeechBubble = () => {
  return (
    <div className='speech-bubble'>
      <div className='speech-bubble__text'>
        <TypeAnimation
          sequence={[
            1000,
            'Same substring at the start will only be typed out once, initially',
            1000,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            1000,
          ]}
          wrapper='span'
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        />
      </div>

      <img src='/man.png' alt='avatar' className='speech-bubble__img' />
    </div>
  );
};

export default SpeechBubble;
