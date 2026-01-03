import { motion } from 'motion/react';

import './Textarea.scss';

const Textarea = ({ name, label, variants, ...rest }) => {
  return (
    <motion.div variants={variants} className='textarea'>
      <label htmlFor={name} className='textarea__label'>{label}</label>
      <textarea {...rest} id={name} name={name} className='textarea__control' />
    </motion.div>
  );
};

export default Textarea;
