import React from 'react';
import Documentation from './Documentation';
function DocumentationRecovery(props) {
    return (
        <Documentation>
            <div
                id="w-node-df90eb21-984e-43b9-92be-9bb72e4f12f5-0dd10406"
                className="content-block space-between"
            >
                <div className="margin-bottom margin-medium">
                    <h1 className="heading-large">Recovery mechanism</h1>
                </div>
                <div className="margin-bottom margin-medium">
                    <img
                        src="https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/61b155b06f83ec34e26366c6_recovery.jpg"
                        loading="lazy"
                        alt
                        sizes="100vw"
                        srcSet="https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/61b155b06f83ec34e26366c6_recovery-p-500.jpeg 500w, https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/61b155b06f83ec34e26366c6_recovery.jpg 640w"
                    />
                </div>
                <div className="text-rich-text w-richtext">
                    <p>
                        Documentation for the token recovery mechanism implemented in{" "}
                        <a href="https://github.com/aktionariat/contracts/blob/master/src/recovery/ERC20Recoverable.sol">
                            ERC20Recoverable.sol
                        </a>
                        .
                    </p>
                    <h2>Motivation</h2>
                    <p>
                        It is desirable that share tokens (which legally represent the company’s
                        equity) do not get “lost” if a shareholder loses the private key to their
                        account or accidentally sends them to an invalid address. While some
                        issuers address this by adding a back-door to their smart contract, giving
                        them full control over all tokens, we prefer following a decentralized
                        approach. This is also what the Swiss Blockchain Federation recommends in
                        their{" "}
                        <a href="https://blockchainfederation.ch/wp-content/uploads/2021/10/SBF-2021-01-Ledger_Based_Securities_2021-10-12.pdf">
                            Security Token Circular
                        </a>
                        . Our decentralized approach allows holders to reclaim their shares
                        without having to rely on a centralized authority.
                    </p>
                    <h3>Process</h3>
                    <p>
                        The recovery process works as follows: Let us assume that Alice has lost
                        the key to her address A. She picks a new address B and makes all calls
                        from the new address.
                    </p>
                    <ol role="list">
                        <li>
                            Alice makes sure she has enough collateral ready to make the claim and
                            grants an according allowance to the{" "}
                            <a href="https://github.com/aktionariat/contracts/blob/master/src/recovery/RecoveryHub.sol">
                                RecoveryHub.sol
                            </a>
                            .
                        </li>
                        <li>
                            Alice calls the function declareLost(token, collateralType, lostAddress)
                            to declare that the tokens on the specified address are hers and that
                            she wants to retrieve them through the claim mechanism. The second
                            parameter is the collateral to be used, which is transferred to the
                            recovery hub.
                        </li>
                        <li>
                            After waiting for 6 months (this value can be configured by the issuer,
                            but must be at least 3 months), Alice can call recover (providing her
                            lost address as an argument) to gain back her shares and the collateral.
                        </li>
                    </ol>
                    <p>
                        If the key is found again, or the claim was made maliciously, the rightful
                        owner can always call clearClaim from the claimed address to delete the
                        claim and seize the collateral. This makes attacks economically
                        infeasible. When an attacker makes a claim for your address to obtain all
                        your 7 shares in Example Inc., the attacker must also provide a collateral
                        worth 7 shares. Now you have six months time to call clearClaim, thereby
                        not only deleting the fraudulent claim, but also taking away the
                        attacker’s collateral. If your wallet does not support calling custom
                        methods such as clearClaim, you can also just transfer one share to a new
                        address, which triggers an implicit call to clearClaim and has the same
                        effect.
                    </p>
                    <p>
                        Claims can also be deleted by a special role (in this case the collateral
                        is returned). There is a function getClaimDeleter() that defines who can
                        do this (typically the issuer). The purpose of this is to protect
                        shareholders in cases where they cannot act on their own for some reason.
                        Also, this guards against malicious use of the claim mechanisms in cases
                        where the attacker got to know that the claimed address got lost and acts
                        before the rightful owner does.
                    </p>
                    <h3>Collateral</h3>
                    <p>
                        As a collateral, the share tokens themselves can be used. E.g. if you lost
                        your key, get a friend to stake their shares for you. A custom collateral
                        (ERC‑20 token) can be set by the issuer. Using a stablecoin like XCHF has
                        the advantage that during the waiting period the amount staked is not
                        subject to the volatility of Ether. Ether is not supported as collateral,
                        but the issuer could decide to accept wrapped ether.
                    </p>
                    <h3>Example</h3>
                    <p>
                        In transaction{" "}
                        <a href="https://etherscan.io/tx/0x2802faedf41532a1aba89d4f11577c2b2f886b6243616f3bc60da9eabeeecb61">
                            0x2802...61
                        </a>
                        , someone we are familiar with accidentally sent 1′145 shares of
                        ServiceHunter AG (SHS) to address 0x0479. That address is the hexadecimal
                        representation of the number 1145 and an address that no one controls. To
                        recover the shares, the owner invoked declareLost in transaction{" "}
                        <a href="https://etherscan.io/tx/0x2459fb285211cf5cc2fdab716603e80725bc42ea9b144ecc7f8a35f7a4023731/advanced">
                            0x2459...31
                        </a>{" "}
                        with an additional 1145 shares as collateral. (Note that the SHS contract
                        is based on the old version of our claimable mechanism which required an
                        additional nonce parameter and a preclaim not described here.) After
                        waiting for half a year, transaction{" "}
                        <a href="https://etherscan.io/tx/0x7429eb777c208470c04dba3fec60d3fcac6c8cbb4f023e51d44f449444ff7538/advanced">
                            0x7429...38
                        </a>{" "}
                        was issued to resolve the claim, returning both the lost shares as well as
                        the collateral to their owner. Note that in this example, the recovery
                        function was implemented by token contract itself. In the meantime, this
                        functionality has been moved to the recovery hub.
                    </p>
                    <p>‍</p>
                </div>
            </div>

        </Documentation>
    );
}

export default DocumentationRecovery;