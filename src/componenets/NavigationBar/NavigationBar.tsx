"use client"
import Link from "next/link";
import styles from "./styles.module.css";
import {useState} from "react";

export const data = [
    "Communication",
    "Taskboard",
    "Repositories",
    "Documentation"
];

type ButtonProps = {
    text: string,
    url: string,
    active: boolean,
    setActive: any,
};

function NavigationBarButton({text, active, setActive, url}: ButtonProps) {

    const handleClick = () => {
        setActive(url);
    }

    return (
        <div className={`${styles.navigationButton} ${active && styles.active}`}>

            <Link href={url} onClick={() => setActive(url)} className={styles.button}>
                <span className={active ? styles.buttonActive : styles.button}>{text}</span>
            </Link>

        </div>
    )
}

export default function NavigationBar() {
    const [active, setActive] = useState("/");


    return (
        <div className={styles.navigationBarWrapper}>
            {
                data.map((text, i) => {
                    const url = `/agiler/${text.toLowerCase()}`;
                    return <NavigationBarButton
                        key={i}
                        text={text}
                        active={url === active}
                        url={url}
                        setActive={setActive}
                    />
                })
            }
        </div>
    )
};