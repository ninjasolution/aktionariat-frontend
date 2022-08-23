import React from 'react';
import { Link } from 'react-router-dom';
function NotFound(props) {
    return (
        <div id='NotFound'>
            <SectionHero></SectionHero>
            <section>
                <div className="page-padding">
                    <div className="container-large">
                        <div className="padding-bottom padding-xxlarge">
                            <div className="max-width-large">
                                <div className="margin-bottom margin-medium">
                                    <div className="text-rich-text w-richtext">
                                        <p>The page you are looking for doesn't exist or has been moved.</p>
                                    </div>
                                </div>
                                <div className="horizontal-center wrap-mobile">
                                    <Link to="/" className="button w-button">
                                        Back to Homepage
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default NotFound;

const SectionHero = () => {
    return (
        <section className="section section-hero investors">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-top padding-xxhuge custom-hero-2">
                        <div className="max-width-large">
                            <div className="padding-bottom">
                                <h1>
                                    Page Not Found
                                    <span className="text-gradient-3" />
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}