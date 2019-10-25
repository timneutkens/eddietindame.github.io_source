import React from 'react'
import Scrollchor from 'react-scrollchor'
import './Header.scss'

const Header = () =>
    <header className="header">
        <nav className="header__nav nav">
        {
            navItems.map((item, i) =>
                <div
                    key={i}
                    className="nav__item"
                >
                    <Scrollchor
                        to={item.href}
                        className="nav__item__link"
                        disableHistory={true}
                    >{item.label}</Scrollchor>
                </div>
            )
        }
        </nav>
    </header>

export default Header

const navItems = [
    {
        label: 'Home',
        href: '#home'
    },
    {
        label: 'About',
        href: '#about'
    },
    {
        label: 'Work',
        href: '#work'
    },
    {
        label: 'Contact',
        href: '#contact'
    }
]
