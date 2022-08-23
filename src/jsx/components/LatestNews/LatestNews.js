import React from 'react';

function LatestNewsComponent(props) {
    const news_object = [
        {
            id: 1,
            link: '/blogs/six-digital-exchange-partners-with-aktionariat',
            img: require('../../../images/pages/homepage/blog_img1.png'),
            description: `SIX Digital Exchange partners with Aktionariat to provide greater access to capital through digital securities in Switzerland
            `
        },
        {
            id: 2,
            link: 'https://www.nzz.ch/finanzen/private-finanzen/startups-und-fintech-neue-finanzprodukte-fuer-privatanleger-ld.1692186',
            img: require('../../../images/pages/homepage/Aktionariat-0016-p-800.jpg'),
            description: `Startups für alle: Die «Demokratisierung» von Private Equity und Venture Capital hat begonnen`
        },
        {
            id: 3,
            link: 'https://www.moneycab.com/finanz/realunit-schweiz-erstmals-aktien-einer-schweizer-boersenkotierten-gesellschaft-direkt-ueber-blockchain-erwerben/',
            img: require('../../../images/pages/homepage/realuXaktionariat-p-800.jpeg'),
            description: `Erstmals Aktien einer Schweizer börsenkotierten Gesellschaft direkt über Blockchain erwerben`
        },
    ]
    return (
        <div id='LatestNewsComponent'>
            <div className="blog1_component">
                <div className="blog1_list-wrapper w-dyn-list">
                    <div role="list" className="collection-grid w-dyn-items">
                        {news_object.map(v => {
                            return (
                                <div
                                    id="w-node-b6f51d02-9f4a-53e5-7a6c-3f373218c71a-3218c718"
                                    role="listitem"
                                    className="blog1_item w-dyn-item"
                                >
                                    <div className="blog_content-wrapper">
                                        <div className="blog_image-wrapper">
                                            <img
                                                src={v.img}
                                                loading="lazy"
                                                alt=""
                                                className="image-100"
                                            />
                                        </div>
                                        <div className="blog_content">
                                            <div className="margin-bottom margin-small">
                                                <h3 className="text-size-large text-weight-normal">
                                                    {v.description}
                                                </h3>
                                            </div>
                                            <div className="text-size-small text-color-lightgrey w-dyn-bind-empty" />
                                        </div>
                                        <a
                                            href={v.link}
                                            target="_blank" rel='noreferrer' className="blog1_item-link w-inline-block">
                                        </a>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default LatestNewsComponent;