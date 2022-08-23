import React from 'react';
import Documentation from './Documentation';
function DocumentationContract(props) {
    return (
        <Documentation>
            <div
                id="w-node-df90eb21-984e-43b9-92be-9bb72e4f12f5-0dd10406"
                className="content-block space-between"
            >
                <div className="margin-bottom margin-medium">
                    <h1 className="heading-large">Multisignature Contract</h1>
                </div>
                <div className="margin-bottom margin-medium">
                    <img
                        src="https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/61b1555d9dbef7330eb70f88_multisig.jpg"
                        loading="lazy"
                        alt
                    />
                </div>
                <div className="text-rich-text w-richtext">
                    <p>
                        Aktionariat uses a custom{" "}
                        <a href="https://github.com/aktionariat/contracts/blob/master/src/multisig/MultiSigWallet.sol">
                            Multisignature Contract
                        </a>{" "}
                        for its corporate clients. The purpose of the multisignature contract is
                        to reflect the real signatory powers of the board members and to guard
                        against losses or theft of the private key of an individual board member.
                        Our multisignature contract works both on the Ethereum mainnet and
                        Optimism Layer-2 network
                    </p>
                    <p>
                        Unlike the other multisignature contracts we are aware of, our
                        multisignature contract is designed to be used with the standard
                        transaction signing mechanism. For example, if 100 XCHF shall be moved
                        from the corporate multisig contract of Aktionariat, the two board members
                        each sign an according ERC‑20 transfer transaction. But instead of sending
                        the signed transactions to the network, they are stored in our database.
                        Once there are enough signatures to execute the transaction, our server
                        reads the signatures from the database and sends all of them along with
                        the signed transaction data to the multisig contract. The multisig
                        contract verifies the signatures and executes the actual transaction like
                        other multisignature schemes.
                    </p>
                    <p>
                        Our approach comes with a number of advantages in comparison to other
                        multisignature contracts:
                    </p>
                    <ol role="list">
                        <li>
                            The signers do not need to sign a cryptic message, but can actually sign
                            data that conforms to the standard transaction format supported by many
                            wallets. This ensures a high level of compatibility as well as
                            user-friendliness. All that’s needed is a wallet that supports signing
                            offline transactions. (As a notable exception, the MetaMask browser
                            plugin{" "}
                            <a href="https://github.com/MetaMask/metamask-extension/issues/7644">
                                unfortunately does not
                            </a>
                            )
                        </li>
                        <li>
                            There is only one transaction that needs to be sent to the Ethereum
                            network. Other multisignature schemes require every signer to execute
                            their own transaction on chain, paying a transaction fee each for each
                            provided signature. In contrast, with our architecture, the transaction
                            fee only needs to be paid once and can be paid for by whoever collected
                            the signed transaction. In our case, this is the Aktionariat server.
                            This allows our client to execute corporate actions without having to
                            worry about transaction fees or running out of gas.
                        </li>
                        <li>
                            It can reflect the standard corporate signatory powers, which allows to
                            have signers with different signatory powers. For example, one signer
                            might have single-signatory power, being able to sign transactions
                            alone, while others are required to sign along with one or more
                            co-signers.
                        </li>
                    </ol>
                    <p>
                        The address of our own multisignature contract is{" "}
                        <a href="https://etherscan.io/address/0xad358024fecb1b5d58125f5bef06fabfe657e4c7#code">
                            0xad358024fecb1b5d58125f5bef06fabfe657e4c7
                        </a>
                        . If you want to use this multisignature contract for your own purpose
                        outside the context of Aktionariat, feel free to get in touch. We have
                        built a few server-side tools to support the transaction workflow that
                        might be useful to you in such a case.{" "}
                    </p>
                    <p>‍</p>
                </div>
            </div>

        </Documentation>
    );
}

export default DocumentationContract;