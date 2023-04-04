import React, {useEffect} from 'react'
import styled from 'styled-components'

type InputProps = {
    hasError?:boolean
}

type TextInputProps = {
    autoFocus?:boolean
    onChangeText?(text: string): void
    value?:string
    hasError?:boolean
}

export const TextInput: React.FunctionComponent<TextInputProps> = ({autoFocus, onChangeText, value, hasError})=>{
    const inputRef = React.createRef<HTMLTextAreaElement>()

    useEffect(()=>{
     if(autoFocus && inputRef.current){
           inputRef.current.focus()
    }
    },[])

    return(
        <Input ref={inputRef} placeholder= "write something..."
        onChange={event=>{
            if (onChangeText) {
                onChangeText(event.target.value)
            }
        }}
               hasError={hasError}
        />
    )
}


const Input = styled.textarea<InputProps>`
    background-color: ${({ theme }) => theme.colors.input};
    color: ${({ theme }) => theme.colors.typography};
    border: ${({ theme, hasError }) => hasError ? `1px solid ${theme.colors.error}` : 'none'};
    border-radius: 8px;
    height: 300px;
    width: 400px;
    resize: none;
    font-size: 18px;
    padding: 10px 15px;
`
