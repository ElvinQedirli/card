import React from 'react'
import '../assets/style/components/card.css'


export default function Card({img,cardName,cardContent}) {
  return (
    <div className='card'>
        <div className="img_box" style={{backgroundImage:`url(${img})`}}></div>
        <div className="content">
            <h2>{cardName}</h2>
            <p>{cardContent}</p>
            <button>Add to Cart</button>
        </div>
    </div>
  )
}
