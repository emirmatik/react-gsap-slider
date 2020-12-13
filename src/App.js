import React, {useRef,useEffect,useState} from "react";
import leftAr from "./assets/arrow-left.svg";
import rightAr from "./assets/arrow-right.svg";
import "reset-css";
import "./App.scss";
import {TweenMax,Power2} from "gsap";

const testimonials = [
  {
    name: "Julia Cameron",
    title: "Creative Director, VISA",
    image: `${require("./assets/image3.jpg")}`,
    quote:
      "It's all good. I was amazed at the quality of the Design. We've seen amazing results already."
  },
  {
    name: "Mark Jacobs",
    title: "Tech Lead, Google",
    image: `${require("./assets/image.jpg")}`,
    quote:
      "The rebranding has really helped our business. Definitely worth the investment."
  },
  {
    name: "Lisa Bearings",
    title: "Brand Coordinator, Facebook",
    image: `${require("./assets/image2.jpg")}`,
    quote:
      "The service was excellent. Absolutely wonderful! A complete redesign did it for us."
  },
  {
    name: "Emir Matik",
    title: "Founder of Facematik",
    image: `${require("./assets/emir.jpg")}`,
    quote:
      "What a creative app. It was so fun to use and it made all of the basic things for us !"
  }
];

function App() {

  const [index,setIndex] = useState(0)
  const dur = 0.8;
  let cont = useRef(null);
  let testimonial = useRef(null);

  useEffect(() => {
    // preventing the white screen before prerendering
    TweenMax.to(cont,0,{visibility: "visible"})
    // initial animation
    TweenMax.from(testimonial,dur,{y: -15, opacity:0, ease:Power2.easeOut})
  }, [])
  
  // right arrow's functionality
  const slideRight = () => {
    if (index !== testimonials.length - 1) {
      TweenMax.to(".img",dur,{x: (index+1) * -100 + "%", ease:Power2.easeOut})
      setIndex(index+1)
      TweenMax.fromTo([".testimonial-text"],dur,{y: -15, opacity:0},{y: 0, opacity:1, ease:Power2.easeOut})
    }
  }
  
  // left arrow's functionality
  const slideLeft = () => {
    if (index !== 0) {
      TweenMax.to(".img",dur,{x: (index-1) * -100 + "%", ease:Power2.easeOut})
      setIndex(index-1)
      TweenMax.fromTo([".testimonial-text"],dur,{y: -15, opacity:0},{y: 0, opacity:1, ease:Power2.easeOut})
    }
  }

  return (
    <>
      <div className="nav-links">
      <a id="github" href="https://github.com/emirmatik" target="_blank">Github</a>
      <a id="twitter" href="https://twitter.com/MatikEmir" target="_blank">Twitter</a>
      </div>
    <div ref={el => cont = el} className="testimonial-section">
      <div className="testimonial-container">
        <div onClick={slideLeft} className={index == 0 ? "arrow blocked" : "arrow"}>
          <img src={leftAr} alt="left-arrow" />
        </div>
         <div ref={el => testimonial = el} className="testimonial">
            <div className="testimonial-img">
            <div id="decoration-circle"></div>
            <img className="img" src={testimonials[0].image} alt={testimonials[0].name} />
            <img className="img" src={testimonials[1].image} alt={testimonials[1].name} />
            <img className="img" src={testimonials[2].image} alt={testimonials[2].name} />
            <img className="img" src={testimonials[3].image} alt={testimonials[3].name} />
            </div>
            <div className="testimonial-text">
              <p id="quote">{testimonials[index].quote}</p>
              <p id="name">{testimonials[index].name}</p>
              <p id="title">{testimonials[index].title}</p>
            </div>
          </div>
        <div onClick={slideRight} className={index == testimonials.length - 1 ? "arrow blocked" : "arrow"}>
          <img src={rightAr} alt="right-arrow" />
        </div>
      </div>
      <div id="decoration-text">
        <h1>Emir</h1>
        <h1 id="hey">Matik</h1>
      </div>
    </div>
    </>
  );
}

export default App;
