"use client"
import {SessionProvider} from "next-auth/react";
import {Children} from "@/global";


/**
 * Main dashboard of an agiler app.
 */
export default function DashboardLayout({children}: Children) {
    return (
        <SessionProvider>
            <main>
                { children }
            </main>
        </SessionProvider>
    )

}