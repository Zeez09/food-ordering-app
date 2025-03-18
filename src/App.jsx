import 'tailwindcss'
import './App.css'
import waffle from './assets/images/image-waffle-mobile.jpg'
import cart from './assets/images/icon-add-to-cart.svg'
import tiramisu from './assets/images/image-tiramisu-mobile.jpg'
import brulee from './assets/images/image-creme-brulee-mobile.jpg'
import macaroni from './assets/images/image-macaron-mobile.jpg'
import baklava from './assets/images/image-baklava-mobile.jpg'
import lemon from './assets/images/image-meringue-mobile.jpg'
import red from './assets/images/image-cake-mobile.jpg'
import salted from './assets/images/image-brownie-mobile.jpg'
import vanilla from './assets/images/image-panna-cotta-mobile.jpg'
import empty from './assets/images/illustration-empty-cart.svg'
import remove from './assets/images/icon-remove-item.svg'
import carbon from './assets/images/icon-carbon-neutral.svg'





function App() {

  return (
    <div>
    <div className="p-10">

      <h1 className='text-7xl red-hat-text-700 mb-10'>Desserts</h1>
      <div className='flex flex-col mx-auto '>
      <div className='mx-auto'>
    <div id="one" className='grid grid-cols-1 sm:grid-cols-3 gap-1' >

      <div className=''>
      <div className="relative">
        <img src={waffle} alt=''className='rounded-3xl '/>

<div className="absolute top-[90%]  flex justify-center w-[90%]
max-w-[90%]">
          <button className='flex align-center bg-white text-black
          font-semibold px-4 py-2 
          rounded-4xl border-1 border-rose-900 shadow-sm
          hover:bg-red-900 hover:text-rose-50'>
            <span>
              <img src={cart} alt='' className='' />
              </span>Add to cart
              </button>

        </div>
      </div>

      <div className='pt-12'>
        <p className='text-rose-400'>waffle</p>
        <p className='text-rose-900 red-hat-text-600'>waffle with berries</p>
        <p className='mb-10 red-hat-text-600 text-red-900'>$<span>6.50</span></p>
      </div>

    </div>
    <div>
      <div className="relative">
        <img src={brulee} alt='' className='rounded-3xl'/>

        <div className="absolute top-[90%]  flex justify-center w-[90%]
max-w-[90%]">
          <button className='flex align-center bg-white text-black
          font-semibold px-4 py-2 
          rounded-4xl border-1 border-rose-900 shadow-sm
          hover:bg-red-900 hover:text-rose-50'>
            <span>
              <img src={cart} alt='' className='' />
              </span>Add to cart
              </button>

        </div>
      </div>

      <div className='pt-12'>
        <p className='text-rose-400'>Crème Brûlée</p>
        <p className='text-rose-900 red-hat-text-600'>vanilla Bean Crème Brûlée</p>
        <p className='red-hat-text-600 text-red-900'>$<span>7.00</span></p>
      </div>

    </div>
    <div>
      <div className="relative">
        <img src={macaroni} alt='' className='rounded-3xl'/>

        <div className="absolute top-[90%]  flex justify-center w-[90%]
max-w-[90%]">
          <button className='flex align-center bg-white text-black
          font-semibold px-4 py-2 
          rounded-4xl border-1 border-rose-900 shadow-sm
          hover:bg-red-900 hover:text-rose-50'>
            <span>
              <img src={cart} alt='' className='' />
              </span>Add to cart
              </button>

        </div>
      </div>

      <div className='pt-12'>
        <p className='text-rose-400'>Macaron</p>
        <p className='text-rose-900 red-hat-text-600'>Macaron Mix of Five</p>
        <p className='red-hat-text-600 text-red-900'>$<span>8.00</span></p>
      </div>

    </div>
    </div>

    <div id="two" className='grid grid-cols-1 sm:grid-cols-3 gap-5' >

<div>
<div className="relative">
  <img src={tiramisu} alt='' className='rounded-3xl'/>

  <div className="absolute top-[90%]  flex justify-center w-[90%]
max-w-[90%]">
    <button className='flex align-center bg-white text-black
    font-semibold px-4 py-2 
    rounded-4xl border-1 border-rose-900 shadow-sm
    hover:bg-red-900 hover:text-rose-50'>
      <span>
        <img src={cart} alt='' className='' />
        </span>Add to cart
        </button>

  </div>
</div>

<div className='pt-12'>
  <p className='text-rose-400'>Tiramisu</p>
  <p className='text-rose-900 red-hat-text-600'>Classic Tiramisu</p>
  <p className='mb-10 red-hat-text-600 text-red-900'>$<span>5.50</span></p>
</div>

</div>
<div>
<div className="relative">
  <img src={baklava} alt='' className='rounded-3xl'/>

  <div className="absolute top-[90%]  flex justify-center w-[90%]
max-w-[90%]">
    <button className='flex align-center bg-white text-black
    font-semibold px-4 py-2 
    rounded-4xl border-1 border-rose-900 shadow-sm
    hover:bg-red-900 hover:text-rose-50'>
      <span>
        <img src={cart} alt='' className='' />
        </span>Add to cart
        </button>

  </div>
</div>

<div className='pt-12'>
  <p className='text-rose-400'>baklava</p>
  <p className='text-rose-900 red-hat-text-600'>pistachio baklava</p>
  <p className='red-hat-text-600 text-red-900'>$<span>4.00</span></p>
</div>

</div>
<div>
<div className="relative">
  <img src={lemon} alt='' className='rounded-3xl'/>

  <div className="absolute top-[90%]  flex justify-center w-[90%]
max-w-[90%]">
    <button className='flex align-center bg-white text-black
    font-semibold px-4 py-2 
    rounded-4xl border-1 border-rose-900 shadow-sm
    hover:bg-red-900 hover:text-rose-50'>
      <span>
        <img src={cart} alt='' className='' />
        </span>Add to cart
        </button>

  </div>
</div>

<div className='pt-12'>
  <p className='text-rose-400'>pie</p>
  <p className='text-rose-900 red-hat-text-600'>Lemon Meringue Pie</p>
  <p className='red-hat-text-600 text-red-900'>$<span>5.00</span></p>
</div>

</div>
</div>



<div id="three" className='grid grid-cols-1 sm:grid-cols-3 gap-5' >

<div>
<div className="relative">
  <img src={red} alt='' className='rounded-3xl'/>

  <div className="absolute top-[90%]  flex justify-center w-[90%]
max-w-[90%]">
    <button className='flex align-center bg-white text-black
    font-semibold px-4 py-2 
    rounded-4xl border-1 border-rose-900 shadow-sm
    hover:bg-red-900 hover:text-rose-50'>
      <span>
        <img src={cart} alt='' className='' />
        </span>Add to cart
        </button>

  </div>
</div>

<div className='pt-12'>
  <p className='text-rose-400'>Cake</p>
  <p className='text-rose-900 red-hat-text-600'>Red Velvet Cake</p>
  <p className='red-hat-text-600 text-red-900'>$<span>4.50</span></p>
</div>

</div>
<div>
<div className="relative">
  <img src={salted} alt='' className='rounded-3xl'/>

  <div className="absolute top-[90%]  flex justify-center w-[90%]
max-w-[90%]">
    <button className='flex align-center bg-white text-black
    font-semibold px-4 py-2 
    rounded-4xl border-1 border-rose-900 shadow-sm
    hover:bg-red-900 hover:text-rose-50'>
      <span>
        <img src={cart} alt='' className='' />
        </span>Add to cart
        </button>

  </div>
</div>

<div className='pt-12'>
  <p className='text-rose-400'>Brownie</p>
  <p className='text-rose-900 red-hat-text-600'>Salted Caramel Brownie</p>
  <p className='red-hat-text-600 text-red-900'>$<span>5.50</span></p>
</div>

</div>
<div>
<div className="relative">
  <img src={vanilla} alt='' className='rounded-3xl'/>

  <div className="absolute top-[90%]  flex justify-center w-[90%]
max-w-[90%]">
    <button className='flex align-center bg-white text-black
    font-semibold px-4 py-2 
    rounded-4xl border-1 border-rose-900 shadow-sm
    hover:bg-red-900 hover:text-rose-50 '>
      <span>
        <img src={cart} alt='' className='' />
        </span>Add to cart
        </button>

  </div>
</div>

<div className='pt-12'>
  <p className='text-rose-400'>Panna cotta</p>
  <p className='text-rose-900 red-hat-text-600'>Vanilla Panna Cotta</p>
  <p className='mb-10 red-hat-text-600 text-red-900'>$<span>6.50</span></p>
</div>
</div>
</div>
</div>

    <div id="four" className='grid grid-cols-1 sm:grid-cols-2 gap-5' >
      
    <div className='bg-amber-50 h-72 rounded-2xl w-5/5 size-[90]'>
    <p className='red-hat-text-600 text-red-900 text-lg mt-6 ml-2 font-semibold'>your cart (0)</p>
      <div className="">
        <img src={empty} alt='' className='mx-auto block'/>
        <p className='text-rose-400 flex justify-center mt-8'>your added items will appear here</p>
        </div>
       
    </div>
    <div id="items" className='bg-rose-50 p-8 rounded-3xl lg:h-full lg:w-full w-[80%] mx-auto'>
    <h1 className='text-red-900 red-hat-text-700 text-2xl'>Your Cart (0)</h1>
    <ul>
      <li className='border-b-1 border-0 border-gray-400'>
        <div className='flex flex-3/5 flex-row justify-between py-4 align-middle'>
        <div>
        <h1 className='red-hat-text-600 text-gray-900'>Classic Tiramisu</h1>
                <span className='text-rose-900 red-hat-text-700 me-2'>1x</span>
                <span className='me-2 text-gray-500'>@5.0</span>
                <span className='me-2 text-gray-700'>$54.00</span>
        </div>
        <div>
        <button className='border border-amber-700 rounded-full
         p-1 cursor-pointer hover:border-amber-950
          hover:border-2'><img src={remove} alt="" /></button>
        </div>

        </div>
      </li>
    </ul>
    <div className='flex justify-between py-8'>
          <span>Order Total</span>
          <span className='red-hat-text-700 text-2xl'>$450</span>
        </div>
        <div className='p-4 bg-gray-300 flex flex-row justify-center w-full rounded-2xl'>
          <img src={carbon} alt='' className=''/>
          <p>This is a <span className='text-rose-900 red-hat-text-600'> carbon-neutral</span> delivery</p>

        </div>
        <div className='flex justify-center w-full'>
        <button className='rounded-4xl bg-red-800 text-amber-50 
        py-2 px-8 w-full cursor-pointer hover:bg-green-900 mt-5'>Confirm Order</button>

        </div>
      

</div>
    </div>



    </div>
    </div>
    </div>
    
    
    

  )
}

export default App
