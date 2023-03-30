import React from "react"
import styled from 'styled-components'
export const SelectLanguage = ()=>(
    <SelectContainer>
        <Select>
            <Option>
                Polish
            </Option
            ><Option>
                English
            </Option>
        </Select>
    </SelectContainer>
)

const SelectContainer = styled.div`
    height: 26px;
    max-width: 140px;
    position: relative;
    margin-bottom: 10px;

    &:after {
        width: 0;
        height: 0;
        content: '';
        position: absolute;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 4px solid ${({ theme }) => theme.colors.typography};
        right: 10px;
        top: calc(50% - 2px);
    }
`


const Select = styled.select`
    width: 100%;
    margin-bottom: 10px;
    -webkit-appearance: none;
    border: 0;
    font-size: 14px;
    font-weight: bold;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.foreground};
    color: ${({ theme }) => theme.colors.typography};
    height: 26px;
    padding: 0 10px;
`


const Option = styled.option``
