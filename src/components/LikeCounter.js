import React from 'react'
import './LikeCounter.css'

const LikeCounter = (props) => {
    return <div className='like-counter'> {props.count} ❤️s</div>
}

export default LikeCounter