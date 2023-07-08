import React from 'react';
import {Card, CardBody, CardHeader, Grid, GridItem, Input, Text, UnorderedList} from "@chakra-ui/react";
import {Children} from "@/global";

const CommunicationsCard = ({children} : Children) => {

    return (
        <Card w={"100%"} h={"100%"} bg={"darkmax.100"}>
            <CardBody>
                {children}
            </CardBody>
        </Card>
    )
}

const Communications = () => {
    return (
        <Grid
            templateColumns={"repeat(12, 1fr)"}
            templateRows={"repeat(12, 1fr)"}
            gap={4}
            h={"100%"}
        >
            <GridItem
                colSpan={12} rowSpan={11}
            >
                <CommunicationsCard>
                    <Text>
                        Hi there
                    </Text>
                </CommunicationsCard>
            </GridItem>

            <GridItem colSpan={12}>
                <CommunicationsCard>
                    <Input
                        color={"white"}
                        placeholder={"Your message here"}
                    />

                </CommunicationsCard>
            </GridItem>

        </Grid>
    );
};

export default Communications;