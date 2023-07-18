"use client"
import styles from "./styles.module.css";
//import {Pages} from "@/app/agiler/layout";

export const data = [
    "Communications",
    "Tasks",
    "Repos",
    "Docs"
];

export default function NavigationBar({page, setPage} : any) {

    return (
        <div className={styles.navigationBarWrapper}>
            {
                data.map((text, i) => (
                        <div
                            key={i}
                            onClick={() => setPage(text.toLowerCase())}
                            className={`${styles.navigationButton} ${text.toLowerCase() == page ? styles.active : ""}`}
                        >
                            <div className={styles.button}>
                                <span className={text.toLowerCase() == page? styles.buttonActive : styles.button}>
                                    {text}
                                </span>
                            </div>
                        </div>
                ))
            }
        </div>
    )
};