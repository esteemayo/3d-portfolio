import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, useInView } from 'motion/react';

import ContactSvg from './ContactSvg';
import Alert from './alert/Alert';
import Textarea from './../textarea/Textarea';
import Input from './../input/Input';

import './Contact.scss';

const listVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const form = useRef();

  const isInView = useInView(ref, { margin: '-200px' });

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setError(false);
          setSuccess(true);
        },
        (error) => {
          console.log(error);
          setError(true);
          setSuccess(false);
        }
      );
  };

  return (
    <div ref={ref} className='contact'>
      <div className='contact__section'>
        <motion.form
          ref={form}
          variants={listVariant}
          animate={isInView ? 'animate' : 'initial'}
          onSubmit={sendEmail}
          className='contact__form'
        >
          <motion.h1 variants={listVariant} className='contact__form--heading'>
            Let&apos;s keep in touch
          </motion.h1>

          <Input
            variants={listVariant}
            name='name'
            label='Name'
            placeholder='John Doe'
          />

          <Input
            variants={listVariant}
            type='email'
            name='email'
            label='Email'
            placeholder='john@gmail.com'
          />

          <Textarea
            variants={listVariant}
            name='message'
            label='Message'
            rows={10}
            placeholder='Write your message...'
          />

          <motion.button
            variants={listVariant}
            type='submit'
            className='contact__form--btn'
          >
            Send
          </motion.button>

          {success && (
            <Alert
              type='success'
              message='Your message has been sent!'
              hideAlert={() => setSuccess(false)}
            />
          )}

          {error && (
            <Alert
              type='danger'
              message='Something went wrong!'
              hideAlert={() => setError(false)}
            />
          )}
        </motion.form>
      </div>

      <div className='contact__section'>
        <ContactSvg />
      </div>
    </div>
  );
};

export default Contact;
