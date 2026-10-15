import React from 'react'
import Header from '../other/Header'

const AdminDashboard = () => {
  return (
    <div className='min-h-screen w-full p-10'>
      <Header />

      <div className='mt-10'>
        <form className='flex items-start justify-between '>
          <div>
            <h3 className='text-white mb-2'>Task Title</h3>
            <input
              type="text"
              placeholder='Make a UI Design'
              className='w-full p-3 rounded-md bg-white text-black placeholder-gray-500 outline-none'
            />
          </div>

          <div>
            <h3 className='text-white mb-2'>Description</h3>
            <textarea
              placeholder='Enter task description'
              rows="5"
              className='w-full p-3 rounded-md bg-white text-black placeholder-gray-500 outline-none resize-none'
            />
          </div>

          <div>
            <h3 className='text-white mb-2'>Date</h3>
            <input
              type="date"
              className='w-full p-3 rounded-md bg-white text-black outline-none'
            />
              </div>
           
           <div>
             <h3>Assign to</h3>

            <input type="text" placeholder='Employee name ' />
           </div>
           
           <div>
             <h3>Category</h3>
            <input type="text" placeholder='design, dev ,etc' />
           </div>

           <div>
             <button> Create Task</button>
           </div>

        
        </form>
      </div>
    </div>
  )
}

export default AdminDashboard