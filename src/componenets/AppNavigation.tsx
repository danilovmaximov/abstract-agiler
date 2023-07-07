import React from 'react';
import {Flex, Text, Tabs, TabList, Tab, TabIndicator, TabPanels, TabPanel} from "@chakra-ui/react";
import {Children} from "@/global";
import App from "next/app";

const data = [
    { text: "Button 1", active: false},
    { text: "Button 2", active: false},
    { text: "Button 3", active: false},
    { text: "Button 4", active: true},
    { text: "Button 5", active: false},
]

const AppNavigationTab = ({children} : Children) => {
    return (
        <Tab
             color={"grey"}
             _selected={{color: "white"}}
        >
            {children}
        </Tab>
    )
}
const AppNavigation = ({children} : Children) => {
    return (
        <Tabs
            w={"100%"} h={"100%"}
            variant={"unstyled"}
            bg={"darkmin.100"}

        >
            <TabList>
                <AppNavigationTab>First</AppNavigationTab>
                <AppNavigationTab>Second</AppNavigationTab>
                <AppNavigationTab>Third</AppNavigationTab>
                <AppNavigationTab>Fourth</AppNavigationTab>
                <AppNavigationTab>Fifth</AppNavigationTab>
            </TabList>
            <TabIndicator
                mt="-4px"
                height="2px"
                bg="intgreen.100"
            />
            <TabPanels>
                {
                    React.Children.toArray(children)
                        .map((element, i) => (
                            <TabPanel key={i}>
                                {element}
                            </TabPanel>
                        ))
                }
            </TabPanels>
        </Tabs>
    );
};

export default AppNavigation;