import React from "react";
import styled, {ThemeProvider} from "styled-components";
import { theme } from '../lib/styles'
export const App = ()=> {
    return (
        <ThemeProvider theme={theme}>
            <AppContainer>
                Hello World!!!
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
