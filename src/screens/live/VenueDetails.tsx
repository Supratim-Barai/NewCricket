import React, { FC, Fragment, useState } from "react";
import styled from "styled-components/native";
import { AccordianButton } from "../../components/AccordianButton";
import { GradientContainer } from "../../styles";

export const VenueDetails: FC = () => {
    const [show, setShow] = useState(true);
    return (
        <Fragment>
            <AccordianButton
                title="JAFFNA STALLION PLAYING XI"
                show={show}
                toggleShow={() => setShow(x => !x)}
            />
            {show && <Container>
                <Flex>
                    <Text>SERIES MATCH</Text>
                    <Text>LANKAN PREMIAR KEGUE 2021 FINAL</Text>
                </Flex>
                <Flex style={{backgroundColor:"#000"}}>
                    <Text>DATE & TIME</Text>
                    <Text>16TH JANUARY 2021</Text>
                </Flex>
                <Flex>
                    <Text>VANUE</Text>
                    <Text>MAHIDRA RAJAPAKCSHA INTERNATIONAL STADIUM</Text>
                </Flex>
            </Container>}
        </Fragment>
    )
}


const Container = styled(GradientContainer)`
    margin-top: -10px;
    padding: 20px 0px 10px 0px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
`;

const Flex = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px 20px;
`;

const Text = styled.Text`
    color: #fff;
    font-size: 10px;
    font-family: "Roboto-Bold";
`;