import React, {MouseEventHandler} from 'react';
import { Flex, Square , Text} from "@chakra-ui/react";
import {BellIcon, CalendarIcon, DeleteIcon, HamburgerIcon} from "@chakra-ui/icons";
import {Children} from "@/global";

const data = [
    {icon: <CalendarIcon boxSize={3} color={"white"}/>, text: "Calendar", action: () => {console.log("calendar activated")} },
    {icon: <BellIcon boxSize={3} color={"white"}/>, text: "Notifications", action: () => console.log("notifications activated")},
    {icon: <DeleteIcon boxSize={3} color={"white"}/>, text: "Delete Chat", action: () => console.log("delete project")}
];

const SystemNavigationMenu = () => (
    <Square bg={"intgreen.100"} p={"0.5rem"}>
        <HamburgerIcon boxSize={5} color={"white"}/>
    </Square>
)

const SystemNavigationRow = ({children} : Children) => (
    <Flex>{children}</Flex>
)

type Items = {
    icon: JSX.Element,
    text: string,
    action: MouseEventHandler
}

const SystemNavigationRowItem = ({icon, text, action } : Items) => (
    <Flex onClick={action}
          alignItems={"center"} justifyContent={"center"}
          px={"1rem"} py={"0.5rem"}
          borderRight={"1px"} borderColor={"darkmin.100"}
    >
        {icon}
        <Text as="b" color="grey" fontSize="10px" px={"0.5rem"}>{text} </Text>
    </Flex>
)


const SystemNavigation = () => {
    return (
        <Flex
            w={"100%"} h={"100%"}
        >
            <SystemNavigationMenu/>
            <SystemNavigationRow>
                {
                    data.map(({icon, text, action}) =>
                        <SystemNavigationRowItem key={text} icon={icon} text={text} action={action}/>
                    )
                }
            </SystemNavigationRow>
        </Flex>
    );
};

export default SystemNavigation;