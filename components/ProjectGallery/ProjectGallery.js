import React from 'react'
import { array } from 'prop-types'
import { useTrail } from 'react-spring'
import Project from '~components/Project'
import './ProjectGallery.scss'

const ProjectGallery = ({ projects }) => {
    const trail = useTrail(projects.length, {
        opacity: 1,
        transform: 'translate(0px, 0px)',
        from: {
            opacity: 0,
            // transform: 'translate(0px, 1000px)'
            transform: 'translate(-1000px, 0px)'
        }
    })

    return (
        <div className="project-gallery">
            <div className="project-gallery__inner">
            {
                projects.map((project, i) =>
                    <Project
                        key={i}
                        name={project.name}
                        thumbnail={project.thumbnail}
                        video={project.video}
                        description={project.description}
                        tags={project.tags}
                        href={project.href}
                        credits={project.credits}
                        isReversed={(i + 1) % 2 === 0}
                        animation={trail[i]}
                        className="project-gallery__item"
                    />
                )
            }
            </div>
        </div>
    )
}

ProjectGallery.propTypes = {
    projects: array
}

export default ProjectGallery
