import React from 'react';

const ImageComponent = ({ src, alt, onMouseOver, onMouseOut }) => (
    <div className='image-container'>
        <img
            loading='lazy'
            src={src}
            alt={alt}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
        />
    </div>
)

export default ImageComponent;