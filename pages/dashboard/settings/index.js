import TopNavbar from "../../../components/nav/TopNavbar";
import Footer from "../../../components/core/footer";
import {useContext} from "react";

export default function AppSettings() {

    return (<>
        <TopNavbar></TopNavbar>
        <hr/>
        <div className="row container">
            <div className="col-sm-1">
                <ul>
                    <li><a type="button" href="/users" className="btn btn-secondary">User</a>
                    </li>
                </ul>
            </div>
        </div>
        <Footer></Footer>
    </>);
}
