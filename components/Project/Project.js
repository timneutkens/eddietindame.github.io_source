import React from 'react'
import { array, bool, object, string } from 'prop-types'
import { animated } from 'react-spring'
import './Project.scss'

const Project = ({
    name,
    thumbnail,
    video,
    description,
    tags,
    href,
    credits,
    isReversed,
    animation,
    className
}) => {
    const Element = animation ? animated.div : 'div'

    return(
        <Element
            className={(className ? (className + ' ') : '') + 'project' +  (isReversed ? ' project--reversed' : '')}
            style={animation}
        >
            <div className="project__inner">
                <h2 className="project__title">
                    <span className="project__highlight">
                    {
                        href
                            ? <a
                                href={href}
                                target="__blank"
                                rel="noopener noreferrer"
                                className="project__link"
                            >{name}</a>
                            : name
                    }
                    </span>
                </h2>
                <p className="project__description">
                    <span className="project__highlight">{description}</span>
                </p>
                {
                    video
                        ? <video
                            className="project__thumbnail project__thumbnail--video"
                            // width="250"
                            height="400"
                            autoPlay
                            muted
                            loop
                        >
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        : <img
                            src={thumbnail}
                            alt={name}
                            className="project__thumbnail"
                        />
                }
                <ul className="project__tags">
                {
                    tags.sort().map((tag, i) =>
                        <li
                            key={i}
                            className="project__tags__tag"
                        >{tag}</li>
                    )
                }
                </ul>
                {
                    credits && credits.length && credits.map((credit, i) =>
                        <div
                            key={i}
                            className="project__credit"
                        >
                            <span className="project__highlight">
                                <span className="project__credit__label">{credit.label}:</span> <strong className="project__credit__value">{credit.value}</strong>
                            </span>
                        </div>
                    )
                }
            </div>
        </Element>
    )
}

Project.propTypes = {
    name: string.isRequired,
    thumbnail: string.isRequired,
    video: string,
    description: string.isRequired,
    tags: array.isRequired,
    href: string,
    credits: array,
    isReversed: bool,
    animation: object,
    className: string
}

export default Project
