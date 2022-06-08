import React from 'react'


export default function Card(){

  return(
    <div className='card'>
      <img className='card-image' src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1671726-poster/original/603101f0-242d-426b-89a9-0f19e206e31d.jpeg?im_w=480" alt="" />
      <div className="card-stats">
        <img className='star' src='https://assets.webiconspng.com/uploads/2017/09/Red-Star-PNG-Image-93122.png' alt='' />
        <span>4.0</span>
        <span className='gray'>(4) *</span>
        <span className='gray'>United State</span>
        <p>Living Room Legends Scavenger Hunt</p>
        <p><span className='bold'>From $16/</span> person</p>
      </div>
    </div>
  )
}