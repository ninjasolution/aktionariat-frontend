import React from 'react';
import Documentation from './Documentation';
function DocumentationChecklist(props) {
    return (
        <Documentation>
            <div
                id="w-node-df90eb21-984e-43b9-92be-9bb72e4f12f5-0dd10406"
                className="content-block space-between"
            >
                <div className="margin-bottom margin-medium">
                    <h1 className="heading-large">Tokenization checklist</h1>
                </div>
                <div className="margin-bottom margin-medium">
                    <img src loading="lazy" alt className="w-dyn-bind-empty" />
                </div>
                <div className="text-rich-text w-richtext">
                    <p>
                        So, you have decided to tokenize the shares of your company.
                        Congratulations! Here are some important decisions you will need to take
                        before having a fully functional, liquid market open to public.
                    </p>
                    <h3>Share Name &amp; Ticker</h3>
                    <p>
                        The first thing you should probably decide is the official name of your
                        shares and your share ticker, under which your company shares will be
                        traded. The ticker is typically a 3-4 letter code, unique to your
                        company.&nbsp;
                        <br />
                    </p>
                    <p>
                        The ticker should not contain special characters and punctuation, to
                        ensure compatibility with existing systems. It CAN’T BE CHANGED after the
                        deployment of your shares.&nbsp;
                        <br />
                    </p>
                    <p>
                        Some examples from companies on our platform
                        <br />
                    </p>
                    <p>- Aktionariat AG Shares -&gt; DAKS</p>
                    <p>- TBô Shares -&gt; TBOS</p>
                    <p>- Boss Info AG -&gt; BOSS</p>
                    <p>
                        - quitt.shares -&gt; DQTS
                        <br />
                    </p>
                    <h3>Shareholder Agreement</h3>
                    <p>
                        Another thing that needs to be available during your token launch is a
                        shareholder agreement. This document defines the terms and conditions for
                        your shares, and what rights and responsibilities your shareholders will
                        have. It is not only a legal requirement, but also a crucial part of
                        building a solid foundation for your shareholder relations.&nbsp;
                        <br />
                    </p>
                    <p>
                        Aktionariat <strong>provides a template </strong>that can be used as a
                        starting point, but the exact content and terms on it will depend on the
                        specific configuration of your share tokens.
                        <br />
                    </p>
                    <p>
                        In case you need help, our legal partner LEXR will be happy to help you in
                        finalizing the Shareholder Agreement, while making sure it correctly
                        covers all the required information in a compliant way.
                        <br />
                    </p>
                    <h3>Initial Price</h3>
                    <p>
                        As your company is the counterparty for all purchases / sales regarding
                        your share token, you will have full control on the price and its
                        behavior.
                        <br />
                    </p>
                    <p>
                        The first thing to decide is the starting price for the sale of your
                        tokens. This, of course, is determined by the number of shares your
                        company has and its valuation. Note that you don’t have to tokenize 100%
                        of your shares, but the share supply while determining the price and
                        market cap of your tokens should include non-tokenized shares.&nbsp;
                    </p>
                    <p>
                        As an example, a company with 1.000.000 shares outstanding, with a
                        valuation of 20.000.000 CHF, should set the initial price of 1 share to 20
                        CHF, regardless of whether all 1M shares are tokenized or not.
                        <br />
                    </p>
                    <p>
                        As our share tokens are legally 1-to-1 representation of real shares, it
                        is not possible to have fractional shares. The price of 1 share will be
                        the minimum amount an investor would need to pay when investing in your
                        company.
                        <br />
                    </p>
                    <p>
                        The trading price of the token can be changed through the dashboard (by
                        agreement through the company board multi-signature contract) at any time.
                        However, as this will significantly impact your market and your
                        shareholders’ expectations, it is best to use a forced price change only
                        on significant events and let the market forces define the price
                        otherwise.
                        <br />
                    </p>
                    <p>
                        Changing the price can also be used to define a multi-tier initial sale,
                        where early investors are allowed to buy in at lower prices, before
                        setting a final price for the long term. TBô has used this mechanism
                        successfully <strong>during their offering</strong>.<br />
                    </p>
                    <h3>Price Behavior</h3>
                    <p>
                        Typically, the price is adjusted slightly up for every investment made on
                        your website, and down for every share sold back to your company. This
                        rewards early investors, while also keeping a balance between supply &amp;
                        demand. The mechanism is similar to the “bonding curve” approach used in
                        various tokens, except it defines a linear relationship between the shares
                        outstanding and the price.
                        <br />
                    </p>
                    <p>
                        Using Aktionariat Dashboard, you can define the “slope” of the share price
                        bonding, which is used when calculating the price impact of each
                        transaction.&nbsp;
                        <br />
                    </p>
                    <p>
                        The linear increment mechanism also lets companies set a range of price
                        for their shares, instead of setting a single price where shares would be
                        traded. The market can decide where exactly in that range the share price
                        will settle.
                        <br />
                    </p>
                    <p>
                        Please check the <strong>graph</strong> and the{" "}
                        <strong>case study</strong> below for an example on setting the price and
                        price change of your shares.
                        <br />
                    </p>
                    <h3>Currencies and Payment Methods</h3>
                    <p>
                        The investors will need to be able to pay you, either using fiat bank
                        transfers or cryptocurrencies.
                        <br />
                    </p>
                    <p>
                        Cryptocurrencies are the most suitable when trading tokenized shares,
                        since they provide immediate settlement and delivery of your tokenized
                        shares. However, we are aware that not everyone interested in investing in
                        your company may own cryptocurrencies. Therefore, it is possible to accept
                        bank transfers as payment. Note that when using payments through bank
                        transfer (a) typical bank transfer durations and additional costs may
                        apply, (b) you will manually need to confirm the receipt of the bank
                        transfer for a certain placed order in the dashboard, (c) the settlement
                        is not guaranteed, since the shares may be sold out, or significantly
                        changed in price after the order but before the payment is received.
                    </p>
                    <p>
                        It is not possible to reserve a number of shares for purchases made via
                        bank transfers, since it’s not guaranteed that the transfer will happen at
                        all. If the shares were to be reserved, a malicious actor could block your
                        market by supposedly buying all shares through bank transfer and never
                        sending the payment.
                        <br />
                    </p>
                    <p>
                        We currently don’t enable payments through credit or debit cards, although
                        an easier payment flow using tools like TWINT are in development.
                        <br />
                    </p>
                    <p>Other things to consider regarding payment methods are:</p>
                    <ul role="list">
                        <li>
                            Which fiat currencies you would like to accept. (CHF, USD, EUR, …)
                        </li>
                        <li>
                            Which cryptocurrencies you would like to accept (ETH, XCHF, DAI, …)
                        </li>
                        <li>
                            In case of receiving non-stable cryptocurrencies, such as ETH, whether
                            or not you would like to keep it as ETH or convert automatically to a
                            stablecoin.
                        </li>
                    </ul>
                    <h3>Using Allowlisting</h3>
                    <p>
                        Allowlisting limits the addresses that can trade share tokens to only
                        addresses recognized explicitly by the company.
                        <br />
                    </p>
                    <p>
                        First of all, please note that Aktionariat doesn’t recommend an allow-list
                        for share tokens. Having custody of the share token and being legally
                        registered as a shareholder are different things. The check for accepting
                        a certain person as a shareholder can be done off-chain during shareholder
                        registration, which is much easier and less expensive for both the company
                        and investors.
                        <br />
                    </p>
                    <p>
                        That being said, if you decide that you need an on-chain allow-list, our
                        tools are able to handle your request. Our Brokerbot will only allow
                        purchases done by allow-listed addresses. Using Aktionariat Dashboard,
                        company admins will have the chance to review and approve requests to be
                        allow-listed.
                        <br />
                    </p>
                    <h3>Additional Functionality</h3>
                    <p>
                        Share tokens issued using the Aktionariat platform are fully compliant
                        will existing ERC20 standard. On top of the typical ERC20 standard, we
                        also provide the following additional capabilities:
                        <br />
                    </p>
                    <h4>Recoverability – ERC20Recoverable</h4>
                    <p>
                        We provide a decentralized way of retrieving a shareholder’s tokens, in
                        case the keys or wallet holding those shares are lost. This process
                        includes depositing a collateral that can be claimed back using the “lost”
                        private keys. After a certain period (1-6 months), the claimant can get
                        back the collateral + the previously stuck shares. If the request was
                        malicious and the keys were not lost, the original owner can cancel the
                        claim and also take the collateral. The whole process can be overseen by
                        the company admins to prevent abuse.
                        <br />
                    </p>
                    <h4>Draggable – ERC20Draggable</h4>
                    <p>
                        We offer a way to add a drag-along mechanism into the smart contract.
                        Using this mechanism, an investor that purchases majority shares in the
                        company can force out the small investors, by paying the fair price of the
                        share acquisition. This way, the existing shareholders still get a fair
                        compensation, but future investors that would only accept to get 100% of
                        the share supply can still do so.
                        <br />
                    </p>
                    <h3>Final Steps</h3>
                    <p>
                        Once you have taken all the necessary decisions, you are ready to deploy
                        our Brokerbot to your investors page and enable your market.
                        <br />
                    </p>
                    <p>
                        Prepare your website, integrate our widgets and start offering your
                        tokenized shares to the public!
                        <br />
                    </p>
                    <p>
                        Please don’t hesitate to get in touch with us for any help in taking these
                        decisions. We will be more than happy to make sure you understand them
                        fully and set the ideal configuration before launching your market.
                    </p>
                    <p>
                        <br />
                    </p>
                    <p>
                        <strong>GET IN TOUCH</strong>
                    </p>
                    <p>
                        <br />
                    </p>
                </div>
            </div>
        </Documentation>
    );
}

export default DocumentationChecklist;