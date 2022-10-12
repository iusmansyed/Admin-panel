import React from 'react'

const Caritems = (props) => {
  const {category,type, rentPrice, imgUrl, carName,groupSize }= props.item
  return (
    <div className="car_item">
          <div className="car__item-top">
           <div className="car__item-tile">
           <h3>{carName}</h3>
           <p >{category}</p>
           
           </div>
           <span><i class="ri-heart-line"></i></span>
          </div>
          <div className="car__img">
            <img src={imgUrl} alt="" />
          </div>
          <div className="car__item-bottom">
            <div className="car__bottom-left">
              <p><i class="ri-user-line"></i> {groupSize} </p>
              <p><i class="ri-repeat-line"></i>{type}</p>
            </div>
            <p className="car__rent">${rentPrice}/D</p>
          </div>
        </div>
  )
}

export default Caritems