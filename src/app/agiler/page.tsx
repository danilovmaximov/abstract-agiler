"use client"
import {useSession} from "next-auth/react";
import {
    Grid, GridItem, Text
} from "@chakra-ui/react";
import React from "react";
import SystemNavigation from "@/componenets/SystemNavigation";
import AppNavigation from "@/componenets/AppNavigation";

export default function Dashboard() {
    // User session hook to get data about user session.
    const {data} = useSession()

    return (
        <Grid as={"article"}
              bg={"darkmid.100"}
              boxShadow={"dark-lg"}
              w={"90%"} h={"90%"}

              templateRows={"40px 40px repeat(11, 1fr)"}
              templateColumns={"repeat(12, 1fr)"}
              gap={4} overflow={"hidden"}
              borderRadius={"3px"}
        >
            <GridItem rowSpan={1} colSpan={12} >
                <SystemNavigation/>
                <AppNavigation>
                    <Text>fist text</Text>
                    <Text>fist text</Text>
                    <Text>fist text</Text>
                </AppNavigation>
            </GridItem>


        </Grid>
    )
}
