import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);
  const heroRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".hero-heading", {
        y: 0,
        opacity: 1,
      });

      gsap.to(".bg-floater", {
        y: 0,
        opacity: 1,
        duration: 2.5,
      });

      gsap
        .timeline()
        .to(".hero-img", {
          top: -20,
          scrollTrigger: {
            trigger: ".hero",
            start: "top",
            end: "center",
            scrub: true,
          },
        })

        .to(".hero-img-1", {
          rotate: "-=15",
          scrollTrigger: {
            trigger: ".hero",
            start: "top",
            end: "center",
            scrub: true,
          },
        })

        .to(".line-1", {
          y: 0,
          opacity: 1,
        })

        .to(".line-2", {
          y: 0,
          opacity: 1,
        })

        .to(".line-3", {
          y: 0,
          opacity: 1,
        });

      gsap
        .timeline()
        .to(".hero-img-2", {
          rotate: "-=25",
          scrollTrigger: {
            trigger: ".text-container",
            start: "-=200px",
            scrub: true,
          },
        })

        .to(".hero-img-3", {
          top: -20,
          scrollTrigger: {
            trigger: ".text-container",
            start: "-=250px",
            scrub: true,
          },
        })

        .to(".hero-img-4", {
          top: -20,
          scrollTrigger: {
            trigger: ".text-container-2",
            start: "-=200px",
            scrub: true,
          },
        })

        .to(".hero-img-5", {
          rotate: "-=25",
          scrollTrigger: {
            trigger: ".text-container-2",
            start: "-=250px",
            scrub: true,
          },
        });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="heading-container">
        <div className="hero-text">
          <div className="hero-div">
            <span className="line-1">
              A FINE BLEND
            </span>
            <p className="value-text">Creative Dispensation</p>
          </div>
          <span className="line-2">OF STRUCTURE AND TEXTURE.</span>
        </div>
        <div className="bg-floater-container">
          <div className="hero-img bg-floater" />
          <div className="hero-img-1 bg-floater" />
        </div>
      </div>

      <div className="text-container">
        <div className="value-lines">
          <p className="value-text">about us</p>
          <span className="line-1">We are at the forefront </span>
        </div>
        <span className="line-2">of spatial design,</span>
        <span className="line-3">where imagination meets concrete.</span>
        <div className="img-floater-container">
          <div className="hero-img-2 img-floater" />
          <div className="hero-img-3 img-floater" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
