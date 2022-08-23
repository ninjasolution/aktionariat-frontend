import React from 'react';
import Documentation from './Documentation';
function DocumentationHowToBuy(props) {
    return (
        <Documentation>
            <div
                id="w-node-df90eb21-984e-43b9-92be-9bb72e4f12f5-0dd10406"
                className="content-block space-between"
            >
                <div className="margin-bottom margin-medium">
                    <h1 className="heading-large">How to buy Aktionariat shares</h1>
                </div>
                <div className="margin-bottom margin-medium">
                    <img src loading="lazy" alt className="w-dyn-bind-empty" />
                </div>
                <div className="text-rich-text w-richtext">
                    <p>
                        This is a walk-through on how to purchase blockchain-based Aktionariat
                        shares, sometimes referred to as tokenized shares. They are sold in the
                        form of a token named Draggable Aktionariat AG Shares (DAKS). This post
                        will lead you, in a step-by-step manner, through the process of acquiring
                        DAKS either with the Aktionariat Portfolio App (
                        <a
                            href="https://apps.apple.com/ch/app/aktionariat/id1518326813?l=en"
                            target="_blank" rel="noreferrer"
                        >
                            iOS
                        </a>
                        ,{" "}
                        <a rel="noreferrer"
                            href="https://play.google.com/store/apps/details?id=com.aktionariat.app"
                            target="_blank"
                        >
                            Android
                        </a>
                        ) or any other WalletConnect compatible Ethereum wallet. The same
                        procedure is also applicable to assets that use the Ethereum Layer-2
                        Optimism network and other issuers that make use of our tools to create a
                        market for their tokenized equity.
                    </p>
                    <figure
                        className="w-richtext-figure-type-image w-richtext-align-floatleft"
                        style={{ "max-width": "120px" }}
                    >
                        <a
                            href="https://apps.apple.com/ch/app/aktionariat/id1518326813?l=en"
                            target="_blank" rel="noreferrer"
                            className="w-inline-block"
                        >
                            <div>
                                <img
                                    src={require('../../../icons/apple.svg').default}
                                    alt="Download the Aktionariat AG app on the Apple Store"
                                />
                            </div>
                        </a>
                    </figure>
                    <figure
                        className="w-richtext-figure-type-image w-richtext-align-floatleft"
                        style={{ "max-width": "130px" }}
                    >
                        <a rel="noreferrer"
                            href="https://play.google.com/store/apps/details?id=com.aktionariat.app"
                            target="_blank"
                            className="w-inline-block"
                        >
                            <div>
                                <img
                                    src={require('../../../icons/google.svg').default}
                                    alt="Download the Aktionariat AG app on the Google Play Store"
                                />
                            </div>
                        </a>
                    </figure>
                    <p>‍</p>
                    <figure className="w-richtext-figure-type-image w-richtext-align-center">
                        <div>
                            <img
                                src={require('../../../images/pages/documentation/download-app.png')}
                                loading="lazy"
                                alt="download app"
                            />
                        </div>
                    </figure>
                    <h4>Step 1: Get a wallet for cryptocurrencies</h4>
                    <p>
                        You are free to use any mobile wallet for cryptocurrencies that support{" "}
                        <a href="https://walletconnect.org/wallets" target="_blank" rel="noreferrer">
                            WalletConnect
                        </a>{" "}
                        or the{" "}
                        <a href="https://metamask.io/" target="_blank" rel="noreferrer">
                            MetaMask
                        </a>{" "}
                        browser plugin. However, we strongly recommend downloading and using our
                        own Aktionariat Portfolio App as your go-to wallet for tokenized shares.
                        Only the Aktionariat Portfolio App is capable of completing a purchase
                        without leaving the app, displaying the current price of our shares,
                        performance indicators, and automatically registering users as
                        shareholders with the issuer. The app is available on the{" "}
                        <a
                            href="https://apps.apple.com/ch/app/aktionariat/id1518326813"
                            target="_blank" rel="noreferrer"
                        >
                            App Store
                        </a>{" "}
                        and on{" "}
                        <a
                            href="https://play.google.com/store/apps/details?id=com.aktionariat.app"
                            target="_blank" rel="noreferrer"
                        >
                            Google Play Store
                        </a>
                        .
                    </p>
                    <p>
                        The Aktionariat Portfolio App is a non-custodial wallet. This means that
                        the user has exclusive control of the stored assets and therefore also
                        bears exclusive responsibility for said assets. Before storing any
                        non-trivial amount of crypto-assets in any non-custodial wallet, it is{" "}
                        <strong>extremely important to backup</strong> the wallet’s key phrase
                        which allows you to restore it on a new phone in case of loss, damage, or
                        theft.
                    </p>
                    <h4>Step 2: Choose a payment method</h4>
                    <p>
                        When buying our shares, you have the option to pay with supported
                        cryptocurrencies or via bank transfer (additional payment methods to be
                        announced soon).{" "}
                    </p>
                    <h5>Paying with Cryptocurrencies</h5>
                    <p>
                        Cryptocurrency payments are the preferred payment method when buying
                        tokenized shares, as they provide instant settlement without the need for
                        intermediaries that can cause problems or delays.{" "}
                    </p>
                    <p>
                        All shares are always quoted in fiat currencies to handle volatility.
                        Aktionariat uses CryptoFrancs (
                        <a href="https://www.bitcoinsuisse.com/de/cryptofranc">XCHF</a>) as the
                        Swiss Franc-based stablecoin. However, payments using Ether (ETH) are also
                        possible—using an automated exchange rate mechanism in the background.
                    </p>
                    <p>
                        Even if you choose to use CryptoFrancs as the preferred payment currency,
                        you will need a small amount of Ether in your wallet to cover for the
                        blockchain transaction costs.{" "}
                    </p>
                    <p>To get ETH&nbsp;in your wallet, you can:</p>
                    <ul >
                        <li>Transfer funds from another wallet or an exchange</li>
                        <li>Buy ETH directly in our app using our integrated partner Bity.com</li>
                    </ul>
                    <p>
                        Please follow the respective links above, if you need help with those
                        processes.
                    </p>
                    <h5>Paying via Bank Transfer</h5>
                    <p>
                        Our tools also support payments via bank transfer. A cryptocurrency wallet
                        is still required, even when paying using this option, since your
                        purchased shares will be delivered to the wallet you have specified during
                        the purchase.
                    </p>
                    <p>
                        Please note that some additional concerns may apply when paying via bank
                        transfer:
                    </p>
                    <ul >
                        <li>
                            Purchases via bank transfers are not settled instantly. Typical bank
                            transfer delays apply. If you have sent funds on a Friday evening, it
                            can take until Monday that the money is received by the company, your
                            purchase is approved and the shares are delivered.
                        </li>
                        <li>
                            If there are significant changes to the share price before your payment
                            is received, the company may refuse your payment, issue a refund or
                            simply send the number of shares corresponding to your payment using the
                            actual price.{" "}
                        </li>
                        <li>
                            If the company has very limited number of shares left, investors paying
                            using cryptocurrencies may get them instantly, before your payment is
                            received. In that case, your purchase will fail and you will get a
                            refund. Please note that we are not able to reserve shares for bank
                            transfer purchases, since then a bad actor could reserve shares, simply
                            never send a bank transfer and block other legitimate investors from
                            purchasing.
                        </li>
                    </ul>
                    <h4>Step 3: Connect your wallet to the Brokerbot</h4>
                    <p>
                        During the purchase, your wallet needs to be connected to the Aktionariat
                        Brokerbot. The shares purchased will be delivered to your connected
                        wallet.
                    </p>
                    <p>
                        You can complete the purchase directly on mobile using the Aktionariat
                        Portfolio App, or you can visit our investor relations page on a desktop
                        browser and connect your wallet using a QR code.
                    </p>
                    <h5>Purchasing on Mobile Using Aktionariat App</h5>
                    <p>
                        On the mobile app portfolio screen, select Aktionariat AG&nbsp;Shares. Tap
                        on "BUY / SELL&nbsp;DAKS". This will open an in-app browser showing our
                        investor relations page. Scroll down to the section with the Brokerbot.
                        Check that your wallet address is already connected. If you prefer to use
                        another address, simply tap on the wallet icon on the top right corner and
                        select a new address. Note that you need to import an address with the
                        private key or seed phrase to use it for purchases. Watch addresses can't
                        be used to start transactions or sign messages.
                    </p>
                    <figure
                        className="w-richtext-figure-type-image w-richtext-align-fullwidth"
                        style={{ "max-width": "1583pxpx" }}
                    >
                        <div>
                            <img
                                src={require('../../../images/pages/documentation/buy-daks-3.png')}
                                loading="lazy"
                                alt="img"
                            />
                        </div>
                    </figure>
                    <h5>Purchasing on a Desktop Browser</h5>
                    <p>
                        To purchase on a desktop browser, you will need to connect your wallet to
                        the Brokerbot manually. If you want to use a mobile app wallet, you will
                        need to scan a QR&nbsp;code. If you prefer to use MetaMask, your browser
                        extension will ask you for permission to connect.
                    </p>
                    <figure
                        className="w-richtext-figure-type-image w-richtext-align-fullwidth"
                        style={{ "max-width": "1583pxpx" }}
                    >
                        <div>
                            <img
                                src={require('../../../images/pages/documentation/buy-on-desktop.png')}
                                loading="lazy"
                                alt="img"
                            />
                        </div>
                    </figure>
                    <p>
                        Go to our investor relations page, find the Brokerbot, tap on
                        "CONNECT&nbsp;WALLET" and select the wallet you want to use. Using the
                        Aktionariat Portfolio App is highly recommended, even if you want to
                        purchase on a desktop computer. However, you can also use MetaMask or any
                        WalletConnect compatible cryptocurrency wallet.
                    </p>
                    <p>
                        In case of the Aktionariat Portfolio App, go to the Connect section of the
                        app and scan the QR&nbsp;code displayed on your browser. After the
                        connection has been established, check that you are using the correct
                        address and that it has the necessary funds for the purchase.
                    </p>
                    <h4>Step 4:&nbsp;Finalize your purchase</h4>
                    <p>
                        Enter the number of shares you want to buy. If you are paying with
                        cryptocurrencies, your wallet balance will be checked automatically.
                        Double check the payment amount, exchange rate (when using ETH) and the
                        transaction summary.{" "}
                    </p>
                    <figure className="w-richtext-align-center w-richtext-figure-type-image">
                        <div>
                            <img
                                src={require('../../../images/pages/documentation/proceed.png')}
                                loading="lazy"
                                alt="img"
                            />
                        </div>
                    </figure>
                    <p>
                        Read the Token Terms and tap on the checkbox to confirm them. If you are
                        not an insider, you are not required to provide a transaction note.
                    </p>
                    <h5>Cryptocurrency Payments</h5>
                    <p>
                        Tap on BUY&nbsp;DAKS. This will initiate the purchasing transaction, which
                        you will need to confirm in your wallet. Different wallets may show
                        different ways of confirming the transaction.
                    </p>
                    <figure
                        className="w-richtext-figure-type-image w-richtext-align-fullwidth"
                        style={{ "max-width": "1583pxpx" }}
                    >
                        <div>
                            <img
                                src={require('../../../images/pages/documentation/sign-and-done.png')}
                                loading="lazy"
                                alt="img"
                            />
                        </div>
                    </figure>
                    <p>
                        After your confirmation, the transaction will be sent to the Ethereum
                        network. It can take up to a minute until your transaction has been
                        confirmed by the network. After your transaction is mined, you should be
                        able to see the purchased shares in your wallet. You can also easily track
                        the transaction status and your balances using Etherscan.
                    </p>
                    <h5>Bank Transfers</h5>
                    <p>
                        Please enter also your e-mail address and tap
                        "SEND&nbsp;PAYMENT&nbsp;INSTRUCTIONS". You will soon receive an email with
                        details for the bank transfer and the exact amount you should send.
                    </p>
                    <figure className="w-richtext-figure-type-image w-richtext-align-center">
                        <div>
                            <img
                                src={require('../../../images/pages/documentation/bank-transfer.png')}
                                loading="lazy"
                                alt="img"
                            />
                        </div>
                    </figure>
                    <p>‍</p>
                </div>
            </div>
        </Documentation>
    );
}

export default DocumentationHowToBuy;