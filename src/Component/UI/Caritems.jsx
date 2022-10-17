import React from 'react'
import "./ui.css"
import {HeartOutlined , HeartFilled  } from '@ant-design/icons';
const Caritems = (props) => {
  const [state , setState]=React.useState(true)
  const {category,type, rentPrice, imgUrl, carName,groupSize }= props.item
  return (
    <div className="car_item">
          <div className="car__item-top">
           <div className="car__item-tile">
           <h3>{carName}</h3>
           <p >{category}</p>
           
           </div>
           <span className='heart' onClick={()=>setState(!state)?<HeartOutlined/>:<HeartFilled style={{color:"red" , size:"2000 "}}/>}> { state ? <HeartOutlined/> : <HeartFilled style={{color:"red" , fontSize:22}}/>} </span>
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