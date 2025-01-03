/**
 * App
 */
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import i18next from "i18next";
import {I18nextProvider} from "react-i18next";
import common_en from "../i18lang/common_en.json";
import common_es from "../i18lang/common_es.json";
import Footer from "../components/core/footer";
import Script from "next/script";
import {useContext} from "react";
import {InitDataContext} from "../components/core/context";
import Head from "next/head";


function MyApp({Component, pageProps}) {
    const initDataContext = useContext(InitDataContext)

    i18next
        .init({
            interpolation: {escapeValue: false},  // React already does escaping
            lng: 'en',                              // language to use
            resources: {
                en: {
                    common: common_en               // 'common' is our custom namespace
                }, es: {
                    common: common_es
                },
            },
        });

    return (<>

        <I18nextProvider i18n={i18next}>
            <Head>
                <link href="/styles/bootstrap-5.3.3-dist/css/bootstrap.css" rel="stylesheet"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta charSet="utf-8"/>
                <title>{initDataContext.name}</title>
                <meta name="description" content={initDataContext.description}/>
                <link rel="icon" href="/img/favicon.ico"/>
                {/*<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"*/}
                {/*      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"*/}
                {/*      crossOrigin />*/}
                <link href="/styles/fontawesome-free-6.5.1/css/all.css" rel="stylesheet"/>


                <Script src="https://kit.fontawesome.com/da97e690a6.js" crossOrigin></Script>
            </Head>
            <Component {...pageProps}/>
            <Footer></Footer>
        </I18nextProvider>

    </>);
}

export default MyApp;
export const getStaticProps = async ({locale}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale ?? "es", ["index",])),
        },
    };
};