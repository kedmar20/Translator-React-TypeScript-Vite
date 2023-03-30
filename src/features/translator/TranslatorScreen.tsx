import React from "react";
import styled from "styled-components";
import {useTranslations} from "lib/hooks";
import {SelectLanguage, TextInput} from "lib/components";

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
        <TranslatorContainer>
            <InputContainer>
                <SelectLanguage/>
                <TextInput></TextInput>
            </InputContainer><InputContainer>
                <SelectLanguage/>
                <TextInput></TextInput>
            </InputContainer>
            Hello from Translator!
            <p></p>
            {title}
            <p></p>
            {T.common.companyName}
        </TranslatorContainer>
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
const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    color: ${({ theme }) => theme.colors.typography}
    `
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const LoaderContainer = styled.div`
    padding: 5px 10px;
    height: 2px;
`

const InputFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
