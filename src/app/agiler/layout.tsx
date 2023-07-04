"use client"
import {SessionProvider} from "next-auth/react";
import {Children} from "@/global";

export default function DashboardLayout({children}: Children) {
    return (
        <SessionProvider>
            <main>
                { children }
            </main>
        </SessionProvider>
    )

}