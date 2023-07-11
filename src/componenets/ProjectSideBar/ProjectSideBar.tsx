import React from 'react';
import {Box, IconProps, VStack} from "@chakra-ui/react";
import {AddIcon, CalendarIcon, Icon, SearchIcon} from "@chakra-ui/icons";

type ProjectSideBarIconProps = {
    img: any,
    name: string,
    active: boolean
    real: boolean
};

const ProjectSideBarIcon = ({img, name, active, real}: ProjectSideBarIconProps) => {

    return (
        <Box
           borderRadius={real? "4px" : "50%"}
           bg={"darkmax.100"}
           p={"0.7rem"}
           border={active ? "2px" : "0px"}
           borderColor={"intgreen.100"}
        >
           <Icon as={img} boxSize={6} color={"white"}/>
        </Box>
    )
}

const ProjectSideBar = () => {
    return (
        <VStack as={"aside"}
                bg={"darkmin.100"}
                w={"100%"} h={"100%"}
                py={"0.5rem"}
        >
            <ProjectSideBarIcon img={AddIcon} name={"name"} real={false} active={false}/>
            <ProjectSideBarIcon img={SearchIcon} name={"name"} real={false} active={false}/>
            <ProjectSideBarIcon img={""} name={"name"} real={true} active={true}/>
        </VStack>
    );
};

export default ProjectSideBar;