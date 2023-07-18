import styles from "./styles.module.css";
import {RxHamburgerMenu} from "react-icons/rx";
import { IoIosNotificationsOutline } from "react-icons/io";
import {Children} from "@/global";

function SystemSettingsBurger() {
    return (
        <div className={styles.burger}>
            <RxHamburgerMenu />
        </div>
    )
}

type ButtonProps = {
    text: string
} & Children;

function SystemSettingsButton({text, children} : ButtonProps) {
    return (
        <button className={styles.button}>
            {children}
            <b className={styles.buttonText}>{text}</b>
        </button>
    )
}


export function SystemSettings() {

    return (
        <div className={styles.systemSettingWrapper}>
            <SystemSettingsBurger/>

            <SystemSettingsButton text={"Notifications"}>
                <IoIosNotificationsOutline/>
            </SystemSettingsButton>

            <SystemSettingsButton text={"Notifications"}>
                <IoIosNotificationsOutline/>
            </SystemSettingsButton>
        </div>
    )
}