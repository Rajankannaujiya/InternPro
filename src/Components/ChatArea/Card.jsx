import React from 'react'

function Card() {
  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg">
    <div className="px-4 py-2 flex flex-row">
      <img src="https://images.pexels.com/photos/18959278/pexels-photo-18959278/free-photo-of-exterior-of-a-castle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Placeholder" className="w-20 h-20" />
      <div className='flex flex-col'>
      <h2 className="text-xl font-semibold text-gray-800">Bags on Timpu</h2>
      <p>1123 products</p>
      </div>
    </div>
    <div className="px-4 py-2">
      <p className="text-gray-600 mt-2">or set filter and help us choose best bag for you</p>
    </div>
  </div>
  
  )
}

export default Card