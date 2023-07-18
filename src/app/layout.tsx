import './globals.css'
import {Inter} from 'next/font/google'
import {Children} from "@/global";
import AuthProvider from "@/componenets/AuthProvider";
import styles from "./styles.module.css"

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Agiler',
    description: 'Agile chat and tracker.',
}

export default function RootLayout(
    {children}: Children,
) {
    return (
            <AuthProvider>
                <html lang="en">
                <body className={inter.className}>
                <main className={styles.mainBackground}>
                    {children}
                </main>
                </body>
                </html>
            </AuthProvider>
    )
}
