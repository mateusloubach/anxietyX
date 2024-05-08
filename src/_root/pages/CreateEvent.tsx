import PostForm from '../../components/forms/PostForm'
import React from 'react'

const CreateEvent = () => {
  return (
    <div className='flex flex-1'>
      <div className='common-container'>
        <div className='max-w-5x1 flex-start gap-3 justify-start w-full'>
          <img src='/assets/icons/add-post.svg' width={36} height={36} alt='add' />
          <h2 className='h3-bold md:h2-bold text-left w-full'>Criar Evento</h2>
        </div>
        <PostForm action="Criar" />
      </div>
    </div>
  )
}

export default CreateEvent