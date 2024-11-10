import React from 'react'

const Home = () => {
  return (
    <div className='w-full flex justify-center'>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 w-11/12">
            <div className='flex space-x-4 col-span-4 md:col-span-4'>
                <div className="w-5/12 bg-red-300 rounded-lg">Box 1</div>
                <div className="w-3/12 bg-blue-300 rounded-lg">Box 2</div>
                <div className="w-4/12 bg-green-300 rounded-lg">Box 3</div>
            </div>
            <div className='flex space-x-4 col-span-4 md:col-span-4'>
                <div className="w-4/12 bg-yellow-300 rounded-lg">Box 4</div>
                <div className="w-4/12 bg-pink-300 rounded-lg">Box 5</div>
                <div className="w-4/12 bg-gray-300 rounded-lg">Box 6</div>
            </div>
            
            
        </div>
    </div>
    
  )
}

export default Home