function Modal({ rating, closeModal, submitted }) {
    return (
        submitted && <div className='modal-overlay'>
            <div className='modal'>
                <h2>Thank You</h2>
                <p>You rated {rating} star{rating > 1 ? 's' : ''} </p>
                <button className='close-btn' onClick={closeModal}>Close</button>
            </div>
        </div>
    )
}

export default Modal
