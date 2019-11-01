import React from 'react'
import { string, object } from 'prop-types'
import { useSpring, animated } from 'react-spring'
import './Image.scss'

const Image = ({
    className,
    animation,
    image,
    alt
}) => {
    const _animation = useSpring(animation)
    const Element = animation ? animated.img : 'img'

    return (
        <Element
            className={(className ? className + ' ' :  '') + 'image'}
            style={_animation}
            src={image}
            alt={alt}
        />
    )
}

Image.propTypes = {
    className: string,
    animation: object,
    image: string.isRequired,
    alt: string.isRequired
}

export default Image
