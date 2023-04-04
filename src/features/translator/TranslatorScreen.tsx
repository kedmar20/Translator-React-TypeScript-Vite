import React, {useState} from "react";
import styled from "styled-components";
import {useTranslations} from "lib/hooks";
import {Loader, SelectLanguage, TextInput, Confidence, ExchangeLanguage, TextCounter} from "lib/components";
import {Language, LanguageCode} from "lib/models";
import {SelectedLanguages} from "./types";
import {APP_CONFIG} from "../../lib/config";
import {useTranslateText} from "./actions";

type TranslatorScreenProps = {
    languages: Array<Language>
}
export const TranslatorScreen: React.FunctionComponent<TranslatorScreenProps> = ({languages})=>{
    const T = useTranslations();
    const[translatedText, setTranslatedText]=useState<string>('')
    const [selectedLanguages, setSelectedLanguages] = useState<SelectedLanguages>({source: LanguageCode.German, target: LanguageCode.English});
    const[textValue, setTextValue]=useState<string>('')

    const {
        isLoading: isTranslatingText,
        hasError: hasErrorTranslatingText,
        fetch: translateText
    } =useTranslateText(setTranslatedText)

    return (
        <Container>
        <TranslatorContainer>
            <InputContainer>
                <SelectLanguage languages={languages} selectedLanguage={selectedLanguages.source} exclude={[selectedLanguages.target]} onChange={newCode=>setSelectedLanguages(prevState=>({
                    ...prevState, source: newCode}))} />
                <TextInput autoFocus value={textValue} onChangeText={newQuery => {
                    if (newQuery.length > APP_CONFIG.TEXT_INPUT_LIMIT) {
                        return
                    } setTextValue(newQuery)}}/>

                <LoaderContainer>
                    <Loader/>
                </LoaderContainer>
                <InputFooter>
                    <Confidence/>
                    <TextCounter
                        counter={textValue.length}
                        limit={APP_CONFIG.TEXT_INPUT_LIMIT}
                    />
                </InputFooter>
            </InputContainer>
            <ExchangeLanguage
             onClick={()=>setSelectedLanguages(prevState=>({
                 source: prevState.target, target: prevState.source}))}/>
            <InputContainer>
                <SelectLanguage languages={languages} selectedLanguage={selectedLanguages.target} exclude={[selectedLanguages.source]} onChange={newCode=>setSelectedLanguages(prevState=>({
                    ...prevState, target: newCode}))} />
                <TextInput value={translatedText} hasError={hasErrorTranslatingText }></TextInput>
                <LoaderContainer>
                    {isTranslatingText && (<Loader/>)}
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
