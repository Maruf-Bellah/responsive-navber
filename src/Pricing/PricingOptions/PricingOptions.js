import React from 'react';
import Benefit from './Benefit/Benefit';
import { ArrowCircleRightIcon, CheckCircleIcon } from '@heroicons/react/solid';

const PricingOptions = (props) => {
     const {name, price, benefits} = props.option;
     return (
          <div className='bg-white p-4 rounded-lg'>
               <h2 className='bg-indigo-300 py-2 rounded text-xl font-bold'>{name}</h2>
               <p>
                    <span className='font-bold text-5xl'>{price}</span>
                    <span className='font-bold text-gray-500'>/mo</span>
               
               </p>
               <div>
                  <h3 className='text-xl text-left'>Benefits : </h3>

                 {
                      benefits.map(benefit => <Benefit
                       benefit ={benefit}
                      ></Benefit>)
                 }
                <button className='bg-green-500 flex p-2 w-full justify-center rounded mt-6 text-white hover:text-green-700 font-bold'>
                     Buy Now <ArrowCircleRightIcon className='w-6 h-6 ml-2'></ArrowCircleRightIcon>
                </button>
               </div>
          </div>
     );
};

export default PricingOptions;