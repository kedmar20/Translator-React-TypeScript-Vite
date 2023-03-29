import React from "react";
import styled from "styled-components";
import {useTranslations} from "lib/hooks";

type TranslatorScreenProps = {
    isActive:boolean,
    age?:number,
    title:string,
    onClick(): void,
    onClick2():boolean
}

export const TranslatorScreen: React.FunctionComponent<TranslatorScreenProps> = ({title})=>{
    const T = useTranslations();


    return (
        <Container>
            Hello from Translator!
            <p></p>
            {title}
            <p></p>
            {T.common.companyName}
        </Container>
    )
}

const TranslatorContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 50px;
    @media(min-width: ${({ theme }) => theme.media.sm}px) {
        justify-content: center;
    }
    @media(max-width: ${({ theme }) => theme.media.sm}px) {
         flex-direction: column;
         align-items: center;
     }
 `
