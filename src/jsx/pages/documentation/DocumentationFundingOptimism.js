import React from 'react';
import Documentation from './Documentation';
function DocumentationFundingOptimism(props) {
    return (
        <Documentation>
            <div
                id="w-node-df90eb21-984e-43b9-92be-9bb72e4f12f5-0dd10406"
                className="content-block space-between"
            >
                <div className="margin-bottom margin-medium">
                    <h1 className="heading-large">Funding your wallet for Optimism</h1>
                </div>
                <div className="margin-bottom margin-medium">
                    <img src loading="lazy" alt className="w-dyn-bind-empty" />
                </div>
                <div className="text-rich-text w-richtext">
                    <p>
                        If you want to buy tokenized shares (using Ether or XCHF) of a company
                        that runs on the Ethereum Layer-2 Optimism network, the respective token
                        needs to reside on the Optimism network.
                    </p>
                    <p>
                        ‍<br />
                        There are two ways to achieve that:
                    </p>
                    <ul role="list">
                        <li>
                            Purchase new funds: If you don’t have any crypto yet, you can buy Ether
                            from an exchange and send it directly or indirectly to the Optimism
                            network
                        </li>
                        <li>
                            Bridge existing funds: If you already have Ether or XCHF on the Ethereum
                            network, you can bridge your funds.
                        </li>
                    </ul>
                    <p>
                        <em>
                            Note: If you bridge funds from one chain to another you still need to
                            have in reserve native blockchain currency to pay transaction fees. For
                            example, if you bridge XCHF you will need Ether on the Ethereum
                            blockchain to initiate the bridging and you will need Ether on Optimism
                            to buy shares or make a change on Uniswap. Additionally, if you withdraw
                            funds from Optimism back to Ethereum you will need Ether to send the
                            bridging transaction on Optimism and Ether on Ethereum to withdraw your
                            unlocked funds on the bridge.
                        </em>
                    </p>
                    <h4>Sending Ether from a central exchange to Optimism</h4>
                    <p>
                        If you have Ether already or want to buy Ether on a central exchange and
                        want to move it Optimism the steps are different for different exchanges.
                    </p>
                    <p>
                        Right now{" "}
                        <a href="http://huobi.com/" target="_blank">
                            <strong>Huobi.com</strong>
                        </a>{" "}
                        and{" "}
                        <a
                            href="https://www.kucoin.com/news/en-optimism-is-now-supported-on-kucoin-20220416"
                            target="_blank"
                        >
                            <strong>Kucoin.com</strong>
                        </a>{" "}
                        are the first exchanges that support direct Ether deposit and withdrawals
                        on Optimism. More will be available in the near future.
                    </p>
                    <p>
                        For Binance, Coinbase, FTX or Kraken you need to transfer first your funds
                        to Ethereum (L1) and after that with a bridge (see below) to Optimism.
                    </p>
                    <p>
                        For smaller balances, you can use a DApp called{" "}
                        <a href="http://layerswap.io/" target="_blank">
                            <strong>LayerSwap</strong>
                        </a>{" "}
                        that does it for you (
                        <a href="https://www.layerswap.io/userguide" target="_blank">
                            <strong>User guide LayerSwap</strong>
                        </a>
                        ). Alternatively, the{" "}
                        <a href="https://www.mtpelerin.com/buy-ethereum" target="_blank">
                            <strong>bridge wallet of Mt Pelerin</strong>
                        </a>{" "}
                        allows you to buy smaller amounts via credit card and bank transfer and
                        send them directly to your address on Optimism.
                    </p>
                    <h4>Bridging existing funds from Ethereum to Optimism </h4>
                    <p>
                        To bridge your existing funds from Ethereum (Layer-1) to Optimism
                        (Layer-2), &nbsp;several bridges exist to move between different
                        blockchains.
                    </p>
                    <p>
                        Optimism has an official bridge called{" "}
                        <a href="https://app.optimism.io/bridge">Optimism Bridge</a>
                    </p>
                    <p>
                        Follow these steps to bridge your XCHF (or Ether) from&nbsp;Ethereum to
                        Optimism:
                    </p>
                    <p>‍</p>
                    <h5>
                        1. Connect your wallet (for the Aktionariat wallet choose WalletConnect)
                    </h5>
                    <figure className="w-richtext-align-center w-richtext-figure-type-image">
                        <div>
                            <img
                                src="https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/6267ab2b0a1d1c83ce13b235_Bridge%201.png"
                                loading="lazy"
                                alt
                            />
                        </div>
                        <figcaption>Click on "Connect Wallet"</figcaption>
                    </figure>
                    <figure className="w-richtext-align-center w-richtext-figure-type-image">
                        <div>
                            <img
                                src="https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/6267ab757534a44cc39ae64d_Bridge%202.png"
                                loading="lazy"
                                alt
                            />
                        </div>
                    </figure>
                    <p>
                        Connect your Mobile Wallet with the optimism bridge. If you use the
                        Aktionariat Wallet select "Wallet Connect". A QR-Code appears. Scan it by
                        using your Aktionariat Wallet (Tab: Connect). Confirm connecting your
                        wallet on your Mobile Wallet (e.g. Aktionariat Wallet --&gt; see
                        screenshot)
                    </p>
                    <p>‍</p>
                    <figure className="w-richtext-align-center w-richtext-figure-type-image">
                        <div>
                            <img
                                src="https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/626698eb4ccf7c6381c228b4_IMG_0406.PNG"
                                loading="lazy"
                                alt
                            />
                        </div>
                    </figure>
                    <h5>2. Optinal: Approve ERC-20 Tokens (e.g. XCHF)</h5>
                    <figure className="w-richtext-align-center w-richtext-figure-type-image">
                        <div>
                            <img
                                src="https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/6267c33637148076e6eec3bd_image%20(18).png"
                                loading="lazy"
                                alt
                            />
                        </div>
                    </figure>
                    <p>‍</p>
                    <h5>3. Finally, deposit your XCHF (or ETH) on the Optimism network</h5>
                    <figure className="w-richtext-align-center w-richtext-figure-type-image">
                        <div>
                            <img
                                src="https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/6267aee26652ed0980465e88_Bridge%203.png"
                                loading="lazy"
                                alt
                            />
                        </div>
                    </figure>
                    <p>‍</p>
                    <p>
                        After clicking on "Deposit" you have to confirm the transaction in your
                        Mobile Wallet (if you are using Aktionariat's Mobile Wallet see
                        screenshot).
                    </p>
                    <p>‍</p>
                    <figure className="w-richtext-align-center w-richtext-figure-type-image">
                        <div>
                            <img
                                src="https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/626699574943510c4faa103a_IMG_0405.PNG"
                                loading="lazy"
                                alt
                            />
                        </div>
                    </figure>
                    <p>‍</p>
                    <p>
                        It may take up to 20 minutes until the funds will be visible in your
                        wallet.
                    </p>
                    <p>‍</p>
                    <p>
                        Alternatively, for Ether, you can use a fast bridge such as{" "}
                        <a href="http://hop.exchange">Hop.exchange</a> following a similar
                        procedure.
                    </p>
                    <p>
                        --&gt;&nbsp;A guide for Hop can be found{" "}
                        <a href="https://consensys.net/blog/metamask/how-to-bridge-your-assets-using-hop-protocol/">
                            here
                        </a>
                        .
                    </p>
                    <p>‍</p>
                    <h4>Sending Ether from a central exchange to Optimism</h4>
                    <p>
                        If you have Ether already or want to buy Ether on a central exchange and
                        want to move it Optimism the steps are different for different exchanges.
                    </p>
                    <p>
                        Right now <a href="http://huobi.com">Huobi.com</a> is the first exchange
                        that supports direct Ether deposit and withdrawals on Optimism.&nbsp;
                    </p>
                    <p>
                        For Binance, Coinbase, FTX or Kraken you need to transfer first your funds
                        to Ethereum (L1) and after that with a bridge (see above) to Optimism.
                    </p>
                    <p>
                        For smaller balances, you can use a DApp called{" "}
                        <a href="http://layerswap.io">LayerSwap</a> that does it for you (
                        <a href="https://www.layerswap.io/userguide">User guide LayerSwap</a>).
                        Alternatively, the{" "}
                        <a href="https://www.mtpelerin.com/buy-ethereum">
                            bridge wallet of Mt Pelerin
                        </a>{" "}
                        allows you to buy smaller amounts via credit card and bank transfer and
                        send them directly to your address on Optimism.
                    </p>
                    <p>‍</p>
                </div>
            </div>
        </Documentation>
    );
}

export default DocumentationFundingOptimism;