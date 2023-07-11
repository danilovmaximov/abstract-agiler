import React from 'react';
import {
    Button,
    Flex,
    Card,
    CardBody,
    CardHeader,
    Grid,
    GridItem,
    Input,
    Text,
    UnorderedList,
    Heading, VStack
} from "@chakra-ui/react";
import {Children} from "@/global";
import {AppDispatch, useAppSelector} from "@/redux/store";
import {useDispatch} from "react-redux";
import {decrement, increment} from "@/redux/slices/counterSlice";

const CommunicationsCard = ({children}: Children) => {

    return (
        <Card w={"100%"} h={"100%"} bg={"darkmax.100"}>
            <CardBody>
                {children}
            </CardBody>
        </Card>
    )
}

const Communications = () => {
    const counter = useAppSelector((state) => state.counterSlice.value);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <VStack
            h={"100%"}
        >
            <Heading>{counter}</Heading>
            <Flex>
                <Button onClick={() => dispatch(increment())}>
                    Increment
                </Button>

                <Button onClick={() => dispatch(decrement())}>
                    Decrement
                </Button>
            </Flex>
        </VStack>
    );
};

export default Communications;