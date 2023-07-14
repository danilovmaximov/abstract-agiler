import {Children} from "@/global";


export default function DashboardLayout({children}: Children) {
    return (
        <div>
            <div>
                {children}
            </div>
        </div>
    )
}