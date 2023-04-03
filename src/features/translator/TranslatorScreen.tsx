import React, {useState} from "react";
import styled from "styled-components";
import {useTranslations} from "lib/hooks";
import {Loader, SelectLanguage, TextInput, Confidence, ExchangeLanguage, TextCounter} from "lib/components";
import {Language, LanguageCode} from "lib/models";
import {SelectedLanguages} from "./types";

type TranslatorScreenProps = {
    languages: Array<Language>
}
export const TranslatorScreen: React.FunctionComponent<TranslatorScreenProps> = ({languages})=>{
    const T = useTranslations();
    const [selectedLanguages, setSelectedLanguages] = useState<SelectedLanguages>({source: LanguageCode.German, target: LanguageCode.English});
    const[textValue, setTextValue]=useState<string>('')

    return (
        <Container>
        <TranslatorContainer>
            <InputContainer>
                <SelectLanguage languages={languages} selectedLanguage={selectedLanguages.source} exclude={[selectedLanguages.target]} onChange={newCode=>setSelectedLanguages(prevState=>({
                    ...prevState, source: newCode}))} />
                <TextInput autoFocus value={textValue} onChangeText={setTextValue}/>
                <LoaderContainer>
                    <Loader/>
                </LoaderContainer>
                <InputFooter>
                    <Confidence/>
                    <TextCounter/>
                </InputFooter>
            </InputContainer>
            <ExchangeLanguage
             onClick={()=>setSelectedLanguages(prevState=>({
                 source: prevState.target, target: prevState.source}))}/>
            <InputContainer>
                <SelectLanguage languages={languages} selectedLanguage={selectedLanguages.target} exclude={[selectedLanguages.source]} onChange={newCode=>setSelectedLanguages(prevState=>({
                    ...prevState, target: newCode}))} />
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
