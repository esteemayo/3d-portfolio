import { motion } from 'motion/react';

import './Input.scss';

const Input = ({ name, type = 'text', label, variants, ...rest }) => {
  return (
    <motion.div variants={variants} className='input'>
      <label htmlFor={name} className='input__label'>
        {label}
      </label>

      <input
        {...rest}
        id={name}
        name={name}
        type={type}
        className='input__control'
      />
    </motion.div>
  );
};

export default Input;
