import {createContext, useRef} from "react";
import data from "../../../pages/data.json";
import {HttpResourceFactory} from "./HttpResourceFactory";
export const InitDataContext = createContext(data);
export const LoginContext = createContext(false)


export const HttpResourceFactoryContext = createContext(new HttpResourceFactory())