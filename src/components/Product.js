import React, { useState, useEffect } from 'react';
import { StarIcon } from '@heroicons/react/solid'; 
import Currency from 'react-currency-formatter';

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );
  const [hasPrime] = useState(Math.random() < 0.5);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
      <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
      <div className='flex justify-center'>
        <img
          src={image}
          height={200}
          width={200}
          style={{ objectFit: 'contain' }}
          alt={title}
        />
      </div>
      <h4 className='my-3'>{title}</h4>
      {isClient && (
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <StarIcon key={index} className="h-5 text-yellow-500" />
            ))}
        </div>
      )}
      <p className='text-xs my-2 line-clamp-2'>{description}</p>
      <div className='mb-5'>
        <Currency quantity={price} currency='USD'/>
      </div>
      {hasPrime && (
        <div className='flex items-center space-x-2 -mt-5'>
          <img 
            src="https://www.logotypes101.com/logos/875/A41B7A0C2125D3C1F6DDDE56C1203C77/amazon_prime_icon.png"
            alt=""
            className='w-12'
          />
          <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
        </div>
      )}
      <button className='mt-auto button'>Add to Cart</button>
    </div>
  );
}

export default Product;
