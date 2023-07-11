"use client"
import {useSession} from "next-auth/react";
import {
    Grid, GridItem
} from "@chakra-ui/react";
import React from "react";
import SystemNavigation from "@/componenets/SystemNavigation/SystemNavigation";
import ProjectSideBar from "@/componenets/ProjectSideBar/ProjectSideBar";
import AppTabsBar from "@/componenets/AppTabs/AppTabsBar";
import {useAppSelector} from "@/redux/store";
import { generalAppTabs} from "@/redux/slices/generalAppInfoSlice";
import Communications from "@/componenets/AppTabs/Tabs/Communications";
import Tasks from "@/componenets/AppTabs/Tabs/Tasks";
import Documentation from "@/componenets/AppTabs/Tabs/Documentation";
import Repo from "@/componenets/AppTabs/Tabs/Repo";

export default function Dashboard() {
    // User session hook to get data about user session.
    const {data} = useSession()

    const page = useAppSelector((state) => state.generalAppInfoSlice.currentPage);

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
                <AppTabsBar currentPage={page}/>
            </GridItem>

            <GridItem
                rowSpan={11} colSpan={10}
                colStart={2} colEnd={13}
            >
                {page === generalAppTabs.communicationTab && <Communications/>}
                {page === generalAppTabs.tasksTab && <Tasks/>}
                {page === generalAppTabs.repositoryTab && <Repo/>}
                {page === generalAppTabs.documentationTab && <Documentation/>}
            </GridItem>
        </Grid>
    )
}
