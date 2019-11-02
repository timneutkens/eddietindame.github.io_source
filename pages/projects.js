import React, { useEffect } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import { HOST } from '~config'

const Projects = () => {
    useEffect(() => {
        Router.replace('/work')
    }, [])

    return (
        <Head>
            <link rel="canonical" href={HOST + '/work'} />
            <title>Eddie Tindame | Work</title>
        </Head>
    )
}

Projects.getInitialProps = async ({ res }) => {
    if (res) {
        if (typeof res.writeHead === 'function') {
            res.writeHead(302, {
                Location: '/work'
            })
            res.end()
        }
    } else Router.push('/work')
    return { props: null }
}

export default Projects
