// ScrollAnimation.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import './Example.scss'; // Подключите ваш CSS

// Регистрируем ScrollTrigger плагин
gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  const delSectionsRef = useRef([]);

  useEffect(() => {
    delSectionsRef.current.forEach(section => {
      const imageAnim = gsap.to(section.querySelector("img"), {
        y: "-100vh",
        ease: "none",
        paused: true
      });

      const progressTo = gsap.quickTo(imageAnim, "progress", { ease: "power3", duration: parseFloat(section.dataset.scrub) || 0.1 });

      gsap.to(section.querySelector(".innerContainer"), {
        y: "100vh",
        ease: "none",
        scrollTrigger: {
          scrub: true,
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          onUpdate: self => progressTo(self.progress)
        }
      });
    });
  }, []);

  // Функция для добавления рефов в массив
  const addToRefs = el => {
    if (el && !delSectionsRef.current.includes(el)) {
      delSectionsRef.current.push(el);
    }
  };

  return (
    <div>
      <h1>Scroll down</h1>
      <div ref={addToRefs} className="delayed-section" data-scrub="0.5">
        <div className="innerContainer">
          <img width="575" src="https://picsum.photos/575/745?index=1" alt="" />
        </div>
      </div>
      <div ref={addToRefs} className="delayed-section" data-scrub="0.2">
        <div className="innerContainer">
          <img width="575" src="https://picsum.photos/575/745?index=2" alt="" />
        </div>
      </div>
      <div ref={addToRefs} className="delayed-section" data-scrub="1">
        <div className="innerContainer">
          <img width="575" src="https://picsum.photos/575/745?index=3" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimation;
