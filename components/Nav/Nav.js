import React, { useRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
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
            label: 'Work',
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
        const ref = navItems[parseInt(dataset.index[0])].ref.current
        e.preventDefault()
        router.push(pathname)
            .then(() => { ref.simulateClick() })
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
                            : <Link href={item.href}>
                                <a className="nav__items__link">{item.label}</a>
                            </Link>
                    }
                    </li>
                )
            }
            </ul>
        </nav>
    )
}

export default Nav
