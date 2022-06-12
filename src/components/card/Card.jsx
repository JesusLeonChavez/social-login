import React from 'react'

import "./card.css"

const Card = ({post}) => {
    return (
        <div className='card'>
            <span className="title">
                {post.title}
                <img src={post.img} alt="" className="img" />
                <p className="desc">{post.desc}</p>
                <button className="cardButton">Read More</button>
            </span>
        </div>
    )
}

export default Card