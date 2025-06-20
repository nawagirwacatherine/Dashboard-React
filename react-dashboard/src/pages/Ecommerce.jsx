import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';

import { GoDot } from 'react-icons/go';

import { Button, SparkLine } from '../components';

import { earningData,} from '../data/dummy';


const Ecommerce = () => {
  return (
    <div className="m-4 md:m-10 p-6  rounded-2xl  ">
      <div className=' flex-wrap lg:flex-nowrap justify-center '>


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
             className='text-2xl opacity-0.9
             rounded-full p-4 *:hover:drop-shadow-xl'
             >
   {item.icon}

             </button>
             <p className='mt-3'>
             <span className='text-lg 
             font-semibold'>
              {item.amount}
             </span>

             <span className={`text-sm text-${item.pcColor} ml-2`}>
              {item.percentage}
             </span>
             </p>

             <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
                <div className='mt-6'>
         <Button 
         color='white'
         bgColor='blue'
         text='Download'
         borderRadius='10px'
         size ='md'
         />
        </div>
            </div>
            
          ))}

        </div>
      
      </div>

      
     

          <div className='mt-10 flex  justify-center'>
            <div className='border-r-1 border-color m-4 pr-10'>
              <div>
                <p>
                  <span className='text-font-semibold'>$23,894</span>
                  <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs '>24%</span>
                </p>
                <p className='text-gray-500 mt-1'>
                  Budget
                </p>
              </div>
              

               <div className='mt-8'>
                <p>
                  <span className='text-font-semibold'>$63,894</span>
                </p>
                <p className='text-gray-500 mt-1'>
                  Expense
                </p>
              </div>

            
 <div className='mt-5'>
               <SparkLine
  data={[{ x: 1, y: 10 }, { x: 2, y: 20 }, { x: 3, y: 15 }]}
  width="100%"
  height={80}
  color="#4f46e5" 
/>

</div>
             

               <div className='mt-5'>
              <Button
              color="white"
              bgColor="blue"
              text="Download Report"
              borderRadius="10px"

              
              />

              </div>
              
           

          
        </div>
      </div>

    </div>
  )
}

export default Ecommerce