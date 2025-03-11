import 'tailwindcss'
import './App.css'
import waffle from './assets/images/image-waffle-mobile.jpg'
import cart from './assets/images/icon-add-to-cart.svg'

function App() {

  return (
    <>
    <div className="p-10">

      <h1 className='text-7xl red-hat-text-700 mb-10'>Desserts</h1>
    <div id="one" className='grid grid-cols-1 sm:grid-cols-3'>

      <div>
      <div className="relative">
        <img src={waffle} alt='' className='rounded-3xl'/>

        <div className="absolute top-[90%] left-[10%] flex justify-center w-[80%]
        max-w-[80%] mx-auto">
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
        <p className='red-hat-text-600 text-red-900'>$<span>6.50</span></p>
      </div>

    </div>
    <div>
      <div className="relative">
        <img src={waffle} alt='' className='rounded-3xl'/>

        <div className="absolute top-[90%] left-[10%] flex justify-center w-[80%]
        max-w-[80%] mx-auto">
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
        <p className='red-hat-text-600 text-red-900'>$<span>6.50</span></p>
      </div>

    </div>
    <div>
      <div className="relative">
        <img src={waffle} alt='' className='rounded-3xl'/>

        <div className="absolute top-[90%] left-[10%] flex justify-center w-[80%]
        max-w-[80%] mx-auto">
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
        <p className='red-hat-text-600 text-red-900'>$<span>6.50</span></p>
      </div>

    </div>
    </div>
    


    </div>



    </>
  )
}

export default App
