import {createContext, useRef} from "react";
import data from "../resource/data.json";
import {HttpResourceFactory} from "../resource/factory/HttpResourceFactory";
export const InitDataContext = createContext(data);
export const LoginContext = createContext(false)


export const HttpResourceFactoryContext = createContext(new HttpResourceFactory())