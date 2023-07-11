import React, {MouseEventHandler, useEffect, useState} from 'react';
import {Button, Flex, Menu, MenuButton, MenuItem, MenuList, Select, Square, Text} from "@chakra-ui/react";
import {BellIcon, CalendarIcon, ChevronDownIcon, DeleteIcon, HamburgerIcon} from "@chakra-ui/icons";
import {Children} from "@/global";
import SystemNavigationProjects from "@/componenets/SystemNavigation/SystemNavigaionProjects";

const data = [
    {
        icon: <CalendarIcon boxSize={3} color={"lightgrey"}/>, text: "Calendar", action: () => {
            console.log("calendar activated")
        }
    },
    {
        icon: <BellIcon boxSize={3} color={"lightgrey"}/>,
        text: "Notifications",
        action: () => console.log("notifications activated")
    },
    {
        icon: <DeleteIcon boxSize={3} color={"lightgrey"}/>,
        text: "Delete Chat",
        action: () => console.log("delete project")
    }
];

const SystemNavigationMenu = () => (
    <Square w={"60px"}
            bg={"intgreen.100"}
            py={"0.5rem"} px={"0.7rem"}
    >
        <HamburgerIcon boxSize={5} color={"white"}/>
    </Square>
)

const SystemNavigationRow = ({children}: Children) => (
    <Flex color="grey">{children}</Flex>
)

type Items = {
    icon: JSX.Element,
    text: string,
    action: MouseEventHandler
}

const SystemNavigationRowItem = ({icon, text, action}: Items) => (
    <Flex onClick={action}
          alignItems={"center"} justifyContent={"center"}
          px={"1rem"} py={"0.5rem"}
          borderRight={"1px"} borderColor={"darkmin.100"}
    >
        {icon}
        <Text as="b" color="lightgrey" fontSize="10px" px={"0.5rem"}>{text} </Text>
    </Flex>
)




const SystemNavigation = () => {
    return (
        <Flex
            w={"100%"} h={"100%"}
            justifyContent={"space-between"}
        >
            <Flex>
                <SystemNavigationMenu/>
                <SystemNavigationRow>
                    {
                        data.map(({icon, text, action}) =>
                            <SystemNavigationRowItem key={text} icon={icon} text={text} action={action}/>
                        )
                    }
                </SystemNavigationRow>
            </Flex>
        </Flex>
    );
};

export default SystemNavigation;