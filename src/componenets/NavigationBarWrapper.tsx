"use client";
import React, {useState} from 'react';
import {SystemSettings} from "@/componenets/SystemSettings/SystemSettings";
import NavigationBar from "@/componenets/NavigationBar/NavigationBar";
import VerticalBar from "@/componenets/VerticalBar/VerticalBar";
import Communications from "@/componenets/Communications/Communications";
import Tasks from "@/componenets/Tasks/Tasks";
import Repositories from "@/componenets/Repos/Repositories";
import Documents from "@/componenets/Docs/Documents";
import Fallback from "@/componenets/Fallback/Fallback";

const NavigationBarWrapper = () => {
    const [project, setProject] = useState("");
    const [page, setPage] = useState("communications");

    return (
        <>
            <SystemSettings/>
            <NavigationBar page={page} setPage={setPage}/>
            <VerticalBar/>
            {page == "communications" && <Communications/> }
            {page == "tasks" && <Tasks/>}
            {page == "repos" && <Repositories/>}
            {page == "docs" && <Documents/>}
            {page == "none" && <Fallback/>}
        </>
    );
};

export default NavigationBarWrapper;