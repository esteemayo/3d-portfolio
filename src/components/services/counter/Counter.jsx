import { animate, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

import './Counter.scss';

const Counter = ({ from, to, text }) => {
  const ref = useRef();
  const isInView = useInView(ref);

  const [count, setCount] = useState(from);

  useEffect(() => {
    const animation = animate(from, to, {
      duration: 4,
      ease: 'easeOut',
      onUpdate: (prev) => {
        setCount(Math.floor(prev));
      },
    });

    return () => animation.cancel();
  }, [from, isInView, to]);

  return (
    <div ref={ref} className='counter'>
      <h1 className='counter__heading'>{count}+</h1>
      <p className='counter__text'>{text}</p>
    </div>
  );
};

export default Counter;
