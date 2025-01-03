import TopNavbar from "../components/nav/TopNavbar";
import {useTranslation} from "react-i18next";
// import {Button} from "react-bootstrap";
import LoginView from "./login";
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function Index() {
    const [t, i18n] = useTranslation("common");
    const [showLogin, setShowLogin] = useState(false);
    const router = useRouter()

    const handleLogin = () => {
        setShowLogin(!showLogin);
    };


    return (<>
        <TopNavbar>
            <li><button className="nav-link" aria-current="page" onClick={handleLogin}>{t("login.tag")}</button></li>
            <li><button className="nav-link" aria-current="page" href="/signin">{t("signin")}</button></li>
        </TopNavbar>
        <div className="container-fluid">
            <div className="container">
                {showLogin && <LoginView/>}
            </div>
        </div>
    </>)
}



