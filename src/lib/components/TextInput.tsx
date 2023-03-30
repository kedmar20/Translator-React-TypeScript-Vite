import React from 'react'
import styled from 'styled-components'


export const TextInput = ()=>(
    <Input placeholder= "write something..."/>
)


const Input = styled.textarea`
    background-color: ${({ theme }) => theme.colors.input};
    color: ${({ theme }) => theme.colors.typography};
    border-radius: 8px;
    height: 300px;
    width: 400px;
    resize: none;
    font-size: 18px;
    padding: 10px 15px;
    `
