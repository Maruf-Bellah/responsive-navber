import React from 'react';
import PricingOptions from './PricingOptions/PricingOptions';

const Pricing = () => {
     const pricngOptions = [
          {id: 1, name: 'Free', price: 0, benefits: [
               'lifetime free',
               'unlimited deals',
               'localized deals',
               'fantastic deals',
               'crazy deals'

          ]
          
     },
          {id: 2, name: 'Regular', price: 9.99, benefits: [
               'everything on free',
               'unlimited deals',
               'localized deals',
               'fantastic deals',
               'crazy deals'

          ]},
          {id: 3, name: 'Premium', price: 19.99, benefits: [
               'everything on Regular',
               'unlimited deals',
               'localized deals',
               'fantastic deals',
               'crazy deals'

          ]}
        
     ]
     return (
          <div className='p-4 bg-indigo-300 mt-3'>
               <h1 className='text-6xl '>Best Deals of the Town</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nesciunt sapiente aut itaque. Ut facere amet dicta voluptatibus quod, mollitia eveniet facilis nobis reiquos.</p>
               <div className='grid md:grid-cols-3 gap-3 mt-6'>
                    {
                         pricngOptions.map(option => <PricingOptions
                              
                              key={option.id}
                              option ={option}
                         ></PricingOptions>)
                    }
               </div>
          </div>
     );
};

export default Pricing;