import {Children} from "@/global";
import styles from "./agiler.module.css";
import {SystemSettings} from "@/componenets/SystemSettings/SystemSettings";
import NavigationBar from "@/componenets/NavigationBar/NavigationBar";
import VerticalBar from "@/componenets/VerticalBar/VerticalBar";


export default function DashboardLayout({children}: Children) {
    return (
        <div className={styles.dashboardWrapper}>
            <div className={styles.dashboardGrid}>
                <SystemSettings/>
                <NavigationBar/>
                <VerticalBar/>
                {children}
            </div>
        </div>
    )
}