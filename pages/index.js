import TopNavbar from "../components/nav/TopNavbar";
import Footer from "../components/core/footer";
import {useTranslation} from "react-i18next";
import CustomHead from "../components/core/head/CustomHead";

export default function Index() {
    const [t, i18n] = useTranslation("common");

    return (<>
        <TopNavbar>
            <li><a className="nav-link  " aria-current="page" href="/login">{t("login.tag")}</a></li>
            <li><a className="nav-link " aria-current="page" href="/signin">{t("signin")}</a></li>
        </TopNavbar>
        <div className="container-fluid">
                {/*<img className="container-fluid hero-img" src={"/img/landscape_1.jpg"}/>*/}
        </div>
    </>)
}



