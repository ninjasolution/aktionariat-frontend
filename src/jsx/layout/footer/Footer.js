import React from 'react';
import logo from '../../../images/logo.svg'
import '../../../scss/layout/footer/Footer.css';
import { Link } from 'react-router-dom';
function Footer(props) {
    const footer_object = {
        solutions: [
            {
                id: 1,
                name: 'For companies',
                link: '/for-companies'
            },
            {
                id: 2,
                name: 'For investors',
                link: '/for-investors'
            },
            {
                id: 3,
                name: 'Our products',
                link: '/our-products/brokerbot'
            },
            {
                id: 4,
                name: 'Corporate login',
                link: '/login'
            },
        ],
        about_us: [
            {
                id: 1,
                name: 'Our vision',
                link: '/about/#our-vision'
            },
            {
                id: 2,
                name: 'Team & career',
                link: '/about/#team'
            },
            {
                id: 4,
                name: 'FAQ',
                link: '/faq/en'
            },
        ],
        resources: [
            {
                id: 1,
                name: 'Documentation',
                link: '/documentation/how-to-buy-aktionariat-shares'
            },
            {
                id: 2,
                name: 'Developer resources',
                link: '/documentation/how-to-buy-aktionariat-shares'
            },
            {
                id: 3,
                name: 'Blogs',
                link: '/blog'
            },
            {
                id: 4,
                name: 'News',
                link: '#'
            },
        ],
        legal_privacy: [
            {
                id: 1,
                name: 'Terms of service',
                link: '#'
            },
            {
                id: 2,
                name: 'Legal package',
                link: '#'
            },
            {
                id: 3,
                name: 'Impressum',
                link: '#'
            },
        ],
        contact: [
            {
                id: 1,
                name: 'E-mail',
                link: '#'
            },
            {
                id: 2,
                name: 'Call',
                link: '#'
            },
            {
                id: 3,
                name: 'Twitter',
                link: '#'
            },
            {
                id: 4,
                name: 'Linkedin',
                link: '#'
            },
            {
                id: 5,
                name: 'Telegram',
                link: '#'
            },
            {
                id: 6,
                name: 'Youtube',
                link: '#'
            },
        ]
    }
    return (
        <footer id='footer'>
            <div className="section_container">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                            <ul className="list-unstyled footer_list">
                                <li>
                                    <img src={logo} alt="logo" />
                                </li>
                            </ul>
                        </div>

                        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                            <h3 className='footer_title'>
                                Solutions
                            </h3>
                            <ul className="list-unstyled footer_list">
                                {footer_object.solutions.map(v => {
                                    return (

                                        <li key={v.id}>
                                            <Link to={v.link}>
                                                {v.name}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                            <h3 className='footer_title'>
                                About us
                            </h3>
                            <ul className="list-unstyled footer_list">
                                {footer_object.about_us.map(v => {
                                    return (

                                        <li key={v.id}>
                                            <a href={v.link}>{v.name}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                            <h3 className='footer_title'>
                                Resources
                            </h3>
                            <ul className="list-unstyled footer_list">
                                {footer_object.resources.map(v => {
                                    return (
                                        <li key={v.id}>
                                            <Link to={v.link}>{v.name}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                            <h3 className='footer_title'>
                                Legal & privacy
                            </h3>
                            <ul className="list-unstyled footer_list">
                                {footer_object.legal_privacy.map(v => {
                                    return (

                                        <li key={v.id}>
                                            <Link to={v.link}>{v.name}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>


                        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                            <h3 className='footer_title'>
                                Contact
                            </h3>
                            <ul className="list-unstyled footer_list">
                                {footer_object.contact.map(v => {
                                    return (

                                        <li key={v.id}>
                                            <Link to={v.link}> {v.name}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>

                    <div className="row footer_list">
                        <div className="col-6">
                            <span className="footer_item">
                                © 2022 AKTIONARIAT AG
                            </span>
                        </div>
                        <div className="col-6 text-end">
                            <span className="footer_item">
                                All rights reserved.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;