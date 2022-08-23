import React from 'react';
import { Link } from 'react-router-dom';
function DocAside(props) {
    const doc_aside_object = {
        category_1: {
            title: 'Investor Guides',
            list: [
                {
                    id: 1,
                    name: 'How to buy Aktionariat shares',
                    link: '/documentation/how-to-buy-aktionariat-shares'
                },
                {
                    id: 2,
                    name: 'Setting up your wallet',
                    link: '/documentation/setting-up-your-wallet'
                },
                {
                    id: 3,
                    name: 'Funding your wallet',
                    link: '/documentation/funding-your-wallet'
                },
                {
                    id: 4,
                    name: 'Funding your wallet for Optimism',
                    link: '/documentation/funding-your-wallet-for-optimism'
                },
                {
                    id: 5,
                    name: 'Off-ramp your XCHF',
                    link: '/documentation/off-ramp-your-xchf'
                },
            ]
        },
        category_2: {
            title: 'Corporate Guides',
            list: [
                {
                    id: 1,
                    name: 'How to set up your Ledger Nano S',
                    link: '/documentation/adding-ledger-as-an-additional-signer'
                },
                {
                    id: 3,
                    name: 'Tokenization checklist',
                    link: '/documentation/tokenization-checklist'
                },
                {
                    id: 3,
                    name: 'Accessing the Corporate Dashboard',
                    link: '/documentation/accessing-corporate-dashboard'
                },
                {
                    id: 4,
                    name: 'Setting up our widgets',
                    link: '/documentation/setting-up-our-widgets'
                }
            ]
        },
        category_3: {
            title: 'Learn More',
            list: [
                {
                    id: 1,
                    name: 'Shareholder Registry',
                    link: '/documentation/shareholder-registry'
                },
                {
                    id: 3,
                    name: 'Multisignature Contract',
                    link: '/documentation/multisignature-contract'
                },
                {
                    id: 3,
                    name: 'Recovery mechanism',
                    link: '/documentation/recovery-mechanism'
                },
                {
                    id: 4,
                    name: 'Drag-along mechanism',
                    link: '/documentation/drag-along-mechanism'
                }
            ]
        }
    }
    const getActiveItem = window.location.pathname
    return (
        <div
            id="w-node-df90eb21-984e-43b9-92be-9bb72e4f12e8-0dd10406"
            className="sidebar sidebar-sticky"
        >
            <div className="margin-bottom margin-small">
                <div className="text-size-medium">{doc_aside_object.category_1.title}</div>
            </div>
            <div className="sidebar-links-list">
                <div className="w-dyn-list">
                    <div role="list" className="w-dyn-items">
                        {
                            doc_aside_object.category_1.list.map(v => {
                                return (
                                    <div key={v.id} role="listitem" className="w-dyn-item">
                                        <Link
                                            to={v.link}
                                            className={`sidebar-link ${getActiveItem.includes(v.link) ? 'w--current' : ''}`}>
                                            {v.name}
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="margin-bottom margin-small">
                <div className="text-size-medium">{doc_aside_object.category_2.title}</div>
            </div>
            <div className="sidebar-links-list">
                <div className="w-dyn-list">
                    <div role="list" className="w-dyn-items">
                        {
                            doc_aside_object.category_2.list.map(v => {
                                return (
                                    <div key={v.id} role="listitem" className="w-dyn-item">
                                        <Link
                                            to={v.link}
                                            className={`sidebar-link ${getActiveItem.includes(v.link) ? 'w--current' : ''}`}>
                                            {v.name}
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="margin-bottom margin-small">
                <div className="text-size-medium">{doc_aside_object.category_3.title}</div>
            </div>
            <div className="sidebar-links-list">
                <div className="w-dyn-list">
                    <div role="list" className="w-dyn-items">
                        {
                            doc_aside_object.category_3.list.map(v => {
                                return (
                                    <div key={v.id} role="listitem" className="w-dyn-item">
                                        <Link
                                            to={v.link}
                                            className={`sidebar-link ${getActiveItem.includes(v.link) ? 'w--current' : ''}`}>
                                            {v.name}
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                    <div role="listitem" className="w-dyn-item">
                        <a
                            href="/decks/slide-deck"
                            className="margin-bottom margin-small w-inline-block"
                        >
                            <div className="text-size-medium">Slide Deck</div>
                        </a>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                        <a
                            href="/decks/white-paper"
                            className="margin-bottom margin-small w-inline-block"
                        >
                            <div className="text-size-medium">White Paper</div>
                        </a>
                    </div>
                    <div role="listitem" className="w-dyn-item">
                        <a
                            href="/decks/brokerbot-architecture"
                            className="margin-bottom margin-small w-inline-block"
                        >
                            <div className="text-size-medium">Brokerbot Architecture</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DocAside;