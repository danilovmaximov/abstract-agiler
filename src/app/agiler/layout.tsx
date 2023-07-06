"use client"
import {SessionProvider} from "next-auth/react";
import {Children} from "@/global";
import {Center, ChakraProvider, extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        darkmax: { 100: "#1e2832" },
        darkmin: { 100: "#2f3d4a" },
        darkmid: { 100: "#26323e" },
        intgreen: { 100: "#21a653" },
        intblue: { 100: "#0779f6" },
        intyellow: { 100: "#ffc70e" },
        intpink: { 100: "#f80281" }
    },
    styles: {
        global: () => ({
            "h1, h2, h3, h4, h5, h5, p" : {
                color : "white"
            }
        })
    }
})


/**
 * Main dashboard of an agiler app.
 */
export default function DashboardLayout({children}: Children) {
    return (
        <SessionProvider>
            <ChakraProvider theme={theme}>

                { /* Main layout wrapper */}
                <Center as="main"
                        h="100vh"
                        minH={"500px"}
                        bg={"darkmid.100"}
                >
                    {children}
                </Center>

            </ChakraProvider>
        </SessionProvider>
    )

}