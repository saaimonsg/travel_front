import {useRouter} from "next/navigation";

export class HttpResourceFactory {


    constructor() {
        this.baseUrl = "http://localhost:8080/api";
        this.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }

    async _doRequest(endpoint, method, body, headers) {
        return fetch(this.baseUrl + endpoint, {method: method, body: body, headers: headers})
    }

    async get(endpoint,authorization) {
        this.headers['Authorization'] = authorization
        return this._doRequest(endpoint, "GET", null, this.headers)
    }

    async post(endpoint, body, authorization) {
        this.headers['Authorization'] = authorization
        return this._doRequest(endpoint, "POST", body, this.headers)
    }

    async authenticate(username, password) {
        return this._doRequest(`/authenticate`, "POST", JSON.stringify({
            username: username, password: password
        }), {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'Basic ' + btoa(username + ':' + password)
        }).then(value => {
            return value.json().then(authenticationData => {
                console.log(authenticationData.permissions)
                if (authenticationData.username === undefined || authenticationData.base64EncodedAuthenticationKey === undefined ||
                    authenticationData.permissions === undefined) {
                    console.error("error in authentication data")
                    return {};
                } else {
                    localStorage.setItem('Authorization', 'Basic ' + authenticationData.base64EncodedAuthenticationKey)
                    localStorage.setItem('username', authenticationData.username)
                    localStorage.setItem('role', authenticationData.permissions[0].role)
                    return authenticationData;
                }
            })
        })
    }

    async getWithNoAuth(endpoint) {
        return this._doRequest(endpoint, "GET", null, {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        })
    }
}

