"use client"
import {useSession} from "next-auth/react";
import {
    Grid, GridItem
} from "@chakra-ui/react";
import React from "react";
import SystemNavigation from "@/componenets/SystemNavigation/SystemNavigation";
import ProjectSideBar from "@/componenets/ProjectSideBar/ProjectSideBar";
import AppTabs from "@/componenets/AppTabs/AppTabs";
import {AppDispatch, useAppSelector} from "@/redux/store";
import {useDispatch} from "react-redux";

export default function Dashboard() {
    // User session hook to get data about user session.
    const {data} = useSession()

    const page = useAppSelector((state) => state.generalAppInfoSlice.currentPage);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <Grid as={"article"}
              bg={"darkmid.100"}
              boxShadow={"dark-lg"}
              w={"90%"} h={"90%"}

              templateRows={"40px 40px repeat(10, 1fr)"}
              templateColumns={"60px repeat(11, 1fr)"}
              overflow={"hidden"}
              borderRadius={"3px"}
        >
            <GridItem rowSpan={1} colSpan={12}>
                <SystemNavigation/>
            </GridItem>

            <GridItem rowSpan={11} colSpan={1}>
                <ProjectSideBar/>
            </GridItem>

            <GridItem rowSpan={1} colSpan={12}
                      colStart={2} colEnd={13}
            >
                <AppTabs currentPage={page}/>
            </GridItem>

            <GridItem
                rowSpan={11} colSpan={10}
                colStart={2} colEnd={13}
            >
                {page}
            </GridItem>
        </Grid>
    )
}
