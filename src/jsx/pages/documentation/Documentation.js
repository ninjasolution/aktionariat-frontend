import React from 'react';
import DocAside from './DocAside';
import FurtherQuestions from '../../components/FurtherQuestions/FurtherQuestions';
function Documentation(props) {
    return (
        <div id='Documentation'>
            <SectionHero></SectionHero>
            <section id="DocumentationBox" className="section section-grey">
                <div className="page-padding">
                    <div className="container-large">
                        <div className="padding-vertical padding-xxlarge">
                            <div className="content-grid">
                                <DocAside></DocAside>
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FurtherQuestions></FurtherQuestions>
        </div>
    );
}

export default Documentation;

export const SectionHero = () => {
    return (
        <section className="section section-hero documentation pt-4">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-top padding-xxhuge custom-hero-documentation">
                        <div className="max-width-large">
                            <div className="padding-bottom">
                                <div className="heading-xlarge text-weight-bold">Documentation</div>
                                <div className="margin-top margin-medium">
                                    <p>
                                        Aktionariat offers a set of tools for Swiss companies to create a
                                        market for their digital shares on their own website.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
