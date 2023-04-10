import React, { useState } from 'react'
import MyModal from './ShowModal';
import './modal.css'

export default function Modal() {

    const [showModal, setShowModal] = useState(false); 

    const closeModal = () => { 
        setShowModal(false);   
    }


  return (
    <>
    <button  className='model-btn' onClick={() => setShowModal(true)}>Open modal</button>
    {showModal && <MyModal closeModal={closeModal}/>}
    </>
  )
}
