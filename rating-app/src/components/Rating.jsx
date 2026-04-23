import React, { useState } from 'react'
import Star from './Star'
import Modal from './Modal'
import Button from './Button'

function Rating({ title, feedbackMessages }) {
    const stars = Array.from({ length: 5 }, (_, index) => index + 1)
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const [submitted, setSubmitted] = useState(false)

    const closeModal = function () {
        setSubmitted(false)
        setRating(0)
        setHover(0)
    }

    return (
        <div className='rating-container'>
            <h1>{title}</h1>
            <div className='stars'>
                {
                    stars.map((star) => (
                        <Star key={star} star={star} rating={rating} hover={hover} setRating={setRating} setHover={setHover} />
                    ))
                }
            </div>
            {rating > 0 && <p className='feedback'>{feedbackMessages[rating - 1]}</p>}

            <Button rating={rating} className={'submit-btn'} onClick={() => setSubmitted(true)}>
            </Button>
            
            {/* Modal */}
            <Modal rating={rating} closeModal={closeModal} submitted={submitted} />
        </div>
    )
}

export default Rating
