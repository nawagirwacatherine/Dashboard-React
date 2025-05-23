import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';

import { GoDot } from 'react-icons/go';

import { Stacked, Pie, Button, Line } from '../components';

import { earningData, SparklineAreaData, ecomPieChartDat} from '../data/dummy';

import { useStateContext } from '../contexts/ContextProvider';

const Ecommerce = () => {
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white 
        dark:text-gray-200
        dark:bg-secondary-dark-bg h-44
        rounded-xl w-full lg:w-80 p-8
        pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'
        >
     
          <div className='flex justify-between items-center'>
            <p font-bold text-gray-400>Earnings</p>
            <p className='text-2xl'>$63,448.78</p>

          </div>
          
        </div>
   <div className='mt-6'>
         <Button 
         color='white'
         bgColor='blue'
         text='Download'
         borderRadius='10px'
         size ='md'
         />
        </div>

        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {earningData.map((item) =>
          (
            <div key={item.title}
            className='bg-white
             dark:text-gray-200
             dark:bg-secondary-dark-bg md:w-56 
             p-4 pt-6 rounded-2xl
             '>
             <button type="button"
             style={{ color:item.iconColor, backgroundColor:item.iconBg}}
             
             >
   {item.icon}

             </button>
            </div>
          ))}

        </div>
      
      </div>

    </div>
  )
}

export default Ecommerce