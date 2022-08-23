import React from 'react';

function LatestBlogPosts(props) {
    const blogs_object = [
        {
            id: 1,
            description: `SIX Digital Exchange partners with Aktionariat to
            provide greater access to capital through digital
            securities in Switzerland`,
            link: '/blogs/six-digital-exchange-partners-with-aktionariat',
            date: 'July 21, 2022',
            img: require('../../../images/pages/blog/SDX.png')
        },
        {
            id: 2,
            description: `Wallets for cryptocurrencies: An overview.`,
            link: '/blogs/wallets-for-cryptocurrencies-an-overview',
            date: 'May 10, 2022',
            img: require('../../../images/pages/blog/wallet-p-800.png')
        },
        {
            id: 3,
            description: `Reasons for Optimism: Aktionariat implemented Ethereum
            Layer-2 Optimism roll-up protocol`,
            link: '/blogs/reasons-for-optimism-aktionariat-implements-ethereum-layer-2-optimism-roll-up-protocol',
            date: 'April 7, 2022',
            img: require('../../../images/pages/blog/blog-3-p-1080.jpeg')
        },
    ]
    return (
        <div id='LatestBlogPosts'>
            <div className="container-large">
                <div className="padding-top padding-xxlarge">
                    <div className="section-title">
                        <div className="margin-bottom margin-xlarge">
                            <p className="heading-large text-weight-bold max-width-large">
                                Latest <span className="text-gradient-2">Blog Posts</span>
                            </p>
                        </div>
                    </div>
                    <div className="margin-bottom margin-medium">
                        <div className="blog1_component">
                            <div className="blog1_list-wrapper w-dyn-list">
                                <div role="list" className="collection-grid w-dyn-items">
                                    {
                                        blogs_object.map(v => {
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
                                                                sizes="(max-width: 479px) 43vw, (max-width: 767px) 46vw, (max-width: 991px) 29vw, 30vw"
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
                                                            className="blog1_item-link w-inline-block"
                                                        > </a>
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
                <div className="divider" />
            </div>
        </div>
    );
}

export default LatestBlogPosts;