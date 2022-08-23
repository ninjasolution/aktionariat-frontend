import React from 'react';
import LatestBlogPosts from '../../components/LatestBlogPosts/LatestBlogPosts';
function Blogs(props) {
    return (
        <div id='Blogs'>
            <SectionHero></SectionHero>

            <section className="section section-grey">
                <div className="page-padding">

                    <LatestBlogPosts></LatestBlogPosts>
                    {/* OlderBlog Post */}
                    <OldestBlogPosts></OldestBlogPosts>
                </div>
            </section>

            <NewsLatter></NewsLatter>

        </div>
    );
}

export default Blogs;

const SectionHero = () => {
    return (
        <section className="section section-hero blog">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-top padding-xxhuge custom-hero-2">
                        <div className="max-width-large">
                            <div className="padding-bottom">
                                <h1>
                                    Blog
                                    <span className="text-gradient-3" />
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const OldestBlogPosts = () => {
    const blogs_object = [
        {
            id: 1,
            description: `About the superiority of uniswap-style markets over
            traditional order books`,
            link: '/blogs/about-the-superiority-of-uniswap-style-markets-over-traditional-order-books',
            date: 'December 24, 2021',
            img: require('../../../images/pages/blog/Uniswap.png')
        },
        {
            id: 2,
            description: `Security Token Benchmark`,
            link: '/blogs/about-the-superiority-of-uniswap-style-markets-over-traditional-order-books',
            date: 'October 11, 2021',
            img: require('../../../images/pages/blog/benchmark-graphic.png')
        },
        {
            id: 3,
            description: `How efficient is whitelisting?`,
            link: '/blogs/how-efficient-is-whitelisting',
            date: 'July 15, 2021',
            img: require('../../../images/pages/blog/stocks_performance.png')
        },
        {
            id: 4,
            description: `General Assembly &amp; Get-Together 2021`,
            link: '/blogs/general-assembly-get-together-2021',
            date: 'July 2, 2021',
            img: require('../../../images/pages/blog/general_assembly.jpg')
        },
        {
            id: 5,
            description: `quitt. shares are on the blockchain and ready to be
            traded`,
            link: '/blogs/quitt-shares-are-on-the-blockchain-and-ready-to-be-traded',
            date: 'June 14, 2021',
            img: require('../../../images/pages/blog/Quitt_market.png')
        },
        {
            id: 6,
            description: `New Feature deployed on the Brokerbot: Payment via bank
            transfer`,
            link: '/blogs/new-feature-deployed-on-the-brokerbot-payment-via-bank-transfer',
            date: 'June 6, 2021F',
            img: require('../../../images/pages/blog/blog-brokerbot.jpg')
        },
        {
            id: 7,
            description: `Interview with Isaac Chan, Co-Founder of Green Consensus
            SA`,
            link: '/blogs/interview-with-isaac-chan-co-founder-of-green-consensus-sa',
            date: 'April 30, 2021',
            img: require('../../../images/pages/blog/dimension.png')
        },
        {
            id: 8,
            description: `Scalable Shareholder Relations`,
            link: '/blogs/scalable-shareholder-relations',
            date: 'April 27, 2021',
            img: require('../../../images/pages/blog/stakeholder_relations.jpg')
        },
        {
            id: 9,
            description: `Aktionariat AG mints its first crypto-shares`,
            link: '/blogs/aktionariat-ag-mints-its-first-crypto-shares',
            date: 'February 2, 2021',
            img: require('../../../images/pages/blog/mints_blog.png')
        },
        {
            id: 10,
            description: `Federal Council enables crypto-securities`,
            link: '/blogs/federal-council-enables-crypto-securities',
            date: 'January 30, 2021',
            img: require('../../../images/pages/blog/mew_law.png')
        },
        {
            id: 11,
            description: `New Swiss blockchain law set to attract investors,
            entrepreneurs`,
            link: '/blogs/federal-council-enables-crypto-securities',
            date: 'January 22, 2021',
            img: require('../../../images/pages/blog/blockchain_law.png')
        },
        {
            id: 12,
            description: `Können Kryptowährungen das Immobiliengeschäft
            revolutionieren?`,
            link: '/blogs/federal-council-enables-crypto-securities',
            date: 'December 14, 2020',
            img: require('../../../images/pages/blog/können_interview_blog.jpg')
        },
        {
            id: 13,
            description: `Luzius Meisser introduces Switzerland’s new blockchain
            law`,
            link: '/blogs/luzius-meisser-introduces-switzerlands-new-blockchain-law',
            date: 'December 14, 2020',
            img: require('../../../images/pages/blog/LuziusBlockchainLawPresentation.jpg')
        },
    ]
    return (
        <div className="container-large">
            <div className="padding-bottom padding-xxlarge">
                <div className="section-title">
                    <div className="margin-bottom margin-xlarge">
                        <p className="heading-large text-weight-bold max-width-large">
                            Older <span className="text-gradient-2">Blog Posts</span>
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
                                            id="w-node-_1cd83912-7235-7281-920b-2f2cdfecf9a8-37f4b2cf"
                                            role="listitem"
                                            className="blog1_item w-dyn-item"
                                        >
                                            <div className="blog_content-wrapper">
                                                <div className="blog_image-wrapper">
                                                    <img
                                                        src={v.img}
                                                        loading="lazy"
                                                        alt=""
                                                        sizes="(max-width: 479px) 67vw, (max-width: 767px) 43vw, 29vw"
                                                        srcSet={v.img}
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
                                                <a
                                                    href={v.link}
                                                    className="blog1_item-link w-inline-block"> </a>
                                            </div>
                                        </div>
                                    )
                                })}


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const NewsLatter = () => {
    return <section id="NewsLatter">

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
}