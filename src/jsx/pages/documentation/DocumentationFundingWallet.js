import React from 'react';
import Documentation from './Documentation';
function DocumentationFundingWallet(props) {
    return (
        <Documentation>
            <div
                id="w-node-df90eb21-984e-43b9-92be-9bb72e4f12f5-0dd10406"
                className="content-block space-between"
            >
                <div className="margin-bottom margin-medium">
                    <h1 className="heading-large">Funding your wallet</h1>
                </div>
                <div className="margin-bottom margin-medium">
                    <img src loading="lazy" alt className="w-dyn-bind-empty" />
                </div>
                <div className="text-rich-text w-richtext">
                    <p>
                        If you choose to pay with cryptocurrencies when buying shares through the
                        Aktionariat Brokerbot, you will need to have a cryptocurrency wallet
                        endowed with funds.
                    </p>
                    <p>
                        Please make sure that you have already installed and finished setting up
                        the Aktionariat App, which automatically creates a wallet &nbsp;for you
                        during its initial launch. Please refer to the “Setting Up Your Wallet”
                        tutorial if you haven’t already done so.
                    </p>
                    <p>
                        This guide will walk you through the steps of transferring Ether (ETH) to
                        your wallet&nbsp;(if you want to transfer ETH&nbsp;from Ethereum mainnet
                        to Layer-2 Optimism network, check our documentation "Funding Your Wallet
                        for Optimism). Aktionariat AG Shares (DAKS) can be bought using ETH or
                        CryptoFrancs (XCHF). The types of accepted cryptocurrencies may differ by
                        the company selling its shares, but the process to transfer them to your
                        wallet before a purchase is identical.{" "}
                    </p>
                    <p>
                        There are 3 ways to have an account in the Aktionariat App that has the
                        necessary funds to purchase shares:
                    </p>
                    <ol start role="list">
                        <li>Transferring funds from an exchange or from another wallet</li>
                        <li>Importing an account that already has ETH into the app</li>
                        <li>Buying ETH in our app through or partner Bity.com</li>
                    </ol>
                    <p>‍</p>
                    <h4>Transferring funds from an exchange or from another wallet</h4>
                    <p>
                        If you already have some funds on an exchange or another cryptocurrency
                        wallet like MetaMask or Ledger, you can easily transfer them to your
                        wallet created by the Aktionariat App.{" "}
                    </p>
                    <p>
                        You will simply need to take note of your Aktionariat app wallet address
                        and specify it as the recipient when sending a transfer. Your wallet
                        address is not an information that needs to be kept secret. It can be
                        entered into websites or wallets that will initiate transfers to it. Your
                        wallet address looks something like this:
                    </p>
                    <p>0xF9005F6500639ade2ECA93d819eE938ea1B2E3bA</p>
                    <h5>
                        If you are transferring funds from a centralized exchange, such as
                        Binance:
                    </h5>
                    <ul role="list">
                        <li>
                            Go to the screen where you can make withdrawals to external addresses.{" "}
                        </li>
                        <li>Select the coin that you want to withdraw, in this case ETH. </li>
                        <li>Enter your wallet address as the recipient. </li>
                        <li>
                            Make sure that you have selected Ethereum as the network for your
                            withdrawal.{" "}
                        </li>
                        <li>
                            Enter the amount you want to withdraw from the exchange to your wallet.
                        </li>
                        <li>Confirm the transaction.</li>
                    </ul>
                    <p>
                        It may take a couple of minutes until your transaction is sent by the
                        exchange and confirmed by the network. Afterwards, you should see the
                        received funds in your Aktionariat app automatically.
                    </p>
                    <h5>If you are transferring funds from another wallet, such as MetaMask</h5>
                    <ul role="list">
                        <li>
                            Switch to the account where you want to send the funds from and click
                            “Send”
                        </li>
                        <li>
                            Make sure “Ethereum Mainnet” is selected as the network you are
                            operating on.
                        </li>
                        <li>
                            Enter your wallet address as the recipient. You may also want to add
                            this address to your address book as “Aktionariat App Wallet” to easily
                            make transfers in the future.
                        </li>
                        <li>
                            Select the amount you want to transfer and proceed to the confirmation
                            screen.
                        </li>
                        <li>
                            Check your transaction one last time and confirm it if everything looks
                            OK.
                        </li>
                    </ul>
                    <p>
                        It may take a couple of minutes until your transaction is confirmed by the
                        network. Afterwards, you should see the received funds in your Aktionariat
                        app automatically.
                    </p>
                    <p>‍</p>
                    <h4>Importing an account that already has ETH into the app</h4>
                    <p>
                        Although the Aktionariat app creates an initial wallet address for you, it
                        also supports importing, tracking and using multiple Ethereum addresses.
                        If you only want to track positions on an address, it is enough to import
                        it just by its public address, without entering your private keys.
                        However, if you want to sign transactions from that address (such as when
                        making share purchases), you will need to import the address by its
                        “Secret Recovery Phrase” or by its “Private Key”.
                    </p>
                    <p>
                        If you don’t know how to get your private key, check the documentation of
                        your existing wallet to find out how it can be exported. In MetaMask, it
                        is done by clicking on “Export Private Key” under the Account Details
                        menu.
                    </p>
                    <p>
                        Please note that your Secret Recovery Phrase or Private Key should always
                        remain secret. Never share it with anyone. Don’t copy/paste it into an
                        e-mail and send it to yourself. An attacker who could gain access to your
                        e-mails could then compromise your Ethereum wallet.{" "}
                    </p>
                    <p>
                        The keys that you enter into the Aktionariat app are stored securely on it
                        and never leave your device.
                    </p>
                    <p>
                        Go to the Connect tab of the Aktionariat app and tap on “Import an
                        Address”. Type in your phrase or your private key, give a name to your
                        wallet and tap “Import”.{" "}
                    </p>
                    <p>
                        You should be able to see your new address under “All Ethereum Addresses”
                        immediately.
                    </p>
                    <p>
                        Don’t worry if you don’t immediately see all your assets on the newly
                        imported address in your portfolio. It can take a couple of minutes until
                        our servers scan your address for new positions and add them to your
                        portfolio.
                    </p>
                    <p>
                        Now you can select your imported address with the funds on it when
                        connecting to our Brokerbot and use it to make purchases.
                    </p>
                    <p>‍</p>
                    <h4>Buying ETH using our app through our partner Bity.com</h4>
                    <p>
                        Please first note that, when buying ETH inside our application, you are
                        interacting directly with our partner Bity.com. Only Bity.com can help you
                        with your inquiries about your order and its processing status.
                    </p>
                    <p>
                        Only ETH purchases up to 1’000 CHF at a time can be made, because of legal
                        constraints.
                    </p>
                    <ul role="list">
                        <li>
                            In the Portfolio tab of the app, select Ether and tap on “BUY ETH”.{" "}
                        </li>
                        <li>
                            Enter the amount of CHF you want to send, from which IBAN you will be
                            sending the transfer and select the recipient address. An exchange rate
                            and the amount of ETH you expect to receive will automatically be
                            calculated. Proceed to the next screen.{" "}
                        </li>
                        <li>
                            Check again the exchange rate and other costs associated with your
                            order. Tap on “PLACE ORDER” to submit your order. You will need to sign
                            a message to prove the recipient address belongs to you. Signing a
                            message does not cost anything.{" "}
                        </li>
                        <li>
                            In the next screen, you will see that your order has been placed and
                            your signature has been correctly submitted. Now you will need to
                            transfer the necessary amount to Bity.com’s bank account.
                        </li>
                        <li>
                            Please make sure that you include the Message / Reference field in your
                            bank transfer. If you fail to do so, your purchase may face additional
                            delays or may be directly cancelled.
                        </li>
                        <li>
                            Once your bank transfer has been received by Bity.com, your order will
                            automatically be processed, and the purchased ETH will arrive in your
                            account.
                        </li>
                    </ul>
                    <p>
                        In case you have additional questions or a support request, please
                        directly get in touch with Bity.com support, using the link provided in
                        the Order Details screen. Aktionariat has no way of helping you with your
                        order.
                    </p>
                    <p>‍</p>
                    <h4>Congratulations!</h4>
                    <p>
                        Once you have some funds in your Aktionariat app wallet, you are ready to
                        connect to our Brokerbot and purchase shares directly using
                        cryptocurrencies with instant settlements.{" "}
                    </p>
                    <p>
                        The process is also similar, even if you are transferring any other
                        currency than ETH, such as a stablecoin. Nothing should go wrong, as long
                        as your recipient address is entered correctly when making the transfer.
                    </p>
                    <p>
                        Please note that, even if you choose to pay with a stablecoin like XCHF,
                        you will still need to have some ETH in your wallet to pay for the
                        Ethereum network transaction costs.
                    </p>
                    <p>‍</p>
                </div>
            </div>

        </Documentation>
    );
}

export default DocumentationFundingWallet;