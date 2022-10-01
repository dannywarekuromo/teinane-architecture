import React from 'react';
import { Link } from "react-router-dom";


export default function Hero() {
    return (
        <section className='hero'>
            <div>
                <h1>Perfect blend of structure <br/>
                    progressive design and texture.
                </h1>
                <p>Architecture. Interior. Furniture. Product.</p>
            </div>
            <div>
                <Link to="/Contact">Get in touch</Link>
            </div>
        </section>
    )
}