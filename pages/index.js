import React from 'react'
import Landing from '~components/Landing'
import Nav from '~components/Nav'
import About from '~components/About'
import Contact from '~components/Contact'
import '~scss/index.scss'

const Index = () =>
    <div
        id="index"
        className="index"
    >
        <Nav />
        <Landing />
        <About />
        <Contact />
    </div>

export default Index
