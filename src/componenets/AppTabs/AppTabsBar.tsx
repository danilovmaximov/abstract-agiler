import React from 'react';
import {Flex, HStack, Text} from "@chakra-ui/react";
import {Children} from "@/global";
import {useDispatch} from "react-redux";
import {AppDispatch} from "@/redux/store";
import {
    communicationTab, documentationTab,
    generalAppTabs,
    repositoryTab,
    tasksTab
} from "@/redux/slices/generalAppInfoSlice";


type AppTabsItem = {
    type: string,
    name: string,
    action: any
};

const data: AppTabsItem[] = [
    {
        type: generalAppTabs.communicationTab,
        name: "Communication",
        action: communicationTab
    },
    {
        type: generalAppTabs.tasksTab,
        name: "Tasks",
        action: tasksTab
    },
    {
        type: generalAppTabs.repositoryTab,
        name: "Repo",
        action: repositoryTab
    },
    {
        type: generalAppTabs.documentationTab,
        name: "Documentation",
        action: documentationTab
    },
];


type AppTabsItemProps = {
    active: boolean,
    action: any
} & Children;

const AppTabsItem = ({children, active, action}: AppTabsItemProps) => {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <Text
            borderBottom={active ? "3px" : "0px"}
            borderColor={"intgreen.100"}
            color={active ? "white" : "grey"}
            onClick={() => dispatch(action()) }
        >
            {children}
        </Text>
    )

};


type AppTabsProps = {
    currentPage: string
};

const AppTabsBar = ({currentPage} : AppTabsProps) => {

    return (
        <HStack
            w={"100%"} h={"100%"}
            alignItems={"center"}
            p={"0.5rem"}
            bg={"darkmin.100"}
        >
            {
                data.map(({type, name, action}, i) =>
                    <AppTabsItem
                        key={i}
                        active={type === currentPage}
                        action={action}
                    >
                        {name}
                    </AppTabsItem>
                )
            }
        </HStack>
    );
};

export default AppTabsBar;