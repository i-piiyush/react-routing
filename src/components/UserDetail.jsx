import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from'react-router-dom'

const UserDetail = () => {
    const { name } = useParams()
  return (
    
    <div className='px-10 py-5'>
        <h1 className=" text-5xl text-red-600 mb-5 font-semibold ">Hi!, {name}</h1>
        <p className='w-1/2 text-grey-600 text-xl mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quisquam modi voluptatibus eum perferendis? Earum vel consequatur beatae, officiis, nihil repellat corporis veniam fuga pariatur incidunt ex, dolore consequuntur nobis natus eligendi voluptas et. In ad commodi repellendus placeat quam. Itaque sunt iste corporis eaque dolores? Suscipit nostrum voluptatum eius.</p>
        <Link className='bg-red-600 px-7 py-2 rounded-full text-white' to="/About">Go back</Link>

    </div>
  )
}

export default UserDetail