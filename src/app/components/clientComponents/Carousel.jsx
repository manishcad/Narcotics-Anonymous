"use client"
import React from 'react'
import { useState,useEffect } from 'react';
import styles from "../../styles/Homepage.module.css"
const images = [
    "https://images.unsplash.com/photo-1506104489822-562ca25152fe?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8NGslMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D",
    "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg",
    "https://wallpapercave.com/wp/wp9054802.jpg"
  ];
const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
      }, []);
  return (
    <div className={styles.carousel}>
        {images.map((img, index) => (
          <div
            key={index}
            className={
              index === currentSlide
                ? `${styles.slide} ${styles.active}`
                : styles.slide
            }
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
        <div className={styles.carouselContent}>
          <h1 className={styles.title}>Narcotics Anonymous India</h1>
          <p className={styles.subtitle}>The Vision for SOSONA</p>
          <p className={styles.text}>
            Every addict in the Indian Region has an opportunity to experience
            our message of recovery in his or her own language and culture.
          </p>
          <button className={styles.learnMoreButton}>Learn More</button>
          <div className={styles.indicators}>
            {images.map((_, index) => (
              <span
                key={index}
                className={
                  index === currentSlide
                    ? `${styles.dot} ${styles.activeDot}`
                    : styles.dot
                }
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
  )
}

export default Carousel