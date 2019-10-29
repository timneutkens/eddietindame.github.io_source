import React from 'react'
import './Contact.scss'

const Contact = () => {
    const contactItems = [
        {
            label: 'eddie.tindame@googlemail.com',
            href: 'mailto:eddie.tindame@googlemail.com',
            isEmail: true
        },
        {
            label: 'github',
            href: 'https://github.com/eddietindame'
        },
        {
            label: 'linkedin',
            href: '#'
        },
        {
            label: 'c.v.',
            href: 'https://eddietindame.github.io/img/eddie_tindame_cv.pdf'
        }
        // {
        //     label: 'twitter',
        //     href: 'https://twitter.com/realquaid69'
        // }
    ]

    return (
        <section
            id="contact"
            className="contact"
        >
            <div className="contact__inner container">
                <img
                    src={require('~assets/images/portrait.jpg')}
                    alt=""
                    className="contact__portrait"
                />
                <div className="contact__items">
                {
                    contactItems.map(({ href, label, isEmail }, i) =>
                        <div
                            key={i}
                            className="contact__item"
                            style={{ position: 'relative', zIndex: contactItems.length - i }}
                        >
                            <a
                                href={href}
                                className={'contact__item__link' + (isEmail ? ' contact__item__link--email' : '')}
                                target={isEmail ? undefined : '_blank'}
                                rel={isEmail ? undefined : 'noopener noreferrer'}
                            ><span className="contact__item__highlight">{label}</span></a>
                        </div>
                    )
                }
                </div>
            </div>
        </section>
        
    )
}

export default Contact
