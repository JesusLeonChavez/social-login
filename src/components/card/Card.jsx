import React from 'react'

const Card = ({post}) => {
    return (
        <div className='card'>
            {post.desc}
        </div>
    )
}

export default Card