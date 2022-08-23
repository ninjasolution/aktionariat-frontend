import React from 'react';
import Documentation from './Documentation';
function DocumentationSettingWidgets(props) {
    return (
        <Documentation>
            <div
                id="w-node-df90eb21-984e-43b9-92be-9bb72e4f12f5-0dd10406"
                className="content-block space-between">
                <div className="margin-bottom margin-medium">
                    <h1 className="heading-large">Setting up our widgets</h1>
                </div>
                <div className="margin-bottom margin-medium">
                    <img src loading="lazy" alt className="w-dyn-bind-empty" />
                </div>
                <div className="text-rich-text w-richtext">
                    <p>
                        Our{" "}
                        <a href="https://hub.aktionariat.com/widgets/" target="_blank">
                            Widget Customizer
                        </a>{" "}
                        allows companies to customize the color theme of the Brokerbot and
                        Aktionariat Widgets.
                    </p>
                    <figure className="w-richtext-align-center w-richtext-figure-type-image">
                        <a
                            href="https://hub.aktionariat.com/widgets/"
                            target="_blank"
                            className="w-inline-block"
                        >
                            <div>
                                <img
                                    src="https://uploads-ssl.webflow.com/6191fe28d0a1c82aca7ea557/62605bd129d3c7060c36feab_WidgetCustomizer.png"
                                    loading="lazy"
                                    alt="Widget Customizer"
                                />
                            </div>
                        </a>
                    </figure>
                    <h4>
                        <strong>Language</strong>
                    </h4>
                    <p>
                        This section allows customizing the display language of the Brokerbot.
                        Currently English and German languages are supported.
                    </p>
                    <h4>
                        <strong>Your Layout</strong>
                    </h4>
                    <p>
                        The colors selected here should match the default colors of the page where
                        our widgets will be integrated. They are not an integral part of our
                        theming system, however they still affect the design of our widgets, since
                        the Brokerbot has a transparent background by default and some text colors
                        are inherited.
                    </p>
                    <h4>Widget Theme</h4>
                    <p>3 colors are required to define the theme of the Brokerbot.</p>
                    <ol start={1} role="list">
                        <li>
                            Primary color, which is the base color for all text and components.{" "}
                        </li>
                        <li>
                            Secondary color is used mainly for button texts, where using the primary
                            color may create contrast problems.
                        </li>
                        <li>
                            Highlight color is used for highlighted text, button backgrounds and
                            while coloring some other components that should be colorful, like chart
                            lines.
                        </li>
                    </ol>
                    <p>
                        You are invited to play around with all options and see how they would
                        affect your specific integration. That's what the{" "}
                        <a href="https://hub.aktionariat.com/widgets/" target="_blank">
                            Widget Customizer{" "}
                        </a>
                        is for!
                    </p>
                    <h4>Widget Preview Header</h4>
                    <p>
                        Here you can select a specific widget to see how it is affected by the
                        selected theme colors.
                    </p>
                    <h4>Embed</h4>
                    <p>
                        After you are happy with the theme, you can click "View Code" to see the
                        exact code required to paste into your page.{" "}
                    </p>
                    <p>
                        "Inline Variables" are components that are just displaying some data
                        without any design. For example the current share price or market cap can
                        be used as embedded HTML&nbsp;tags instead of being hardcoded. The
                        variables are automatically updated by our system, so your page will
                        always show the current, updated data.
                    </p>
                    <h4>Save Your Work</h4>
                    <p>
                        At the very bottom, you can find a link that you can copy and save, if you
                        want to save your current theme or experiment with different options
                        without losing a previous combination. Opening the{" "}
                        <a href="https://hub.aktionariat.com/widgets/" target="_blank">
                            Widget Customizer
                        </a>{" "}
                        using this link will automatically restore all previous configuration!
                    </p>
                </div>
            </div>
        </Documentation>
    );
}

export default DocumentationSettingWidgets;