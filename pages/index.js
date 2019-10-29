import React from 'react'
import Head from 'next/head'
import Landing from '~components/Landing'
import About from '~components/About'
import Contact from '~components/Contact'
import '~scss/index.scss'

const Index = () =>
    <>
        <Head>
            <title>Eddie Tindame | Full Stack Developer</title>
        </Head>
        <div
            id="index"
            className="index"
        >
            <Landing />
            <About />
            <Contact />
        </div>
    </>

export default Index
