import React from 'react';

function ClientFeedback(props) {
    const feedback_object = [
        {
            id: 1,
            description: `"With Aktionariat, tokenizing our shares and setting up a market was a breeze. While the tools are unique, the real value lies in the team’s ability to respond to customer needs and continually evolve the product. Not for the bores or the procrastinators, Aktionariat is a perfect fit for us!"`,
            icon_img: require('../../../icons/company_icons/BOSS.png'),
            linkedin_icon: require('../../../icons/social_icons/linkedin.svg').default,
            linkedin_link: 'https://linkedin.com/company/bossinfo',
            text1: 'Simon Boss',
            text2: 'CEO, COB, Founder, Co-Owner',
            text3: 'Boss Info'
        },
        {
            id: 2,
            description: `"Thanks to Aktionariat, we can offer our employees, customers and investors a simple solution to buy and sell quitt.shares. Aktionariat has managed to wrap the complex world of blockchain and cryptocurrencies into a customer-friendly and innovative product. Keep up the good work!"`,
            icon_img: require('../../../icons/company_icons/DQTS.png'),
            linkedin_icon: require('../../../icons/social_icons/linkedin.svg').default,
            linkedin_link: 'https://www.linkedin.com/company/servicehunter-ag-quitt-ch/',
            text1: 'Marie-Christin Kamann',
            text2: 'CEO,quitt',
            text3: ''
        },
        {
            id: 3,
            description: `"Since 2017, we have been tirelessly working on how we can further empower the consumer. With the Security Token Offering we finally found a way to go a big step further. Aktionariat provided us with the tools to transform our stakeholders into shareholders while being the first brand to raise CHF 0.5M over a weekend and now continuously raise more through a tradable security token on our own website."`,
            icon_img: require('../../../icons/company_icons/TBOS.png'),
            linkedin_icon: require('../../../icons/social_icons/linkedin.svg').default,
            linkedin_link: 'https://linkedin.com/company/bossinfo',
            text1: 'Simon Boss',
            text2: 'CEO, COB, Founder, Co-Owner',
            text3: 'Boss Info'
        },
    ]
    return (
        <div id='ClientFeedback'>
            <div className="testimonial-list w-dyn-list">
                <div role="list" className="content-grid clientbar-grid-2 w-dyn-items">

                    {feedback_object.map(v => {
                        return (
                            <div key={v.id}
                                id="w-node-_6b29c2aa-56a6-2354-e4fc-578180818626-80818624"
                                role="listitem"
                                className="testimonial-card-item space-between w-dyn-item"
                            >
                                <div className="margin-bottom margin-medium">
                                    <div className="text-color-darkgrey">
                                        {v.description}
                                    </div>
                                </div>
                                <div className="horizontal-center space-between">
                                    <div className="horizontal-center">
                                        <div className="margin-right margin-small">
                                            <div className="icon-1x1-medium">
                                                <div style={{ backgroundImage: `url(${v.icon_img})`, backgroundSize: '100%' }} className="avatar" />
                                            </div>
                                        </div>
                                        <div>
                                            <div>{v.text1}</div>
                                            <div className="text-size-small text-color-grey inline-text">
                                                {v.text2}
                                            </div>
                                            <div className="text-size-small text-color-grey inline-text right-margin">
                                                ,
                                            </div>
                                            <div className="text-size-small text-color-grey inline-text">
                                                {v.text3}
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        href={v.linkedin_link}
                                        className="icon-1x1-small w-inline-block"
                                    >
                                        <img
                                            src={v.linkedin_icon}
                                            loading="lazy"
                                            width={64}
                                            alt="LinkedIn Icon"
                                        />
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default ClientFeedback;