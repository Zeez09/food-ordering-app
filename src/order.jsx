import React from 'react'
import check from './assets/images/icon-order-Confirmed.svg'
import tiramisu from './assets/images/image-tiramisu-mobile.jpg'
import vanilla from './assets/images/image-creme-brulee-mobile.jpg'
import panna from './assets/images/image-panna-cotta-mobile.jpg'

const order = () => {
    return (
    <div className='p-10'>
        <img src={check} alt='' className='' />
        <h2 className='text-3xl mt-3 red-hat-text-700 mb-10 sm:flex sm:space-x-2'>
            <span className='block sm:inline'>Order</span>
            <span className='block sm:inline'>Confirmed</span>
        </h2>
        <p className='text-sm mb-10'>We hope you enjoy your food!</p>

        <div id='one' className='bg-rose-50 p-8 rounded-3xl lg:h-full lg:w-full '>
            <ul>
                <li className='border-b-1 border-0 border-gray-400 p-5'>
                <div className='flex flex-row justify-between'> 
                <div className='flex flex-row gap-5'>
                <img src={tiramisu} alt='' className='w-14 h-14 rounded-md' />
                <div>
                <h1 className='red-hat-text-600 text-gray-900'>Classic Tiramisu</h1>

<span className='text-rose-900 red-hat-text-700 me-2'>1x</span>
<span className='me-2 text-gray-500'>@5.50</span>

                </div>
                
        </div>
        <p>$5.50</p>


        
            
            
            </div>

                </li>
            </ul>
           
           
            </div>

            <div>
            <div id='two' className='bg-rose-50 p-8 rounded-3xl lg:h-full lg:w-full'>
            <ul>
                <li className='border-b-1 border-0 border-gray-400 p-5'>
                <div className='flex flex-row justify-between'> 
                <div className='flex flex-row gap-5'>
                <img src={vanilla} alt='' className='w-14 h-14 rounded-md' />
                <div>
                <h1 className='red-hat-text-600 text-gray-900'>Vanilla Bean C</h1>

<span className='text-rose-900 red-hat-text-700 me-2'>4x</span>
<span className='me-2 text-gray-500'>@7.00</span>

                </div>
                
        </div>
        <p>$28.00</p>


        
            
            
            </div>

                </li>
            </ul>
            </div>

                <div>
                <div id='three' className='bg-rose-50 p-8 rounded-3xl lg:h-full lg:w-full'>
            <ul>
                <li className='border-b-1 border-0 border-gray-400 p-5'>
                <div className='flex flex-row justify-between'> 
                <div className='flex flex-row gap-5'>
                <img src={panna} alt='' className='w-14 h-14 rounded-md' />
                <div>
                <h1 className='red-hat-text-600 text-gray-900'>Vanilla Panna Cotta</h1>

<span className='text-rose-900 red-hat-text-700 me-2'>2x</span>
<span className='me-2 text-gray-500'>@6.50</span>

                </div>
                
        </div>
        <p>$13.00</p>

        
            
            
            </div>

                </li>
            </ul>
            </div>
                </div>
                <div class="mt-6 pt-4 flex justify-between text-lg font-semibold text-gray-800">
            <span class="text-gray-600">Order Total</span>
            <span>$46.50</span>
        </div>

        
        <button class="mt-4 rounded-4xl bg-red-800 text-amber-50 
        py-2 px-8 w-full cursor-pointer hover:bg-green-900'font-medium text-lg hover:bg-green-900 transition-all">
            Start New Order
        </button>
    </div>
            </div>
    
    
)
}

export default order
