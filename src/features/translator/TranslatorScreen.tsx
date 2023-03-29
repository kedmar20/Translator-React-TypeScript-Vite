import React from "react";
import styled from "styled-components";
// import {useTranslations} from "../../lib/hooks";
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

const Container = styled.div`
    color: ${({theme})=>theme.colors.typography}
    `
