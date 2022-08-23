import React from 'react';
import Documentation from './Documentation';
function DocumentationSettingUpWallet(props) {
    return (
        <Documentation>

            <div
                id="w-node-df90eb21-984e-43b9-92be-9bb72e4f12f5-0dd10406"
                className="content-block space-between"
            >
                <div className="margin-bottom margin-medium">
                    <h1 className="heading-large">Setting up your wallet</h1>
                </div>
                <div className="margin-bottom margin-medium">
                    <img src loading="lazy" alt className="w-dyn-bind-empty" />
                </div>
                <div className="text-rich-text w-richtext">
                    <p>
                        When dealing with cryptocurrencies and tokenized shares, you will need to
                        create and manage your own wallet.{" "}
                    </p>
                    <p>
                        Although our tools support a number of different wallets and standards,
                        this guide focuses specifically on setting up and using the Aktionariat
                        App. Our app is the recommended wallet when interacting with our toolset.
                        It has been designed to give you the easiest, clearest user experience
                        when buying tokenized shares.
                    </p>
                    <p>
                        If you instead choose to use the MetaMask browser extension, or any other
                        WalletConnect compatible wallet, please refer to their documentation for
                        setup instructions.
                    </p>
                    <h4>Downloading the Aktionariat App</h4>
                    <p>
                        Please first download our app, if you haven't already done so. Our app is
                        available on both iOS and Android platforms.
                    </p>
                    <figure
                        style={{ "max-width": "120px" }}
                        className="w-richtext-align-floatleft w-richtext-figure-type-image"
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
                        style={{ "max-width": "130px" }}
                        className="w-richtext-align-floatleft w-richtext-figure-type-image"
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
                    <p>‍</p>
                    <h4>Launching the App for the First Time</h4>
                    <p>
                        When you launch the Aktionariat app for the first time, a wallet will be
                        automatically created for you. This account will be linked to your device.
                    </p>
                    <p>
                        To protect your wallet, you must go through a security check every time
                        you launch the app.
                    </p>
                    <ul >
                        <li>
                            On iOS, the security mechanism uses Apple's standard tools, such as
                            FaceID, TouchID&nbsp;or device PIN.
                        </li>
                        <li>
                            On Android, you will be required to set a custom PIN&nbsp;code, but you
                            can still opt-in to biometric identification, such as fingerprint
                            recognition, for easier access.
                        </li>
                    </ul>
                    <p>
                        Once you have passed the security check and are inside the app, you can
                        check and confirm the creation of your account in the "Connect" tab.
                    </p>
                    <figure
                        style={{ "max-width": "300px" }}
                        className="w-richtext-align-fullwidth w-richtext-figure-type-image"
                    >
                        <div>
                            <img
                                src={require('../../../images/pages/documentation/android_framed.png')}
                                loading="lazy"
                                alt="img"
                            />
                        </div>
                    </figure>
                    <p>
                        The default name of your address will be your device name. Your full
                        address will be a long hexadecimal string, looking something like:
                    </p>
                    <p>0xF9525F6512639ade2ECA93d819eA938ea1b2E3bA</p>
                    <p>
                        This is your "Ethereum Address", which is able to store Ether,
                        CryptoFrancs and any tokenized shares you have purchased.
                    </p>
                    <h4>Backing Up Your Wallet</h4>
                    <p>
                        It is <strong>extremely important</strong> that you make sure your account
                        is backed up.{" "}
                    </p>
                    <p>
                        Cryptocurrency wallets let the users store and manage their funds without
                        any need for intermediaries, but this also brings additional
                        responsibilities. There is no "password recovery mechanism" for
                        cryptographic keys. Therefore loss of keys and backups may result in
                        permanently losing access to the funds stored in your account. Nobody,
                        including Aktionariat AG, has any way to access and reset your keys. They
                        are solely under your control and responsibility.
                    </p>
                    <p>
                        Your wallet backup consists of 12 randomly generated words. When put
                        together in the correct order, these words let any cryptocurrency wallet
                        reconstruct your "private key" and enable access to assets stored in the
                        respective account.{" "}
                    </p>
                    <p>
                        Our app shows a big red warning until you successfully backup your
                        address. Please don't ignore it and make sure you have proper backups
                        safely stored.{" "}
                    </p>
                    <p>Never share your seed phrase or private keys with anyone.</p>
                    <p>
                        To learn more about wallets, seed phrases, private keys and security,{" "}
                        <a href="https://ethereum.org/en/wallets/" target="_blank" rel="noreferrer">
                            click here
                        </a>
                        .
                    </p>
                    <h5>Step 1 : Storing your seed phrase safely</h5>
                    <p>
                        Tap on "Backup Address". Make sure nobody is watching your screen, and tap
                        on "Reveal Seed Phrase". You will be shown 12 words that you need to be
                        able to recall in the correct order. Write them down on a piece of paper
                        and store the paper somewhere safe.
                    </p>
                    <h5>Step 2 : Recalling your seed phrase</h5>
                    <p>
                        This step is needed to make sure you have stored your seed phrase, and not
                        just skipped the whole process. Tap on the words in the correct order to
                        reconstruct the seed phrase. The process will only be completed
                        successfully, if you were able to recall the 12 words in the correct
                        order.
                    </p>
                    <figure className="w-richtext-align-center w-richtext-figure-type-image">
                        <div>
                            <img
                                src={require('../../../images/pages/documentation/backupwallet.png')}
                                loading="lazy"
                                alt="img"
                            />
                        </div>
                    </figure>
                    <h4>Complete Personal Information</h4>
                    <p>
                        To successfully identify you as a shareholder, you will need to confirm
                        your e-mail and complete your profile information. This allows Aktionariat
                        AG to automatically register you as a shareholder in the shareholder
                        registry of your portfolio companies.
                    </p>
                    <p>
                        Having a completed, confirmed profile is also a prerequisite for
                        purchasing tokenized shares, so please make sure you add your details at
                        your earliest convenience.
                    </p>
                    <h5>Confirming Your E-mail Address</h5>
                    <p>
                        Go to the "Profile" tab of the app and tap on
                        "REGISTER&nbsp;E-MAIL&nbsp;ADDRESS". You will receive a confirmation
                        e-mail shortly after you submit the form. Tap on the link in that e-mail
                        address, and your account will be successfully connected to your confirmed
                        e-mail.
                    </p>
                    <p>
                        You can register multiple e-mail addresses that link to the same account,
                        but only one of those addresses will be your "Primary" address. Primary
                        addresses can't be removed from your account.
                    </p>
                    <h5>Updating Personal Information</h5>
                    <p>
                        Adding your personal information and keeping it up-to-date will make sure
                        that you are always correctly registered in shareholder registries. You
                        are not added to the company's shareholder registry until you have
                        completed this step successfully.
                    </p>
                    <p>
                        Tap on "UPDATE" in the Personal Information and enter your information.{" "}
                    </p>
                    <figure className="w-richtext-align-center w-richtext-figure-type-image">
                        <div>
                            <img
                                src={require('../../../images/pages/documentation/profile.png')}
                                loading="lazy"
                                alt="img"
                            />
                        </div>
                    </figure>
                    <h4>Congratulations!</h4>
                    <p>You have successfully completed your wallet setup. Now you can :</p>
                    <ul >
                        <li>
                            Import your other addresses into it. You can use your existing
                            addresses, such as from MetaMask, by importing them with their seed
                            phrase or private key. If you only want to track your assets on an
                            address, you can also simply add it as "Watch Address" without entering
                            any private keys.
                        </li>
                        <li>Connect to the Aktionariat Brokerbot</li>
                        <li>
                            Connect to any WalletConnect compatible DeFi application (Uniswap, AAVE,
                            ...)
                        </li>
                        <li>
                            Use your app to sign in to our Corporate Dashboard (if you are an
                            administrator of a company).
                        </li>
                    </ul>
                </div>
            </div>

        </Documentation>
    );
}

export default DocumentationSettingUpWallet;