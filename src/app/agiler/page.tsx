"use client"
import {useSession} from "next-auth/react";
import {
    Grid, GridItem
} from "@chakra-ui/react";
import React from "react";
import SystemNavigation from "@/componenets/SystemNavigation";

export default function Dashboard() {
    // User session hook to get data about user session.
    const {data} = useSession()

    return (
        <Grid as={"article"}
              bg={"darkmid.100"}
              boxShadow={"dark-lg"}
              w={"90%"} h={"90%"}

              templateRows={"30px repeat(11, 1fr)"}
              templateColumns={"repeat(12, 1fr)"}
              gap={4} overflow={"hidden"}
              borderRadius={"3px"}
        >
            <GridItem rowSpan={1} colSpan={12} >
                <SystemNavigation/>
            </GridItem>


        </Grid>
    )
}
