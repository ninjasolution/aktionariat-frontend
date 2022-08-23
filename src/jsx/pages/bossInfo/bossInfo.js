import React, { useState, useEffect } from 'react';
import '../../../scss/pages/bossinfo/bossinfo.css';
import CountryJson from '../../../json/country_list.json';

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

function BossInfo(props) {
    return (
        <div id='BossInfo'>
            <div className="page_wrapper">
                <Registration></Registration>
                <Brokerbot></Brokerbot>
                <PriceChart></PriceChart>
                <DownloadContent></DownloadContent>
            </div>
        </div>
    );
}

export default BossInfo;

const Registration = () => {

    return (
        <section id="Registration">
            <div className="section_wrapper">
                <div className="wpb_wrapper wpb_title"><h2>Kaufen und Handeln</h2>
                    <p>Hier können Sie Ihr Investment online durchführen, sich registrieren und Ihr Wallet verknüpfen.</p>
                </div>

                <h3 className='section_title'>
                    Registration
                </h3>
                <div className="form_wrapper">
                    <form action="" method="post">
                        <p className='mb-3'>
                            Register your address to enjoy your shareholder rights.
                        </p>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <label htmlFor="">
                                E-mail
                            </label>
                            <input type="email" name="" id="" className='form_control p-2 rounded-3' />
                        </div>

                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <label htmlFor="">
                                Full Name
                            </label>
                            <input type="text" name="" id="" className='form_control p-2 rounded-3' />
                        </div>


                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <label htmlFor="">
                                Address
                            </label>
                            <textarea name="" className="form_control p-2 rounded-3"></textarea>
                        </div>

                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <label htmlFor="">
                                Post Code
                            </label>
                            <input type="text" name="" id="" className='form_control form_control_sm p-2 rounded-3' />
                        </div>

                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <label htmlFor="">
                                City
                            </label>
                            <input type="text" name="" id="" className='form_control form_control_sm p-2 rounded-3' />
                        </div>

                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <label htmlFor="">
                                Country
                            </label>
                            <select name="" id="" className="form_control form_control_sm p-2 rounded-3">
                                {CountryJson.map(v => {
                                    return (
                                        <option key={v.code} value={v.name}>{v.name}</option>
                                    )
                                })}
                            </select>
                        </div>

                        <div className="text-end mt-3">
                            <button type="button" class="btn btn-connect-wallet"> Connect to a Wallet </button>
                        </div>




                    </form>
                </div>
            </div>
        </section>
    )
}

const Brokerbot = () => {
    const [btnSelection, setBtnSelection] = useState('buy');
    const [btnSelection2, setBtnSelection2] = useState(1);
    return (
        <div id="Brokerbot">
            <div className="section_wrapper">
                <div className="wpb_wrapper">
                    <h3 className="section_title">
                        Brokerbot
                    </h3>
                    <div className="brokerbot_wrapper">
                        <div className="card_header">
                            <div className="row gx-0">
                                <div className="col text-center">Amount
                                    <div id="progress-amount" className="progress-bar">
                                        <svg
                                            viewBox="0 0 100 1"
                                            preserveAspectRatio="none"
                                            className='w-100 d-block'
                                        >
                                            <path
                                                d="M 0,0.5 L 100,0.5"
                                                stroke=" #004d9e"
                                                strokeWidth={1}
                                                fillOpacity={0}
                                                style={{ "stroke-dasharray": "100, 100", "stroke-dashoffset": "0" }}
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="col text-center">Registration
                                    <div id="progress-verification" className="progress-bar">
                                        <svg
                                            viewBox="0 0 100 1"
                                            preserveAspectRatio="none"
                                            className='d-block w-100'>
                                            <path
                                                d="M 0,0.5 L 100,0.5"
                                                stroke=" #004d9e"
                                                strokeWidth={1}
                                                fillOpacity={0}
                                                style={{ "stroke-dasharray": "100, 100", "stroke-dashoffset": "100" }}
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="col text-center">Confirmation

                                    <div id="progress-verification" className="progress-bar">
                                        <svg
                                            viewBox="0 0 100 1"
                                            preserveAspectRatio="none"
                                            className='d-block w-100'>
                                            <path
                                                d="M 0,0.5 L 100,0.5"
                                                stroke=" #004d9e"
                                                strokeWidth={1}
                                                fillOpacity={0}
                                                style={{ "stroke-dasharray": "100, 100", "stroke-dashoffset": "100" }} />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card_body">
                            <h3 className="title">
                                Boss Info AG
                            </h3>
                            <div className="form_control mb-2">
                                <label htmlFor="" className="form_label">
                                    Number of Shares
                                </label>
                                <div className="btn_control">
                                    <button onClick={() => setBtnSelection('buy')} className={`btn_selection ${btnSelection === 'buy' ? 'active_btn' : ''}`}>Buy</button>
                                    <button onClick={() => setBtnSelection('sell')} className={`btn_selection ${btnSelection === 'sell' ? 'active_btn' : ''}`}>Sell</button>
                                </div>
                            </div>
                            <div className="form_control d-flex control_boss mb-2 rounded-3">
                                <input type="text" className='w-100 inside_text' />
                                <label htmlFor="" className='inside_text me-0'>BOSS</label>
                            </div>

                            <div className="form_control mb-2">
                                <div className="btn_control">
                                    <button onClick={() => setBtnSelection2(1)} className={`btn_selection ${btnSelection2 === 1 ? 'active_btn' : ''}`}>Bank Transfer</button>
                                    <button onClick={() => setBtnSelection2(2)} className={`btn_selection ${btnSelection2 === 2 ? 'active_btn' : ''}`}>Cryptocurrency</button>
                                </div>
                            </div>

                            {btnSelection2 === 1 ? <div className="form_control d-flex control_boss mb-2 rounded-3">
                                <span className="w-100 d-inline-block inside_text">28.53</span>
                                <label htmlFor="" className='d-flex align-items-center justify-content-center mb-0'>CHF</label>
                            </div> : <div className="form_control d-flex control_boss mb-2 rounded-3">
                                <span className="w-100 d-inline-block inside_text">0.0154</span>
                                <select name="" id="" className='d-flex bg-transparent border-0 outline-0 px-2 align-items-center justify-content-center mb-0'>
                                    <option value="ETH">ETH</option>
                                    <option value="XCHF">XCHF</option>
                                </select>
                            </div>}

                            <div className="form_control d-flex control_boss mb-2 rounded-3">
                                <span className="w-100 d-inline-block inside_text text-center">
                                    You are buying 3 BOSS for 28.53 CHF.
                                </span>
                                <label htmlFor="" className='d-flex align-items-center text-center px-2 justify-content-center mb-0 hover_border me-0'>
                                    <button>Details</button>
                                </label>
                            </div>
                            <div className="form_control mt-3">
                                <button className="btn_submit_action">
                                    Start Buying BOSS
                                </button>
                            </div>
                        </div>
                        <div className="card_footer text-center">
                            <a href="#" className='d-inline-block' style={{ padding: '12px' }}>
                                © <img height="12px" src={require('../../../icons/aktionariat.svg').default} alt="logo" />
                            </a>
                        </div>
                    </div>
                    <div className="cta_box">
                        <div className="cta_text">
                            Anleitung Wie kaufe ich Token?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const PriceChart = () => {
    const [chartData, setChartData] = useState([]);

    fetch('https://demo-live-data.highcharts.com/aapl-historical.json')
        .then(res => res.json())
        .then(data => {
            setChartData(data);
        })
    const options = {
        chart: {
            backgroundColor: '#f4f6f6',
            type: 'line'
        },
        yAxis: [
            {
                min: 0,
                type: 'linear',
                title: {
                    text: 'Price in Swiss Francs (CHF)'
                },
                opposite: true
            }],



        title: {
            text: 'Historic Market Prices of BOSS'
        },
        xAxis: {
            minRange: 3600 * 1000 // one hour
        },

        series: [{
            data: chartData,
            dataGrouping: {
                enabled: false
            }
        }]
    }

    return (
        <section id="PriceChart">
            <div className="section_wrapper">
                <div className="wpb_wrapper">
                    <h3 className="section_title">
                        Price Chart
                    </h3>
                    <div className="chart_wrapper">
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={options}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

const DownloadContent = () => {
    return (
        <section id="DownloadContent">
            <div className="section_wrapper py-4">
                <h3 className='section_title mb-2'>
                    Download
                </h3>
                <a href="https://www.bossinfo.com/wp-content/uploads/Boss_Info_AG-Registration_Regulations-CMTA_compatible_220524_signiert.pdf"
                    className="document_pdf" target="_blank" rel="noreferrer">
                    <span className="pdf_icon me-2"></span>  Tokenization and Registration Regulations of Boss Info AG 2.0 – EN (signed PDF)
                </a>
            </div>

            <div className="section_wrapper py-5">
                <h3 className='section_title mb-2'>
                    Contract Address
                </h3>
                <a href="https://www.bossinfo.com/wp-content/uploads/Boss_Info_AG-Registration_Regulations-CMTA_compatible_220524_signiert.pdf"
                    className="document_pdf">
                    0x2e880962a9609aa3eab4def919fe9e917e99073b
                </a>
                <div className="btn_wrapper pt-4">
                    <a href='https://etherscan.io/token/0x2e880962a9609aa3eab4def919fe9e917e99073b' target="_blank" rel="noreferrer" className="btn btn-primary primary_custom">
                        View on etherscan
                    </a>
                </div>
            </div>
        </section>
    )
}