"use client";
import {Children} from "@/global";
import {SessionProvider} from "next-auth/react";

export default function AuthProvider({children} : Children) {
    return <SessionProvider>
        {children}
    </SessionProvider>
}