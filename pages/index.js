import React from 'react'
import Landing from '~components/Landing'
import Header from '~components/Header'
import About from '~components/About'
import Contact from '~components/Contact'
import '~scss/index.scss'

const Index = () =>
    <div
        id="index"
        className="index"
    >
        <Header />
        <Landing />
        <About />
        <Contact />
    </div>

export default Index
