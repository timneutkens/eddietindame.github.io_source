import React from 'react'
import { string, object } from 'prop-types'
import { useSpring, animated } from 'react-spring'
import Img from 'react-image'
import './Image.scss'

const Image = ({
    className,
    animation,
    image,
    alt
}) => {
    const _animation = animation ? useSpring(animation) : undefined
    const Element = animation ? animated.div : 'div'

    return (
        <Element
            className={(className ? className + ' ' :  '') + 'image'}
            style={_animation}
        >
            <Img
                src={image}
                alt={alt}
                className="image__inner"
                loader={
                    <div className="image__inner">
                        <div className="image__loader loader" />
                    </div>
                }
            />
        </Element>
    )
}

Image.propTypes = {
    className: string,
    animation: object,
    image: string.isRequired,
    alt: string.isRequired
}

export default Image
