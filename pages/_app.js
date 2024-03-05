/**
 * Style
 */
import "../public/styles/style.css";

//https://ionic.io/ionicons/usage
/**
 * App
 */
import data from "./data.json";
import {InitDataContext} from "../components/core/context";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {SSRProvider} from "react-bootstrap";
import i18next from "i18next";
import {I18nextProvider} from "react-i18next";
import common_en from "../i18lang/common_en.json";
import common_es from "../i18lang/common_es.json";


function MyApp({Component, pageProps}) {

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
        <SSRProvider>
            <InitDataContext.Provider value={data}>
                <I18nextProvider i18n={i18next}>
                    <Component {...pageProps}/>
                </I18nextProvider>
            </InitDataContext.Provider>
        </SSRProvider>
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