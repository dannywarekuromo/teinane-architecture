import React, { useEffect, useRef } from 'react';
import "./CustomCursor.css";


const CustomCursor = () => {
    const cursorRef = useRef(null);

    useEffect( () => {
        document.addEventListener("mousemove", (e) => {
            const {clientX, clientY} = e;
            const mouseX = clientX - cursorRef.current.clientWidth / 2;
            const mouseY = clientY - cursorRef.current.clientHeight / 2;
            cursorRef.current.style.transform = `translate3d(${mouseX}px ,${mouseY}px, 0)`;
        })
    }, [])
  
    return (
    <di className='app-cursor' ref={cursorRef}/>
  )
}

export default CustomCursor;
