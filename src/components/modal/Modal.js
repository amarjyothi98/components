import React, { useState } from 'react'
import './modal.css'

export default function Modal() {

    const [showModal, setShowModal] = useState(false); 

    const closeModal = () => { 
        setShowModal(false);   
    }

    const MyModal = () => { 
        return(
            <>
            <h2>STAY TUNED</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus modi tempora, rem est quasi maiores. Omnis voluptates iusto consequatur quae ab? Maxime, deleniti?
            </p>
            <button onClick={() => setShowModal(false)}>haanji hehe</button>
            </>
        )
    }

  return (
    <>
    <button onClick={() => setShowModal(true)}>Open modal</button>
    {showModal && <MyModal closeModal={closeModal}/>}
    </>
  )
}
