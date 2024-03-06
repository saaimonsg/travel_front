import Footer from "../../components/core/footer";
import {useTranslation} from "react-i18next";
import {useContext, useEffect} from "react";
import UserNavbar from "../../components/nav/UserNavbar";
import {HttpResourceFactoryContext} from "../../components/core/context";

export default function Dashboard() {
    const [t, i18n] = useTranslation("common");
    const resourceFactory = useContext(HttpResourceFactoryContext);
    useEffect(() => {

        let auth = localStorage.getItem("Authorization");
        const response = resourceFactory.get('/location',auth);

        response.then((res) => {
            res.json().then((data) => {
                console.log(data);
            });
        });
    }, []);
    return (<>
        <UserNavbar/>
        <div className="row">
            <div className="col-sm-2">asd</div>
            <div className="col-sm-2">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">{t("from")}</th>
                        <th scope="col">{t("to")}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>asdasdsadas</td>
                        <td>asdasdasds</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Footer></Footer>
    </>);
}
