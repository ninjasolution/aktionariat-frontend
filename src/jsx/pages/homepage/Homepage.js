import React, { useState } from 'react';
import '../../../scss/pages/homepage/Homepage.css';
import CompanyTable from '../../../jsx/components/CompanyTable/CompanyTable';
import ClientFeedback from '../../components/ClientFeedback/ClientFeedback';
import LatestNewsComponent from '../../components/LatestNews/LatestNews'
import { Helmet } from "react-helmet";
function Homepage(props) {
    return (
        <div id='Homepage'>
            <CreateMarketSection></CreateMarketSection>
            <Companies></Companies>
            <VideoSection></VideoSection>
            <CompanyEmpower></CompanyEmpower>
            <OurVision></OurVision>
            <OurSolution></OurSolution>
            <LatestBlogs></LatestBlogs>
            <LatestNews></LatestNews>
            <CustomerFeedback></CustomerFeedback>
            <NewsLatter></NewsLatter>
        </div>
    );
}
export default Homepage;


function CreateMarketSection() {
    const company_object = [
        {
            id: 1,
            img: require('../../../images/pages/homepage/nzz.svg').default,
            link: '#',
            width: 112,
        },
        {
            id: 2,
            img: require('../../../images/pages/homepage/hslu.svg').default,
            link: '#',
            width: 156,
        },
        {
            id: 3,
            img: require('../../../images/pages/homepage/bilanz.svg').default,
            link: '#',
            width: 156,
        },
        {
            id: 4,
            img: require('../../../images/pages/homepage/moneyca.svg').default,
            link: '#',
            width: 156,
        },
        {
            id: 5,
            img: require('../../../images/pages/homepage/startup.svg').default,
            link: '#',
            width: 161,
        },

    ]
    return (
        <section id="CreateMarketSection">
            <div className="section_container">
                <div className="d-flex justify-content-between flex-wrap flex-lg-nowrap">
                    <div className="jumbo_text"><h1>Create a market for
                        <span className="text-gradient-3"> your&nbsp;shares</span>
                    </h1>
                        <p className="text-size-medium">We provide Swiss companies with digital tools to create a market for their shares on their website.</p>
                    </div>
                    <div className="d-flex mb-3 justify-content-end req_wrapper mt-4">
                        <a href="#" className='req_demo action_arrow align-items-end'>
                            Request a Demo
                            <span className="arrow">
                                ↘
                            </span>
                        </a>
                    </div>
                </div>
                <div className="row company_logo_row flex-wrap flex-sm-nowrap my-3 my-md-5 py-md-5 align-items-center">

                    {company_object.map(v => {
                        return (
                            <div className={`col ${v.id !== 1 ? 'text-end' : ''}`}>
                                <a href={v.link}>
                                    <img width={v.width} src={v.img} alt="img" />
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}


function Companies() {
    const company_table_object = [
        {
            id: 1,

        }
    ]
    return (
        <section id="Companies">
            <div className="section_container">
                <h2 className="heading-label text-color-grey">Investment Opportunities</h2>
                <div className="margin-bottom margin-small"><p className="heading-large text-weight-bold">Companies</p></div>
                <p className="paragraph margin-bottom margin-large">Important information: Read our <a href="/disclaimer"><strong>disclaimer</strong> </a>before taking any investment decisions.</p>

                <CompanyTable data={company_table_object}></CompanyTable>
            </div>


            <div className="section_container pt-5">
                {/* show more */}
                <a href="#" className='w-100 d-block action_arrow '>
                    Show more
                    <span className="arrow">
                        ↘
                    </span>
                </a>
            </div>

        </section>
    )
}


function VideoSection() {
    return (
        <div id="VideoSection">
            <div className="page-padding"><div className="container-large">
                <div className="padding-vertical padding-xxlarge">
                    <div className="max-width-full">
                        <div className="margin-top margin-small">
                            <div style={{ "padding-top": "56.17021276595745%" }}
                                className="w-embed-youtubevideo homepage-video">
                                <iframe src="https://www.youtube-nocookie.com/embed/0qpMAnr9Nwo?rel=0&controls=1&autoplay=1&mute=1&start=0"
                                    frameBorder={0} style={{ "position": "absolute", "left": "0", "top": "0", "width": "100%", "height": "100%", "pointer-events": "auto" }} allow="autoplay; encrypted-media" allowFullScreen title="Aktionariat" /></div></div></div></div></div></div>
        </div>
    )
}

function CompanyEmpower() {
    const card_object = [
        {
            id: 1,
            link: 'http://client.aktionariat.com/continuous-fundraising',
            title: 'Continuous fundraising',
            description: `Allow new investors to buy-in at any time directly through
            your website.`,
            img: 'https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/61b28a3ce52d49394879f9a3_icon-color-continuous.svg',
        },
        {
            id: 2,
            link: 'http://client.aktionariat.com/community-engagement',
            title: 'Community engagement',
            description: `Let clients, suppliers, and other stakeholders participate in
            your success.`,
            img: 'https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/61b28a3cb5fb87497a989a3c_icon-color-community.svg',
        },
        {
            id: 3,
            link: 'http://client.aktionariat.com/continuous-fundraising',
            title: 'Employee participation',
            description: `Incentivize your employees with real shares of tangible value.`,
            img: 'https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/61b28a3df007f810f5190a69_icon-color-employee.svg',
        },
        {
            id: 4,
            link: 'http://client.aktionariat.com/continuous-fundraising',
            title: 'Strategic independence',
            description: `Enjoy liquidity and grow your company without being pushed
            towards an exit.`,
            img: 'https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/61b28a3de52d49649479f9a4_icon-color-strategic.svg',
        },
    ]
    return (

        <section id="CompanyEmpower" className='section section-grey'>
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical padding-xxlarge">
                        <div className="section-title">
                            <h2 className="heading-label text-color-grey">What We Enable</h2>
                            <div className="margin-bottom margin-xlarge">
                                <p className="heading-large text-weight-bold max-width-large">
                                    We empower your company to{" "}
                                    <span className="text-gradient-1">
                                        self-finance through&nbsp;its ecosystem.
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="content-grid">
                            {
                                card_object.map(v => {
                                    return (
                                        <div key={v.id}
                                            id="w-node-_56209af1-0039-0a72-959e-32a5445db57c-445db57b"
                                            className="hover-card-item background-color-gradient-1"
                                        >
                                            <div className="hover-card-content justify-start">
                                                <div className="margin-bottom margin-medium">
                                                    <img
                                                        src={v.img}
                                                        loading="lazy"
                                                        alt="img"
                                                        className="icon-1x1-small"
                                                        style={{ filter: "saturate(0%) brightness(200%)" }}
                                                    />
                                                </div>
                                                <div className="max-width-full">
                                                    <div className="margin-bottom margin-small">
                                                        <h3 className="text-size-xlarge text-weight-normal">
                                                            <a href={v.link}>
                                                                {v.title}
                                                            </a>
                                                        </h3>
                                                    </div>
                                                    <p className="text-color-darkgrey">
                                                        {v.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function OurVision() {
    return (
        <section id="OurVision">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical padding-xxlarge">
                        <div className="section-title">
                            <div className="margin-bottom margin-xlarge">
                                <div className="content-grid rows-0">
                                    <h2
                                        id="w-node-_42b832d8-0436-d744-9edb-85b3c7346cc7-e57ea549"
                                        className="heading-label text-color-grey"
                                    >
                                        Our Vision
                                    </h2>
                                    <p
                                        id="w-node-_45b08ea8-8353-0604-2aec-9c851dc403fb-e57ea549"
                                        className="heading-large text-weight-bold"
                                    >
                                        Welcome to the era of{" "}
                                        <span className="text-gradient-3">direct</span> and{" "}
                                        <span className="text-gradient-3">scalable</span> relations
                                        between companies and investors—built on blockchain technology.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="content-grid rows-4">
                            <div
                                id="w-node-_6205f154-9ae5-1265-f507-101ae10b3d05-e57ea549"
                                className="content-block"
                            >
                                <div className="margin-bottom margin-xxlarge">
                                    <div className="margin-bottom margin-medium">
                                        <img
                                            src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/6193f7779d29bab3d2e05e88_aktionariat-gradient-icon-company.svg"
                                            loading="lazy"
                                            alt="Company Icon"
                                            className="icon-1x1-large"
                                        />
                                    </div>
                                    <div className="margin-bottom margin-small">
                                        <h3 className="text-size-xlarge text-weight-normal">
                                            For companies
                                        </h3>
                                    </div>
                                    <p className="text-color-grey">
                                        Companies should have the capability to raise funds directly
                                        through their website.
                                    </p>
                                </div>
                                <a
                                    href="/for-companies"
                                    className="button-arrow action_arrow button-arrow-large w-inline-block"
                                >
                                    Show more
                                    <span className="arrow">
                                        ↘
                                    </span>
                                </a>
                            </div>
                            <div
                                id="w-node-d5266f8e-c88a-1f7f-a6d6-e31dfa9b41c9-e57ea549"
                                className="content-block"
                            >
                                <div className="margin-bottom margin-xxlarge">
                                    <div className="margin-bottom margin-medium">
                                        <img
                                            src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/6193f85676a2b2dbf0653b67_aktionariat-gradient-icon-investor.svg"
                                            loading="lazy"
                                            alt="Investor Icon"
                                            className="icon-1x1-large"
                                        />
                                    </div>
                                    <div className="margin-bottom margin-small">
                                        <h3 className="text-size-xlarge text-weight-normal">
                                            For investors
                                        </h3>
                                    </div>
                                    <p className="text-color-grey">
                                        Anyone should be able to invest in the companies they believe in.
                                    </p>
                                </div>
                                <a
                                    href="/for-investors"
                                    className="button-arrow action_arrow button-arrow-large w-inline-block"
                                >
                                    Show more

                                    <span className="arrow">↘</span>
                                </a>
                            </div>
                            <div
                                id="w-node-_17b8cbbe-8c27-6aac-370b-3881f79bcbd9-e57ea549"
                                className="image-text-block image-center"
                            >
                                <img
                                    src={require('../../../images/pages/homepage/vision-artwork.png')}
                                    loading="lazy"
                                    width={550}
                                    sizes="(max-width: 479px) 30.75px, (max-width: 767px) 40.5px, 100vw"
                                    alt="Ethereum Blockchain powered direct relationship artwork."
                                />
                                <div className="artwork-caption absolute-top">
                                    <div className="text-size-small text-align-center">
                                        Direct relationships, no intermediaries.
                                    </div>
                                </div>
                                <div className="artwork-caption absolute-bottom">
                                    <div className="text-size-small text-align-center">
                                        Powered by the Ethereum Blockchain.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function OurSolution() {
    const [tabOpen, setTabOpen] = useState(1);
    return (
        <section id="OurSolution" className='section section-grey'>
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical padding-xxlarge">
                        <h2 className="heading-label text-color-grey">Our Solutions</h2>
                        <div className="section-title">
                            <div className="margin-bottom margin-xlarge">
                                <div className="content-grid">
                                    <p
                                        id="w-node-_27d0e4a0-dda7-9b67-fc5b-6b722aff9f85-2aff9f7c"
                                        className="heading-large text-weight-bold"
                                    >
                                        Our tools make you{" "}
                                        <span className="text-gradient-1">forget&nbsp;about IPOs.</span>
                                    </p>
                                    <p
                                        id="w-node-_27d0e4a0-dda7-9b67-fc5b-6b722aff9f89-2aff9f7c"
                                        className="text-size-medium"
                                    >
                                        Our solution allows you to trade your company’s shares with
                                        investors directly on your website.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="content-grid rows-4">
                            <a
                                id="w-node-_27d0e4a0-dda7-9b67-fc5b-6b722aff9f8c-2aff9f7c"
                                href="https://www.aktionariat.com/investor-relations#brokerbot"
                                className="image-block image-center background-color-gradient-1 w-inline-block"
                            >
                                {tabOpen === 1 ? <img
                                    src={require('../../../images/pages/homepage/buy.png')}
                                    width={420}
                                    alt=""
                                    className="our-vision-image-1"
                                /> :
                                    <img
                                        src={require('../../../images/pages/homepage/portfolio-app.gif')}

                                        width={321}

                                        alt="Portfolio App Screens Gif"
                                        className="our-vision-image-1"
                                    />}

                            </a>
                            <div
                                id="w-node-_27d0e4a0-dda7-9b67-fc5b-6b722aff9f8f-2aff9f7c"
                                className="content-block"
                            >
                                <div
                                    data-current="Tab 1"
                                    data-easing="linear"
                                    data-duration-in={0}
                                    data-duration-out={0}
                                    className="product-tabs w-tabs"
                                >
                                    <div className="product-tabs-menu w-tab-menu" role="tablist">
                                        <button onClick={() => setTabOpen(1)}
                                            className={`product-tab-link w-inline-block w-tab-link ${tabOpen === 1 ? 'w--current' : ''}`}>
                                            <div>Brokerbot</div></button>



                                        <button onClick={() => setTabOpen(2)}
                                            className={`product-tab-link w-inline-block w-tab-link ${tabOpen === 2 ? 'w--current' : ''}`}>
                                            <div>Portfolio&nbsp;App</div>
                                        </button>
                                    </div>
                                    <div className="product-tabs-content w-tab-content">
                                        <div
                                            data-w-tab="Tab 1"
                                            className="w-tab-pane w--tab-active"
                                            id="w-tabs-0-data-w-pane-0"
                                            role="tabpanel"
                                            aria-labelledby="w-tabs-0-data-w-tab-0"
                                        >
                                            {tabOpen === 1 ? <div className="content-block space-between">
                                                <div className="margin-bottom margin-medium">
                                                    <h3 className="text-size-xlarge text-weight-normal">
                                                        A fully automated,{" "}
                                                        <span className="text-gradient-1">
                                                            blockchain-based market{" "}
                                                        </span>
                                                        tool.
                                                    </h3>
                                                </div>
                                                <div className="margin-bottom margin-medium">
                                                    <ul role="list" className="text-color-darkgrey">
                                                        <li>Embedded in your company's website.</li>
                                                        <li>
                                                            Equipped with shares of your company (treasury shares)
                                                        </li>
                                                        <li>Trade shares against XCHF, Ether or even CHF</li>
                                                        <li>
                                                            Based on smart contracts on the Ethereum blockchain or
                                                            Optimism Layer-2 network
                                                        </li>
                                                        <li>Shares are minted as ERC-20 security tokens</li>
                                                    </ul>
                                                </div>
                                                <a
                                                    href="/for-companies"
                                                    className="button-arrow action_arrow button-arrow-large w-inline-block"
                                                >
                                                    <div>Learn more</div>

                                                    <span className="arrow">
                                                        ↘
                                                    </span>
                                                </a>
                                            </div> :

                                                <div className="content-block space-between">
                                                    <div className="margin-bottom margin-medium">
                                                        <h3 className="text-size-xlarge text-weight-normal">
                                                            <span className="text-gradient-1">Manage</span> and{" "}
                                                            <span className="text-gradient-1">store</span> your assets.
                                                        </h3>
                                                    </div>
                                                    <div className="margin-bottom margin-medium">
                                                        <ul role="list" className="text-color-darkgrey">
                                                            <li>Trade tokenized shares by connecting with the Brokerbot</li>
                                                            <li>
                                                                Manage Ethereum-based assets (self custody wallet) &amp; traditional
                                                                shares
                                                            </li>
                                                            <li>Request the tokenization of traditional shares</li>
                                                            <li>Transfer Ethereum and Optimism-based assets </li>
                                                            <li>Supports the WalletConnect protocol</li>
                                                        </ul>
                                                    </div>
                                                    <a
                                                        href="/for-companies"
                                                        className="button-arrow action_arrow button-arrow-large w-inline-block"
                                                    >
                                                        <div>Show more</div>
                                                        <span className="arrow">
                                                            ↘
                                                        </span>
                                                    </a>
                                                </div>


                                            }

                                        </div>
                                        <div
                                            data-w-tab="Tab 2"
                                            className="w-tab-pane"
                                            id="w-tabs-0-data-w-pane-1"
                                            role="tabpanel"
                                            aria-labelledby="w-tabs-0-data-w-tab-1"
                                        >
                                            <div className="content-block space-between">
                                                <div className="margin-bottom margin-medium">
                                                    <h3 className="text-size-xlarge text-weight-normal">
                                                        <span className="text-gradient-1">Manage</span> and{" "}
                                                        <span className="text-gradient-1">store</span> your
                                                        assets.
                                                    </h3>
                                                </div>
                                                <div className="margin-bottom margin-medium">
                                                    <ul role="list" className="text-color-darkgrey">
                                                        <li>
                                                            Trade tokenized shares by connecting with the Brokerbot
                                                        </li>
                                                        <li>
                                                            Manage Ethereum-based assets (self custody wallet) &amp;
                                                            traditional shares
                                                        </li>
                                                        <li>Request the tokenization of traditional shares</li>
                                                        <li>Transfer Ethereum and Optimism-based assets </li>
                                                        <li>Supports the WalletConnect protocol</li>
                                                    </ul>
                                                </div>
                                                <a
                                                    href="/for-companies"
                                                    className="button-arrow action_arrow button-arrow-large w-inline-block"
                                                >
                                                    <div>Show more</div>
                                                    <span className="arrow">
                                                        ↘
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

function LatestBlogs() {
    const blogs_object = [
        {
            id: 1,
            img: require('../../../images/pages/homepage/blog_img1.png'),
            date: 'July 21, 2022',
            description: `SIX Digital Exchange partners with Aktionariat to
            provide greater access to capital through digital
            securities in Switzerland`,
            link: '/blogs/six-digital-exchange-partners-with-aktionariat'
        },
        {
            id: 2,
            img: require('../../../images/pages/homepage/wallet-p-800.png'),
            date: 'May 10, 2022',
            description: `Wallets for cryptocurrencies: An overview.`,
            link: 'blogs/wallets-for-cryptocurrencies-an-overview'
        },
        {
            id: 3,
            img: require('../../../images/pages/homepage/blog-3-p-1080.jpeg'),
            date: 'April 7, 2022',
            description: `Reasons for Optimism: Aktionariat implemented Ethereum Layer-2 Optimism roll-up protocol`,
            link: '/blogs/reasons-for-optimism-aktionariat-implements-ethereum-layer-2-optimism-roll-up-protocol'
        },

    ]
    return (
        <section id="LatestBlogs">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical padding-xxlarge">
                        <div className="section-title">
                            <h2 className="heading-label text-color-grey">Blog</h2>
                            <div className="margin-bottom margin-xlarge">
                                <p className="heading-large text-weight-bold max-width-large">
                                    Latest <span className="text-gradient-2">blog articles</span>
                                </p>
                            </div>
                        </div>
                        <div className="margin-bottom margin-medium">
                            <div className="blog1_component">
                                <div className="blog1_list-wrapper w-dyn-list">
                                    <div role="list" className="collection-grid w-dyn-items">

                                        {blogs_object.map(v => {
                                            return (
                                                <div key={v.id}
                                                    id="w-node-_3cec4047-dc23-a95a-b6f8-b68a04997983-04997981"
                                                    role="listitem"
                                                    className="blog1_item w-dyn-item"
                                                >
                                                    <div className="blog_content-wrapper">
                                                        <div className="blog_image-wrapper">
                                                            <img
                                                                src={v.img}
                                                                loading="lazy"
                                                                alt="img"
                                                                className="image-100"
                                                            />
                                                        </div>
                                                        <div className="blog_content">
                                                            <div className="margin-bottom margin-small">
                                                                <h3 className="text-size-large text-weight-normal">
                                                                    {v.description}
                                                                </h3>
                                                            </div>
                                                            <div className="text-size-small text-color-lightgrey">
                                                                {v.date}
                                                            </div>
                                                        </div>
                                                        <a href={v.link} className="blog1_item-link w-inline-block"> </a>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a
                            href="/blog"
                            className="action_arrow button-arrow button-arrow-large w-inline-block"
                        >
                            <div>Show more</div>
                            <spaan className="arrow">
                                ↘
                            </spaan>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

function LatestNews() {

    return (
        <section id="LatestNews" className='section section-grey'>
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical padding-xxlarge">
                        <div className="section-title">
                            <h2 className="heading-label text-color-grey">News</h2>
                            <div className="margin-bottom margin-xlarge">
                                <p className="heading-large text-weight-bold max-width-large">
                                    Latest <span className="text-gradient-3">news</span>
                                </p>
                            </div>
                        </div>
                        <div className="margin-bottom">
                            <LatestNewsComponent></LatestNewsComponent>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

function CustomerFeedback() {

    return (
        <section id="CustomerFeedback">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical padding-xxlarge">
                        <div className="section-title">
                            <h2 className="heading-label text-color-grey">Customer Feedback</h2>
                            <div className="margin-bottom margin-medium">
                                <p className="heading-xlarge text-weight-bold max-width-large">
                                    <span className="text-gradient-1">What our customers say</span>
                                </p>
                            </div>
                            <div className="margin-bottom margin-xlarge">
                                <p> Re(DeFi)ning Capitalism.</p>
                            </div>
                        </div>
                        <div className="margin-bottom margin-xlarge">
                            <div className="layout5_component">
                                <a href="#" className="layout-item w-inline-block">
                                    <div className="margin-bottom margin-small">
                                        <h3 className="heading-xlarge">1000+</h3>
                                    </div>
                                    <div className="margin-bottom">
                                        <p className="text-size-medium text-color-grey">
                                            Registered Investors
                                        </p>
                                    </div>
                                </a>
                                <a href="#" className="layout-item w-inline-block">
                                    <div className="margin-bottom margin-small">
                                        <h3 className="heading-xlarge">6.8 Mio+</h3>
                                    </div>
                                    <div className="margin-bottom">
                                        <p className="text-size-medium text-color-grey">Raised Capital</p>
                                    </div>
                                </a>
                                <a href="#" className="layout-item w-inline-block">
                                    <div className="margin-bottom margin-small">
                                        <h3 className="heading-xlarge">16</h3>
                                    </div>
                                    <div className="margin-bottom">
                                        <p className="text-size-medium text-color-grey">
                                            Onboarded Companies
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="divider" />
                        <ClientFeedback></ClientFeedback>
                    </div>
                </div>
            </div>
        </section>
    )
}

function NewsLatter() {
    return (
        <section id="NewsLatter">


            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical padding-xlarge">
                        <div className="cta_component">
                            <div className="max-width-full">
                                <div className="margin-bottom margin-medium">
                                    <p className="heading-xlarge text-weight-bold">
                                        Don’t miss out.
                                        <span className="text-gradient-3">
                                            <br />
                                        </span>
                                        <span className="text-gradient-3">
                                            Sign up for&nbsp;our newsletter.
                                        </span>
                                    </p>
                                </div>
                                <div className="margin-bottom margin-small">
                                    <p className="max-width-large text-color-darkgrey">
                                        To stay up-to-date on our latest tools and products, visit our{" "}
                                        <a href="/blog">Blog</a>, follow us on{" "}
                                        <a
                                            href="https://www.linkedin.com/company/aktionariat-ag"
                                            target="_blank"
                                        >
                                            LinkedIn
                                        </a>{" "}
                                        and{" "}
                                        <a href="https://twitter.com/aktionariat" target="_blank">
                                            Twitter
                                        </a>
                                        , or subscribe to our newsletter:
                                    </p>
                                </div>
                            </div>
                            <div className="max-width-medium">
                                <div className="w-embed w-script">
                                    <div className="form-group">
                                        <input type="email" name="" id="" placeholder='Your email address' className='form-control w-100 border border-danger py-2 px-3 shadow-0 outline-0' />
                                    </div>
                                    <div className="form-check py-3">
                                        <label className="form-check-label">
                                            <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue" checked />

                                            I agree to receive communication from Aktionariat. <span className="text-danger">*</span>
                                        </label>
                                    </div>

                                    <p>
                                        You can unsubscribe from these communications at any time.
                                    </p>

                                    <button type="submit" className="btn btn-light my-4">Subscribe now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}