import React from 'react'
import ReactDOM from 'react-dom'
import ProjectGallery from './ProjectGallery'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ProjectGallery />, div)
    ReactDOM.unmountComponentAtNode(div)
})
