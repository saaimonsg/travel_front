import {useContext, useEffect, useState} from 'react';
import {useRouter} from 'next/navigation'
import TopNavbar from "../../components/nav/TopNavbar";
import Footer from "../../components/core/footer";
import {useTranslation} from "react-i18next";
import axios from "axios";

export default function Login() {

    const [t, i18n] = useTranslation("common");
    const router = useRouter()
    const [username, setUsername] = useState("string")
    const [password, setPassword] = useState("string")
    useEffect(() => {

    }, []);

    const handleSubmitForm = async (event) => {
        event.preventDefault();

        await fetch(`http://localhost:8080/api/auth/login`, {
            method: 'POST', headers: {
                'Accept': 'application/json', 'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            }),
            mode:"cors"

        }).then(value => {

            fetch(`http://localhost:8080/app/country`, {
                method: 'POST', headers: {
                    'Accept': 'application/json', 'Content-Type': 'application/json'
                },
                mode:"cors"
            });
        });

    }

    return (<>
        <TopNavbar></TopNavbar>
        <form id='loginform' className="container" onSubmit={handleSubmitForm}>
            <div className="mb-3">
                <label htmlFor="usernameInput" className="form-label">{t("usernameInput")}</label>
                <input type="text" className="form-control" id="username" value={username} onChange={event => {
                    setUsername(event.target.value)
                }}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="passwordInput" className="form-label">{t("passwordInput")}</label>
                <input type="password" className="form-control" id="password" value={password} onChange={event => {
                    setPassword(event.target.value)
                }}
                />
            </div>
            <input className="btn btn-primary" type='submit' value={t("login.tag")}/>
        </form>
        <Footer></Footer>
    </>)
}



//OLD

// axios.post(`http://localhost:8080/login?username=${username}&password=${password}`).then(value => {
//     console.log(value)
// })

// const response = await fetch(`http://localhost:8080/login?username=${username}&password=${password}`, {
//     method: 'POST', headers: {
//         'Accept': 'application/json', 'Content-Type': 'application/json'
//     }, mode: "cors"
// }).then(response => {
//     if (response.ok) {
//         // Retrieve cookie from headers
//         response.headers.forEach((name,value) => {
//             console.log(value,name)
//         })
//         const cookieHeader = response.headers.get('Set-Cookie');
//         // Extract specific cookie value if needed
//         if (cookieHeader != undefined || cookieHeader != null) {
//             const cookieValue = cookieHeader.split(';')[0]; // Assuming you only need the first cookie value
//             console.log("Received cookie:", cookieValue);
//         } else {
//             console.log("NoCookie")
//         }
//     } else {
//         console.error("Error occurred during login:", response.statusText);
//     }
// })