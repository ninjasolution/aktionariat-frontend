import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import '../../../scss/layout/base/Base.css';
function Base(props) {
    const [baseReady, setBaseReady] = useState(true);
    console.log(window.location.pathname);
    useEffect(() => {
        if (window.location.pathname === '/bossinfo') {
            setBaseReady(false)
        } else {
            setBaseReady(true)

        }
    }, [])
    return (
        <div id="Base">
            <>
                {baseReady ? <>
                    <Header></Header>
                    <main>
                        {props.children}
                    </main>
                    <Footer></Footer>

                </> : <main>
                    {props.children}
                </main>}

            </>

        </div>
    );
}
export default Base;