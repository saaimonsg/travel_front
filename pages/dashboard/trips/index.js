import UserNavbar from "../../../components/nav/UserNavbar";
import Footer from "../../../components/core/footer";
import {useTranslation} from "react-i18next";
import SideNavbar from "../../../components/nav/SideNavbar";

export default function Trips({children}){

    const [t, i18n] = useTranslation("common");

    return <>
        <UserNavbar/>
        <div className="container row">
            <div className="col-sm-2">
                <SideNavbar>
                    <a className="nav-link active" aria-current="page" href="/dashboard/trips/createtrip">{t("createTrip")}</a>
                </SideNavbar>
            </div>
        </div>
    </>
}