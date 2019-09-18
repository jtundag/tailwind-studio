import React from 'react'
import App from 'next/app'
import { Provider } from 'react-redux'
import store from '@store'
import Default from '@layouts/default'
import '@pages/scss/vendors/tailwind.css'
import '@pages/scss/main.scss'
import Head from 'next/head'

class MyApp extends App {
    // Only uncomment this method if you have blocking data requirements for
    // every single page in your application. This disables the ability to
    // perform automatic static optimization, causing every page in your app to
    // be server-side rendered.
    //
    // static async getInitialProps(appContext) {
    //   // calls page's `getInitialProps` and fills `appProps.pageProps`
    //   const appProps = await App.getInitialProps(appContext);
    //
    //   return { ...appProps }
    // }

    render() {
        const { Component, pageProps } = this.props
        return (
            <Provider store={store}>
                <Head>
                    <link href="/static/fontawesome/css/all.min.css" rel="stylesheet"/>
                </Head>
                <div className="text-sm h-full w-full">
                    <Default>
                        <Component {...pageProps} />
                    </Default>
                </div>
            </Provider>
        )
    }
}

export default MyApp