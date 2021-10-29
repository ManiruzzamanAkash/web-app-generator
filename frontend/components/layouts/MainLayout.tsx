import React, { FunctionComponent } from 'react'
import Footer from './Footer';
import Header from './Header';

type Props = {
    //
}

const MainLayout: FunctionComponent<Props> = () => {
    return (
        <div>
            <title>Web App Generator</title>
            <meta name="description" content="Web App Generator" />
            <link rel="icon" href="/favicon.ico" />
            <Header />
            <p>Body Part</p>
            <Footer />
        </div>
    )
}

export default MainLayout;