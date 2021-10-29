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

            {/* This would remove, just added to test tailwind css */}
            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                {/* <div className="flex-shrink-0">
                    <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
                </div> */}
                <div>
                    <div className="text-xl font-medium text-black">Demo Card using Tailwind CSS</div>
                    <p className="text-gray-500">
                        A simple next js card example...
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default MainLayout;