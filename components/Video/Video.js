import React, { useEffect, useState, useRef } from 'react'
import { string, object, func } from 'prop-types'
import { useSpring, animated } from 'react-spring'
import './Video.scss'

const Video = ({
    className,
    animation,
    video,
    onTouchStart,
    onTouchEnd
}) => {
    const videoRef = useRef()
    const [isVideoLoaded, setIsVideoLoaded] = useState(false)
    const _animation = animation ? useSpring(animation) : undefined
    const Element = animation ? animated.div : 'div'
    const _onVideoLoaded = () => { setIsVideoLoaded(true) }

    useEffect(() => {
        const videoElement = videoRef.current
        videoElement.addEventListener('canplay', _onVideoLoaded)
        return () => { videoElement.removeEventListener('canplay', _onVideoLoaded) }
    }, [])

    return (
        <Element
            className={(className ? className + ' ' :  '') + 'video'}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            style={_animation}
        >
            <video
                className="video__element"
                style={{ opacity: isVideoLoaded ? 1 : 0 }}
                ref={videoRef}
                // width="250"
                // height="400"
                playsInline
                autoPlay
                muted
                loop
            >
                {
                    video.sources.map((source, i) =>
                        <source
                            key={i}
                            src={`/static/video/${video.name}.${source}`}
                            type={`video/${source}`}
                        />
                    )
                }
                Your browser does not support the video tag. 😢
            </video>
            {
                !isVideoLoaded &&
                    <div
                        className="video__overlay"
                        style={{ opacity: isVideoLoaded ? 0 : 1 }}
                    >
                        <div className="video__overlay__loader loader" />
                    </div>
            }
        </Element>
    )
}

Video.propTypes = {
    className: string,
    animation: object,
    video: object.isRequired,
    onTouchStart: func,
    onTouchEnd: func
}

export default Video
