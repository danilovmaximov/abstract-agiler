import React, {useEffect, useState} from "react";
import {Button, Flex, Menu, Input, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";

export default function SystemNavigationProjects() {
    const [projects, setProjects] = useState<String[]>();

    useEffect(() => {

        fetch("/api/user/")
            .then(r => r.json())
            .then(response => setProjects(response?.projects));

    }, []);

    return (
        <Menu>
            <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon/>}
                colorScheme={"grey"}
                variant={"ghost"}
                color={"grey"}
            >
                AbstractAgiler
            </MenuButton>
            <MenuList bg={"darkmin.100"}>
                <MenuItem color="white" bg={"darkmin.100"} isDisabled>Agiler</MenuItem>
                <MenuItem color="white" bg={"darkmin.100"}>CheChe</MenuItem>
            </MenuList>
        </Menu>
    )
}