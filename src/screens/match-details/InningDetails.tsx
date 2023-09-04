import React, { Fragment, useState } from "react";
import styled from "styled-components/native";
import { GradientContainer } from "../../styles";
import { AccordianButton } from "../../components/AccordianButton";

export const InningDetails = () => {
    const [show, setShow] = useState(true);

    return (
        <Fragment>
            <AccordianButton
                title="VANUE SCORING PATTERN"
                show={show}
                toggleShow={() => setShow(x => !x)}
            />
            {show && <Container>
                <SubContainer>
                    
                    <Flex>
                        <HeadingText color="gold">AVG 1ST INNING - 150</HeadingText>
                        <HeadingText color="gold">AVG 2ND INNING - 140</HeadingText>
                    </Flex>
                </SubContainer>
                <Flex>
                    <Text>HIGHEST TOTAL</Text>
                    <Text>219/3 20 OVER</Text>
                </Flex>
                <Flex>
                    <Text>LOWEST TOTAL</Text>
                    <Text>44/3 8 OVER</Text>
                </Flex>
                <Flex style={{ backgroundColor: "#000" }}>
                    <Text>HIGHEST CHASED</Text>
                    <Text>219/3 20 OVER</Text>
                </Flex>
                <Flex style={{ backgroundColor: "#000" }}>
                    <Text>LOWEST CHESED</Text>
                    <Text>44/3 8 OVER</Text>
                </Flex>
            </Container>}
        </Fragment>
    )
}

const Container = styled(GradientContainer)`
    margin-top: -10px;
    padding: 10px 0px 10px 0px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    overflow: hidden;
`;

const SubContainer = styled(GradientContainer)`
    border-radius: 0px;
`;

const Flex = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px 20px;
`;

const Text = styled.Text<{ color?: string }>`
    color: ${({ color }) => color ?? "#fff"};
    font-size: 10px;
    font-family: "Roboto-Bold";
`;

const HeadingText =  styled(Text)`
    color: gold;
    font-size: 12px;
`