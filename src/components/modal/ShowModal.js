import React from 'react'
    
const MyModal = ( { closeModal} ) => { 
    return(
        <>
        <div className="modal-wrapper" onClick={ closeModal } ></div>
        <div className="modal-container">
            <h2>STAY TUNED</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus modi tempora, rem est quasi maiores. Omnis voluptates iusto consequatur quae ab? Maxime, deleniti?
            </p>
            <button className='model-btn' onClick={ closeModal }>haanji hehe</button>
        </div>
        </>
    )
}

export default MyModal; 
