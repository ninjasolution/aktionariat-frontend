import React from 'react';
import '../../../scss/components/CompanyTable/CompanyTable.css';
function CompanyTable(props) {
    const table_object = [
        {
            id: 1,
            company: {
                img: require('../../../icons/company_icons/BOSS.png'),
                width: 64,
                link: 'https://www.bossinfo.com/token/',
                link_name: 'Boss Info AG',
                option1: {
                    class: 'text-size-medium',
                    name: 'Boss Info AG',
                },
                option2: {
                    class: 'text-size-small',
                    name: '',
                },
                option3: {
                    class: 'text-size-small text-color-grey',
                    name: '',
                },
            },
            share_name_ticker: {
                option1: {
                    link: 'https://www.bossinfo.com/token/',
                    class: 'text-size-medium',
                    name: 'Boss Info AG',
                },
                option2: {
                    link: 'https://etherscan.io/address/0x2e880962a9609aa3eab4def919fe9e917e99073b',
                    class: 'text-size-small',
                    name: 'BOSS'
                },
            },
            price: {
                option1: {
                    name: '9.51 CHF',
                    class: 'text-size-medium'
                },
                option2: {
                    name: 36,
                    class: 'text-size-small',
                },
            },
            market_cap: {
                option1: {
                    name: '98′909′556 CHF',
                    class: 'text-size-medium'
                },
                option2: {
                    link: 'https://www.bossinfo.com/token/',
                    name: 'Explore'
                }
            }
        },
        {
            id: 2,
            company: {
                img: require('../../../icons/company_icons/REALU.png'),
                width: 64,
                link: 'https://realunit.ch/token/',
                link_name: 'RealUnit Schweiz AG',
                option1: {
                    class: 'text-size-medium',
                    name: 'RealUnit Schweiz AG',
                },
                option2: {
                    class: 'text-size-small',
                    name: 'Founded 2017',
                },
                option3: {
                    class: 'text-size-small text-color-grey',
                    name: 'Finanzindustrie',
                },
            },
            share_name_ticker: {
                option1: {
                    link: 'https://realunit.ch/token/',
                    class: 'text-size-medium',
                    name: 'RealUnit Shares',
                },
                option2: {
                    link: 'https://etherscan.io/address/0x553c7f9c780316fc1d34b8e14ac2465ab22a090b',
                    class: 'text-size-small',
                    name: 'REALU'
                },
            },
            price: {
                option1: {
                    name: '1.10 CHF',
                    class: 'text-size-medium'
                },
                option2: {
                    name: -3,
                    class: 'text-size-small',
                },
            },
            market_cap: {
                option1: {
                    name: '29′153′828 CHF',
                    class: 'text-size-medium'
                },
                option2: {
                    link: 'https://realunit.ch/token/',
                    name: 'Explore'
                }
            }
        },
        {
            id: 3,
            company: {
                img: require('../../../icons/company_icons/VIDS.png'),
                width: 64,
                link: 'https://vidby.com/investors',
                link_name: 'vidby AG',
                option1: {
                    class: 'text-size-medium',
                    name: 'vidby AG',
                },
                option2: {
                    class: 'text-size-small',
                    name: 'Founded 2021',
                },
                option3: {
                    class: 'text-size-small text-color-grey',
                    name: 'IT services with AI',
                },
            },
            share_name_ticker: {
                option1: {
                    link: 'https://vidby.com/investors',
                    class: 'text-size-medium',
                    name: 'vidby Shares',
                },
                option2: {
                    link: 'https://etherscan.io/address/0xe221db71c5c527149bdf56c4d13a54cf55e543c1',
                    class: 'text-size-small',
                    name: 'VIDS'
                },
            },
            price: {
                option1: {
                    name: '16.62 CHF',
                    class: 'text-size-medium'
                },
                option2: {
                    name: 38,
                    class: 'text-size-small',
                },
            },
            market_cap: {
                option1: {
                    name: '27′067′413 CHF',
                    class: 'text-size-medium'
                },
                option2: {
                    link: 'https://vidby.com/investors',
                    name: 'Explore'
                }
            }
        },
        {
            id: 4,
            company: {
                img: require('../../../icons/company_icons/DQTS.png'),
                width: 64,
                link: 'https://quitt.ch/investoren',
                link_name: 'ServiceHunter AG',
                option1: {
                    class: 'text-size-medium',
                    name: 'ServiceHunter AG',
                },
                option2: {
                    class: 'text-size-small',
                    name: '',
                },
                option3: {
                    class: 'text-size-small text-color-grey',
                    name: '',
                },
            },
            share_name_ticker: {
                option1: {
                    link: 'https://quitt.ch/investoren',
                    class: 'text-size-medium',
                    name: 'quitt.shares',
                },
                option2: {
                    link: 'https://etherscan.io/address/0x8747a3114ef7f0eebd3eb337f745e31dbf81a952',
                    class: 'text-size-small',
                    name: 'DQTS'
                },
            },
            price: {
                option1: {
                    name: '8.41 CHF',
                    class: 'text-size-medium'
                },
                option2: {
                    name: 61,
                    class: 'text-size-small',
                },
            },
            market_cap: {
                option1: {
                    name: '15′570′945 CHF',
                    class: 'text-size-medium'
                },
                option2: {
                    link: 'https://quitt.ch/investoren',
                    name: 'Explore'
                }
            }
        },
        {
            id: 5,
            company: {
                img: require('../../../icons/company_icons/DAKS.png'),
                width: 64,
                link: 'https://www.aktionariat.com/investor-relations',
                link_name: 'Aktionariat AG',
                option1: {
                    class: 'text-size-medium',
                    name: 'Aktionariat AG',
                },
                option2: {
                    class: 'text-size-small',
                    name: 'Founded 2020',
                },
                option3: {
                    class: 'text-size-small text-color-grey',
                    name: 'Fintech',
                },
            },
            share_name_ticker: {
                option1: {
                    link: 'https://www.aktionariat.com/investor-relations',
                    class: 'text-size-medium',
                    name: 'Aktionariat AG Shares',
                },
                option2: {
                    link: 'https://etherscan.io/address/0x6f38e0f1a73c96cb3f42598613ea3474f09cb200',
                    class: 'text-size-small',
                    name: 'DAKS'
                },
            },
            price: {
                option1: {
                    name: '11.98 CHF',
                    class: 'text-size-medium'
                },
                option2: {
                    name: 94,
                    class: 'text-size-small',
                },
            },
            market_cap: {
                option1: {
                    name: '14′973′228 CHF',
                    class: 'text-size-medium'
                },
                option2: {
                    link: 'https://www.aktionariat.com/investor-relations',
                    name: 'Explore'
                }
            }
        },
        {
            id: 6,
            company: {
                img: require('../../../icons/company_icons/DILYS.png'),
                width: 64,
                link: 'https://dillysocks.com/share-sale/#Installation',
                link_name: 'DillySocks AG',
                option1: {
                    class: 'text-size-medium',
                    name: 'DillySocks AG',
                },
                option2: {
                    class: 'text-size-small',
                    name: 'Founded 2013',
                },
                option3: {
                    class: 'text-size-small text-color-grey',
                    name: '',
                },
            },
            share_name_ticker: {
                option1: {
                    link: 'https://dillysocks.com/share-sale/#Installation',
                    class: 'text-size-medium',
                    name: 'DillyShares',
                },
                option2: {
                    link: 'https://etherscan.io/address/0x6f38e0f1a73c96cb3f42598613ea3474f09cb200',
                    class: 'text-size-small',
                    name: 'DILYS'
                },
            },
            price: {
                option1: {
                    name: '0.85 CHF',
                    class: 'text-size-medium'
                },
                option2: {
                    name: 2,
                    class: 'text-size-small',
                },
            },
            market_cap: {
                option1: {
                    name: '12′585′116 CHF',
                    class: 'text-size-medium'
                },
                option2: {
                    link: 'https://dillysocks.com/share-sale/#Installation',
                    name: 'Explore'
                }
            }
        },
        {
            id: 7,
            company: {
                img: require('../../../icons/company_icons/VEDA.png'),
                width: 64,
                link: 'https://www.veda.ch/investors',
                link_name: 'AyurVeda AG',
                option1: {
                    class: 'text-size-medium',
                    name: 'AyurVeda AG',
                },
                option2: {
                    class: 'text-size-small',
                    name: 'Founded 1980',
                },
                option3: {
                    class: 'text-size-small text-color-grey',
                    name: 'Holistic health',
                },
            },
            share_name_ticker: {
                option1: {
                    link: 'https://www.veda.ch/investors',
                    class: 'text-size-medium',
                    name: 'AyurVeda AG Shares',
                },
                option2: {
                    link: 'https://etherscan.io/address/0x2adcbee886d23eff5adecc7767bf102e4a1ce151',
                    class: 'text-size-small',
                    name: 'VEDA'
                },
            },
            price: {
                option1: {
                    name: '39.84 CHF',
                    class: 'text-size-medium'
                },
                option2: {
                    name: 42,
                    class: 'text-size-small',
                },
            },
            market_cap: {
                option1: {
                    name: '4′373′256 CHF',
                    class: 'text-size-medium'
                },
                option2: {
                    link: 'https://www.veda.ch/investors',
                    name: 'Explore'
                }
            }
        },
    ];
    return (
        <div id='CompanyTable' className='table-responsive'>
            <table className=''>
                <thead>
                    <tr>
                        <td className='text-nowrap' style={{ "width": "6%", "padding": "1rem", "fontSize": "1.25rem" }} />
                        <td className='text-nowrap' style={{ "width": "24%", "padding": "1rem" }}>
                            <div className="text-size-medium">Company</div>
                        </td>
                        <td className='text-nowrap' style={{ "width": "24%", "padding": "1rem" }}>
                            <div className="text-size-medium">Share Name &amp; Ticker</div>
                        </td>
                        <td className='text-nowrap' style={{ "width": "18%", "padding": "1rem", "WebkitTextAlign": "right", "textAlign": "right" }}>
                            <div className="text-size-medium">Price</div>
                            <div className="text-size-small text-color-grey">Yearly Change</div>
                        </td>
                        <td className='text-nowrap' style={{ "width": "18%", "padding": "1rem", "fontSize": "1.25rem", "WebkitTextAlign": "right", "textAlign": "right" }}>
                            <div className="text-size-medium">Market Cap</div>
                        </td>
                        <td className='text-nowrap' style={{ "width": "10%", "padding": "1rem", "fontSize": "1.25rem" }} />
                    </tr>
                </thead>
                <tbody>
                    {
                        table_object.map(v => {
                            return (
                                <tr key={v.id}>
                                    <td style={{ "paddingLeft": "1rem", "minWidth": "64px" }}>
                                        <a rel='noreferrer' href={v.company.link} target="_blank">
                                            <img
                                                src={v.company.img}
                                                width={64} alt="img"
                                            />
                                        </a>
                                    </td>
                                    <td>
                                        <div className={v.company.option1.class}>
                                            <a href={v.company.option1.link} rel='noreferrer' target="_blank">
                                                {v.company.link_name}
                                            </a>
                                        </div>
                                        <div className={v.company.option2.class}>
                                            {v.company.option2.name}
                                        </div>
                                        <div className={v.company.option3.class}>
                                            {v.company.option3.name}
                                        </div>
                                    </td>
                                    <td>
                                        <div className={v.share_name_ticker.option1.class}>
                                            <a href={v.share_name_ticker.option1.link} rel='noreferrer' target="_blank">
                                                {v.share_name_ticker.option1.name}
                                            </a>
                                        </div>
                                        <div className={v.share_name_ticker.option2.class}>
                                            <a rel='noreferrer'
                                                href={v.share_name_ticker.option2.link}
                                                target="_blank"
                                                className="text-color-grey"
                                            >
                                                {v.share_name_ticker.option2.name}
                                            </a>
                                        </div>
                                    </td>
                                    <td
                                        style={{
                                            "textAlign": "right",
                                        }}
                                    >
                                        <div className={v.price.option1.class}>{v.price.option1.name}</div>
                                        <div className={v.price.option2.class}
                                            style={{ color: v.price.option2.name >= 0 ? 'rgb(14, 203, 129)' : 'rgb(207, 48, 74)' }}>
                                            {v.price.option2.name}%
                                        </div>
                                    </td>
                                    <td
                                        style={{
                                            "textAlign": "right",
                                        }}
                                    >
                                        <div className={v.market_cap.option1.class}>{v.market_cap.option1.name}</div>
                                    </td>
                                    <td
                                        style={{
                                            "textAlign": "right",
                                        }}
                                    >
                                        <a rel='noreferrer'
                                            href={v.market_cap.option2.link}
                                            target="_blank"
                                            className="button invert-colors w-button"
                                        >
                                            {v.market_cap.option2.name}
                                        </a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default CompanyTable;