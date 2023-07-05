"use client"
import {useSession} from "next-auth/react";
import {
    Card, CardBody, CardHeader, Grid, Heading, Skeleton, Text, GridItem
} from "@chakra-ui/react";
import React from "react";

export default function Dashboard() {
    // User session hook to get data about user session.
    const {data} = useSession()

    return (
        <Grid as={"article"}
              bg={"white"}
              w={"90%"} h={"90%"}
              p={"1rem"}

              templateRows={"repeat(12, 1fr)"}
              templateColumns={"repeat(12, 1fr)"}
              gap={4}
              borderRadius={"5px"}
        >
            <GridItem rowSpan={2} colSpan={7}>

                <Skeleton
                    isLoaded={data?.user != null}
                    w={"100%"} h={"100%"}
                >
                    <Card w={"100%"} h={"100%"}>
                        <CardHeader>
                            <Heading>Hi there, {data?.user?.email}</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>
                                what is going on?
                            </Text>
                        </CardBody>
                    </Card>
                </Skeleton>

            </GridItem>


        </Grid>
    )
}
