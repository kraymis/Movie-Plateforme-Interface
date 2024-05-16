import React from 'react'
import { useState } from 'react'
import style from "../Card/Card.module.css"
import star from "../assets/star.png";


export const Card = ({onClick,img,title,category,rating,num}) => {
  const handleClick = () => {
    // Invoke the onClick function and pass the card's props
    onClick();
  };
//class={style.overlay}
  return (
    <div className={style.card} onClick={handleClick}>
    <img src={img} alt="" id={style.imgMovie} />
    <div className={style.overlay}>
        <div className={style.content}>
        <h5>{title}</h5>
        <h5>{category}</h5>

        <div className={style.ratings}>
        <div className={style.starimg}>
        <img src={star} alt="" /> Use the imported image
        </div>
        <h5>{rating}</h5>
        </div>

        </div>


    </div>
    </div>
    )
}
