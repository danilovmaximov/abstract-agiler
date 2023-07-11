"use client";

import { store } from "./store";
import { Provider } from "react-redux";
import {Children} from "@/global";

export function ReduxProvider({children} : Children) {
    return <Provider store={store}>{children}</Provider>
}