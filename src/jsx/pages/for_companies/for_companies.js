import React, { useState } from 'react';
import '../../../scss/pages/for_companies/for_companies.css';
import ClientFeedback from '../../components/ClientFeedback/ClientFeedback';
import LatestNewsComponent from '../../components/LatestNews/LatestNews';
import FurtherQuestions from '../../components/FurtherQuestions/FurtherQuestions';
function ForCompanies(props) {
    return (
        <div id='ForCompanies' className=''>
            <Section1></Section1>
            <OpenMarket></OpenMarket>
            <MarketWidget></MarketWidget>
            <OnboardingProcess></OnboardingProcess>
            <LegalPackage></LegalPackage>
            <OurPlans></OurPlans>
            <Testimonial></Testimonial>
            <FurtherQuestions></FurtherQuestions>
        </div>
    );
}

export default ForCompanies;

const Section1 = () => {
    const client_object = [
        {
            id: 1,
            name: '',
            link: 'https://www.bossinfo.ch/ueber-uns/token/',
            img: require('../../../icons/company_icons/bossinfo.svg').default,
            alt: 'Boss Info Logo'
        },
        {
            id: 2,
            name: '',
            link: 'https://www.greenconsensus.ch/investor',
            img: require('../../../icons/company_icons/greenconsensus.png'),
            alt: 'Green Consensus Logo'
        },
        {
            id: 3,
            name: '',
            link: 'https://quitt.ch/investoren/',
            img: require('../../../icons/company_icons/quitt.svg').default,
            alt: 'Quitt Logo'
        },
        {
            id: 4,
            name: 'https://tbo.clothing/ch-en/investors/',
            link: 'https://tbo.clothing/ch-en/investors/',
            img: require('../../../icons/company_icons/tbo.svg').default,
            alt: 'T-Bo Logo'
        },
    ]
    return (
        <section id="Section" className='section section-hero companies'>
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-top padding-xxhuge custom-hero-2">
                        <div className="content-grid">
                            <div id="w-node-_4eb94a96-dc01-0261-8c0c-b0472e89414e-decd91f1">
                                <div className="padding-bottom padding-xxlarge">
                                    <h1>
                                        Kickstart a <span className="text-gradient-1">market</span> for
                                        your shares
                                    </h1>
                                </div>
                                <div className="content-grid clientbar-grid-2">
                                    {
                                        client_object.map(v => {
                                            return (
                                                <a id='w-node-_26745c71-c75a-7941-f178-ab44faf9366f-379e7826'
                                                    href={v.link}
                                                    target="_blank" rel='noreferrer'
                                                    className="client-logo w-inline-block"
                                                >
                                                    <img
                                                        src={v.img}
                                                        loading="lazy"
                                                        alt={v.alt}
                                                        className="clientbar1_logo"
                                                    />
                                                </a>
                                            )
                                        })
                                    }


                                </div>
                            </div>
                            <div
                                id="w-node-_76e98fea-7bac-08b5-9f44-080dfdb7ad51-decd91f1"
                                className="hero-image for-companies"
                            >
                                <br />‍
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const OpenMarket = () => {
    const [accordion1, setAccordion1] = useState(false);
    const [accordion2, setAccordion2] = useState(false);
    const [accordion3, setAccordion3] = useState(false);
    const [accordion4, setAccordion4] = useState(false);

    return (
        <section id="secondary-market" className='section section-grey'>
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical padding-xxlarge">
                        <div className="section-title">
                            <h2 className="heading-label text-color-grey">Open Market</h2>
                            <div className="margin-bottom margin-xlarge">
                                <p className="heading-large text-weight-bold max-width-xlarge">
                                    Enjoy the{" "}
                                    <span className="text-gradient-1">
                                        benefits of a liquid&nbsp;share market
                                    </span>{" "}
                                    without a costly IPO.
                                </p>
                            </div>
                        </div>
                        <div className="content-grid rows-4">
                            <div
                                id="w-node-_28135ff2-5bd5-f5a4-2e7f-36463f100f03-decd91f1"
                                className="content-block"
                            >
                                <div className="accordion-item ">
                                    <div
                                        data-w-id="ce4dfdfa-42b7-c009-851d-efecbaf6e25e"
                                        className="accordion-trigger" onClick={() => setAccordion1(!accordion1)}
                                    >
                                        <div className="dropdown-title large-title">
                                            <h3 className="text-size-xlarge text-weight-normal">
                                                Less price uncertainty
                                            </h3>
                                        </div>
                                        <div
                                            className="icon accordion-icon" style={{ transform: `rotate(${accordion1 ? '45deg' : '0deg'})` }}
                                        >
                                            <img
                                                src={require('../../../icons/plus.svg').default}
                                                loading="lazy"
                                                alt="Plus Icon"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="accordion-item-content"
                                        style={{ width: "624px", height: accordion1 ? 'auto' : '0px' }}
                                    >
                                        <div className="accordion-description">
                                            <p className="text-size-medium text-color-darkgrey">
                                                Offering a company’s shares for sale and repurchase at a given
                                                price sends a strong price signal. Thereby uncertainty about
                                                the true value of the company is reduced.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item ">
                                    <div
                                        data-w-id="15d3b48f-535f-8567-3b23-99b1aaf0d05a"
                                        className="accordion-trigger" onClick={() => setAccordion2(!accordion2)}
                                    >
                                        <div className="dropdown-title large-title">
                                            <h3 className="text-size-xlarge text-weight-normal">
                                                Liquidity premium
                                            </h3>
                                        </div>
                                        <div
                                            className="icon accordion-icon" style={{ transform: `rotate(${accordion2 ? '45deg' : '0deg'})` }}
                                        >
                                            <img
                                                src={require('../../../icons/plus.svg').default}
                                                loading="lazy"
                                                alt="Plus Icon"
                                            />
                                        </div>
                                    </div>
                                    <div className="accordion-item-content" style={{ height: `${accordion2 ? 'auto' : '0px'}` }}>
                                        <div className="accordion-description">
                                            <p className="text-size-medium text-color-darkgrey">
                                                An asset is more valuable to investors if it can be sold at
                                                any point in time, in the event of an individual liquidity
                                                need<em>.</em> This effect is known as the liquidity premium.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item ">
                                    <div
                                        data-w-id="5d5df987-2d82-976e-f346-ee3c6634bd32"
                                        className="accordion-trigger" onClick={() => setAccordion3(!accordion3)}
                                    >
                                        <div className="dropdown-title large-title">
                                            <h3 className="text-size-xlarge text-weight-normal">
                                                Stakeholder capitalism
                                            </h3>
                                        </div>
                                        <div
                                            className="icon accordion-icon" style={{ transform: `rotate(${accordion3 ? '45deg' : '0deg'})` }}
                                        >
                                            <img
                                                src={require('../../../icons/plus.svg').default}
                                                loading="lazy"
                                                alt="Plus Icon"
                                            />
                                        </div>
                                    </div>
                                    <div className="accordion-item-content" style={{ height: accordion3 ? 'auto' : '0px' }}>
                                        <div className="accordion-description">
                                            <p className="text-size-medium text-color-darkgrey">
                                                By enabling employees, clients, and suppliers to take a stake
                                                in the company they work with and believe in, we enable a much
                                                better alignment of the interest of stakeholders and
                                                shareholders, and the possibility to create community-owned
                                                businesses.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item ">
                                    <div
                                        data-w-id="af3b445e-8094-30e8-3ded-c11bca221d76"
                                        className="accordion-trigger" onClick={() => setAccordion4(!accordion4)}
                                    >
                                        <div className="dropdown-title large-title">
                                            <h3 className="text-size-xlarge text-weight-normal">
                                                Shortcut to public market
                                            </h3>
                                        </div>
                                        <div
                                            className="icon accordion-icon" style={{ transform: `rotate(${accordion4 ? '45deg' : '0deg'})` }}

                                        >
                                            <img
                                                src={require('../../../icons/plus.svg').default}
                                                loading="lazy"
                                                alt="Plus Icon"
                                            />
                                        </div>
                                    </div>
                                    <div className="accordion-item-content" style={{ height: accordion4 ? 'auto' : '0px' }}>
                                        <div className="accordion-description">
                                            <p className="text-size-medium text-color-darkgrey">
                                                Tokenizing and selling shares on the internet offers increased
                                                brand visibility and public awareness for a company.
                                                Aktionariat assists in opening up a new path towards a public
                                                market for Swiss companies.&nbsp;
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                id="w-node-_28135ff2-5bd5-f5a4-2e7f-36463f100f00-decd91f1"
                                className="image-block-0 image-center"
                            >
                                <img
                                    src={require('../../../images/pages/for_companies/chart-less-price.svg').default}
                                    loading="lazy"
                                    alt="Less Price chart."
                                    className="secondary-market image-1"
                                    style={{ display: "block" }}
                                />
                                <img
                                    src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/619d2186667b4ba6e04e0ff9_chart-increased-liquidity.svg"
                                    loading="lazy"
                                    alt="Increased Liquidity chart."
                                    className="secondary-market image-2"
                                    style={{ display: "none" }}
                                />
                                <img
                                    src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/619d21871195de04a3d176ed_chart-stakeholder-capitalism.svg"
                                    loading="lazy"
                                    alt="Stakeholder Capitalism chart."
                                    className="secondary-market image-3"
                                    style={{ display: "none" }}
                                />
                                <img
                                    src="https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/619d2186f650fac03ec8fb10_chart-shortcut-to-public.svg"
                                    loading="lazy"
                                    alt="Shortcut to Public graph."
                                    className="secondary-market image-4"
                                    style={{ display: "none" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

const MarketWidget = () => {
    return (
        <section id="market-widgets">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical padding-xxlarge">
                        <div className="section-title">
                            <div className="margin-bottom margin-xlarge">
                                <div className="content-grid rows-4">
                                    <div
                                        id="w-node-_8eb57f92-3865-b6d4-319f-01c7ba96ee5c-decd91f1"
                                        className="content-block space-between"
                                    >
                                        <div className="margin-bottom margin-medium">
                                            <div className="margin-bottom margin-medium">
                                                <h2 className="heading-label text-color-grey">
                                                    Customizable Market Widgets
                                                </h2>
                                                <h3>
                                                    Add an investors page to your website and integrate the{" "}
                                                    <span className="text-gradient-1">
                                                        Aktionariat Brokerbot
                                                    </span>{" "}
                                                    and other market widgets.
                                                </h3>
                                            </div>
                                            <p className="text-color-darkgrey">
                                                Our widgets facilitate the presentation of fundamental
                                                information to investors. Further they allow investors to
                                                trade your tokenized shares directly on your website. The
                                                widgets are fully customizable to match your corporate
                                                identity. <br />
                                                <br />
                                                Since our tools operate on a public blockchain and are
                                                compatible with other wallets, 50 million Ethereum users have
                                                access to your shares. In case you prefer to make your shares
                                                available to an exclusive group of investors, we offer a
                                                whitelisting module that allows you to create a handpicked
                                                group of investors.
                                            </p>
                                        </div>
                                        <a
                                            href="/our-products/brokerbot#details"
                                            className="button-arrow action_arrow button-arrow-large w-inline-block"
                                        >
                                            <div>Learn more</div>

                                            <span className="arrow">
                                                ↘
                                            </span>
                                        </a>
                                    </div>

                                    <a
                                        id="w-node-_8eb57f92-3865-b6d4-319f-01c7ba96ee89-decd91f1"
                                        href="#"
                                        className="image-block image-center background-color-gradient-1 w-inline-block"
                                    >
                                        <img
                                            src={require('../../../images/pages/for_companies/buy.png')}
                                            loading="lazy"
                                            alt=""
                                            className="image-75"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="divider" />
                            <div className="margin-bottom margin-xlarge">
                                <div className="content-grid rows-4">
                                    <div
                                        id="w-node-_92154960-a53b-52bb-3e79-4769ca3f7fc3-decd91f1"
                                        className="image-block image-center background-color-gradient-1"
                                    >
                                        <img
                                            src={require('../../../images/pages/for_companies/dashboard-notebook.png')}
                                            loading="lazy"
                                            width="1004.5"
                                            alt="img"
                                        />
                                    </div>
                                    <div
                                        id="w-node-_92154960-a53b-52bb-3e79-4769ca3f7fc2-decd91f1"
                                        className="content-block space-between"
                                    >
                                        <div className="margin-bottom margin-medium">
                                            <div className="margin-bottom margin-medium">
                                                <h2 className="heading-label text-color-grey">
                                                    The Backbone of the Toolkit
                                                </h2>
                                                <h3>
                                                    Manage thousands of shareholders with the{" "}
                                                    <span className="text-gradient-1">
                                                        Corporate Dashboard.
                                                    </span>
                                                </h3>
                                            </div>
                                            <p className="text-color-darkgrey">
                                                It consists of a digital share register that is updated
                                                automatically and allows you to tokenize shares with just a
                                                few clicks.
                                                <br />
                                                <br />
                                                Your share market, your rules. The Dashboard allows to define
                                                the parameters of your share market, such as share price,
                                                slope of the price curve and number of your shares that should
                                                be freely tradable.
                                            </p>
                                        </div>
                                        <a
                                            href="/our-products/corporate-dashboard#details"
                                            className="button-arrow action_arrow button-arrow-large w-inline-block"
                                        >
                                            <div>Learn more</div>
                                            <span className="arrow">
                                                ↘
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="divider" />
                            <div className="margin-bottom margin-xlarge">
                                <div className="content-grid rows-4">
                                    <div
                                        id="w-node-b41c126b-8cb8-10e1-a2f5-838741983d36-decd91f1"
                                        className="content-block space-between"
                                    >
                                        <div className="margin-bottom margin-large">
                                            <div className="margin-bottom margin-medium">
                                                <h2 className="heading-label text-color-grey">
                                                    Mobile Wallet
                                                </h2>
                                                <h3>
                                                    Hold tokenized shares and traditional shares securely in
                                                    self-custody with our{" "}
                                                    <span className="text-gradient-2">Portfolio&nbsp;App.</span>
                                                </h3>
                                            </div>
                                            <p className="text-color-darkgrey">
                                                Our mobile wallet is the safe deposit box for your shares.
                                                Connect your mobile wallet to a Brokerbot to buy stocks and
                                                access them anytime. Register your personal details in the
                                                wallet before buying to be automatically recorded in the
                                                company's share register. <br />
                                                <br />
                                                See the market value of your shares at any time and transfer
                                                them directly to another wallet if needed. The wallet also
                                                acts as an authentication tool for a company's signatories,
                                                e.g., to approve transactions.
                                            </p>
                                        </div>
                                        <a
                                            href="/our-products/portfolio-app#details"
                                            className="button-arrow action_arrow button-arrow-large w-inline-block"
                                        >
                                            <div>Learn more</div>
                                            <span className="arrow">
                                                ↘
                                            </span>
                                        </a>
                                    </div>
                                    <div
                                        id="w-node-b41c126b-8cb8-10e1-a2f5-838741983d4a-decd91f1"
                                        className="image-block image-center background-color-gradient-1"
                                    >
                                        <div className="margin-bottom margin-medium">
                                            <img
                                                src={require('../../../images/pages/for_companies/mobile-wallet.png')}
                                                loading="lazy"
                                                height={430}

                                                alt="Portfolio App screenshot with a mockup."
                                            />
                                        </div>
                                        <div className="horizontal-center">
                                            <div className="margin-right margin-xsmall">
                                                <a
                                                    href="https://apps.apple.com/ch/app/aktionariat/id1518326813#?platform=iphone"
                                                    target="_blank"
                                                    className="w-inline-block" rel="noreferrer"
                                                >
                                                    <img
                                                        src={require('../../../icons/apple.svg').default}
                                                        loading="lazy"
                                                        alt="Button for App Store"
                                                    />
                                                </a>
                                            </div>
                                            <a
                                                href="https://play.google.com/store/apps/details?id=com.aktionariat.app"
                                                target="_blank" rel="noreferrer"
                                                className="w-inline-block"
                                            >
                                                <img
                                                    src={require('../../../icons/google.svg').default}
                                                    loading="lazy"
                                                    alt="Button for Google Play"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <a
                                    href="https://meetings-eu1.hubspot.com/bela?__hstc=180372984.110723e7ee79c8b5cad6e8378037cce7.1659973797909.1660359929893.1660381758643.21&__hssc=180372984.2.1660381758643&__hsfp=3929547609"
                                    target="_blank" rel="noreferrer"
                                    className="button-arrow-block button-arrow-large modal-open_btn w-inline-block"
                                >
                                    <div>Request a Demo</div>
                                    <div className="arrow">↘</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

const OnboardingProcess = () => {

    const step_object = [
        {
            id: 1,
            title: 'Digital Shareholder Registry',
            description: `Start by digitizing your shareholder registry in our Corporate
            Dashboard, completely free of charge.`
        },
        {
            id: 2,
            title: 'Legal Framework',
            description: `We provide you with the legal foundation for creating and trading
            your digital shares.`
        },
        {
            id: 3,
            title: 'Tokenized Shares',
            description: `Define the number of shares you want to tokenize, the starting price
            and the price behavior of your shares.`
        },
        {
            id: 4,
            title: 'Open Market',
            description: `Create an investor relations page, add our market widgets and
            benefit from an automated and liquid share market.`
        }
    ]
    return (
        <section id="onboarding-process">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical padding-xxlarge">
                        <div className="section-title">
                            <h2 className="heading-label text-color-grey">Onboarding Process</h2>
                            <div className="margin-bottom margin-xlarge">
                                <p className="heading-large text-weight-bold max-width-xlarge">
                                    Four steps to
                                    <br />
                                    <span className="text-gradient-2">
                                        stakeholder&nbsp;capitalism.
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="content-grid">
                            <div
                                id="w-node-_41598dad-59da-504b-1968-8c8c05cc3945-decd91f1"
                                className="image-block image-center"
                            >
                                <div className="padding-small">
                                    <img
                                        src={require('../../../images/pages/for_companies/infographic-new-p-2000.png')}
                                        loading="lazy"
                                        alt="4 steps of share tokenization infographic."
                                    />
                                </div>
                            </div>
                            {step_object.map(v => {
                                return (

                                    <div key={v.id}
                                        id="w-node-_6018aac0-35da-6bca-f58e-1165c7bf9189-decd91f1"
                                        className="content-block"
                                    >
                                        <div className="margin-bottom margin-small">
                                            <h3 className="heading-label text-color-grey margin-bottom margin-xsmall">
                                                Step {v.id}
                                            </h3>
                                            <h3 className="text-size-large text-weight-normal">
                                                {v.title}
                                            </h3>
                                        </div>
                                        <p className="text-color-grey">
                                            {v.description}
                                        </p>
                                    </div>
                                )
                            })}


                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}


const LegalPackage = () => {
    const legal_pack_object = [
        {
            id: 1,
            title: 'Articles of Association',
            description: `Sets the base to mint and trade shares on a Blockchain.`,
            link: 'https://uploads-ssl.webflow.com/6191fe28d0a1c876c77ea545/619cd11f72bd655932661397_Articles%20of%20Association.pdf',
            img: require('../../../icons/assoc.svg').default,
            isLink: true,

        },
        {
            id: 2,
            title: 'Registration Agreement',
            description: `Enables the registration of ledger-based securities in a
            securities ledger.`,
            link: 'https://hub.aktionariat.com/assets/terms/Registration%20Agreement.pdf',
            img: require('../../../icons/registration.svg').default,
            isLink: true,

        },
        {
            id: 3,
            title: 'Token Holder Agreement',
            description: `A mini shareholder agreement with drag-along and tag-along
            clauses.`,
            link: 'https://hub.aktionariat.com/assets/terms/Token%20Holder%20Agreement.pdf',
            img: require('../../../icons/tokenholder.svg').default,
            isLink: true,

        },
        {
            id: 4,
            title: 'Shareholder Agreement',
            description: `(Optional) Classic shareholder agreement taking into account
            that shares need to be traded.`,
            img: require('../../../icons/shareholder.svg').default,
            isLink: false,
        },
    ]
    return <section id="legal-package">
        <div className="page-padding">
            <div className="container-large">
                <div className="padding-vertical padding-xxlarge">
                    <div className="section-title">
                        <h2 className="heading-label text-color-grey">Legal Package</h2>
                        <div className="margin-bottom margin-medium">
                            <p className="heading-large text-weight-bold">
                                A solid{" "}
                                <span className="text-gradient-2">legal&nbsp;framework</span>
                            </p>
                        </div>
                        <div className="margin-bottom margin-xlarge">
                            <p className="text-color-darkgrey max-width-large">
                                You want a market for your shares, we provide the legal framework.
                                Our carefree package was developed by LEXR, a highly trusted expert
                                in the field of Swiss DLT law.
                            </p>
                        </div>
                    </div>
                    <div className="margin-bottom">
                        <div className="content-grid">
                            {
                                legal_pack_object.map(v => {
                                    return (

                                        <div key={v.id}
                                            id="w-node-b1a5eb19-a3a1-0b63-388a-4df567444a51-decd91f1"
                                            className="hover-card-item background-color-gradient-1"
                                        >
                                            <div className="hover-card-content">
                                                <div className="margin-bottom margin-small">
                                                    <div className="margin-bottom margin-xlarge">
                                                        <img
                                                            src={v.img}
                                                            loading="lazy"
                                                            alt=""
                                                            className="icon-1x1-large"
                                                            style={{ filter: "saturate(0%) brightness(200%)" }} />
                                                    </div>
                                                    <div className="margin-bottom margin-small">
                                                        <h3 className="text-size-xlarge text-weight-normal">
                                                            {v.title}
                                                        </h3>
                                                    </div>
                                                    <div className="margin-bottom margin-large">
                                                        <p>{v.description}</p>
                                                    </div>
                                                </div>

                                                {v.isLink ? <a
                                                    href={v.link}
                                                    target="_blank" rel="noreferrer"
                                                    className="button-arrow action_arrow button-arrow-large w-inline-block"
                                                >
                                                    <div>See example</div>
                                                    <span className="arrow">
                                                        ↘
                                                    </span>
                                                </a>
                                                    : <div className="button-arrow button-arrow-large button-deactive"><div>On request</div></div>}

                                            </div>
                                        </div>
                                    )
                                })
                            }


                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
}

const OurPlans = () => {
    return <section id="our-plans">

        <div className="page-padding">
            <div className="container-large">
                <div className="padding-vertical padding-xlarge">
                    <div className="cta_component margin-bottom margin-small">
                        <div className="max-width-full">
                            <div className="margin-bottom margin-medium">
                                <p className="heading-xlarge text-weight-bold">
                                    Curious of our plans?
                                    <span className="text-gradient-2">
                                        <br />
                                        See our pricing page.
                                    </span>
                                </p>
                            </div>
                            <div className="displayonly_margin-top">
                                <a
                                    data-w-id="d5fc6c0a-11d1-397e-be63-dec3dfbd4788"
                                    href="/pricing"
                                    className="button w-button"
                                >
                                    Visit Pricing Page
                                </a>
                            </div>
                        </div>
                        <div className="max-width-small" />
                    </div>
                </div>
            </div>
        </div>

    </section>
}

const Testimonial = () => {
    return (
        <section id="testimonial" className='section section-grey'>
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical padding-xxlarge">
                        <div className="section-title">
                            <h2 className="heading-label text-color-grey">Testimonials</h2>
                            <div className="margin-bottom margin-medium">
                                <p className="heading-large text-weight-bold">
                                    Feedback from our clients
                                </p>
                            </div>
                        </div>
                        <div className="margin-bottom margin-xlarge">
                            <ClientFeedback></ClientFeedback>
                        </div>
                        <div className="divider" />
                        <div className="section-title">
                            <h2 className="heading-label text-color-grey">News</h2>
                            <div className="margin-bottom margin-xlarge">
                                <p className="heading-large text-weight-bold max-width-large">
                                    <span className="text-gradient-2">Media coverage </span>
                                    about&nbsp;Aktionariat
                                    <span className="text-gradient-3" />
                                </p>
                            </div>
                        </div>
                        <div className="margin-bottom margin-medium">
                            <LatestNewsComponent></LatestNewsComponent>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
