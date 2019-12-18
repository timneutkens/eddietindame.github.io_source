import React from 'react'
import App from 'next/app'
import Router from 'next/router'
import withGA from 'next-ga'
import NProgress from 'next-nprogress/component'
import { PageTransition } from 'next-page-transitions'
import Nav from '~components/Nav'
import { GA_TRACKING_ID } from '~config'

function MyApp({ Component, pageProps }) {
  return (
    <>
        <NProgress
            color="#000000"
            spinner={false}
        />
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

export default withGA(GA_TRACKING_ID, Router)(MyApp)
