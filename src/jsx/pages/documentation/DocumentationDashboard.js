import React from 'react';
import Documentation from './Documentation';
function DocumentationDashboard(props) {
    return (
        <Documentation>
            <div
                id="w-node-df90eb21-984e-43b9-92be-9bb72e4f12f5-0dd10406"
                className="content-block space-between"
            >
                <div className="margin-bottom margin-medium">
                    <h1 className="heading-large">Accessing the Corporate Dashboard</h1>
                </div>
                <div className="margin-bottom margin-medium">
                    <img src loading="lazy" alt className="w-dyn-bind-empty" />
                </div>
                <div className="text-rich-text w-richtext">
                    <p>
                        The <a href="http://dashboard.aktionariat.com">Corporate Dashboard</a>{" "}
                        allows board members of issuers to view the shareholder registry, manage
                        their share tokens and market, track their corporate treasury, and to
                        initiate corporate actions.
                    </p>
                    <h3>Gaining Access</h3>
                    <p>
                        How you should get your access rights to the Corporate Dashboard depends
                        on whether your company has been already created or not.
                    </p>
                    <h4>Accessing the Dashboard by Creating a New Company</h4>
                    <p>
                        On the main login page of the Corporate Dashboard, click on
                        "CREATE&nbsp;ACCOUNT". Fill out the form using your company's details,
                        share name, preferred ticker and website. Don't worry if you are not sure
                        of your share information yet, you can always change them later.
                    </p>
                    <p>
                        Please also enter your e-mail address. After submitting the registration
                        form, you will receive a confirmation e-mail. Please check your "spam" or
                        "promotion" folders if you are not able to see the e-mail in your inbox.
                    </p>
                    <figure
                        style={{ "max-width": "400px" }}
                        className="w-richtext-align-center w-richtext-figure-type-image"
                    >
                        <div>
                            <img
                                src="https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/61b14beb2dc3a5938fc562c0_CreateCompany.png"
                                loading="lazy"
                                alt
                            />
                        </div>
                    </figure>
                    <p>
                        After clicking on the link, your registration will be automatically
                        confirmed and you will land back to the dashboard main page.
                    </p>
                    <p>
                        The first user who has created a company will automatically be assigned as
                        an administrator of that company.
                    </p>
                    <h4>Accessing the Dashboard of an Existing Company</h4>
                    <p>
                        If you want to gain access to the dashboard of an existing company, you
                        must ask an existing administrator to send you an invitation. Existing
                        administrators of a company can invite other administrators using the
                        "Administrators" section in the "Issuer" tab of the dashboard.
                    </p>
                    <figure className="w-richtext-align-center w-richtext-figure-type-image">
                        <div>
                            <img
                                src="https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/61b14dcafbb4440168c71ef3_AddAdmin.png"
                                loading="lazy"
                                alt
                            />
                        </div>
                    </figure>
                    <p>
                        You will receive an invitation e-mail with a link to confirm your access.
                        Please check your "spam" or "promotion" folders if you are not able to see
                        the e-mail in your inbox.
                    </p>
                    <h3>Signing In</h3>
                    <p>
                        The Aktionariat Portfolio App is used to identify you and sign a message
                        which lets you sign in to the Corporate Dashboard.
                    </p>
                    <p>
                        Download the Aktionariat App. Under the "Profile" tab, use the same e-mail
                        address that you entered during the company registration. Now you will be
                        able to use the app to sign in to the Corporate Dashboard.
                    </p>
                    <figure
                        style={{ "max-width": "120px" }}
                        className="w-richtext-align-floatleft w-richtext-figure-type-image"
                    >
                        <div>
                            <img
                                src="https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/61af7cf071df5ed475d1f7da_appstore.png"
                                alt
                            />
                        </div>
                    </figure>
                    <figure
                        style={{ "max-width": "130px" }}
                        className="w-richtext-align-floatleft w-richtext-figure-type-image"
                    >
                        <div>
                            <img
                                src="https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/61af7ceee4f8c5c0c9f8b243_googleplay.png"
                                alt
                            />
                        </div>
                    </figure>
                    <p> </p>
                    <p>‍</p>
                    <p>‍</p>
                    <p>
                        On the Dashboard Landing Page, click on "Sign In with Aktionariat App". A
                        QR&nbsp;code will be displayed in your browser.{" "}
                    </p>
                    <p>
                        In the "Connect" section of the app, tap on "SCAN&nbsp;QR&nbsp;CODE" and
                        scan the displayed QR&nbsp;code using your phone's camera.
                    </p>
                    <figure className="w-richtext-align-center w-richtext-figure-type-image">
                        <div>
                            <img
                                src="https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/61b15261d5a6a7bd68d94016_Scanqr.png"
                                loading="lazy"
                                alt
                            />
                        </div>
                    </figure>
                    <p>
                        Approve the signing of the login message in the Aktionariat App, and you
                        will be redirected to your company's page in the Corporate Dashboard.
                    </p>
                    <p>
                        Please note that the Corporate Dashboard is currently not optimized for
                        mobile screen sizes. If you have problems accessing the dashboard on a
                        mobile device, please try on a desktop computer's browser.
                    </p>
                </div>
            </div>
        </Documentation>
    );
}

export default DocumentationDashboard;