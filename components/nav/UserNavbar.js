import TopNavbar from "./TopNavbar";
import {useTranslation} from "react-i18next";

export default function UserNavbar({children}){
    const [t, i18n] = useTranslation("common");

    return <TopNavbar>
        {children}
        <li><a type="button" className="nav-link" href="/dashboard/trips" >{t("myTrips")}</a></li>
        <li><a type="button" className="nav-link" href="/dashboard/messages" >{t("messages")}</a></li>
        <li><a type="button" className="nav-link" href="/dashboard/profile" >{t("profile")}</a></li>
        <li><a type="button" className="nav-link" href="/dashboard/settings">{t("settings")}</a></li>
        <li><a type="button" className="nav-link" href="/dashboard/logout">{t("logout")}</a></li>
    </TopNavbar>
}