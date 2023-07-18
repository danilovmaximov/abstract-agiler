import styles from "./styles.module.css";
import {Children} from "@/global";
import {BiSearchAlt, BiSolidCommentAdd} from "react-icons/bi";
import {useState} from "react";
import useSWR from "swr";

type VerticalBarButtonType = {
    action: any,
} & Children;

function VerticalBarButton({children, action} : VerticalBarButtonType) {

    return (
        <div
            className={styles.verticalBarButtonWrapper}
            onClick={action}
        >
            {children}
        </div>
    )
}

//@ts-ignore
const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function VerticalBar() {
    const { data, error, isLoading } = useSWR("/api/user/projects", fetcher);
    console.log(data);
    if(isLoading) {
        // return spinner
    }

    if(error) {
        //return error.
    }


    return (
        <div className={styles.verticalBarWrapper}>
            <VerticalBarButton
                action={() => console.log("Search new project")}
            >
                <BiSearchAlt size={40}/>
            </VerticalBarButton>
            {

            }
            <VerticalBarButton
                action={() => console.log("add new project")}
            >
                <BiSolidCommentAdd size={40}/>
            </VerticalBarButton>
        </div>
    )
};

