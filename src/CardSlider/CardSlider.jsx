import React, { useState,useEffect } from 'react';
import Slider from "react-slick";
import { Card } from "../Card/Card";
import style from "./CardSlider.module.css";
import moviesArray from '../data'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import shaw from "../assets/Shawshank.jpg"
import godfather from "../assets/godfather.jpg"
import darknight from "../assets/darknight.jpg"
import pulp from "../assets/pulp.jpg"
import schindler from "../assets/schindler.jpg"
import matrix from "../assets/matrix.jpg"
import inception from "../assets/inception.jpg"
import forrest from "../assets/forrest.jpg"
import lord from "../assets/lord.jpg"
import silence from "../assets/silence.jpg"

export const CardSlider = ({onCardClick}) => {

  const [selectedCard, setSelectedCard] = useState(0);

  // Function to update the state with the props of the clicked card
  const handleCardClick = (cardNum) => {
    setSelectedCard(cardNum);
  };

  useEffect(() => {
    // Call onCardClick when selectedCard changes
    onCardClick(selectedCard);
  }, [selectedCard, onCardClick]);

  console.log(selectedCard);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1
  };
  return (
    <div className={style.Cards}>
      <Slider {...settings}>
      <Card onClick={() => handleCardClick(0)} title={moviesArray[0].name} img ={shaw} category={moviesArray[0].category} rating={moviesArray[0].rating} num="0"/>
      <Card onClick={() => handleCardClick(1)} title={moviesArray[1].name} img ={godfather} category={moviesArray[1].category} rating={moviesArray[1].rating} num="1"/>
      <Card onClick={() => handleCardClick(2)} title={moviesArray[2].name} img ={darknight} category={moviesArray[2].category} rating={moviesArray[2].rating} num="2"/>
      <Card onClick={() => handleCardClick(3)} title={moviesArray[3].name} img ={pulp} category={moviesArray[3].category} rating={moviesArray[3].rating} num="3"/>
      <Card onClick={() => handleCardClick(4)} title={moviesArray[4].name} img ={schindler} category={moviesArray[4].category} rating={moviesArray[4].rating} num="4"/>
      <Card onClick={() => handleCardClick(5)} title={moviesArray[5].name} img ={forrest} category={moviesArray[5].category} rating={moviesArray[5].rating} num="5"/>
      <Card onClick={() => handleCardClick(6)} title={moviesArray[6].name} img ={inception} category={moviesArray[6].category} rating={moviesArray[6].rating} num="6"/>
      <Card onClick={() => handleCardClick(7)} title={moviesArray[7].name} img ={matrix} category={moviesArray[7].category} rating={moviesArray[7].rating} num="7"/>
      <Card onClick={() => handleCardClick(8)} title={moviesArray[8].name} img ={silence} category={moviesArray[8].category} rating={moviesArray[8].rating} num="8"/>
      <Card onClick={() => handleCardClick(9)} title={moviesArray[9].name} img ={lord} category={moviesArray[9].category} rating={moviesArray[9].rating} num="9"/>
      </Slider>
    </div>
  );
};