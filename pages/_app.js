import React from 'react'
import App from 'next/app'
import Router from 'next/router'
import { PageTransition } from 'next-page-transitions'
import Nav from '~components/Nav'

class MyApp extends App {

    render() {
        const { Component, pageProps } = this.props
        return (
            <>
                <Nav />
                <PageTransition
                    timeout={300}
                    classNames="page-transition"
                    skipInitialTransition
                >
                    <Component
                        {...pageProps}
                        key={typeof window === 'undefined' ? '' : Router.route}
                    />
                </PageTransition>
            </>
        )
    }
}

export default MyApp
