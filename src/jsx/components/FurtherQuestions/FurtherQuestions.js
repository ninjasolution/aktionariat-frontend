import React from 'react';

function FurtherQuestions(props) {
    return (
        <div id='further_questions'>
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
                                        href="https://meetings-eu1.hubspot.com/bela?__hstc=180372984.110723e7ee79c8b5cad6e8378037cce7.1659973797909.1660359929893.1660381758643.21&__hssc=180372984.2.1660381758643&__hsfp=3929547609"
                                        target="_blank" rel="noreferrer"
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

        </div>
    );
}

export default FurtherQuestions;