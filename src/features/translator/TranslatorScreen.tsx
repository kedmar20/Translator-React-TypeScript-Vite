import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useTranslations} from "lib/hooks";
import {Loader, SelectLanguage, TextInput, Confidence, ExchangeLanguage, TextCounter, Message} from "lib/components";
import {useSupportedLanguages} from "./useSupportedLanguages";
import {Language} from "lib/models";

export const TranslatorScreen: React.FunctionComponent = ()=>{
    const T = useTranslations();
    const[languages, setLanguages]=useState<Array<Language>>([])
    const {isLoading, hasError, fetch: getSupportedLanguages} = useSupportedLanguages(setLanguages);

    useEffect(()=>{
        getSupportedLanguages()
    },[])

if (isLoading) {
    return(
        <LoaderText>
            <Loader/>
            {T.components.app.loading}
        </LoaderText>

    )
}

if (hasError){
    return(
        <CenterContainer>
            <Message
                withButton
                message={T.components.app.error}
                onClick={()=>getSupportedLanguages()}
            />
        </CenterContainer>
    )
}

if (languages.length ===0) {
    return(
        <CenterContainer>
            <Message
            message={T.components.app.empty}
            />
        </CenterContainer>
    )
}


    return (
        <Container>
        <TranslatorContainer>
            <InputContainer>
                <SelectLanguage/>
                <TextInput></TextInput>
                <LoaderContainer>
                    <Loader/>
                </LoaderContainer>
                <InputFooter>
                    <Confidence/>
                    <TextCounter/>
                </InputFooter>
            </InputContainer>
            <ExchangeLanguage
            />
            <InputContainer>
                <SelectLanguage/>
                <TextInput></TextInput>
                <LoaderContainer>
                    <Loader/>
                </LoaderContainer>
            </InputContainer>
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
const LoaderText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.typography};
    gap: 5px;
    padding: 0 100px;
    `
const CenterContainer = styled.div`
    display: flex;
    justify-content: center;
    `
