import React, { useState,useEffect } from 'react';
import style from "../Home/home.module.css";
import star from "../assets/star.png";
import moviesArray from "../data"


export const Home = ({num}) => {

  return (
    <div className={style.home}>
      <h1>{moviesArray[num].name}</h1>

      
      <p>{moviesArray[num].description}</p>
      
      <div className={style.ratings}>
      <h5>{moviesArray[num].maker}</h5>
      <h5>{moviesArray[num].category}</h5>
      <div className={style.ratingsBIG}>
      <div className={style.starimg}>
      <img src={star} alt="" /> Use the imported image
      </div>
      <h5>{moviesArray[num].rating}</h5>
      </div>
      </div>

    </div>
  );
};
