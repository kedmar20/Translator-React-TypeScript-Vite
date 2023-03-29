import React from "react";
import styled, {ThemeProvider} from "styled-components";
import { theme } from '../lib/styles'
import {TranslatorScreen} from "../features/translator";
import {Footer, Header} from "../lib/components";
export const App = ()=> {
    return (
        <ThemeProvider theme={theme}>
            <AppContainer>
                <Header />
                <TranslatorScreen isActive={false} title={"Hello from App"} onClick={()=>{}} onClick2={()=>true}/>
                <Footer/>
            </AppContainer>
        </ThemeProvider>
    )
}

const AppContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
