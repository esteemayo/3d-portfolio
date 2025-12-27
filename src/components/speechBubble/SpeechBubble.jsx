import './SpeechBubble.scss';

const SpeechBubble = () => {
  return (
    <div className='speech-bubble'>
      <div className='speech-bubble__text'>Text</div>
      <img src='/man.png' alt='avatar' className='speech-bubble__img' />
    </div>
  );
};

export default SpeechBubble;
