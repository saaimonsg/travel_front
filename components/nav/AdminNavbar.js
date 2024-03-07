import TopNavbar from "./TopNavbar";
import {useTranslation} from "react-i18next";

export default function AdminNavbar() {
    const [t, i18n] = useTranslation("common");

    return (<>
            <TopNavbar>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                       aria-expanded="false">
                        {t("user.userManagement")}
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/dashboard/admin/user/list">{t("list")}</a></li>
                        <li><a className="dropdown-item" href="/dashboard/admin/user/create">{t("create")}</a></li>


                        {/*<li><a className="dropdown-item" href="#">{t("trips")}</a></li>*/}
                        {/*<li>*/}
                        {/*    <hr className="dropdown-divider" />*/}
                        {/*</li>*/}
                        {/*<li><a className="dropdown-item" href="#">Something else here</a></li>*/}
                    </ul>
                </li>
            </TopNavbar>
        </>
    )
}