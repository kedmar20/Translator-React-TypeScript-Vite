import React from "react";
import styled from "styled-components";

export const Confidence = ()=>(
    <Container>
        <Percentage>
            65%
        </Percentage>
        <Language>
            German
        </Language>
    </Container>
)


const Container = styled.div``

const Percentage = styled.span`
    color: ${({ theme }) => theme.colors.primary};
`

const Language = styled.a`
    text-decoration: underline;
    margin-left: 5px;
    color: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
`
