import React, {useEffect} from 'react'
import styled from 'styled-components'

type TextInputProps = {
    autoFocus?:boolean
    onChangeText?(text: string): void
    value?:string
}

export const TextInput: React.FunctionComponent<TextInputProps> = ({autoFocus, onChangeText, value})=>{
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
        />
    )
}


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
