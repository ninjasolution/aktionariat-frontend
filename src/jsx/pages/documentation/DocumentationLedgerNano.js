import React from 'react';
import Documentation from './Documentation';
function DocumentationLedgerNano(props) {
    return (
        <Documentation>
            <div
                id="w-node-df90eb21-984e-43b9-92be-9bb72e4f12f5-0dd10406"
                className="content-block space-between"
            >
                <div className="margin-bottom margin-medium">
                    <h1 className="heading-large">How to set up your Ledger Nano S</h1>
                </div>
                <div className="margin-bottom margin-medium">
                    <img src loading="lazy" alt className="w-dyn-bind-empty" />
                </div>
                <div className="text-rich-text w-richtext">
                    <p>
                        Adding a Ledger (hardware wallet) as an additional signer to the company
                        multi-signature wallet can be splitted into 2 steps:
                    </p>
                    <p>‍</p>
                    <ol role="list">
                        <li>Setting up your Ledger (hardware wallet) for the first time</li>
                        <li>Adding the Address of the Ledger as an additional Signer</li>
                    </ol>
                    <p>‍</p>
                    <h2>1. Setting up your Ledger for the first time</h2>
                    <p>
                        If you have already set up your Ledger (hardware wallet) you can skip this
                        step.
                    </p>
                    <p>‍</p>
                    <p>
                        To set up your Ledger for the first time you should follow the detailed
                        instructions on the Ledger <a href="http://www.ledger.com">homepage</a>:
                    </p>
                    <p>‍</p>
                    <p>
                        <a href="https://support.ledger.com/hc/en-us/articles/360000613793-Set-up-your-Ledger-Nano-S?docs=true">
                            Set up guide for Ledger Nano S
                        </a>
                    </p>
                    <p>‍</p>
                    <p>
                        <a href="https://support.ledger.com/hc/en-us/articles/360005514233-How-to-keep-my-24-word-recovery-phrase-and-PIN-code-safe-?docs=true">
                            Guide for safety
                        </a>
                    </p>
                    <p>‍</p>
                    <p>Disclaimer:</p>
                    <p>
                        Never type your recovery phrase in any website, we and Ledger will never
                        ask you for your recovery phrase.
                    </p>
                    <p>‍</p>
                    <p>
                        Please always check if you are on the official website of Ledger, in case
                        the link above is invalid or you think a malicious actor replaced the link
                        please contact us.
                    </p>
                    <p>‍</p>
                    <h2>2. Adding the address of the Ledger as an additional signer</h2>
                    <p>This includes two step:</p>
                    <ol role="list">
                        <li>Find out or create your first Ethereum address of your Ledger</li>
                        <li>Add the Ledger address as additional signer</li>
                    </ol>
                    <p>‍</p>
                    <p>
                        (if you know the Ethereum address already you can skip directly to the 2nd
                        step)
                    </p>
                    <p>‍</p>
                    <h3>2.1. Find out or create your first Ethereum address</h3>
                    <p>To manage your Ledger please download the official Ledger Live App:</p>
                    <p>
                        <a href="https://www.ledger.com/start">https://www.ledger.com/start</a>
                    </p>
                    <p>‍</p>
                    <p>
                        After you installed the Ledger Live App, you have to set up a password and
                        verify your Ledger. (Also install the newest firmware if you get notified
                        for it)&nbsp;
                    </p>
                    <p>‍</p>
                    <p>
                        To create an account select "Accounts" on the left and then click on the
                        "+ Add account" on the top right (see screenshot below).
                    </p>
                    <figure className="w-richtext-align-center w-richtext-figure-type-image">
                        <div>
                            <img
                                src="https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/62c84f974e57671e06493044_gdKAIC57zxb4TeO6lng3qad_Qq-qCmdppYM-NYZnM_ThouYJt1ltfM0IG6-Zo4G5kmhp7igeEgq7LNX4g69vK_WKvUvFMb2tO_2PR7GNJk6pqDNJSZkmXgOLsrmzUVkUDxboIQt4iFYSCJ4S1Q.png"
                                alt
                            />
                        </div>
                    </figure>
                    <p>‍</p>
                    <p>
                        In the pop-up menu select "Ethereum (ETH)"&nbsp;from the dropdown menu and
                        follow the instructions.
                    </p>
                    <figure className="w-richtext-align-center w-richtext-figure-type-image">
                        <div>
                            <img
                                src="https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/62c84f960ba44aaa7496ecdc_eqIJ0qMVas8H073Dng9ff2wE6cLcv5XMaJM7-9OBXCAM_V7LoZk_KgQJbmGchCCr52g-_nyvrWDqCAUHdS9qwUnOufQWs1U45Xed4PT6tuJUy9igPclHg6PqQmjHo97_JYhapH3Ybx7GtZY5ZA.png"
                                alt
                            />
                        </div>
                    </figure>
                    <p>‍</p>
                    <p>
                        To see your address you can click on "Receive" on the left hand side of
                        the interface.
                    </p>
                    <figure className="w-richtext-align-center w-richtext-figure-type-image">
                        <div>
                            <img
                                src="https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/62c84f976bdb9e90411c1ae3_21jqYlxRfcW_T6ZddSIbQcMC-JuHORr631STxaUoPshzqGaWy2p5TnRTPmZLAaUyfhKeEEiV1se5ctPDItbTCSv_aSmOHsxZWhtidldL_nddzpkNX__9obwBKH8P30Mowc2F3jNgmVxDPgYIZg.png"
                                alt
                            />
                        </div>
                    </figure>
                    <p>‍</p>
                    <ol start={2} role="list">
                        <li>Then select your newly created Ethereum account...</li>
                    </ol>
                    <figure className="w-richtext-align-center w-richtext-figure-type-image">
                        <div>
                            <img
                                src="https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/62c84f9617c1a70b018b290b_DyNQmg7vxw6xLRwFZaEZ7NYAF3xR9eWXfUIl5loyZOGpXVJncLsEBpVYJgDKGEDi0HwBAIu2fvAF86jPtkwG15OO2WeaUz1orW3wPGF704nV08eT9Am5ngTNLjH_pzg1wOJ9R_2ymdsttCA0dw.png"
                                alt
                            />
                        </div>
                    </figure>
                    <p>‍</p>
                    <ol start={3} role="list">
                        <li>...and there you can copy your address.</li>
                    </ol>
                    <figure className="w-richtext-align-center w-richtext-figure-type-image">
                        <div>
                            <img
                                src="https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/62c84f9790956634fb707155_VNn00lWrYmQhFfbkH4rImiAOERKs-YhXXgvm8BwcHIoVge0GoL33snGqhZFHP3QLAnysqXXZ1yHP47elY-uNJoVqyjZTvRmSzzv_ncCzCOzNc8aefPFykjtoFULUFIzy4aanFPZwXFSiP6T4Tg.png"
                                alt
                            />
                        </div>
                    </figure>
                    <p>‍</p>
                    <h3>2.2 Add address as signer</h3>
                    <p>
                        To add the Ledger address as a signer, log into the your dashboard with
                        your admin account and select “Multisig Keys” in the left menu.
                    </p>
                    <figure className="w-richtext-align-center w-richtext-figure-type-image">
                        <div>
                            <img
                                src="https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/62c84f9601ec68450e4c80a5_o4ITYU2JbVhhQ6YA58jr2bUKHq8vYyRwz5zarYwqG2w_U135yLq9ckyiteWHF3h7wyoA_Ga_9rZ2sjf5fx0eFpwP5NOEGECcVuLQOpbpebvzVyqmid3B8aoyRAImYPbx11Bx67IR_3iTtQXIOw.png"
                                alt
                            />
                        </div>
                    </figure>
                    <p>‍</p>
                    <p>Then click “Add Signature Key” on the bottom&nbsp;right.</p>
                    <figure className="w-richtext-align-center w-richtext-figure-type-image">
                        <div>
                            <img
                                src="https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/62c84f97fb1c77db177b41e1_KATNKpe4XL9ZYmBr2WhvXTmAQvrnJllF8Xl8qvj7KLkWVO81lqf8tFJbiHRodShA_xWScMwGZzYcjILqzT03CaTyrFlRCqiAppp_e0em1NRV4KI8D7y7OezDFrM43KQWyn50HE74asQ6YOtuXQ.png"
                                alt
                            />
                        </div>
                    </figure>
                    <p>‍</p>
                    <p>
                        Finally, enter the address of the Leger in the pop-up menu and set the
                        signatory power you like.
                    </p>
                    <p>‍</p>
                    <figure className="w-richtext-align-center w-richtext-figure-type-image">
                        <div>
                            <img
                                src="https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/62c84f974e57674884493045_OrZJAHxYamflTeWV27DvO6IV4PXhZLz-yoVvIMTTP2HYNXvtR46lK6qHQhiz1u-wYB7agxJ1e66ADJZNb85oRk8v9KOsFabQCzQau_9au57L55QezN593d6_Qw-Px3NeSfC4KXWaY5IubN4ouT4.png"
                                alt
                            />
                        </div>
                    </figure>
                    <p>‍</p>
                    <p>
                        Last but not least:&nbsp;Don’t forget to sign this proposal with your
                        current signers!
                    </p>
                    <p>‍</p>
                </div>
            </div>

        </Documentation>
    );
}

export default DocumentationLedgerNano;