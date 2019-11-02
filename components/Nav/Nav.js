import React, { useRef } from 'react'
import { useRouter } from 'next/router'
import Scrollchor from 'react-scrollchor'
import './Nav.scss'

const Nav = () => {
    const router = useRouter()
    const navItems = [
        {
            label: 'Home',
            hash: '#home',
            ref: useRef()
        },
        {
            label: 'About',
            hash: '#about',
            ref: useRef()
        },
        {
            label: 'Projects',
            href: '/work',
            ref: useRef()
        },
        {
            label: 'Contact',
            hash: '#contact',
            ref: useRef()
        }
    ]
    const _onClickAnchor = e => {
        const { pathname, dataset } = e.target
        const ref = pathname !== '/work' ? navItems[parseInt(dataset.index[0])].ref.current : null
        e.preventDefault()
        router.push(pathname)
            .then(() => {
                if (ref)
                    setTimeout(() => { // timeout because page transition takes 300ms
                        ref.simulateClick()
                    }, 309)
            })
    }
    const _onHoverAnchor = () => {
        router.prefetch('/')
    }

    return (
        <nav className="nav">
            <ul className="nav__items">
            {
                navItems.map((item, i) =>
                    <li
                        key={i}
                        className="nav__items__item"
                    >
                    {
                        item.hash
                            ? router.pathname === '/work'
                                ? <>
                                    <Scrollchor
                                        ref={item.ref}
                                        to={item.hash}
                                        disableHistory={true}
                                    />
                                    <a
                                        href={'/' + item.hash}
                                        className="nav__items__link"
                                        onClick={_onClickAnchor}
                                        onMouseEnter={_onHoverAnchor}
                                        data-index={i}
                                    >{item.label}</a>
                                </>
                                : <Scrollchor
                                    to={item.hash}
                                    className="nav__items__link"
                                    disableHistory={true}
                                >{item.label}</Scrollchor>
                            : router.pathname === '/work'
                                ? <Scrollchor
                                    to="#work"
                                    className="nav__items__link"
                                    disableHistory={true}
                                >{item.label}</Scrollchor>
                                : <a
                                    href={item.href}
                                    className="nav__items__link"
                                    onClick={_onClickAnchor}
                                    onMouseEnter={_onHoverAnchor}
                                >{item.label}</a>
                    }
                    </li>
                )
            }
            </ul>
        </nav>
    )
}

export default Nav
