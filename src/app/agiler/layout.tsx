import {Children} from "@/global";
import styles from "./agiler.module.css";
import NavigationBarWrapper from "@/componenets/NavigationBarWrapper";

//export type Pages = "communications" | "tasks" | "repos" | "docs" | "none";

export default async function DashboardLayout({children}: Children) {

    return (
        <div className={styles.dashboardWrapper}>
            <div className={styles.dashboardGrid}>
                <NavigationBarWrapper/>
            </div>
        </div>
    )
}