import React from 'react'


export default function Card(props){

  let badgeText
  if(props.openSpot === 0){
    badgeText = "SOLD OUT"
  }else if(props.location === "Online"){
    badgeText = "ONLINE"
  }
  return(
    <div className='card'>
      {badgeText && <div className="sold-out">{badgeText}</div>}
      <img className='card-image' src={props.image} alt="" />
      <div className="card-stats">
        <img className='star' src='https://assets.webiconspng.com/uploads/2017/09/Red-Star-PNG-Image-93122.png' alt='' />
        <span>{props.stats.rating}</span>
        <span className='gray'>({props.stats.ratingCount}) *</span>
        <span className='gray'>{props.location}</span>
        <p className='card-title'>{props.title}</p>
        <p><span className='bold'>From ${props.price}/</span> person</p>
      </div>
    </div>
  )
}