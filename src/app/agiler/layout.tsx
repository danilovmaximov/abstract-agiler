"use client"
import {SessionProvider} from "next-auth/react";
import {Children} from "@/global";
import {Center, ChakraProvider} from "@chakra-ui/react";


/**
 * Main dashboard of an agiler app.
 */
export default function DashboardLayout({children}: Children) {
    return (
        <SessionProvider>
            <ChakraProvider>

                { /* Main layout wrapper */}
                <Center as="main"
                        h="100vh"
                        minH={"500px"}
                        bg={"black"}
                >
                    {children}
                </Center>

            </ChakraProvider>
        </SessionProvider>
    )

}