import React from 'react';

function OurProducts(props) {
    return (
        <div id='OurProducts'>
            <SectionHero></SectionHero>
            <ExploreProduct></ExploreProduct>
            <QAFurther></QAFurther>
        </div>
    );
}

export default OurProducts;


const SectionHero = () => {
    const hero_object = [
        {
            id: 1,
            img: require('../../../icons/question.svg').default,
            title: 'Problem',
            description: `A meaningful trading venue provides a share with sufficient
            liquidity. Unfortunately, even shares listed on central trading
            venues are sometimes affected by illiquidity, especially if they
            are not traded frequently enough (e.g. SIX listed titles are not
            necessarily liquid).`
        },

        {
            id: 2,
            img: require('../../../icons/icon-check.svg').default,
            title: 'Solution',
            description: `Following the successful model of Uniswap, we enable companies to
            provide a liquidity pool themselves.`
        },
        {
            id: 3,
            img: require('../../../icons/paragraph-center.svg').default,
            title: 'Summary',
            description: `Thanks to this fully decentralized approach, we achieve high
            liquidity, full market control and maximum decentralization in
            line with the blockchain philosophy.`
        },

    ]
    return (
        <section className="section section-hero our-products">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-top padding-xxhuge custom-hero-4">
                        <div className="content-grid">
                            <div
                                id="w-node-df22f752-4466-00b1-a1d9-65387c0ea40c-369110f3"
                                className="max-width-full"
                            >
                                <div className="padding-bottom">
                                    <div className="heading-xlarge text-weight-bold">
                                        Our <span>products</span>
                                    </div>
                                    <div className="_0px">
                                        <h1>Brokerbot</h1>
                                    </div>
                                    <div className="margin-top margin-medium">
                                        <p>
                                            Aktionariat offers a set of tools for Swiss companies to create
                                            a market for their digital shares on their own website.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                id="w-node-df22f752-4466-00b1-a1d9-65387c0ea42c-369110f3"
                                className="content-block"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-padding">
                <div className="container-large">
                    <div className="divider full-clear" />
                    <div className="padding-vertical padding-xlarge">
                        <div className="content-grid">
                            <div
                                id="w-node-_8d5612e3-338d-3f68-ae46-c1e824f04303-369110f3"
                                className="content-block space-between"
                            >
                                <div className="margin-bottom margin-small">
                                    <h3 className="heading-small">
                                        How our <span className="text-gradient-2">market&nbsp;works</span>
                                    </h3>
                                </div>
                            </div>

                            {
                                hero_object.map(v => {
                                    return (
                                        <div key={v.id}
                                            id="w-node-_8d5612e3-338d-3f68-ae46-c1e824f04307-369110f3"
                                            className="content-block"
                                        >
                                            <div className="margin-bottom">
                                                <div className="margin-bottom margin-small">
                                                    <div className="horizontal-center">
                                                        <div className="margin-right margin-small">
                                                            <img
                                                                src={v.img}
                                                                loading="lazy"
                                                                alt="Question Mark Icon"
                                                                className="icon-1x1-small"
                                                            />
                                                        </div>
                                                        <div className="text-size-large">{v.title}</div>
                                                    </div>
                                                </div>
                                                <p className="text-size-small text-color-darkgrey">
                                                    {v.description}
                                                </p>
                                            </div>

                                            {v.id === hero_object.length && (
                                                <a
                                                    href="/blogs/about-the-superiority-of-uniswap-style-markets-over-traditional-order-books"
                                                    className="button-arrow action_arrow w-inline-block small mt-3"
                                                >
                                                    <div>Learn more</div>
                                                    <span className="arrow">
                                                        ↘
                                                    </span>
                                                </a>
                                            )}
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

const ExploreProduct = () => {
    return (
        <section className='section section-grey'>
            <div id="details" className="page-padding">
                <div className="container-large">
                    <BrokerbotTab></BrokerbotTab>
                </div>
            </div>
        </section>
    )
}

const BrokerbotTab = () => {
    const explore_object = [
        {
            id: 1,
            name: 'Brokerbot',
            link: 'our-products/brokerbot#details'
        },
        {
            id: 2,
            name: 'Portfolio App',
            link: 'our-products/portfolio-app#details'
        },
        {
            id: 3,
            name: 'Corporate Dashboard',
            link: 'our-products/corporate-dashboard#details'
        },
        {
            id: 4,
            name: 'Investor Widgets',
            link: 'our-products/investor-widgets#details'
        },
    ]
    const tab_content_object = [
        {
            id: 1,
            img: require('../../../icons/history.svg').default,
            title: 'Background',
            description: <>
                Today, only 230 out of more than 500′000 Swiss companies are publicly traded on the stock market. We believe many more could and should be traded – thanks to our Brokerbot.
                <br /><br />
                We have the legal, technical, and economic ideas to create liquid markets for thousands of additional Swiss companies, potentially unlocking billions in dormant economic value.
            </>
        },
        {
            id: 2,
            img: require('../../../icons/legal-foundations.svg').default,
            title: 'Strong Legal Foundations',
            description: <>

                Since February 1st, 2021, Swiss DLT (Distributed Ledger Technology) Law enables the introduction of ledger-based securities that are represented on a blockchain.

                <br /><br />
                Aktionariat AG has been at the forefront of the new frontiers offered by this fresh legal framework since day one: we’ve been selling our own shares using Brokerbot immediately after the new legislation took effect.
            </>
        },
        {
            id: 3,
            img: require('../../../icons/economics-rationale.svg').default,
            title: 'Economics Rationale',
            description: <>

                Assets are more valuable when they are liquid. Our Brokerbot not only makes your shares tradable, but also ensures the necessary liquidity in trading.
                <br />
                <br />
                Thanks to a liquidity pool provided by the company, it achieves a high degree of liquidity while maintaining control over its own stock market. The most rational approach to making SME shares tradable.
            </>
        },
        {
            id: 4,
            img: require('../../../icons/innovative-tech.svg').default,
            title: 'Innovative Technologies',
            description: <>
                Smart Contracts on distributed networks (Blockchain Technology) make it possible to create digital representations of physical objects and the peer-to-peer exchange of them.
                <br />
                <br />
                Brokerbot runs based on an innovative smart contract (our Market Contract), on the Ethereum blockchain, with each Brokerbot installation bound to a specific Ethereum Address. Delivered as a web-based widget, Brokerbot makes the automated market-making of tokenized equity possible on any website.
            </>
        },
    ]
    const key_features_object = [
        {
            id: 1,
            img: require('../../../icons/open.svg').default,
            title: 'Transparent Technical Basis',
            description: `
            Both the source code and the actual contract a given Brokerbot is running on are all open source, freely and openly accessible, on the blockchain, safe from alterations. The Brokerbot that you see on this page and our Investor Relations page, for instance, is on 0xbddE...bB84.
            `,
            isShrink: true,
            shrink_info: {
                link: 'https://etherscan.io/address/0xbddE35780e3986a47e54a580017d8213f0D2bB84',
                name: 'View Smart Contract'
            }
        },
        {
            id: 2,
            img: require('../../../icons/curve-chart.svg').default,
            title: 'A Bonding Curve – Under Your Control',
            description: `
            A Bonding Curve – Under Your Control
    The smart contract establishes a linear relationship between the (net) number of shares sold and the current price. The price mechanism of the Brokerbot operates on simple parameters which the operating company can easily configure in our Corporate Dashboard. In concrete terms, this means that the issuer can define by how many francs/rappen the share price moves for each purchase/sale of shares.
            `,
            isShrink: false,
        },

        {
            id: 3,
            img: require('../../../icons/liquidity.svg').default,
            title: 'Liquidity Premium',
            description: ` Investors are likely to pay a higher price per share when there is a reliable market price and an option to liquidate their positions. Damodaran (2005) empirically estimates this effect to be at least 25%, even more for smaller firms.
            `,
            isShrink: true,
            shrink_info: {
                link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=841484',
                name: 'View Report'
            }
        },
        {
            id: 4,
            img: require('../../../icons/reduced-price.svg').default,
            title: 'Reduced Price Uncertainty',
            description: ` Founders, employees and investors benefit as their tokenized shares gain a tangible and predictable value.`,
            isShrink: false,
        },
        {
            id: 5,
            img: require('../../../icons/meeting.svg').default,
            title: 'More Potential Investors',
            description: `Less uncertainty allows to create appeal to new types of less adventurous investors. Smaller ticket sizes lower the entry level for smaller investors. Ease of use allows anyone to purchase shares, even if not familiar with stock exchanges. Since our tools work on the Ethereum Blockchain, issuers automatically get access to 50 million Ethereum users; all potential investors.`,
            isShrink: false,
        },
    ]
    return (
        <div id="BrokerbotTab">
            <div className="padding-vertical padding-xxlarge">
                <div className="our-products-menu">
                    <div className="margin-bottom margin-xlarge">
                        <h2 className="heading-medium">Explore our products</h2>
                    </div>
                    <div className="margin-bottom margin-xxlarge">
                        <div className="tabs-menu">
                            {
                                explore_object.map(v => {
                                    return (
                                        <a key={v.id}
                                            href={v.link}
                                            className="tab-link w-inline-block"
                                        >
                                            <div>{v.name}</div>
                                        </a>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
                <div className="tab-content-products">
                    <div className="container-large">
                        <div className="margin-bottom margin-xlarge">
                            <div className="content-grid rows-4 mobile-grid">
                                <div
                                    id="w-node-_377faedc-6048-0ed3-2223-239a40218be1-9cd4fe06"
                                    className="content-block"
                                >
                                    <div className="margin-bottom margin-medium">
                                        <div className="margin-bottom margin-medium">
                                            <h3>
                                                Our automated trading machine called{" "}
                                                <span className="text-gradient-2">Brokerbot.</span>
                                            </h3>
                                        </div>
                                        <p className="text-color-darkgrey">
                                            Make your shares tradable by integrating our Brokerbot into
                                            your website on a separate investors page.<em> </em>This
                                            gives investors easy access to your company's shares.
                                            Investments can be placed without unnecessary hurdles via
                                            bank transfer or directly with crypto. <br />
                                            <br />
                                            Allow investors to sell shares back to the company to take
                                            advantage of liquid shares. <br />
                                            Why? <br />
                                            Traditional market makers are expensive and mean an
                                            additional intermediary between the issuer of shares and
                                            investors. Smart contracts on the blockchain can handle
                                            trading much more efficiently. Therefore our approach
                                            enables not only the sale of shares but, when desired, also
                                            a secondary market in an unprecedented form.
                                            <br />
                                            The issuer thereby always retains full control over its own
                                            stock market.
                                            <br />‍<br />
                                            The Aktionariat Brokerbot® is the most efficient market
                                            maker available.
                                        </p>
                                    </div>
                                </div>
                                <a
                                    id="w-node-_377faedc-6048-0ed3-2223-239a40218bf7-9cd4fe06"
                                    href="#"
                                    className="image-block image-center background-color-gradient-1 w-inline-block"
                                >
                                    <img
                                        src={require('../../../images/pages/our_product/buy-p-500.png')}
                                        loading="lazy"
                                        width="1004.5"

                                        alt="img"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="divider" />
                    <div className="container-large">
                        <div className="margin-bottom margin-xlarge">
                            <div className="max-width-medium">
                                <div className="margin-bottom margin-xlarge">
                                    <h2>
                                        Fundamentals of{" "}
                                        <span className="text-gradient-2">Brokerbot</span>
                                    </h2>
                                </div>
                            </div>
                            <div className="content-grid">
                                {
                                    tab_content_object.map(v => {
                                        return (
                                            <div
                                                id="w-node-_377faedc-6048-0ed3-2223-239a40218c03-9cd4fe06"
                                                className="hover-card-item background-color-gradient-1"
                                            >
                                                <div className="hover-card-content">
                                                    <div className="margin-bottom margin-medium">
                                                        <img
                                                            src={v.img}
                                                            loading="lazy"
                                                            alt="Background Icon"
                                                            className="icon-1x1-large"
                                                            style={{ filter: "saturate(0%) brightness(200%)" }}
                                                        />
                                                    </div>
                                                    <div className="max-width-full">
                                                        <div className="margin-bottom margin-small">
                                                            <h3 className="text-size-xlarge text-weight-normal">
                                                                {v.title}
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
                    <div className="divider" />
                    <div className="container-large">
                        <div className="cta_component margin-bottom margin-small">
                            <div className="max-width-full">
                                <div className="margin-bottom margin-medium">
                                    <p className="heading-xlarge text-weight-bold">
                                        Discover companies using{" "}
                                        <span className="text-gradient-2">our toolkit.</span>
                                    </p>
                                </div>
                                <a href="#" className="button w-button">
                                    Show more
                                </a>
                            </div>
                            <div className="max-width-small" />
                        </div>
                    </div>
                    <div className="divider" />
                    <div className="container-large">
                        <div className="max-width-large">
                            <div className="margin-bottom margin-xlarge">
                                <div className="margin-bottom margin-medium">
                                    <h2 className="text-gradient-2">Key Features</h2>
                                </div>
                                <div className="text-size-medium">
                                    Shares are meant to be transferable. Markets work best when they
                                    are free and open. We create transferability and transparency
                                    for private equity markets by leveraging the latest legal and
                                    technical developments. By tokenizing your equity and allowing
                                    it to be freely traded you can expect the following benefits:
                                </div>
                            </div>
                        </div>
                        {
                            key_features_object.map(v => {
                                return (
                                    <div key={v.id} className="margin-bottom margin-medium">
                                        <div
                                            id="w-node-_377faedc-6048-0ed3-2223-239a40218c44-9cd4fe06"
                                            className="hover-card-item background-color-gradient-1"
                                        >
                                            <div className="hover-card-content horizontal-card">
                                                <div className="dont-shrink">
                                                    <div className="margin-right margin-large">
                                                        <div className="margin-bottom margin-medium">
                                                            <img
                                                                src={v.img}
                                                                loading="lazy"
                                                                alt="Open Icon"
                                                                className="icon-1x1-large"
                                                                style={{ filter: "saturate(0%) brightness(200%)" }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="horizontal-card-text">
                                                    <div className="margin-right margin-medium">
                                                        <div className="margin-bottom margin-small">
                                                            <h3 className="text-size-xlarge text-weight-normal">
                                                                {v.title}
                                                            </h3>
                                                        </div>
                                                        <p className="text-color-darkgrey">
                                                            {v.description}
                                                        </p>
                                                    </div>
                                                </div>
                                                {v.isShrink && (
                                                    <div className="dont-shrink">
                                                        <a
                                                            href={v.shrink_info.link}
                                                            target="_blank" rel="noreferrer"
                                                            className="button-arrow button-arrow-large w-inline-block action_arrow"
                                                        >
                                                            <div>{v.shrink_info.name}</div>
                                                            <span className="arrow">
                                                                ↘
                                                            </span>
                                                        </a>
                                                    </div>
                                                )}

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
    )
}


const QAFurther = () => {
    return (
        <section>
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical padding-xlarge">
                        <div className="cta_component margin-bottom margin-small">
                            <div className="max-width-full">
                                <div className="margin-bottom margin-medium">
                                    <p className="heading-xlarge text-weight-bold">
                                        Any further questions?
                                        <span className="text-gradient-2">
                                            <br />
                                            Request a demo.
                                        </span>
                                    </p>
                                </div>
                                <div className="displayonly_margin-top">
                                    <a
                                        data-w-id="ce9baed1-57d0-3aec-2f62-af58dbe9c817"
                                        href="https://meetings-eu1.hubspot.com/bela?__hstc=180372984.110723e7ee79c8b5cad6e8378037cce7.1659973797909.1660383757307.1660400542472.23&__hssc=180372984.6.1660400542472&__hsfp=3929547609"
                                        target="_blank"
                                        className="button w-button"
                                    >
                                        Request a demo
                                    </a>
                                </div>
                            </div>
                            <div className="max-width-small" />
                        </div>
                        <div className="cta2_component">
                            <div className="cta2_content">
                                <div className="cta2_content-left">
                                    <div className="max-width-large">
                                        <div className="margin-bottom margin-small">
                                            <h4>Or use the contact form</h4>
                                        </div>
                                        <p>Send us your questions, we will get back to you asap.</p>
                                    </div>
                                </div>
                                <a href="/contact" className="button invert-colors w-button">
                                    Contact form
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}