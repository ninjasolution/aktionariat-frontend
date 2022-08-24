import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
function Base(props) {
    return (
        <div id="Base">
            <Header></Header>
            {props.children}
            <Footer></Footer>
        </div>
    );
}

export default Base;