import './globals.css'
import {Inter} from 'next/font/google'
import React from "react";
import {Children} from "@/global";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Agiler',
    description: 'Agile chat and tracker.',
}


export default function RootLayout(
    { children }: Children,
) {
    return (
            <html lang="en">
            <body className={inter.className}>{children}</body>
            </html>
    )
}
