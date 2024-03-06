import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {DatePicker} from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

let headers = {
    "Accept": "application/json", "Access-Control-Allow-Origin": "http://localhost:8080"
};

export default function CreateTripView() {

    const [t, i18n] = useTranslation("common");

    let [fromCountryDepartureSelectorValues, setFromCountryDepartureSelectorValues] = useState([])
    let [fromProvinceDepartureSelectorValues, setFromProvinceDepartureSelectorValues] = useState([])
    let [fromCityDepartureSelectorValues, setFromCityDepartureSelectorValues] = useState([])

    let [toCountryDepartureSelectorVales, setToCountryDepartureSelectorVales] = useState([])
    let [toCityDepartureSelectorValues, setToCityDepartureSelectorValues] = useState([])
    let [toProvinceDepartureSelectorValues, setToProvinceDepartureSelectorValues] = useState([])

    let [provinceDepartureSelectorData, setProvinceDepartureSelectorData] = useState([])

    const [departureDate, setDepartureDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(new Date());
    const [tripData, setTripData] = useState({});


    const GetCountryData = async () => {
        let countryOptionValues = [];
        try {
            const endpoint = "http://localhost:8080/country";

            const response = await fetch(endpoint, {
                method: "GET", headers: headers
            });


            if (response.ok) {
                //TODO whoIsData geolocation
                // const whoIsData = await fetch("http://ipwho.is/");
                // const ipArray = await whoIsData.json();
                const responseData = await response.json();
                for (let i = 0; i < responseData.length; i++) {
                    // if (responseData[i].iso == ipArray.country_code) {
                    //     countryOptionValues.push(<>
                    //         <option key={responseData[i].id}
                    //                 value={responseData[i].id} selected={true}>{responseData[i].nice_name}</option>
                    //     </>)
                    // } else {
                    //     countryOptionValues.push(<>
                    //         <option key={responseData[i].id}
                    //                 value={responseData[i].id}>{responseData[i].nice_name}</option>
                    //     </>)
                    // }
                    countryOptionValues.push(<>
                        <option key={responseData[i].id}
                                value={responseData[i].id}>{responseData[i].nice_name}</option>
                    </>)
                }
            } else {
                console.error("Error al enviar los datos:", response);
            }
            setToCountryDepartureSelectorVales(countryOptionValues);
            setFromCountryDepartureSelectorValues(countryOptionValues);
        } catch (error) {
            console.error("Error al enviar los datos:", error);
        }
    }

    async function GetProvinceData(fromto, countryId) {

    }

    async function GetCityData(fromto, provinceIso) {


    }

    async function storeCityData(fromto, cityId) {

    }

    useEffect(() => {


        GetCountryData()
        // const form = document.getElementById("createTripView")
        // form.addEventListener("submit", async (event) => {
        //     event.preventDefault()
        //     let fromCountrySelector = document.getElementById("fromCountrySelector");
        //     let fromProvinceSelector = document.getElementById("fromProvinceSelector");
        //     let fromCitySelector = document.getElementById("fromCitySelector");
        //     let toCountrySelector = document.getElementById("toCountrySelector");
        //     let toProvinceSelector = document.getElementById("toProvinceSelector");
        //     let toCitySelector = document.getElementById("toCitySelector");
        //     let passangers = document.getElementById("passengers");
        //     // let tripDescription = document.getElementById("TripDescription");
        //     // let departureTime = document.getElementById("departureTime");
        //     let tripData = {
        //         fromCountry: fromCountrySelector.value,
        //         fromProvince: fromProvinceSelector.value,
        //         fromCity: fromCitySelector.value,
        //         toCountry: toCountrySelector.value,
        //         toProvince: toProvinceSelector.value,
        //         toCity: toCitySelector.value,
        //         passengers: passangers.value,
        //         // description: tripDescription.value,
        //         // departure: departureTime.value
        //     }
        //     console.log(tripData)
        //     await fetch(`http://localhost:8080/trip/save`, {
        //         method: 'POST',
        //         headers: {
        //             // 'Accept': 'appplication/json',
        //             'Content-Type': 'application/json',
        //             'Access-Control-Allow-Origin': '*',
        //         },
        //         body:tripData,
        //         mode: "no-cors"
        //     }).then(value => {
        //         console.log(value)
        //     }).catch(reason => {
        //         console.error(reason)
        //     })
        // });
    }, [setFromCountryDepartureSelectorValues, setToCountryDepartureSelectorVales]);


    return (<>
        <br/>
        <form id="createTripView">
            <div className="container ">
                <div className="row">
                    <div className="col-sm-3"></div>
                    <br/>
                    <div className="col">
                        <div id="departureDateTime">
                            <div className="row">
                                <div className="col-sm-2">{t("departureDate")}</div>
                                <div className="col">
                                    <DatePicker onChange={value => {
                                        setDepartureDate(value)
                                    }} value={departureDate}/>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div id="fromDestination">
                            <h4>FROM</h4>
                            <div className="row ">
                                <label htmlFor="fromCountrySelector"
                                       className="col-sm-3 col-form-label">{t("country")}</label>
                                <div className="col">
                                    <select name="fromCountrySelector" id="fromCountrySelector" className="form-select"
                                            onChange={(e) => {
                                                GetProvinceData("from", e.target.value);
                                            }}>
                                        <option>{t("select")}</option>
                                        {fromCountryDepartureSelectorValues}
                                    </select>
                                </div>
                            </div>
                            <div className="row ">
                                <label htmlFor="fromProvinceSelector"
                                       className="col-sm-3 col-form-label">{t("provincestate")}</label>
                                <div className="col">
                                    <select name="fromProvinceSelector" id="fromProvinceSelector"
                                            className="form-select"
                                            onChange={(e) => GetCityData("from", e.target.value)}>
                                        <option>{t("select")}</option>
                                        {fromProvinceDepartureSelectorValues}
                                    </select>
                                </div>
                            </div>
                            <div className="row ">
                                <label htmlFor="fromCitySelector"
                                       className="col-sm-3 col-form-label">{t("citySelector")}</label>
                                <div className="col">
                                    <select name="fromCitySelector" id="fromCitySelector" className="form-select"
                                            onChange={(e) => {
                                                storeCityData("from", e.target.value)
                                            }}>
                                        <option>{t("select")}</option>
                                        {fromCityDepartureSelectorValues}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div id="toDestination">
                            <h4>TO</h4>

                            <div className="row">
                                <label htmlFor="toCountrySelector"
                                       className="col-sm-3 col-form-label">{t("country")}</label>
                                <div className="col">
                                    <select name="toCountrySelector" id="toCountrySelector" className="form-select"
                                            onChange={(e) => {
                                                GetProvinceData("to", e.target.value);
                                            }}>
                                        <option>{t("select")}</option>
                                        {toCountryDepartureSelectorVales}
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <label htmlFor="toProvinceSelector"
                                       className="col-sm-3 col-form-label">{t("provincestate")}</label>
                                <div className="col">
                                    <select name="toProvinceSelector" id="toProvinceSelector" className="form-select"
                                            onChange={(e) => GetCityData("to", e.target.value)}>
                                        <option>{t("select")}</option>
                                        {toProvinceDepartureSelectorValues}
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <label htmlFor="toCitySelector"
                                       className="col-sm-3 col-form-label">{t("citySelector")}</label>
                                <div className="col">
                                    <select name="toCitySelector" id="toCitySelector" className="form-select"
                                            onChange={(e) => {
                                                storeCityData("from", e.target.value)
                                            }}>
                                        <option>{t("select")}</option>
                                        {toCityDepartureSelectorValues}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <label htmlFor="passengers" className="col-sm-3 col-form-label">{t("passengers")}</label>
                            <div className="col">
                                <select name="passengers" id="passengers" className="form-select"
                                        onChange={(e) => {
                                            console.log(e.target.value)
                                        }}>
                                    <option>{t("select")}</option>
                                    <option value={"1"}>1</option>
                                    <option value={"2"}>2</option>
                                    <option value={"3"}>3</option>
                                    <option value={"4"}>4</option>
                                    <option value={"5"}>5</option>
                                    <option value={"6"}>6</option>
                                    <option value={"7"}>7</option>
                                    <option value={"8"}>8</option>
                                </select>
                            </div>
                        </div>
                        <br/>

                        <div className="row">
                            <label htmlFor="TripDescription" className="form-label">{t("description")}</label>
                            <textarea className="form-control" id="TripDescription" rows="3"></textarea>
                        </div>
                        <br/>
                        <div className="row submit">
                            <div className="col"></div>
                            <div className="col"><input type="submit" className="btn btn-primary"
                                                        value={t("submit.trip")}/>
                            </div>
                            <div className="col"></div>
                        </div>
                    </div>
                    <br/>
                    <div className="col-sm-3"></div>
                </div>
                <br/>


            </div>


        </form>
    </>)
}

//https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript