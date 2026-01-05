import { useEffect } from 'react';
import './Alert.scss';

const Alert = ({ type, message, hideAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => hideAlert(), 3000);
    return () => clearTimeout(timeout);
  }, [hideAlert]);

  return (
    <p role='alert' aria-live='polite' className={`alert alert-${type}`}>
      {message}
    </p>
  );
};

export default Alert;
