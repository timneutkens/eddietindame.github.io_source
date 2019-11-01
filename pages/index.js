import React from 'react'
import Head from 'next/head'
import Landing from '~components/Landing'
import About from '~components/About'
import Contact from '~components/Contact'
import { HOST } from '~config'
import '~scss/index.scss'

const Index = () =>
    <>
        <Head>
            <link rel="canonical" href={HOST} />
            <title>Eddie Tindame | Full Stack Developer</title>
        </Head>
        <div
            id="index"
            className="index"
        >
            <div className="container-fluid">
            <Landing />
            <About />
            <Contact />
        </div>
        </div>
    </>

export default Index
