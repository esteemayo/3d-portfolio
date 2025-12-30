import { services } from './../index';

import './Services.scss';

const Services = () => {
  return (
    <div className='services'>
      <div className='services__section left'>
        <h1 className='services__title'>How do I help?</h1>

        <div className='services__list'>
          {services.map((service) => {
            const { id, img, title, counter } = service;
            return (
              <div key={id} className='services__list--item'>
                <div className='services__list--icon'>
                  <img src={img} alt={title} />
                </div>

                <div className='services__list--info'>
                  <h2>{title}</h2>
                  <h3>{counter}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className='services__section right'>Right</div>
    </div>
  );
};

export default Services;
