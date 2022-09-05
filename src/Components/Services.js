import React from 'react';

const Services = () => {
    function Service (children, image) {
        return (
            <div>
                <h3>{children}</h3>
            </div>
        )
    }
    return(
        <div className='services'>
            <Service>Architecture</Service>
            <Service>Interior</Service>
            <Service>Furniture</Service>
            <Service>Product</Service>
        </div>
    )
}

export default Services;