import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import './Slider.scss'; // Adjust the path as needed
import s1 from '../images/s1.jpg'; // Import the image

// Slider data array
const sliderData = [
  {
    image: s1,
    title: 'Slide 1 Title',
    text: 'This is the description for slide 1.',
  },
  {
    image: s1,
    title: 'Slide 2 Title',
    text: 'This is the description for slide 2.',
  },
  {
    image: s1,
    title: 'Slide 3 Title',
    text: 'This is the description for slide 3.',
  },
  {
    image: s1,
    title: 'Slide 4 Title',
    text: 'This is the description for slide 4.',
  },
];

const Slider = () => (
  <AwesomeSlider>
    {sliderData.map((slide, index) => (
      <div key={index} data-src={slide.image}>
        <div className="slider-content">
          <h2>{slide.title}</h2>
          <p>{slide.text}</p>
        </div>
      </div>
    ))}
  </AwesomeSlider>
);

export default Slider;
