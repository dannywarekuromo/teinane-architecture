import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Feature.css";

const Feature = () => {
  gsap.registerPlugin(ScrollTrigger);
  const featureRef = useRef();

  useLayoutEffect(() => {
    let ctx2 = gsap.context(() => {
      let tl2 = gsap.timeline();

      tl2.to(".feature-project-1", {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: ".feature",
          scrub: true,
          start: "top",
          end: "+=200px",
          pin: true
        }
      })

      tl2.to(".feature-project-2", {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".feature",
          scrub: true,
          start: "+=200px",
          pin: true
        }
      }, ">")

      tl2.to(".feature-project-3", {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".feature",
          scrub: true,
          end: "bottom",
          pin: true
        }
      }, ">");

      gsap.to(".feature-label", {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".feature-container",
          scrub: true,
          end: "top 400px"
        }
      });

      gsap.to(".feature-title", {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".feature-container",
          scrub: true,
          start: "top 700px"
        }
      });

      gsap.to(".feature-desc", {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".feature-container",
          scrub: true,
          end: "top 400px"
        }
      })
    }, featureRef)
    
    return () => ctx2.revert()
  }, []);

  return (
    <section className="feature" ref={featureRef}>
      <article className="feature-container feature-project-1" id="cane-back">
        <div className="feature-bg feature-img-1"></div>

        <div className="feature-info">
          <p className="feature-label">Furniture</p>
          <Link to="/CaneBack" className="feature-title">
            Cane Back
          </Link>
          <p className="feature-desc">
            Cultivated japanese bamboo stick, resilient is its hallmark.
          </p>
        </div>
      </article>
      <article className="feature-container feature-project-2" id="sea-front">
        <div className="feature-bg feature-img-2"></div>

        <div className="feature-info">
          <p className="feature-label">spatial design</p>
          <Link to="/SeaFront" className="feature-title">
            Sea Front
          </Link>
          <p className="feature-desc">
            If Poseidon made a home on land, it would overlook the ocean.
          </p>
        </div>
      </article>
      <article
        className="feature-container feature-project-3"
        id="minimo-optique"
      >
        <div className="feature-bg feature-img-3"></div>

        <div className="feature-info">
          <p className="feature-label">Interior Design</p>
          <Link to="/MinimoOptique" className="feature-title">
            Minimo Optique
          </Link>
          <p className="feature-desc">
            Sentiments play a role in design, the rest are unnecessary. Less is
            more.
          </p>
        </div>
      </article>
      <Link to="/Projects" className="feature-link">All Projects</Link>
    </section>
  );
};

export default Feature;
